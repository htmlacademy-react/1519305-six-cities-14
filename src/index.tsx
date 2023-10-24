import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app/app.tsx';
import { Setting } from './constants/const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OffersCount}
    />
  </React.StrictMode>
);
