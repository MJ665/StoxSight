// app/api/user/[id]/password/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/db";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient()
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id);
  const { password } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updated = await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ errormsg: "Failed to update password" ,error :error} , { status: 500 });
  }
}
