import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom'; // Change this import

import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap App component */}
    <HashRouter> {/* Change this component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
