import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Card from "./pages/Card/Card";
import Home from "./pages/Home/Home";
import Product from './pages/products/Product';
import Productdetail from './pages/productsdetail/Productdetail';
import Navbar from './component/navbar/Navbar';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productdetail/:id' element={<Productdetail />} />
          <Route path='/card' element={<Card />} />
          {/* <Route path='/login' element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
