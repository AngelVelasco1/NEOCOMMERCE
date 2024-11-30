import type { Metadata } from "next";
import "./globals.css";
import { Volkhov } from 'next/font/google'

const poppins = Volkhov({
 weight: ['400','700'],
 subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Sensual Candles",
  description: "Descubre nuestra colección de velas aromáticas y sensuales diseñadas para crear ambientes románticos e íntimos. En Sensual Candles, ofrecemos velas de alta calidad con fragancias irresistibles y diseños elegantes. Perfectas para cenas especiales, noches relajantes o decoración de interiores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
