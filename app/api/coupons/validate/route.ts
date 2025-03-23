import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const validateCouponSchema = z.object({
  code: z.string().min(1, "Coupon code is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateCouponSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { code } = parsed.data;

    const coupon = await prisma.coupon.findUnique({
      where: {
        code: code,
        active: true,
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
    });

    if (!coupon) {
      return NextResponse.json(
        { error: "Invalid or expired coupon code" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: coupon.id,
      code: coupon.code,
      discountPercentage: coupon.discountPercentage,
      expiresAt: coupon.expiresAt,
    });
  } catch (error) {
    console.error("Error validating coupon:", error);
    return NextResponse.json(
      { error: "Failed to validate coupon" },
      { status: 500 }
    );
  }
} 