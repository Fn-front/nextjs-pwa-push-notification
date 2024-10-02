'use client'

import NotificationsAllow from '@/features/notifications/allow';
import NotificationsPush from '@/features/notifications/push';
import Pwa from '@/features/pwa'

export default function Home() {
  
  return (
    <>
      <NotificationsAllow />
      <NotificationsPush />
      <Pwa />
    </>
  );
}
