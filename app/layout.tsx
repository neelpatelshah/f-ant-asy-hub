import type { Metadata } from "next";
import { Ysabeau_Office } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const font = Ysabeau_Office({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fANTasy football VII",
  description: "hey alumni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="bg-stone-950 w-full h-full">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
