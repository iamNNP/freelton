import { useEffect } from 'react';
import axios from 'axios';
// import WebApp from '@twa-dev/sdk';
import { User } from "../components/User";


export const useTelegramAddUser = (user: User | any) => {
  useEffect(() => {
    if (user && user.telegramUserId) {
      (async () => {
        console.log(user, `https://freelton.org/api/add-user`, `https://freelton.org/api/save-photo`);
        await axios.post(`https://freelton.org/api/add-user`, user)
        .then(() => console.log(''))
        .catch((error) => console.error('Error while adding user: ', error));
        await axios.post(`https://freelton.org/api/save-photo`, user.telegramUserId)
          .then(() => console.log(''))
          .catch((error) => console.error('Error while saving user avatar: ', error));
      })();
    }
  }, [user]);
};