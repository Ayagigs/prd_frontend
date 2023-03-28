import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { DarkModeContextProvider } from './context/darkModeContext';

const clientId =
  '644468853015-cadrgrgrabl4vacc4evt7g342qiqa2t2.apps.googleusercontent.com';
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
      ,
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
