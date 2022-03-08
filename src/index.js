import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { EditContextProvider } from './edit-context/editContext';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <EditContextProvider>
    <BrowserRouter >
    <App/>
    </BrowserRouter>
  </EditContextProvider>,
  document.getElementById('root')
);
