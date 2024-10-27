import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { HashRouter } from 'react-router-dom';

const manifestUrl = 'https://iamnnp.github.io/freelton/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <HashRouter>
      <App />
    </HashRouter>
  </TonConnectUIProvider>,
)