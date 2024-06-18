import React from 'react';
import ReactDOM from 'react-dom';
import App from '/React2/src/App.jsx';
import '/React2/src/index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from '/React2/src/context/StoreContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
