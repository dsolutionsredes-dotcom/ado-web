import './globals.css';

export const metadata = {
  title: 'ADO Academia Digital',
  description: 'Landing informativa para ADO Academia Digital'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
