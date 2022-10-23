import Stripe from 'stripe'

declare global {
  var stripe: Stripe | undefined
}

const { STRIPE_TOKEN } = process.env

if (!STRIPE_TOKEN) {
  throw new Error(`Stripe is missing required configuration.`)
}

const stripe =
  global.stripe ||
  new Stripe(process.env.STRIPE_TOKEN ?? '', {
    apiVersion: '2022-08-01',
    httpClient: Stripe.createFetchHttpClient(),
  })

if (process.env.NODE_ENV !== 'production') global.stripe = stripe

export default stripe