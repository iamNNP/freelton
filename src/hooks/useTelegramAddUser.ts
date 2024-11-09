import { useEffect } from 'react';
import axios from 'axios';
import WebApp from '@twa-dev/sdk';
import { User } from "../components/User";


export const useTelegramAddUser = (user: User | any) => {
  useEffect(() => {
    if (user) {
      console.log(user, `${import.meta.env.VITE_SERVER_DOMAIN}/api/add-user`, `${import.meta.env.VITE_SERVER_DOMAIN}/api/save-photo`);
      axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/api/add-user`, user)
      .then(() => console.log(''))
      .catch((error) => console.error('Error while adding user: ', error));
      axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/api/save-photo`, user.telegramUserId)
        .then(() => console.log(''))
        .catch((error) => console.error('Error while saving user avatar: ', error));
    }
  }, []);
};

