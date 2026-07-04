import './globals.css';

export const metadata = {
  title: 'ADO Academia Digital',
  description: 'Landing informativa para cursos de odontología digital.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
