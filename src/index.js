import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnru_ie4a1mkM6HZVUC-0gfZPEj27VhBs",
  authDomain: "reactjs-coderhouse-bd1bf.firebaseapp.com",
  projectId: "reactjs-coderhouse-bd1bf",
  storageBucket: "reactjs-coderhouse-bd1bf.appspot.com",
  messagingSenderId: "714267508166",
  appId: "1:714267508166:web:856ae945417cbadf7106c7"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
