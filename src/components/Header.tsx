// import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';


export const Header = () => {
  return (
    <header>
      <div className="wrapper site-header__wrapper">
        <nav className="nav">
          <a href="/freel/place">Place</a>
          <a href="/freel/take">Take</a>
          <a href="/freel/learn">Learn</a>
          <a href="/freel/profile">Profile</a>
        </nav>
        <TonConnectButton />
      </div>
    </header>
  );
}

