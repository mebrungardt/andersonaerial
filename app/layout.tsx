import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Navbar from "./components/navigation/navbar";
import "./globals.css";
import Footer from "./components/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Aerial LLC.",
  description: "Brochure Website for Anderson Aerial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yvh7led.css" />
      </head>
      <body>
        <div className="flex flex-col items-center justify-between">
          <Navbar />
        </div>
        {children}
        <div className="flex flex-col items-center justify-between">
          <Footer />
        </div>
      </body>
    </html>
  );
}
