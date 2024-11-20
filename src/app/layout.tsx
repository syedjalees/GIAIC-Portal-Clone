import Navbar from  '@/components/Navbar';
import "./globals.css";
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["300", "400","700", "900"],
  subsets: ["latin"],
})

export const metadata:Metadata = {
  title: 'Governor Initiative',
  description: 'Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse',
  icons:{
    icon:{url:"/images/G-logo.png"}
  }
}

export default function RootLayout({
  children,
}: any) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navbar />
        {children}
        <hr />
      <Footer />
      </body>
    </html>
  );
}



