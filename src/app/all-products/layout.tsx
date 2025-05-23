import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Products | Işıksoft",
  description: "See all products and buy all what you want!",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
