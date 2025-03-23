import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";

// Coupon update schema
const couponSchema = z.object({
  code: z.string().optional(),
  discountPercentage: z.number().optional(),
  expiresAt: z.string().nullable().optional(),
  active: z.boolean().optional(),
});

// Function to validate authentication and admin access
async function validateAdmin(req: NextRequest) {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(lucia.sessionCookieName);

  if (!sessionCookie) return { error: "User not authenticated", status: 401 };

  const session = await lucia.validateSession(sessionCookie.value);
  if (!session || !session.session || !session.session.userId) {
    return { error: "Invalid session", status: 401 };
  }

  const user = await prisma.user.findUnique({
    where: { id: session.session.userId },
    select: { isAdmin: true },
  });

  if (!user?.isAdmin)
    return { error: "Unauthorized. Admin access required.", status: 403 };

  return { user };
}

// GET a single coupon by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const couponId = params.id;

    const coupon = await prisma.coupon.findUnique({
      where: { id: couponId },
      select: {
        id: true,
        code: true,
        discountPercentage: true,
        expiresAt: true,
        active: true,
      },
    });

    if (!coupon) {
      return NextResponse.json({ error: "Coupon not found" }, { status: 404 });
    }

    return NextResponse.json(coupon);
  } catch (error) {
    console.error("Error fetching coupon:", error);
    return NextResponse.json(
      { error: "Failed to fetch coupon" },
      { status: 500 }
    );
  }
}

// UPDATE a coupon
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authCheck = await validateAdmin(req);
    if (authCheck.error)
      return NextResponse.json(
        { error: authCheck.error },
        { status: authCheck.status }
      );

    const couponId = params.id;
    const body = await req.json();
    const parsed = couponSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.format() },
        { status: 400 }
      );
    }

    // Check if coupon exists
    const existingCoupon = await prisma.coupon.findUnique({
      where: { id: couponId },
    });
    if (!existingCoupon) {
      return NextResponse.json({ error: "Coupon not found" }, { status: 404 });
    }

    // Update the coupon
    const updatedCoupon = await prisma.coupon.update({
      where: { id: couponId },
      data: {
        code: parsed.data.code ?? existingCoupon.code,
        discountPercentage:
          parsed.data.discountPercentage ?? existingCoupon.discountPercentage,
        expiresAt: parsed.data.expiresAt
          ? new Date(parsed.data.expiresAt)
          : null,
        active: parsed.data.active ?? existingCoupon.active, // Ensure active field is updated
      },
    });

    return NextResponse.json({ success: true, coupon: updatedCoupon });
  } catch (error) {
    console.error("Error updating coupon:", error);
    return NextResponse.json(
      { error: "Failed to update coupon" },
      { status: 500 }
    );
  }
}

// DELETE a coupon
export async function DELETE(req: NextRequest) {
  try {
    const authCheck = await validateAdmin(req);
    if (authCheck.error)
      return NextResponse.json(
        { error: authCheck.error },
        { status: authCheck.status }
      );

    const url = new URL(req.url);
    const couponId = url.searchParams.get("id");

    if (!couponId) {
      return NextResponse.json(
        { error: "Coupon ID is required" },
        { status: 400 }
      );
    }

    const existingCoupon = await prisma.coupon.findUnique({
      where: { id: couponId },
    });
    if (!existingCoupon) {
      return NextResponse.json({ error: "Coupon not found" }, { status: 404 });
    }

    await prisma.coupon.delete({ where: { id: couponId } });

    return NextResponse.json({
      success: true,
      message: "Coupon deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting coupon:", error);
    return NextResponse.json(
      { error: "Failed to delete coupon" },
      { status: 500 }
    );
  }
}
