import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/ui/Nav";
import StoreProvider from "./utils/StoreProvider";
import { Toaster } from "react-hot-toast";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-red-hat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estately",
  description: "Your one-stop solution for real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHat.variable} antialiased bg-white p-5 `}>
        <Toaster position="top-right" />
        <Nav />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
