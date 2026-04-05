// proxy.ts  (Next.js 16+)  or  middleware.ts  (Next.js 14-15)
import { withNanocrawl } from 'nanocrawl-sdk'

export const proxy = withNanocrawl({
  // Required
  sellerWallet: '0xfC2a63e79f57655aeD2CA6A4e15dDc6A3644B566',
  redisUrl: process.env.REDIS_URL,

  // Pricing
  pricing: { '/blog': 0.001, '/products': 0.002 },
  defaultPrice: 0.001,
  freeRoutes: ['/about'],

  // Volume discounts — reward bots that crawl more
  volumeTiers: [
    { after: 10, discount: 0.20 },   // 20% off after 10 pages
    { after: 50, discount: 0.40 },   // 40% off after 50 pages
  ],
})

export const config = { matcher: ['/((?!_next|favicon).*)'] }