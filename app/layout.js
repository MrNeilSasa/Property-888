import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react";
import { ThirdwebProvider } from "@/app/thirdweb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Property888",
  description:
    "Property 888 is a Blockchain technology, decentralized application (DApp), that incorporates Artificial Intelligence, for the design and eventual build out of high quality modern architecture residential properties. Property 888 allows for the tokenization of real estate, with NFT property loans at 0% interest, with liquidity providers obtaining 12% rewards in US$C, or mUS$C tokens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <ThirdwebProvider>
            <Navbar />
            {children}
            <Footer />
          </ThirdwebProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
