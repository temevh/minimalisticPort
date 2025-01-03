import "./globals.css";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";
//https://www.conordewey.com/
//switch to roboto mono

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "Teemu Hämäläinen",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-2/5 h-screen justify-center items-center mx-auto">
        <main className={roboto.className}>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
