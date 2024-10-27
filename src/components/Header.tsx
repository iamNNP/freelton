import { TonConnectButton } from '@tonconnect/ui-react';



export const Header = () => {
  return (
    <header>
      <div className="wrapper site-header__wrapper">
        <nav className="nav">
          <a href="/place">Place</a>
          <a href="/take">Take</a>
          <a href="/learn">Learn</a>
          <a href="/profile">Profile</a>
        </nav>
        <TonConnectButton />
      </div>
    </header>
  );
}

