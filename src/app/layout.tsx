import "./globals.css";
import "./themes.css";

export const metadata = {
  title: "Vivolto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
