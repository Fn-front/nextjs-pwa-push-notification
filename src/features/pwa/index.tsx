'use client'

import { useEffect, useState } from 'react';

export const Pwa = () => {

  const [message, setMessage] = useState<any>('');

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        setMessage('Service Worker registered with scope: success'+ registration);
      }).catch(error => {
        setMessage('Service Worker registration failed: error' + error);
      });
    }
  }, []);
  return (
    <>
      <p>{ message }</p>
    </>
  );
}

export default Pwa;
