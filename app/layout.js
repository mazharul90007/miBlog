import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import { AuthProvider } from "@/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "miBlog",
  description: "Your All Queries are here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <AuthProvider>
          <Navbar></Navbar>
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
