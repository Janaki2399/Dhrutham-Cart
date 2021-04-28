import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { DataProvider } from "./contexts/data-context";
import { LoaderToastProvider } from "./contexts/loader-toast-context";
import { AuthProvider } from './contexts/auth-context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LoaderToastProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </LoaderToastProvider>
      </AuthProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

