// app/api/signup/route.ts
import { hash } from "bcryptjs";
import { PrismaClient } from "@/db"; // Adjust path as needed

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return new Response(
        JSON.stringify({
          error: `User already exists with ${existingUser.authMethod.toLowerCase()} signin method.`,
          redirectToSignin: true,
        }),
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        authMethod: "EMAIL",
      },
    });

    return new Response(JSON.stringify({ message: "User created successfully", userId: user.id }), {
      status: 201,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(JSON.stringify({ error: "Server error during signup." }), { status: 500 });
  }
}
