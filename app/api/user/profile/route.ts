import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { z } from "zod";

const profileUpdateSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().optional(),
});

export async function PUT(req: NextRequest) {
  try {
    // Check if user is authenticated
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(lucia.sessionCookieName);

    if (!sessionCookie) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const session = await lucia.validateSession(sessionCookie.value);
    if (!session || !session.session || !session.session.userId) {
      return NextResponse.json(
        { error: "Invalid session" },
        { status: 401 }
      );
    }

    const userId = session.session.userId;

    // Validate request body
    const body = await req.json();
    const parsed = profileUpdateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { firstName, lastName, phone } = parsed.data;
    const fullName = `${firstName} ${lastName}`.trim();

    // Update user profile
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        fullName
      },
    });

    return NextResponse.json({
      success: true,
      user: {
        id: updatedUser.id,
        name: updatedUser.fullName,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
} 