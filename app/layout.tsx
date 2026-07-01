import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ADO Academia Digital | Odontología Digital',
  description: 'Formación avanzada en odontología digital: Ortodoncia, Implantes, Endodoncia y Estética Dental.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
