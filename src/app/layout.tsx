import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
        {process.env.GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
        )}
        <Footer />
      </body>
    </html>
  );
}
