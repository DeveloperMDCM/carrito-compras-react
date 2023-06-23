
import { CartProvider } from '../context/cartContext';
import Header from './Header';
import Home from '../pages/Home';
import Footer from './Footer';
import Cart from './Cart';
const Home_Page = () => {
  return (
    <>
    <CartProvider>
      <Header />
      <Home />
      <Footer />
      <Cart />
    </CartProvider>
  </>
  )
}

export default Home_Page