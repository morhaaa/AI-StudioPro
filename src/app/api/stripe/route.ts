import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/dashboard");
//url dove venire reindirazzati

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    //Controllo se c'è un utente ha già pagato
    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    //1) EVENTO: l'utente gestisce da qui la propria iscrizione,
    //Esempio vuole annulare l'iscrizione
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl, //reindizzato questo url
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }
    //2)EVENTO: checkout della sua nuova iscrizione
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "EUR",
            product_data: {
              name: "AI Studio Pro",
              description: "Unlimited AI Generations",
            },
            unit_amount: 2000, //20 euro
            recurring: {
              interval: "month", //intervallo
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId, //Importante perchè con questo sappiamo chi ha pagato e chi no
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
