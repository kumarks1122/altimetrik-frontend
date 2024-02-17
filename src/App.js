import React from 'react';
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './store'
import ListCustomer from './components/ListCustomer';
import RegisterCustomer from './components/RegisterCustomer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <Header userName="Kumar" />
      <div className="App container">
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={ListCustomer} />
            <Route path="/register" element={RegisterCustomer} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
