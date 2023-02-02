// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoadCountries from './components/LoadCountries';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Notfound from './components/Notfound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>\
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/produtcs' element={<Products></Products>}></Route>
        <Route path='/countries'  element={<LoadCountries></LoadCountries>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
