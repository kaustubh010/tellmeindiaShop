import { NextRequest, NextResponse } from "next/server";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const sessionCookie = cookies().get(lucia.sessionCookieName);
    if (!sessionCookie) return NextResponse.json({ success: true });

    await lucia.invalidateSession(sessionCookie.value);
    cookies().delete(lucia.sessionCookieName);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Logout Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
