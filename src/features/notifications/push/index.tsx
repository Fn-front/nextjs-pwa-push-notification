'use client'

import { useState } from 'react';
import { ApiNotificationsPush } from '@/hooks/api/notificationsPush';
import style from './button.module.scss'

export const NotificationsPush = () => {

  const [message, setMessage] = useState<string>('');

  // 通知を許可する処理
  const handlePush = async () => {
    
    const registration = await navigator.serviceWorker.ready    
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_KEY!),
    });

    const data = {
      data: subscription,
      title: 'タイトルやで',
      body: '内容やで',
      url: '/'
    }
    
    const res = await ApiNotificationsPush(data);
    setMessage(res.message)
  };

  // Base64 の VAPID 公開鍵を Uint8Array に変換する関数
  const urlBase64ToUint8Array = (base64String: string) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };
  
  return (
    <>
      <h2 className="c_h2" style={{marginTop: '32px'}}>通知を送信</h2>
      <button type='button' onClick={handlePush} className={`${style.c_button}`}>通知を送信</button>
      <p style={{marginTop: '16px'}}>{ message }</p>
    </>
  );
}

export default NotificationsPush;
