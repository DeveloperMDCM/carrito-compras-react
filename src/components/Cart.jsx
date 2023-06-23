import React, { useContext, useEffect ,useState} from 'react';
import cartContext from '../context/cartContext';
import { formatearDinero } from '../helper/MonedaLocal';
import { Link } from "react-router-dom";
import { UserContext } from '../context/AuthProvider';
let articulosCarrito = [];

const Cart = () => {
    let {user} = useContext(UserContext); 
    const { isCartOpen, cartItems, toggleCart, removeItem, incrementItem, decrementItem, clearCart} = useContext(cartContext);
    const [carro, setCarro] = useState([])
    // let carrito_sincrono = cartItems;
    // console.log(carrito_sincrono);
 
    // const copia_carrito = localStorage.getItem('carrito');
 
    // const {car}
    // JSON.parse( localStorage.getItem('carrito') ) || []
// setInterval(() => {
//     sincronizarStorage()
// }, 5000);
    useEffect(()=> {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || []  ;
        sincronizarStorage();
   
    },[articulosCarrito])

    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);
  

    // closing the Cart on clicking outside of it
    useEffect(() => {
        const outsideClose = (e) => {
            
            setTimeout(() => {
                setCarro(cartItems)
            },500)
            if (e.target.id === 'cart') {
                toggleCart(false);
            }
        };

        window.addEventListener('click', outsideClose);

        return () => {
            window.removeEventListener('click', outsideClose);
        };
    }, [toggleCart]);


    // const carrito_local = localStorage.getItem("loginToken");
    // articulosCarrito2 = JSON.parse( localStorage.getItem('carrito2')) || []  ;
    const cartQuantity = cartItems.length;
    // console.log(cartQuantity);

    const cartTotal = cartItems.map(item => item.precio * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
    
    function sincronizarStorage() {
        localStorage.setItem('carrito', JSON.stringify(cartItems));
    }


    return (
        <>
            {
                isCartOpen && (
                    
                    <div id="cart">
                        
                        <div className="cart_content bg-gray-900 text-black">
                            <div className="cart_head">
                                <h1 className='text-white shadow-lg  font-bold text-sm'>Productos ({cartQuantity})</h1>
                                <div
                                    title="Close"
                                    className="close_btn text-red-600"
                                    onClick={() => toggleCart(false)}
                                >
                                    <h1>&times;</h1>
                                </div>
                            </div>

                            <div className="cart_body p-2">
                                {
                                    cartQuantity === 0 ? (
                                        <h2 className='text-center text-red-600'>El carrito esta vacio</h2>
                                    ) : (
                                        cartItems.map(item => {
                                            const { id, foto, nombre, precio, quantity, cantidad } = item;
                                            // const moi = {foto, nombre, precio, quantity, cantidad };
                                            // console.log(JSON.stringify(moi));
                                            const itemTotal = precio * quantity;
                                            // let itemCantidadProductos =+ quantity *0;
                                            return (
                                                <div className="cart_items  bg-white hover:text-red-600 border-4 border-gray-900 rounded" key={id} >
                                                        <img src={`/images/${foto}`} alt="item-img" />
                                                    <div className="cart_items_info">
                                                        <p className='price text-sm'>{nombre}</p>
                                                        <p className="price">{formatearDinero(itemTotal)}</p>
                                                        <p className="font-bold text-lime-500">maximo: {cantidad} </p>
                                                    </div>
                                                    <div className="cart_items_quantity">
                                                        <span className='text-red-500 font-bold bg-black rounded-sm' onClick={() => decrementItem(id)}>&#8722;</span>
                                                        <b>
                                                            <>
                                                            {quantity > cantidad ? setTimeout(() =>{removeItem(id)},0) : quantity}  
                                                            
                                                            </>
                                                        </b>
                                                        <span className='text-red-500 font-bold   bg-black rounded-sm ' onClick={() => incrementItem(id)
                                                        
                                                        }>&#43;</span>
                                                    </div>

                                                    <div
                                                        title="Remove Item"
                                                        className="text-3xl cursor-pointer"
                                                        onClick={() => removeItem(id)}
                                                    >
                                                        <span>&times;</span>
                                                    </div>
                                                    
                                                </div>
                                            );
                                        })
                                    )}
                            </div>

                            <div className="cart_foot bg-black">
                                <div className=' text-white'>
                                    <small>Total:</small>
                                    <h1 className='text-sm md:text-2xl'>{formatearDinero(cartTotal)}</h1>
                                </div>

                               
                                {
                                    cartQuantity >0 &&
                                    <>
                                    <div className='flex gap-1 whitespace-nowrap'>

                                  <Link to={'/comprar'}></Link>
                                    <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-600 rounded-lg p-2 text-white"
                                    onClick={clearCart}
                                >Vaciar Carrito
                                </button>
{
    user && 
    <>
   <Link to={'/comprar'}>
                                <button onClick={() => {console.log(carro)}}
                                    type="button"
                                    className="bg-lime-500 hover:bg-lime-600 rounded-lg p-2 text-white"
                                    disabled={cartQuantity === 0}
                                >
                                      Terminar Compra
                                </button>
                                </Link>
    </>
}
                                </div>
                                    </>
                                }
                                   
                                   {/* <button type='button' className="checkout_btn"  onClick={alert('TERMINAR COMPRA')} > Terminar compra</button> */}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Cart;