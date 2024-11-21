import Navbar from  '@/components/Navbar';
import "./globals.css";
import Footer from '@/components/Footer';
import { Roboto } from "next/font/google"
import { Metadata } from 'next';

const roboto = Roboto({
  weight: ["300", "400","700", "900"],
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse",
  icons:{
    icon:{url:"/images/governor1.png", type:"image/png"}
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
      <Navbar />
        {children}
          <hr />
      <Footer />
      </body>
    </html>
  );
}