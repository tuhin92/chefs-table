import './App.css'
import Banner from './component/Banner/Banner'
import Cart from './component/Cart/Cart'
import Foods from './component/Foods/Foods'
import Navbar from './component/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='md:flex container mx-auto gap-12'>
        <Foods></Foods>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
