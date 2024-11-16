// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-10-28.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { cartItems } = await request.json();
    if (!cartItems || !Array.isArray(cartItems)) {
        return new NextResponse('Invalid cart items', { status: 400 });
      }
      
    // Map cart items to Stripe line items
    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100), // Amount in cents
      },
      quantity: item.quantity,
    }));

    

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.error('Error creating Stripe checkout session:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
