import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Card from "./pages/Card/Card";
import Product from './pages/products/Product';
import Productdetail from './pages/productsdetail/Productdetail';
import Login from './component/login/Login';
import { useSelector } from 'react-redux';
import Portal from './Portal';
import Home from './pages/Home/Home';

function App() {
  const { user } = useSelector(state => state.editor)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            user ? (
              <Route path="/" element={<Portal />}>
                <Route path='/' element={<Home />} />
                <Route path='product' element={<Product />} />
                <Route path='productdetail/:id' element={<Productdetail />} />
                <Route path='card' element={<Card />} />
              </Route>
            ) : (<Route path='/' element={<Login />} />)
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
