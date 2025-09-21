import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const saira = Saira({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Rapkology",
  description: "Rapkology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.className} antialiased bg-main container-mx-auto`}
      >
        <Navbar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
