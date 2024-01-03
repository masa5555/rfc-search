import type {Metadata} from 'next';
import {Inter as nextFontInter} from 'next/font/google';
import './globals.css';

const inter = nextFontInter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'RFC Search',
  description: 'UX-friendly RFC search engine',
};

export default function rootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
