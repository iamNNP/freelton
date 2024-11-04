import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';


interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

export const useTelegram = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  useEffect(() => {
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const userData = WebApp.initDataUnsafe.user;
      setUser(userData);
    }
  }, []);

  return { user };
};