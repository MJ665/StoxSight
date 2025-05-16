// src/app/api/lib/auth.ts
// lib/auth.ts
import type { JWT } from "next-auth/jwt";
import type { User } from "next-auth";

import type { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { z } from "zod";


// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// const prisma= globalForPrisma.prisma 



import { PrismaClient } from "@/db"
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

        return { ...user, id: String(user.id) };
      }

    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(params: {
      user: any;
      account: any;
      profile?: any;
      email?: { verificationRequest?: boolean };
      credentials?: Record<string, unknown>;
    }) {
      const { user, account, profile } = params;

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

    // async signIn({ user, account, profile }) {
    //   // Only run this logic for Google sign-in
    //   if (account?.provider === "google") {
    //     const existingUser = await prisma.user.findUnique({
    //       where: { email: user.email! }
    //     });

    //     if (!existingUser) {
    //       await prisma.user.create({
    //         data: {
    //           name: user.name || "Unknown",
    //           email: user.email!,
    //           authMethod: "GOOGLE",
    //         },
    //       });
    //     }
    //   }
    //   return true;
    // },


    async jwt({ token, user }: { token: JWT; user?: User /* NextAuth.js User type */ }) {
      if (user) {
        // 'user' object comes from 'authorize' (if credentials) or OAuth profile.
        // 'user.id' should be a string here because 'authorize' returns it as string,
        // and OAuth providers usually give string IDs.
        token.userId = user.id; // This is now typed correctly if you extended JWT
        // You could also directly put everything from your Prisma user onto the token here
        // if needed, but be mindful of token size.
        // token.someOtherPrismaField = (user as any).someOtherPrismaField;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.userId && session.user) {
        session.user.id = token.userId; // Now assign it directly, TypeScript knows 'id' exists
      }
      if (token.email && session.user) { // Ensure email is also passed if not default
          session.user.email = token.email;
      }
      // Add any other custom properties from token to session.user
      // if (token.customRole && session.user) {
      //   session.user.role = token.customRole;
      // }
      return session;
    }
// ...
  },
  
// ...
  

     
  pages: {
    signIn: "/signin"
  }
}