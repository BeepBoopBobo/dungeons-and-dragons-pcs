import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PCSheet from './Pages/PCSheet';
import EditCharacter from './Pages/EditCharacter';
import CreateCharacter from './Pages/CreateCharacter';

import store from "./store";
import { Provider } from "react-redux/es/exports";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='pcs' element={<PCSheet />} >
            <Route path=':pcId' element={<PCSheet />} />
          </Route>
          <Route path='edit'>
            <Route path=':pcId' element={<EditCharacter />} />
          </Route>
          <Route path='create' element={<CreateCharacter />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
