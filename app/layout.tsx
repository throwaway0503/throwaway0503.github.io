import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status update",
  description: "Mensaje importante.",
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
