// Using Inter, Esteban, Fahkwang, Kanit, and Shippori Mincho B1 fonts from Google Fonts
import { Inter, Esteban, Fahkwang, Kanit, Shippori_Mincho_B1 } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const esteban = Esteban({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-esteban',
});

export const fahkwang = Fahkwang({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fahkwang',
});

export const kanit = Kanit({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kanit',
});

export const shipporiMincho = Shippori_Mincho_B1({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shippori',
});

// Font class exports
export const paragraph = {
  className: `${shipporiMincho.className} font-normal` // Shippori Mincho Regular (400)
};

export const heading = {
  className: `${fahkwang.className} font-extralight` // Fahkwang ExtraLight (200)
};

export const subheading = {
  className: `${kanit.className} font-light` // Kanit Light (300)
};
