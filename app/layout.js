import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SessionProvider } from 'next-auth/react'
import { ThirdwebProvider } from '@/app/thirdweb'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Property888',
  description:
    'Property 888 is a Blockchain technology, decentralized application (DApp), that incorporates Artificial Intelligence, for the design and eventual build out of high quality modern architecture residential properties. Property 888 allows for the tokenization of real estate, with NFT property loans at 0% interest, with liquidity providers obtaining 12% rewards in US$C, or mUS$C tokens.',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThirdwebProvider>
        <SessionProvider>
          <meta
            name="google-site-verification"
            content="LYVski1Yv1RJgbzg5Ggcqa_qYGNmZxpoOXKsK6MhIJE"
          />
          <body>
            <Navbar />
            {children}
            <Footer />
          </body>
        </SessionProvider>
      </ThirdwebProvider>
    </html>
  )
}
