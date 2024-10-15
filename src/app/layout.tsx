import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

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
const Header = dynamic(() => import('app/components/Header/HeaderComponent'), {
  loading: () => <p>Loading header...</p>,
  ssr: false,
});
const Footer = dynamic(() => import('app/components/Footer/FooterComponent'), {
  loading: () => <p>Loading footer...</p>,
  ssr: false,
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
