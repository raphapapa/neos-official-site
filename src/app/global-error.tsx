'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, backgroundColor: '#0A0A0A', color: '#fafafa', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#C41E3A', marginBottom: '1rem' }}>
              ERROR
            </h1>
            <p style={{ fontSize: '1rem', color: '#999', marginBottom: '2rem' }}>
              予期しないエラーが発生しました
            </p>
            <button
              onClick={reset}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: 'transparent',
                color: '#C41E3A',
                border: '1px solid rgba(196,30,58,0.3)',
                cursor: 'pointer',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
              }}
            >
              RETRY
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
