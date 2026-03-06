import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-02-25.clover" as const,
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "ID de sessão em falta" },
        { status: 400 }
      );
    }

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["customer", "subscription"],
    });

    // Check if payment was successful
    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Pagamento não foi concluído" },
        { status: 400 }
      );
    }

    // Return subscription details
    return NextResponse.json({
      success: true,
      customerEmail: session.customer_email,
      subscriptionStatus: (session.subscription as Stripe.Subscription)?.status,
      planId: session.metadata?.planId,
    });
  } catch (error) {
    console.error("Verify session error:", error);
    return NextResponse.json(
      { error: "Erro ao verificar sessão" },
      { status: 500 }
    );
  }
}
