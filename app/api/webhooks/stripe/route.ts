import { StripeCheckoutMetaData } from "@/actions/createStripeCheckoutSession";
import { api } from "@/convex/_generated/api";
import { getConvexClient } from "@/lib/convex";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
    console.log("Webhook Received");

    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature") as string;

    console.log("Webhook Signature:", signature ? "Present" : "Missing");

    let event: Stripe.Event;

    try{
        console.log("Attempting to construct webhook event");
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
        console.log("Webhook event constructed successfully:", event.type);
    } catch(err) {
        console.log("Webhook event constructed successfully:", err);
        return new Response(`Webhook Error: ${(err as Error).message}`, {
            status: 400
        });
    }

    const convex = getConvexClient();

    if(event.type === "checkout.session.completed") {
        console.log("Processing checkout.session.completed");
        const session = event.data.object as Stripe.Checkout.Session;
        const metadata = session.metadata as StripeCheckoutMetaData;
        console.log("Session Metadata:", metadata);
        console.log("Convex Client:", convex);

        try{
            const result = await convex.mutation(api.events.purchaseTicket, {
                eventId: metadata.eventId,
                userId: metadata.userId,
                waitingListId: metadata.waitingListId,
                paymentInfo: {
                    paymentIntentId: session.payment_intent as string,
                    amount: session.amount_total ?? 0
                }
            })
            console.log("Purchase ticket mutation completed:", result);
        } catch (error) {
            console.error("Error processing webhook:", error);
            return new Response ("Error processing webhook", {status: 500});
        }
    }

    return new Response(null, {status: 200});
}