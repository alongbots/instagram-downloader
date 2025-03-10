import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Insta J | Instagram Image and Video Downloader',
  description: 'Instagram image and video downloader. Support post, reel, igtv...',
  keywords: ['instagram', 'downloader', 'image', 'video', 'download', 'post', 'reel', 'igtv'],
  authors: [{ name: 'Insta J', url: 'https://github.com/newwangzhicheng/instagram-downloader' }],
  creator: 'Insta J',
  publisher: 'Insta J',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://insta-j.vercel.app/',
    title: 'Insta J | Instagram Image and Video Downloader',
    description: 'Instagram image and video downloader. Support post, reel, igtv...',
    siteName: 'Insta J'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insta J | Instagram Image and Video Downloader',
    description: 'Instagram image and video downloader. Support post, reel, igtv...',
    creator: '@InstaJ'
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
