import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Autos Certificados Tlalpan | Seminuevos Garantizados en CDMX • Socio ANCA",
  description: "Compra, venta y consignación de autos seminuevos en Calzada de Tlalpan. Más de 20 años de experiencia, garantía por escrito y financiamiento bancario a tu medida.",
  keywords: [
    "autos certificados tlalpan",
    "autos tlalpan",
    "seminuevos calzada de tlalpan",
    "lote de autos coyoacan cdmx",
    "socio anca seminuevos",
    "financiamiento automotriz tlalpan",
  ],
  openGraph: {
    title: "Autos Certificados Tlalpan | Inventario Garantizado",
    description: "Seminuevos certificados con garantía legal y mecánica por escrito. Socio Activo ANCA.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${lato.variable} ${montserrat.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-[#991B1B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
