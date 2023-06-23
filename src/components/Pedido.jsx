import { CartProvider} from '../context/cartContext';
import Header from './Header'
import { useEffect } from 'react';

import Cart from './Cart';
import Footer from './Footer';
import { formatearDinero } from '../helper/MonedaLocal';

let articulosCarrito = [];
articulosCarrito = JSON.parse( localStorage.getItem('carrito'))
const Pedido = () => {

    // console.log(articulosCarrito);
    // console.log(articulosCarrito2);
    let cartTotal = articulosCarrito.map(item => item.precio * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
   
  return (
    <>
   
       <CartProvider>
      <Header />
      <Cart />
    </CartProvider>
    <div className=' overflow-y-auto h-96 mx-2 flex justify-end'>
    <div className='grid grid-cols-4 sm:flex sm:flex-wrap w-1/4 mt-2 mx-8'>
    {articulosCarrito?.map(item => {
        
                                            const { id, foto, nombre, precio, quantity, cantidad } = item;
                                              const itemTotal = precio * quantity;
                                            return (
                                                <div className="cart_items bg-white hover:text-red-600 border-4 border-gray-900 rounded" key={id} >
                                                        <img src={`/images/${foto}`} alt="item-img" />
                                                    <div className="cart_items_info flex">
                                                        <p className='price text-sm'>{nombre}</p>
                                                        {/* <p className='price text-sm'>{nombre}</p> */}
                                                        <div>

                                                        <p className="price">{formatearDinero(itemTotal)}</p>
                                                        <p className="price flex justify-end">Cantidad: {quantity}</p>
                                                        </div>
                                                </div>
                                                </div>
                                                
                                            );
                                            
     })
    }
    <h1 className=''>{formatearDinero(cartTotal) }</h1>
    </div>
    </div>
    <CartProvider>
      <Footer />
    </CartProvider>
    </>
    
  )
}

export default Pedido