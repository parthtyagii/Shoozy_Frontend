import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import RecordBoxCart from './components/RecordBoxCart/RecordBoxCart';
import SingleShoePage from './pages/SingleShowPage/SingleShoePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Homepage from './pages/Homepage/Homepage';




function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Main /> */}
      <Homepage />
      <SingleShoePage />
      <CheckoutPage />

    </div>
  );
}

export default App;
