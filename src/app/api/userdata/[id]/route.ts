// app/api/user/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/db"; // make sure prisma is setup
const prisma  = new PrismaClient()


interface UserRouteContext {
  params: {
    id: string;
  };
}

export async function PUT(req: NextRequest, context: any) {
  const userId = parseInt(context.params.id);
  if (isNaN(userId)) {
     return NextResponse.json({ errormsg: "Invalid user ID format" }, { status: 400 });
  }

  const body = await req.json();
  const { name, email } = body;

  // Basic validation for name and email (add more as needed)
  if (name && typeof name !== 'string') {
     return NextResponse.json({ errormsg: "Invalid name format" }, { status: 400 });
  }
  if (email && (typeof email !== 'string' || !email.includes('@'))) { // very basic email check
     return NextResponse.json({ errormsg: "Invalid email format" }, { status: 400 });
  }

  try {
    const updatedUserData = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }), // Only include if provided
        ...(email && { email }), // Only include if provided
      },
    });
    // Return only non-sensitive parts of the updated user
    const { password, ...userWithoutPassword } = updatedUserData;
    return NextResponse.json(userWithoutPassword);
  } catch (error: any) {
    console.error("Error updating user data:", error);
    if (error.code === 'P2025') {
      return NextResponse.json({ errormsg: "User not found or failed to update user data." }, { status: 404 });
    }
    // Handle potential unique constraint violation for email if it's being updated
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return NextResponse.json({ errormsg: "Email address is already in use." }, { status: 409 });
    }
    return NextResponse.json({ errormsg: "Failed to update user data", details: error.message }, { status: 500 });
  }
}


// interface RouteParams { id: string; } // Already defined if in same file as PUT, or define again
// If RouteParams is not defined in this scope, redefine it:
interface UserGetRouteParams {
    id: string;
}

export async function GET(req: NextRequest, { params }: { params: any }) {
  const userId = parseInt(params.id);
  if (isNaN(userId)) {
     return NextResponse.json({ errormsg: "Invalid user ID format" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, authMethod: true, createdAt: true, updatedAt: true }, // Select specific non-sensitive fields
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("Failed to fetch user data:", error);
    return NextResponse.json({ errormsg: "Failed to fetch user data", details: error.message }, { status: 500 });
  }
}








// export async function PUT(req: NextRequest, context) {
//     const userId = parseInt(context.params.id); // ✅ proper access
  
//   const { name, email } = await req.json();

//   try {
//     const updated = await prisma.user.update({
//       where: { id: userId },
//       data: { name, email },
//     });
//     return NextResponse.json(updated);
//   } catch (error) {
//     return NextResponse.json({ errormsg : "Failed to update user data" , error :error }, { status: 500 });
//   }
// }



// // import { NextRequest, NextResponse } from "next/server";
// // import { prisma } from "@/lib/prisma";

// export async function GET(req: NextRequest, { params } ) {
//   const userId = parseInt(params.id);

//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: userId },
//       select: { name: true, email: true }, // don't send password
//     });

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     return NextResponse.json(user);
//   } catch (error) {
//     return NextResponse.json({ errormsg: "Failed to fetch user data", error:error }, { status: 500 });
//   }
// }
