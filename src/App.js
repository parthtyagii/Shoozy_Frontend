import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import RecordBoxCart from './components/RecordBoxCart/RecordBoxCart';
import SingleShoePage from './pages/SingleShowPage/SingleShoePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Navbar /> */}
        {/* <Header /> */}
        {/* <Main /> */}
        {/* <Homepage /> */}
        {/* <SingleShoePage /> */}
        {/* <CheckoutPage /> */}

        <Route path='/' element={<Homepage />} />
        <Route path='/shoe/:id' element={<SingleShoePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
