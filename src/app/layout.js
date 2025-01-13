import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gerador Texto - AI Text Generator",
  description: "A powerful AI text generator for various purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script 
          src="https://fonts.googleapis.com/css2?family=Redacted+Script:wght@300;400;700&display=swap" 
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
