import "./globals.css";
import { Noto_Sans, Birthstone } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "font",
  weight: ["100", "400", "700"],
});

const birthstone = Birthstone({
  subsets: ["latin"],
  variable: "scripted",
  weight: ["400"],
});

export const metadata = {
  title: "Cameron Lopez",
  description: "Portfolio website for Cameron Lopez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${noto.variable} ${birthstone.variable}`}>
      <body>
        <Navbar />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
