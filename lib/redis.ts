import { Redis } from '@upstash/redis'

declare global {
  var redis: Redis | undefined
}

const { REDIS_URL, REDIS_TOKEN } = process.env

if (!REDIS_URL) {
  throw new Error(`Redis is missing required configuration.`)
}

if (!REDIS_TOKEN) {
  throw new Error(`Redis is missing required configuration.`)
}

const redis =
  global.redis ||
  new Redis({
    url: REDIS_URL,
    token: REDIS_TOKEN,
  })

if (process.env.NODE_ENV !== 'production') global.redis = redis

export default redis