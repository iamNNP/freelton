import { useEffect } from 'react';
import axios from 'axios';
import WebApp from '@twa-dev/sdk';
import { User } from "../components/User";


export const useTelegramAddUser = () => {
  useEffect(() => {
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const telegramUserId = WebApp.initDataUnsafe.user.id.toString();
      const firstName = WebApp.initDataUnsafe.user.first_name;
      const lastName = WebApp.initDataUnsafe.user.last_name;
      const username = WebApp.initDataUnsafe.user.username;
      const languageCode = WebApp.initDataUnsafe.user.language_code;
      const user: User = { telegramUserId, firstName, lastName, username, languageCode };
      
      console.log(user, `http://${import.meta.env.VITE_SERVER_IP}:${import.meta.env.VITE_SERVER_PORT}/api/add-user`, `http://${import.meta.env.VITE_SERVER_IP}:${import.meta.env.VITE_SERVER_PORT}/api/save-photo`);
      axios.post(`http://${import.meta.env.VITE_SERVER_IP}:${import.meta.env.VITE_SERVER_PORT}/api/add-user`, user)
      .then(() => console.log(''))
      .catch((error) => console.error('Error while adding user: ', error));
      // console.log(`http://${import.meta.env.VITE_SERVER_IP}:${import.meta.env.VITE_SERVER_PORT}/api/add-user`);
      axios.post(`http://${import.meta.env.VITE_SERVER_IP}:${import.meta.env.VITE_SERVER_PORT}/api/save-photo`, { telegramUserId })
        .then(() => console.log(''))
        .catch((error) => console.error('Error while saving user avatar: ', error));
    }
  }, []);
};
