import "./globals.css";
import "boxicons/css/boxicons.min.css";
import FNWrapper from "@/components/fragments/footerNavbarWrapper";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Validnesia",
  description: "Information Validity Checker Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className="bg-white">
        <FNWrapper>{children}</FNWrapper>
      </body>
    </html>
  );
}
