import { TonConnectButton } from '@tonconnect/ui-react';
import { Header } from "../components/Header";
import { UserData } from "../components/UserData.tsx";
import "../App.css";


const Profile = () => {
  return (
    <div>
        <Header />
        <TonConnectButton/>
        <UserData />
    </div>
  );
}

export default Profile;