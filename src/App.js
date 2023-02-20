import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import RecordBoxCart from './components/RecordBoxCart/RecordBoxCart';
import SingleShoePage from './pages/SingleShowPage/SingleShoePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Homepage from './pages/Homepage/Homepage';
import SearchPage from './pages/SearchPage/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';




function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/shoe/:id' element={<SingleShoePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/search/:word' element={<SearchPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
