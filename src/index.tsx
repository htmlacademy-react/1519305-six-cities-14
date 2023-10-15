import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app/app.tsx';

// eslint-disable-next-line react-refresh/only-export-components
const Setting = {
  OffersCount: 312,
} as const;

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
