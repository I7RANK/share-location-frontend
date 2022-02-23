import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/header';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/home';

import Map from './pages/GoogleMaps/map';

import { Routes, Route, HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<><Header /> <Outlet /></>}>
          <Route path='/' element={
            <>
              <Home />
            </>
          } />
          <Route path='/map' element={<Map />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
