import { useEffect, useState } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

export const useTonConnect = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [connectedWallet, setConnectedWallet] = useState<any | null>(null);

  useEffect(() => {
    const wallet = tonConnectUI.wallet;
    setConnectedWallet(wallet);

    const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
      setConnectedWallet(wallet);
    });

    return () => unsubscribe();
  }, [tonConnectUI]);

  return { connectedWallet, tonConnectUI };
};
