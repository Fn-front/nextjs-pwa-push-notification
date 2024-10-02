import { NextResponse } from 'next/server';
import webpush from 'web-push';

const publicVapidKey = process.env.NEXT_PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.NEXT_PRIVATE_VAPID_KEY;

// 第一引数は'mailto:～'というフォーマットでないとだめらしい
webpush.setVapidDetails('mailto:you@example.com', publicVapidKey!, privateVapidKey!);

export const POST = async(req: any, res: any) => {
  try {
    const body = await req.json();
    const subscription = body;
    const payload = JSON.stringify({
      title: 'プッシュ通知のタイトル',
      body: 'プッシュ通知の内容です',
    });
    
    webpush.sendNotification(subscription, payload)
  
    return NextResponse.json(
      { message: '通知送信成功' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: '通知に失敗しました' },
      { status: 500 },
    );
  }
}