import { TonConnectButton } from '@tonconnect/ui-react';
import { Freel } from "../components/Freel.tsx";
import { Header } from "../components/Header.tsx";
import "../App.css";

const Profile = () => {
  return (
    <div>
        <Header />
        <Freel />
        <Freel />
        <Freel />
        <TonConnectButton/>
    </div>
  );
}

export default Profile;