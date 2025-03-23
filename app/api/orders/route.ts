import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";

// Order submission schema
const orderSchema = z.object({
  cartItems: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      image: z.string(),
      quantity: z.number(),
    })
  ),
  shippingAddress: z.string(),
  shippingCity: z.string(),
  shippingState: z.string(),
  shippingPincode: z.string(),
  shippingPhone: z.string(),
  paymentMethod: z.string(),
  couponId: z.string().optional(),
  orderNotes: z.string().optional(),
  totalAmount: z.number(),
  discountAmount: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    // Validate user is authenticated
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

    // Validate order data
    const body = await req.json();
    const parsed = orderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const {
      cartItems,
      shippingAddress,
      shippingCity,
      shippingState,
      shippingPincode,
      shippingPhone,
      paymentMethod,
      couponId,
      orderNotes,
      totalAmount,
      discountAmount,
    } = parsed.data;

    // Create order and order items
    const order = await prisma.order.create({
      data: {
        userId: userId,
        status: "pending",
        totalAmount: totalAmount,
        discountAmount: discountAmount,
        couponId: couponId,
        paymentMethod: paymentMethod,
        paymentStatus: "pending",
        shippingAddress: shippingAddress,
        shippingCity: shippingCity,
        shippingState: shippingState,
        shippingPincode: shippingPincode,
        shippingPhone: shippingPhone,
        orderNotes: orderNotes,
        items: {
          create: cartItems.map((item) => ({
            productId: item.id,
            productName: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        status: order.status,
        totalAmount: order.totalAmount,
        discountAmount: order.discountAmount,
        createdAt: order.createdAt,
      },
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
} 