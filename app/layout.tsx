
import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Earn in Dollars",
  description:"A Freelancing Web App"
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
