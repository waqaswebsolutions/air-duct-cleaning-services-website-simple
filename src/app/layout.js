import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PureFlow Air Duct Cleaning | Professional Air Duct Cleaning in Tampa',
  description: 'Professional air duct cleaning services in Tampa. Breathe cleaner air with our expert duct cleaning, dryer vent cleaning, and air quality improvement services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}