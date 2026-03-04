import type { MetadataRoute } from 'next'

const SITE_URL = 'https://neos-esports.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/store'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
