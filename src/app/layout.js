import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { inter } from "@/styles/fonts";
import logo from "../../public/logo.svg";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Influence exchange confex & Awards | 6th edition",
  description:
    " Join industry leaders at the 6th edition of Influence Exchange Confex & Awards Series for insights, networking, and recognition in the world of influence marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="GIeLJGnYp439xFC_7uYX8__-9-1upG6sSwtUSQ1lQ1Q"
        />
      </head>
      <body className={`text-foreground bg-background ${inter.className}`}>
        <Analytics id="G-1ZQZQZQZQZ" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
