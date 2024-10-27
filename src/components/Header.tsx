import { TonConnectButton } from '@tonconnect/ui-react';



export const Header = () => {
  return (
    <header>
      <div className="wrapper site-header__wrapper">
        <nav className="nav">
          <a href="#/freelton/place">Place</a>
          <a href="#/freelton/take">Take</a>
          <a href="#/freelton/learn">Learn</a>
          <a href="#/freelton/profile">Profile</a>
        </nav>
        <TonConnectButton />
      </div>
    </header>
  );
}

