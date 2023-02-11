import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import RecordBoxCart from './components/RecordBoxCart/RecordBoxCart';
import SingleShoePage from './pages/SingleShowPage/SingleShoePage';




function App() {
  return (
    <div className="App">

      <Navbar />
      <Header />
      <Main />
      <SingleShoePage />

    </div>
  );
}

export default App;
