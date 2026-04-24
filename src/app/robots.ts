import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/coaching-trial-zerofour/',
    },
    sitemap: 'https://neos-esports.com/sitemap.xml',
  }
}
