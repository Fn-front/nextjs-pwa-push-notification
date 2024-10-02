'use client'

import style from './button.module.scss'

export const NotificationsAllow = () => {

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
      <button type='button' onClick={handleAskNotificationPermission} className={`${style.c_button}`}>通知を許可しますか？</button>
    </>
  );
}

export default NotificationsAllow;
