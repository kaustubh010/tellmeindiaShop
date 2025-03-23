import { NextRequest, NextResponse } from "next/server";
import { lucia } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies(); // Await cookies
    const sessionCookie = cookieStore.get(lucia.sessionCookieName);

    if (!sessionCookie) {
      console.log("No session cookie found.");
      return NextResponse.json({ user: null });
    }

    console.log("Session Cookie Value:", sessionCookie.value);

    const session = await lucia.validateSession(sessionCookie.value);

    console.log("Session Validation Result:", session);

    if (!session || !session.session || !session.session.userId) {
      console.error("Invalid session or missing userId:", session);
      return NextResponse.json({ user: null });
    }

    const userId = session.session.userId; // Correctly accessing userId
    console.log("Fetching user for ID:", userId);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      console.error("User not found:", userId);
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.fullName,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error: any) {
    console.error("Auth Check Error:", error.message, error.stack);
    return NextResponse.json({ user: null });
  }
}
