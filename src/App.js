import logo from './logo.svg';
import './App.css';
import './App.scss'
import background from './assets/images/woodenbackground1.jpeg'
import Home from './pages/Home/Home'
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';

function App() {
  return (
    <div className="App normal">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
