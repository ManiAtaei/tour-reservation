import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: "درنا",
  description: "تور مسافرتی درنا ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isPanel = pathname.startsWith('/admin') || pathname.startsWith('/user');

  return (
    <html lang="fa">
      <body dir="rtl">
        {!isPanel && <Navbar />}
        {children}
        {!isPanel && <Footer />}
      </body>
    </html>
  );
}


