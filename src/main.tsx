import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/MainPage/App.tsx';
import './Shared/assets/styles/index.css';
import  './Shared/assets/styles/global.css';
import './Shared/assets/styles/theme.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
