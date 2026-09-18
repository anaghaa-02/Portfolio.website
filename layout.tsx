import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://anagha-ms.vercel.app'),
  title: 'Anagha M S — Software Engineer',
  description:
    'Portfolio of Anagha M S, a third-year Computer Science and Engineering student and aspiring Software Engineer skilled in Java, Python, SQL, MySQL, and desktop application development.',
  keywords: [
    'Anagha M S',
    'Software Engineer',
    'Computer Science',
    'Java',
    'Python',
    'SQL',
    'MySQL',
    'JDBC',
    'Portfolio',
    'Thrissur',
    'Kerala',
  ],
  authors: [{ name: 'Anagha M S' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Anagha M S — Software Engineer',
    description:
      'Third-year Computer Science and Engineering student building reliable software with Java, Python, SQL, and MySQL.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141420',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
