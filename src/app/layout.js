import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StylishHim: Elevating Men's Fashion & Lifestyle",
  description:
    "StylishHim: Your Ultimate Destination for Men's Fashion, Grooming, and Lifestyle Inspiration. Discover the Latest Trends, Expert Tips, and Exclusive Insights to Elevate Your Style Game.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="StylishHim, stylishhim, stylish, Men's fashion, Grooming tips, Style inspiration, Men's lifestyle, Fashion trends, Male grooming, Stylish outfits, Men's accessories, Fashion advice,Trendy looks, Classic men's style, Men's grooming products"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
