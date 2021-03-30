import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataProvider } from "./data-context";
import setupMockServer from "./api/mock.server";
import { LoaderToastProvider } from "./loader-toast-context";
import reportWebVitals from './reportWebVitals';
setupMockServer();


ReactDOM.render(
  <React.StrictMode>
    <LoaderToastProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </LoaderToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
