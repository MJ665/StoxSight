// app/api/user/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/db"; // make sure prisma is setup
const prisma  = new PrismaClient()



export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    const userId = parseInt(context.params.id); // ✅ proper access
  
  const { name, email } = await req.json();

  try {
    const updated = await prisma.user.update({
      where: { id: userId },
      data: { name, email },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ errormsg : "Failed to update user data" , error :error }, { status: 500 });
  }
}



// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true }, // don't send password
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ errormsg: "Failed to fetch user data", error:error }, { status: 500 });
  }
}
