import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google';
import { Inter } from "next/font/google";
import type { Viewport } from 'next'

import '@/styles/app.scss'

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#000000',
}

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "テンプレ",
  description: "テンプレ",
  manifest: '/manifest.json',
  icons: '/icons/icon-192x192.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <div className='l_global_container'>
          <main className='l_main'>
            <div className='l_container'>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
