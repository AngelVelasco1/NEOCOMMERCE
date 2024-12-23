import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Volkhov } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const volkov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sensual Candles",
  description:
    "Descubre nuestra colección de velas aromáticas y sensuales diseñadas para crear ambientes románticos e íntimos. En Sensual Candles, ofrecemos velas de alta calidad con fragancias irresistibles y diseños elegantes. Perfectas para cenas especiales, noches relajantes o decoración de interiores.",
};

export const colors = {
  primary: "#A18A68",
  text: "#3B3B3A",
  black: "#000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${volkov.className}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar  />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
