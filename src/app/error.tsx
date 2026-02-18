'use client'

import Link from 'next/link'

export default function RootError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading text-8xl text-neos-red mb-4">ERROR</h1>
        <p className="text-sub-text text-lg mb-8">
          予期しないエラーが発生しました
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
          >
            RETRY
          </button>
          <Link
            href="/"
            className="inline-block font-heading text-sm tracking-widest text-sub-text hover:text-white transition-colors border border-white/10 hover:border-white/30 px-8 py-3"
          >
            TOP PAGE
          </Link>
        </div>
      </div>
    </div>
  )
}
