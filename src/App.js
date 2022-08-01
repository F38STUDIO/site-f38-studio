import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import HomeCatalogPage from './pages/HomeCatalogPage'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomeCatalogPage />} >
            <Route path='Product Detail' element={<ProductDetailPage/>}>
              <Route path="Check Out" element={<CheckOut/>} />
            </Route>
          </Route>
        <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
