import "./globals.css";

export const metadata = {
  title: "Call Emergency | Tu llamada puede salvar vidas",
  description: "Identificación de emergencia mediante código QR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
