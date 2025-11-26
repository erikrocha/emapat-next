import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EPS EMAPAT S.A.",
  description: "La EPS EMAPAT S.A. S.A. es una Empresa Municipal de derecho privado, que provee de agua de calidad a nuestra ciudad de Puerto Maldonado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
