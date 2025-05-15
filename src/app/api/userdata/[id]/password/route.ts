// app/api/userdata/[id]/password/route.ts (or user/[id]/password/route.ts to match error log path)
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/db";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

interface RouteContext { // Changed interface name for clarity, though RouteParams is fine too
  params: {
    id: string; // The 'id' here corresponds to your dynamic segment [id]
  };
}

export async function PUT(req: NextRequest, context: any) { // <--- CORRECTED: context is typed directly
  const userId = parseInt(context.params.id); // Access params via context.params.id
  if (isNaN(userId)) {
     return NextResponse.json({ errormsg: "Invalid user ID format" }, { status: 400 });
  }
  const { password } = await req.json();

  if (!password || typeof password !== 'string' || password.length < 6) {
     return NextResponse.json({ errormsg: "Password is required and must be at least 6 characters." }, { status: 400 });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // We don't need the `updatedUser` variable if we're not using its value
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
    return NextResponse.json({ success: true, message: "Password updated successfully." });
  } catch (error: any) {
    console.error("Error updating password:", error);
    if (error.code === 'P2025') {
      return NextResponse.json({ errormsg: "User not found or failed to update password." }, { status: 404 });
    }
    return NextResponse.json({ errormsg: "Failed to update password", details: error.message }, { status: 500 });
  }
}



// // app/api/user/[id]/password/route.ts

// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@/db";
// import bcrypt from "bcryptjs";
// const prisma = new PrismaClient()
// export async function PUT(req: NextRequest, { params  }) {
//   const userId = parseInt(params.id);
//   const { password } = await req.json();

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const updated = await prisma.user.update({
//       where: { id: userId },
//       data: { password: hashedPassword },
//     });
//     return NextResponse.json(updated);
//   } catch (error) {
//     return NextResponse.json({ errormsg: "Failed to update password" ,error :error} , { status: 500 });
//   }
// }
