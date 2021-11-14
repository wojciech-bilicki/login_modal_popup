import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterModalWrapper from './routes/register/RegisterModalWrapper';
import ForgotPasswordWrapper from './routes/forgotPassword/ForgotPasswordWrapper';
import LoginModalWrapper from './routes/login/LoginModalWrapper';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="login" element={<LoginModalWrapper />} />
          <Route path="register" element={<RegisterModalWrapper />} />
          <Route path="forgot_password" element={<ForgotPasswordWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
