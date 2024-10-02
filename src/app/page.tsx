'use client'

import NotificationsAllow from '@/features/notifications/allow';
import Pwa from '@/features/pwa'

export default function Home() {
  
  return (
    <>
      <NotificationsAllow />
      <Pwa />
    </>
  );
}
