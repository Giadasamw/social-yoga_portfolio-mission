import type { Metadata } from "next";
import { Playfair_Display, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Social Yoga — A calm, friendly studio rooted in community",
  description:
    "Social Yoga is a calm and friendly studio in London (Fish Island & Hackney Central) where yoga, pilates and wellness feel accessible, human and rooted in real life.",
  openGraph: {
    title: "Social Yoga — A calm, friendly studio rooted in community",
    description:
      "Yoga, pilates, sound and movement in a relaxed, welcoming studio. Come exactly as you are.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}
