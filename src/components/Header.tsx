import { TonConnectButton } from '@tonconnect/ui-react';
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <header>
      <div className="wrapper site-header__wrapper">
        <nav className="nav">
          <Link to="https://iamnnp.github.io/freelton/place">Place</Link>
          <Link to="https://iamnnp.github.io/freelton/take">Take</Link>
          <Link to="https://iamnnp.github.io/freelton/learn">Learn</Link>
          <Link to="https://iamnnp.github.io/freelton/profile">Profile</Link>
        </nav>
        <TonConnectButton />
      </div>
    </header>
  );
}

