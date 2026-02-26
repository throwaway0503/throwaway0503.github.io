import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank you so much a-for-to playing my game!'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
