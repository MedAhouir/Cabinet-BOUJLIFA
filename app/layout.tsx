import type { Metadata } from "next";
import { Rubik, Playfair_Display } from "next/font/google"; 
import "./globals.css";

const lora = Playfair_Display({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabinet Boujlifa",
  description: "Votre partenaire de confiance pour des solutions juridiques",
  robots: 'index, follow',
  openGraph: {
    title: "Cabinet Boujlifa",
    description: "Votre partenaire de confiance pour des solutions juridiques",
    url: "https://cabinet-boujlifa.vercel.app/",  
    type: "website",
    siteName: "Cabinet Boujlifa"
  },
  other: {
    "google-site-verification": "h2lZ-R5OF4Dyb5T_j43FMg3_oPJvvwznab7nrzmxw9A",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${rubik.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
