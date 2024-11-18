import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { User } from "../components/User";

export const useTelegram = () => {

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const telegramUserId = WebApp.initDataUnsafe.user.id;
      const firstName = WebApp.initDataUnsafe.user.first_name;
      const lastName = WebApp.initDataUnsafe.user.last_name;
      const username = WebApp.initDataUnsafe.user.username;
      const languageCode = WebApp.initDataUnsafe.user.language_code;
      const photoUrl = WebApp.initDataUnsafe.user.photo_url;
      
      const user: User = { telegramUserId, firstName, lastName, username, languageCode, photoUrl };
      console.log("useTelegram: ", user);
      setUser(user);
    }
  }, []);

  return { user };
};