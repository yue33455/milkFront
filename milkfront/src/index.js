import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from './routes/app/App.tsx';
import Page2 from './routes/page2/page2';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path = '/page2' element = {<Page2/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
