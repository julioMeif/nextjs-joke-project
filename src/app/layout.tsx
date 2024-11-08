// src/app/layout.tsx

import "./globals.css"; // Import global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100">
        <header className="text-center py-4 bg-blue-600 text-white font-bold">
          <h1>My Next.js App with App Router and SSR</h1>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
