import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villa Itália - Cardápio",
  description: "Cardápio italiano elegante da Villa Itália",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
