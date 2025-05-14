import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new import
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Create root element and render the app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Type assertion
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
