import { TonConnectButton } from '@tonconnect/ui-react';
import { Header } from "../components/Header";
import "../App.css";

const Home = () => {
  return (
    <div>
        <Header />
        <TonConnectButton/>
    </div>
  );
}

export default Home;