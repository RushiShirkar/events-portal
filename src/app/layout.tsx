import { Poppins } from 'next/font/google'
import './globals.css'
import ErrorBoundary from '@/components/ErrorBoundary'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ErrorBoundary>
      <html lang='en' className={poppins.variable}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ErrorBoundary>
  )
}
