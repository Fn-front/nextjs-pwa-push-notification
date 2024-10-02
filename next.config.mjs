import withPWAInit from 'next-pwa';

const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = withPWAInit({
  dest: 'public',  // Service Worker や PWA 関連ファイルを配置する場所
  disable: process.env.NODE_ENV === 'development', // 開発環境ではPWAを無効にする
  register: true,
  skipWaiting: true,
  // runtimeCaching: process.env.NODE_ENV === 'development' ? [] : null,
  buildExcludes: [/app-build-manifest\.json$/],
  // exclude: [
  //   // add buildExcludes here
  //   ({ asset, compilation }) => {
  //     if (
  //       asset.name.startsWith("server/") ||
  //       asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
  //     ) {
  //       return true;
  //     }
  //     if (isDev && !asset.name.startsWith("static/runtime/")) {
  //       return true;
  //     }
  //     return false;
  //   }
  // ],
});

export default nextConfig;
