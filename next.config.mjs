import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: 'public',  // Service Worker や PWA 関連ファイルを配置する場所
  disable: process.env.NODE_ENV === 'development', // 開発環境ではPWAを無効にする
});

export default nextConfig;
