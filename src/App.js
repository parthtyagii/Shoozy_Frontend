import './App.css';
import SingleShoePage from './pages/SingleShowPage/SingleShoePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Homepage from './pages/Homepage/Homepage';
import SearchPage from './pages/SearchPage/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
