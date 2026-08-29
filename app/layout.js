import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Jawaharlal Nehru S — Frontend Developer',
  description: 'React.js · Next.js · Power BI · 3.5 Years Experience · Chennai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body { font-family: ${inter.style.fontFamily}, system-ui, sans-serif; }
          h1, h2, h3, h4, h5, .font-display { font-family: ${poppins.style.fontFamily}, system-ui, sans-serif; }
        `}</style>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}