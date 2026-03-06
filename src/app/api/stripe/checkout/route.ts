import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your secret key
// In production, use environment variable: process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-02-25.clover" as const,
});

// Plan prices in Stripe - using the IDs provided by the user
const PLAN_PRICES: Record<string, { priceId: string; name: string }> = {
  weekly: {
    priceId: process.env.STRIPE_PRICE_WEEKLY || "price_1T7ldm1o8GkGkl8BogbJZVAv",
    name: "Semanal",
  },
  monthly: {
    priceId: process.env.STRIPE_PRICE_MONTHLY || "price_1T7lmS1o8GkGkl8BeAhcAiD9",
    name: "Mensal",
  },
  yearly: {
    priceId: process.env.STRIPE_PRICE_YEARLY || "price_1T7lf71o8GkGkl8Bu19YCPvt",
    name: "Anual",
  },
};

export async function POST(request: Request) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe não está configurado. Configure a variável STRIPE_SECRET_KEY." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { planId, successUrl, cancelUrl } = body;

    // Validate plan
    const plan = PLAN_PRICES[planId];
    if (!plan) {
      return NextResponse.json(
        { error: "Plano inválido" },
        { status: 400 }
      );
    }

    // Get origin for URLs
    const origin = request.headers.get("origin") || "http://localhost:3000";

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${origin}/pricing`,
      locale: "auto",
      allow_promotion_codes: true,
      metadata: {
        planId,
        planName: plan.name,
      },
      billing_address_collection: "required",
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Erro ao criar sessão de pagamento" },
      { status: 500 }
    );
  }
}
