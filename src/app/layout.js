'use client';
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Social from "./components/Social";


const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${outfitFont.className} ${ovoFont.className} antialiased`}>
        <Navbar/>
        <Social/>
      {children}
      </body>
    </html>
  );
}
