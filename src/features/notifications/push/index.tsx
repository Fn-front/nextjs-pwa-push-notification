'use client'

import { useState } from 'react';
import { ApiNotificationsPush } from '@/hooks/api/notificationsPush';
import style from './button.module.scss'

export const NotificationsPush = () => {

  const [message, setMessage] = useState<any>('');

  // 通知を許可する処理
  const handlePush = async () => {

    const test = async(reg: any) => {
      
      const subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_KEY,
      });
      
      setMessage('pushManager');
      

      const data = {
        data: subscription,
        title: 'タイトルやで',
        body: '内容やで',
        url: '/'
      };

      setMessage('data');

      const res = await ApiNotificationsPush(data);
      setMessage(res.message)
    }

    await navigator.serviceWorker.ready
    .then((reg) => {

      test(reg)
        
    })
    
  };


  // 5秒後に通知を許可する処理
  const handleFiveSecondsPush = async () => {

    setMessage('クリックしたよ')
    
    const registration = await navigator.serviceWorker.ready    
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_KEY!),
    });

    const data = {
      data: subscription,
      title: '5秒後になりました',
      body: 'おい5秒後やで',
      url: '/'
    }
    
    const set = setTimeout(async() => {
      const res = await ApiNotificationsPush(data);
      setMessage(res.message)
      clearTimeout(set)
    }, 5000)

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
      <button type='button' onClick={() => handlePush()} className={`${style.c_button}`}>通知を送信</button><br />
      <button type='button' onClick={() => handleFiveSecondsPush()} className={`${style.c_button}`} style={{marginTop: '16px'}}>5秒後に通知を送信</button>
      <p style={{marginTop: '16px'}}>{ message }</p>
    </>
  );
}

export default NotificationsPush;
