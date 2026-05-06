import type { Metadata } from "next";
import { Carlito, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

/** Corpo: próximo do “padrão Office” (família Calibri/Aptos) — Carlito no Google Fonts */
const carlito = Carlito({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-carlito",
  display: "swap",
});

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
        className={`${cormorant.variable} ${carlito.variable} font-sans text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
