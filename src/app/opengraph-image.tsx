import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NEOS E-SPORTS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          position: 'relative',
        }}
      >
        {/* 赤いアクセントライン（上部） */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#E50914',
          }}
        />

        {/* メインテキスト */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '80px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '8px',
              lineHeight: 1,
            }}
          >
            NEOS
          </div>
          <div
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#E50914',
              letterSpacing: '12px',
              lineHeight: 1,
            }}
          >
            E-SPORTS
          </div>
        </div>

        {/* サブテキスト */}
        <div
          style={{
            fontSize: '18px',
            color: '#9CA3AF',
            marginTop: '40px',
            letterSpacing: '2px',
          }}
        >
          eスポーツを通じて 人が本気で成長する環境を
        </div>

        {/* 赤いアクセントライン（下部） */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#E50914',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
