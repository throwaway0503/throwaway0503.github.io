import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "En serio? Una pagina???",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
