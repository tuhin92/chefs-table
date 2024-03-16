import { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Cart from './component/Cart/Cart'
import Foods from './component/Foods/Foods'
import Navbar from './component/Navbar/Navbar'

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = food =>{
    const newCart = [...cart, food];
    setCart(newCart);
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='md:flex container mx-auto gap-12'>
        <Foods handleAddToCart={handleAddToCart}></Foods>
        <Cart cart={cart}></Cart>
      </div>
    </>
  )
}

export default App
