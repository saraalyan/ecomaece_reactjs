import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import my_store from './store/store';
import Radium, { StyleRoot } from 'radium';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={my_store}>
    <BrowserRouter>
      <StyleRoot>
        <App />
      </StyleRoot>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
