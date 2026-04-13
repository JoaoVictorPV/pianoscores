import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cronograma de Piano",
    template: "%s • Cronograma de Piano",
  },
  description:
    "Um dicionário enciclopédico interativo para estudo de piano, guiado pelo Círculo das Quintas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fontSans.variable} ${fontSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-bg-950)] text-[var(--color-foreground)]">
        {children}
      </body>
    </html>
  );
}
