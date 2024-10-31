// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-48 h-screen p-4 bg-gray-100 dark:bg-gray-900">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-lg font-semibold hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-lg font-semibold hover:text-blue-500">
              About
            </Link>
            <Link href="/services" className="text-lg font-semibold hover:text-blue-500">
              Services
            </Link>
            <Link href="/pricing" className="text-lg font-semibold hover:text-blue-500">
              Pricing
            </Link>
            <Link href="/contact" className="text-lg font-semibold hover:text-blue-500">
              Contact
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-grow p-6 bg-white dark:bg-black text-gray-800 dark:text-gray-200">
          {children}
        </main>
      </body>
    </html>
  );
}
