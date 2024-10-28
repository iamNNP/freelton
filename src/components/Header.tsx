import { TonConnectButton } from '@tonconnect/ui-react';
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <header>
      <div className="wrapper site-header__wrapper">
        <nav className="nav">
          <Link to="/freelton/place">Place</Link>
          <Link to="/freelton/take">Take</Link>
          <Link to="/freelton/learn">Learn</Link>
          <Link to="/freelton/tasks">Tasks</Link>
          <Link to="/freelton/profile">Profile</Link>
        </nav>
        <TonConnectButton />
      </div>
    </header>
  );
}

