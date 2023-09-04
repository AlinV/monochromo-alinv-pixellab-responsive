import './globals.scss';

export const metadata = {
  title: 'Monochrome',
  description: 'One of the best brand of watches',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
