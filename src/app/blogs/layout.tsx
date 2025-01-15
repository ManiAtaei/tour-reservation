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
    <html lang="fa">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/nav-icon/fav.png" />
      </head>
      <body dir="rtl">
        <Navbarblog />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
