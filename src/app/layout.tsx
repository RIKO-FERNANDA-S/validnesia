import "./globals.css";
import "boxicons/css/boxicons.min.css";
import FNWrapper from "@/components/fragments/footer-navbar-wrapper";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Validnesia",
  description: "Information Validity Checker Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <Providers>
        <body className="bg-white">
          <FNWrapper>{children}</FNWrapper>
          <Toaster position="top-right" />
        </body>
      </Providers>
    </html>
  );
}
