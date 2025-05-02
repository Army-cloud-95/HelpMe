
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import 'leaflet/dist/leaflet.css';
import {BrowserRouter,Routes ,Route} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StrictMode>,
);

// ✅ PWA Registration (Only in Production)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('ServiceWorker registered: ', registration);
    }).catch((registrationError) => {
      console.log('ServiceWorker registration failed: ', registrationError);
    });
  });
}

   


