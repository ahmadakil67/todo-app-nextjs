import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="className=bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
