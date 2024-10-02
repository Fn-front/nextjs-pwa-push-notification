export const ApiNotificationsPush = async(data: any) => {
  const res = await fetch('/api/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.json();
}