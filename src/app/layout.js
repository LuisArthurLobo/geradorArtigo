import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
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
        <Script 
          src="https://cdn.amplitude.com/script/501af040b85c78a72f7df04158ed9273.js"
          strategy="afterInteractive"
        />
        <Script id="amplitude-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              window.addEventListener('load', function() {
                if (window.amplitude) {
                  window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
                  window.amplitude.init('501af040b85c78a72f7df04158ed9273', {
                    fetchRemoteConfig: true,
                    autocapture: true
                  });
                }
              });
            }
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
