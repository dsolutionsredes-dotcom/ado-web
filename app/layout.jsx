import './globals.css';

export const metadata = {
  title: 'ADO Academia Digital | Cursos de odontología digital',
  description: 'Landing informativa para cursos de Ortodoncia Digital, Implantes Dentales, Endodoncia y Estética Dental.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
