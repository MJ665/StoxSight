// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { NEXT_AUTH } from "@/app/api/lib/auth";
const handler  = NextAuth (NEXT_AUTH)
export {handler as GET , handler as POST}