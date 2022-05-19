import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AbiProvider, NetworkProvider } from './contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <NetworkProvider>
    <AbiProvider>
      <App />
    </AbiProvider>
  </NetworkProvider>
);

reportWebVitals();
