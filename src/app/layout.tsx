import type { Metadata } from "next";
import { cormorant, montserrat } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exclã Soluções — Documentos",
  description: "Geração de propostas e contratos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-sans text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
