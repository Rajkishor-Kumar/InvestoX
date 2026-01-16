import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './landing_page/Navbar'
import HomePage from './landing_page/Home/HomePage'
import SignUp from './landing_page/Signup/SignUp'
import Login from './landing_page/Login/Login'
import AboutPage from './landing_page/About/AboutPage'
import PricingPage from './landing_page/Pricing/PricingPage'
import ProductPage from './landing_page/Products/ProductPage'
import SupportPage from './landing_page/Support/SupportPage'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import './index.css';





createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/signup" element={<SignUp/>}></Route>
  <Route path="/about" element={<AboutPage/>}></Route>
  <Route path="/pricing" element={<PricingPage/>}></Route>
  <Route path="/product" element={<ProductPage/>}></Route>
  <Route path="/support" element={<SupportPage/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>
)
