import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import OrdersPage from './pages/OrdersPage';
import OrderDetail from './pages/OrderDetail';


function App() {

  return <>
    <ul style={{display:'flex', justifyContent:'space-between'}}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/orders">Orders</Link>
    </ul>
    <hr />

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/orders' element={<OrdersPage/>} />
      <Route path='/orders/:id' element={<OrderDetail/>} />
      <Route path='*' element={<h1>Not NotFound</h1>} />
    </Routes>
  </>
}

export default App;