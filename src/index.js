import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import my_store from './store/store';
import Radium, { StyleRoot } from 'radium';

const RootComponent = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
      <App />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={my_store}>
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
