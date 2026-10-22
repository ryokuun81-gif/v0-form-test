import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Shippori_Mincho } from 'next/font/google'
import './globals.css'

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const shippori = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-shippori',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'モデルハウス 見学・宿泊体験のお申込み',
  description:
    'モデルハウスの見学・宿泊体験のお申込みフォームです。実際の暮らしを体感いただけます。',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f4ee',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${shippori.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
