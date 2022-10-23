import stripe from '../lib/stripe'
import redis from '../lib/redis'
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
        price_data: {
          currency: 'CAD',
          unit_amount: rate.value * 100,
          product_data: {
            name: 'parking ticket',
            description: 'parking ticket for the day'
          }
        },
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

export async function setTicketSession(licensePlate: string) {
  await redis.set(licensePlate, 'true', { ex: 24 * 60 * 60})
}

export async function doesTicketSessionExist(licensePlate: string) {
  return await redis.get(licensePlate)
}