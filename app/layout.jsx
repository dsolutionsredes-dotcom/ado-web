import './globals.css';

export const metadata = {
  title: 'ADO Academia Digital | Cursos de odontología digital',
  description: 'Landing informativa premium para cursos de odontología digital, ortodoncia, implantes, endodoncia y estética dental.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
