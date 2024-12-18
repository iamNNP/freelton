import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';




export const useTelegramBackButton = (onBackButtonClick: () => void) => {
  useEffect(() => {
    const isHomePage = window.location.pathname === '/freelton';

    if (!isHomePage) {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(onBackButtonClick);
    }

    return () => {
      WebApp.BackButton.offClick(onBackButtonClick);
      WebApp.BackButton.hide();
    };
  }, [onBackButtonClick]);
};