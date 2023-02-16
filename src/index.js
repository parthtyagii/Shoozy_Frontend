import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoesContextProvider } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoesContextProvider>
      <App />
    </ShoesContextProvider>
  </React.StrictMode>
);
