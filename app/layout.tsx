import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Live Web3 & Crypto Intelligence Hub',
  description: 'Real-time Web3 news feed and open-source donation center.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#0a0d14] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
