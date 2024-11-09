import '../App.css';
import { useTonConnect } from '../hooks/useTonConnect';
// import { useTonClient } from '../hooks/useTonClient';
import { Address, toNano } from '@ton/core';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Header } from "../components/Header";
import WebApp from '@twa-dev/sdk';



const Tasks = () => {
    const { connectedWallet, tonConnectUI } = useTonConnect();
    // const tonClient = useTonClient();
  
    const sendTransaction = async () => {
      if (!connectedWallet) return;
  
      const recipientAddress = Address.parse('0QB8s5wpv0dXqopV6EizlHJBI23Qtd3Ws4OgxwpS2-SlOHe3');
      const amount = toNano('0.05');
  
      try {
        const transaction = {
          validUntil: Date.now() + 5 * 60 * 1000,
          messages: [
            {
              address: recipientAddress.toString(),
              amount: amount.toString(),
            },
          ],
        };
  
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log('Transaction successfully sent:', result);
      } catch (error) {
        console.error('Error while sending transaction:', error);
      }
    };
  
    const showAlert = async (alert: string) => {
      WebApp.showAlert(alert);
    }

    return (
        <div>
            <Header />
            <TonConnectButton/>

            <div className="task">
              <a>Make a TON transaction</a>
              <button onClick={connectedWallet ? sendTransaction : () => showAlert("Connect wallet to make a transaction")}>Send 0.05 TON</button>
            </div>

            <div className="task">
              <a>Make a TON transaction</a>
              <button onClick={connectedWallet ? sendTransaction : () => showAlert("Connect wallet to make a transaction")}>Send 0.05 TON</button>
            </div>

            <div className="task">
              <a>Make a TON transaction</a>
              <button onClick={connectedWallet ? sendTransaction : () => showAlert("Connect wallet to make a transaction")}>Send 0.05 TON</button>
            </div>
        </div>
    );
}
export default Tasks;