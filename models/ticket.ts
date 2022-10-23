import stripe from '../lib/stripe'
import { getRateById } from './rate'

const SITE_DOMAIN = 'http://localhost:3000';

export async function createBuyTicketSession(rateId: string, licensePlate: string) {
  const rate = getRateById(rateId)
  if (!rate) {
    throw new Error('rate does not exist.')
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: rate.value.toString(),
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: `${SITE_DOMAIN}/success`,
    cancel_url: `${SITE_DOMAIN}`,
    payment_intent_data: {
      metadata: {
        licensePlate
      }
    }
  })

  return session.url
}
