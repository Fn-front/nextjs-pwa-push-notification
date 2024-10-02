'use client'

import { useState } from 'react';
import style from './button.module.scss'

export const NotificationsAllow = () => {

  const [message, setMessage] = useState<string>('');

  // 通知を許可する処理
  const handleAskNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      setMessage('Notification permission granted.');
    } else {
      setMessage('Notification permission denied.');
    }
  };
  
  return (
    <>
      <h2 className="c_h2">通知の許可</h2>
      <button type='button' onClick={() => handleAskNotificationPermission()} className={`${style.c_button}`}>通知を許可しますか？</button>
      <p>{ message }</p>
    </>
  );
}

export default NotificationsAllow;
