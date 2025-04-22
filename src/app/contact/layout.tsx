import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Evodux",
  description:
    "Entre em contato com a Evodux para discutir seu projeto e obter soluções digitais personalizadas para seu negócio.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
