// src/types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

// Extend the built-in session.user type
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add your 'id' property here
      // Add any other custom properties you want on session.user
      // role?: string;
    } & DefaultSession["user"]; // Merge with default user properties (name, email, image)
  }

  // Extend the built-in User type (returned by authorize, available in jwt callback's user param)
  interface User extends DefaultUser {
    // Add any properties from your Prisma User model that you return from authorize
    // and want to access in the jwt callback via the 'user' parameter.
    // id is already string in DefaultUser.
    // If your authorize returns other fields like 'authMethod', you could add them here too.
    // authMethod?: string; // Example
  }
}

// Extend the built-in JWT type
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    userId?: string; // This is what you added in your jwt callback
    // Add any other custom properties you add to the token
    // customRole?: string;
  }
}