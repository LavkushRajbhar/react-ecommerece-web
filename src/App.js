import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import SingleBlog from './Pages/SingleBlog';
import TermsAndConditions from './Pages/TermsAndConditions';
import RefundPolicy from './Pages/RefundPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurStore />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='shipping-policy' element={<ShippingPolicy />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
