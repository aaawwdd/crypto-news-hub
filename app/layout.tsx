import type { Metadata } from 'next';

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0d14] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
