import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-10-28.acacia",
});

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request to get cart items
    const { cartItems } = await request.json();

    // Validate the request body
    if (!cartItems || !Array.isArray(cartItems)) {
      return NextResponse.json(
        { error: "Invalid cart items. Expected an array." },
        { status: 400 }
      );
    }

    // Map cart items to Stripe line items with adjustable quantities
    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image], // Include product image
        },
        unit_amount: Math.round(item.price * 100), // Amount in cents
      },
      quantity: item.quantity,
      adjustable_quantity: {
        enabled: true, // Allow users to adjust quantities
        minimum: 1, // Minimum quantity they can set
      },
    }));

    // Create the Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Payment methods allowed
      line_items: lineItems,
      mode: "payment", // Payment mode
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // Redirect URL after successful payment
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`, // Redirect URL after canceled payment
    });

    // Respond with the session ID
    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    // Log the error and respond with a 500 status code
    console.error("Error creating Stripe checkout session:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
