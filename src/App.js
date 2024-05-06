import logo from './logo.svg';
import './App.css';
import './App.scss'
import Hero from './Components/Hero/Hero';
import background from './assets/images/woodenbackground1.jpeg'
import Home from './pages/Home/Home'
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App normal">
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
