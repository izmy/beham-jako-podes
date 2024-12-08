import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Běhám jako poděs",
  description: "Statistiky z challenge #bezimjakopodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
