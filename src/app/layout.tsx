import ProductHighlight from "@/components/ProductHighlight/ProductHighlight";
import TrandingProducts from "@/components/trandingProducts/TrandingProducts";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Carousel from "../components/carousel/Carousel";
import FeatureProduct from "../components/featureProduct/FeatureProduct";
import Header from "../components/header/Navber";
import ProductCarousel from "../components/productCarousel/ProductCarousel";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header></Header>
        <Carousel></Carousel>
        <ProductCarousel></ProductCarousel>
        <ProductHighlight></ProductHighlight>
        <FeatureProduct></FeatureProduct>
        <TrandingProducts></TrandingProducts>
        {children}
      </body>
    </html>
  );
}
