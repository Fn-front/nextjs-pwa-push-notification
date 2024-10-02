'use client'

import Pwa from '@/features/pwa'

export default function Home() {

  // 通知を許可する処理
  const handleAskNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    } else {
      console.log('Notification permission denied.');
    }
  };
  
  return (
    <>
      <h2 className="c_h2">通知の許可</h2>
      <button type='button' onClick={handleAskNotificationPermission} className='c_button'>通知を許可しますか？</button>
      <Pwa />
    </>
  );
}
