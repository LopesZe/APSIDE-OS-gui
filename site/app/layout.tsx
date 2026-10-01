import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANG Festas | Espaço para Eventos em Ponta Grossa",
  description:
    "Organizamos festas de sonhos para todos os gostos e orçamentos! Aniversários, confraternizações, formaturas em Ponta Grossa-PR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
