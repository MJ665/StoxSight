// src/app/api/lib/auth.ts
// lib/auth.ts
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { z } from "zod";


// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// const prisma= globalForPrisma.prisma 



import {PrismaClient} from "@/db"
const prisma = new PrismaClient()


const credentialsSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6)
});

export const NEXT_AUTH = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID || "",
      clientSecret: process.env.GOOGLE_SECRET || ""
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) {
          console.error("Invalid email or password format");
          return null;
        }
      
        const { username, password } = parsed.data;
      
        const user = await prisma.user.findUnique({
          where: { email: username }
        });
      
        if (!user) {
          console.error("User not found");
          return null;
        }
      
        if (user.authMethod === "GOOGLE") {
          console.error("Login method is Google");
          return null;
        }
      
        const isPasswordValid = await compare(password, user.password as string);
      
        if (!isPasswordValid) {
          console.error("Invalid password");
          return null;
        }
      
        return user;
      }
      
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only run this logic for Google sign-in
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! }
        });
  
        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name || "Unknown",
              email: user.email!,
              authMethod: "GOOGLE",
            },
          });
        }
      }
      return true;
    },
  
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
      }
      return token;
    },
  
    async session({ session, token }) {
      session.user.id = token.userId || token.sub;
      return session;
    }
  },
  
  pages: {
    signIn: "/signin"
  }
};
