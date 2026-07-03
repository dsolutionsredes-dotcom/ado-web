import './globals.css';

export const metadata = {
  title: 'ADO Academia Digital | Formación avanzada en odontología digital',
  description: 'Academia especializada en odontología digital, ortodoncia, implantes, endodoncia y estética dental.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
