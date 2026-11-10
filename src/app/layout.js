import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { profile } from "@/data/profile";

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: {
    default: `${profile.name} | ${profile.headline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.headline}`,
    description: profile.description,
    type: "website",
    siteName: profile.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} lg:w-3/4 xl:w-1/2 min-h-screen flex flex-col justify-between mx-auto`}
      >
        <Navbar />
        <main className="flex-1 p-4 lg:p-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
