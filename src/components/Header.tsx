import { TonConnectButton } from '@tonconnect/ui-react';
import { Link } from "react-router-dom";
import { Avatar } from '@telegram-apps/telegram-ui';

export const Header = () => {
  return (
    <header>
      <div className="wrapper site-header__wrapper">
        <nav className="nav">
          <Link to="/freelton/place">Place</Link>
          <Link to="/freelton/take">Take</Link>
          <Link to="/freelton/learn">Learn</Link>
          <Link to="/freelton/tasks">Tasks</Link>
          <Link to="/freelton/profile">
            <Avatar size={20} src="https://avatars.githubusercontent.com/u/84640980?v=4"/> {/* TODO: function to get user avatar */}
          </Link>
        </nav>
        <TonConnectButton />
      </div>  
    </header>
  );
}

