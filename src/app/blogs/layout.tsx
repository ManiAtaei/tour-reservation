import type { Metadata } from "next";
import "../../app/globals.css";
import Footer from "@/components/Footer";
import Navbarblog from "./component/Navbarblog";

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
        <Navbarblog/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
