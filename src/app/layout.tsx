// the layout page should to be dirctly into app and named layout
// and the layout is a main page that contains the layout information and all routes into children ele

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// this is font which we use in this site
const inter = Inter({ subsets: ["latin"] });

// metadata for this page to be shown in search engine results and in social media cards
export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud hosting project with Next.js",
};

// this is the main layout for all pages in this site
export default function RootLayout({
  // children is a prop that will be passed to the layout page
  // children takes a props from routes
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* this toastContainer is for notification */}
        <ToastContainer theme="colored" position='top-center'/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
