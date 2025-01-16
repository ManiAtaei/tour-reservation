import type { Metadata } from "next";
import "../../app/globals.css";
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

    <div>
      <Navbarblog />

      {children}

    </div>

  );
}
