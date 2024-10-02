import { NextResponse } from 'next/server';
import webpush from 'web-push';

const publicVapidKey = 'BFGzZV5KfGWlB2IpMzZDd8G9sMReKN0kaOrSpTG-_uoERexNex-NnfPjtrHKiNOcjhmBKh2ZeR8PDNRX-1h6AAg';
const privateVapidKey = 'm90bZ_WCmjjOFUxoO3UtOB9bni5NVpRh-ZhRG3q_qiE';

// 第一引数は'mailto:～'というフォーマットでないとだめらしい
webpush.setVapidDetails('mailto:you@example.com', publicVapidKey!, privateVapidKey!);

export const POST = async(req: any, res: any) => {
  try {
    const { data, title, body, url } = await req.json();    
    const subscription = data;
    const payload = JSON.stringify({
      title: title,
      body: body,
      url: url
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