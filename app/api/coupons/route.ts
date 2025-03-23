import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    // Check if the user is an admin
    let isAdmin = false;
    const cookieStore = cookies();
    const sessionCookie = cookieStore.get(lucia.sessionCookieName);

    if (sessionCookie) {
      try {
        const session = await lucia.validateSession(sessionCookie.value);
        if (session && session.session && session.session.userId) {
          const user = await prisma.user.findUnique({
            where: { id: session.session.userId },
            select: { isAdmin: true },
          });
          isAdmin = !!user?.isAdmin;
        }
      } catch (err) {
        console.error("Error validating session:", err);
      }
    }

    // If admin, return all coupons; otherwise only return active non-expired coupons
    const coupons = await prisma.coupon.findMany({
      where: isAdmin 
        ? {} // No filter for admins - show all coupons
        : {
            active: true,
            // Only return coupons that are not expired or have no expiration date
            OR: [
              {
                expiresAt: {
                  gt: new Date(),
                },
              },
              {
                expiresAt: null,
              },
            ],
          },
      select: {
        id: true,
        code: true,
        discountPercentage: true,
        expiresAt: true,
        active: true,
      },
    });

    return NextResponse.json(coupons);
  } catch (error) {
    console.error("Error fetching coupons:", error);
    return NextResponse.json(
      { error: "Failed to fetch coupons" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { code, discountPercentage, expiresAt, active = true } = await req.json();

    // Validate required fields
    if (!code || discountPercentage == null) {
      return NextResponse.json(
        { error: "Code and discount percentage are required" },
        { status: 400 }
      );
    }

    const newCoupon = await prisma.coupon.create({
      data: {
        code,
        discountPercentage,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        active, // Use provided active value or default to true
      },
      select: {
        id: true,
        code: true,
        discountPercentage: true,
        expiresAt: true,
        active: true,
      },
    });

    return NextResponse.json(newCoupon, { status: 201 });
  } catch (error) {
    console.error("Error adding coupon:", error);
    return NextResponse.json(
      { error: "Failed to add coupon" },
      { status: 500 }
    );
  }
}
