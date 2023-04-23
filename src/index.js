import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from "react-router-dom";
import { PharmacyProvider } from './contexts/PharmacyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <PharmacyProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PharmacyProvider>
    </AuthProvider>
  </React.StrictMode>
);

