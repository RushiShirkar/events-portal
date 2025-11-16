import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trade Events Portal',
  description: 'Global Trade Events Portal for managing events',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
