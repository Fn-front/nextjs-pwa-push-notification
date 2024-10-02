'use client'

import { useEffect } from 'react';

export const Pwa = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/worker/index.js').then(registration => {
        console.log('Service Worker registered with scope:', registration);
      }).catch(error => {
        console.error('Service Worker registration failed:', error);
      });
    }
  }, []);
  return (
    <></>
  );
}

export default Pwa;
