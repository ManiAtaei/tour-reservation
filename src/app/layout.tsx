import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "درنا",
  description: "تور مسافرتی درنا ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <head>
        <link rel="icon"  href="/nav-icon/fav.png"/>
      </head>
      <body dir="rtl" >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
