import './App.css';
import './App.scss'
import Home from './pages/Home/Home'
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Buy from './pages/Buy/Buy';

import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <div className="App normal">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/buy' element={<Buy/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
