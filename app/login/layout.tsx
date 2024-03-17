
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Earn in Dollars",
  description:"A Freelancing Web App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
