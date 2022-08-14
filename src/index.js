import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/layout';
import Error from './pages/Error/error';
import HomeCatalogPage from "./pages/Home/HomeCatalogPage"
import Cart from './pages/Cart/Cart'
import CheckOut from './pages/CheckOut/CheckOut'
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage'



export default function App() {
  return (
    <BrowserRouter>
 
    <Routes>
          <Route index element={<HomeCatalogPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/product/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error />} /> 
    </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);