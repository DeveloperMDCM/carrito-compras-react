import React, { useContext } from 'react';
import cartContext from '../context/cartContext';
import { Link } from "react-router-dom";

import { UserContext } from '../context/AuthProvider';
const Header = () => {
    let {user, logout} = useContext(UserContext); 

    const { cartItems, toggleCart } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    return (
        <>
       
            <header className='bg-gray-900 p-2'>
                <div className="container flex justify-between">
                    
                      <Link to={'/'} className=' no-underline'> <h4 className='text-white  font-bold flex justify-center items-center text-sm  md:text-2xl '>Artesanias De Sucre</h4></Link>
                    <div className="flex gap-2 items-center">
                   
                        <div className="nav_menu flex gap-2 ">
                            <div
                                title="Cart"
                                className="cart_icon flex bg-gray-600 rounded-lg p-2   hover:bg-gray-700"
                                onClick={() => toggleCart(true)}
                            >
                                <img src="/images/bag-icon.svg" alt="bag-icon" className='animate-waving-hand' />
                                {
                                    cartQuantity >= 1 && (
                                        <span className="text-lime-500 font-bold animate-bounce mx-1">{cartQuantity}</span>
                                    )
                                }
                            </div>
                          
                                
                        </div>
                        <div 
                                title="Cart"
                                className="cart_icon   bg-gray-600 rounded-lg p-2 text-white hidden md:block  hover:bg-gray-700"
                                // onClick={() => toggleCart(true)}
                            >

                                {
                                    !user && 
                                    <button >
                                          
                                    <Link to={'/login'} className='no-underline'>
                                    <i className="fa-solid fa-user text-2xl text-white"></i>
                                    <span className="text-white font-bold animate-bounce mx-1">{!user ? 'login' : ''}</span>
                                    </Link>
                                </button>
                                
                                }
                               
                                {
                                    user && 
                                    <button >
                                    <span className="text-white font-bold animate-bounce mx-1">{!user ? 'login' : user.name}</span>
                                </button>

                                }
                            </div>
                            {
                                    user && 
                                    <button className='bg-red-600 p-2 rounded-lg hidden md:block hover:bg-red-800' onClick={logout} >
                                          
                                    <Link to={'/'} className='no-underline'>
                                    
                                    <span className="text-white font-bold animate-bounce mx-1">{!user ? '' : <i className="fa-solid fa-arrow-right-from-bracket text-white text-danger"></i>}</span>
                                    </Link>
                                </button>

                                }
                        <button className="btn bg-primary text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="fa-solid fa-bars"></i></button>

<div className="offcanvas offcanvas-top"  id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header bg-gray-900">
    <h5 className="offcanvas-title text-white" id="offcanvasBottomLabel">Artesanias De Sucre</h5>
    <div className='flex gap-2'>
    {
                                    user && 
                                    <button className='bg-red-600 p-2 rounded-lg  hover:bg-red-800' onClick={logout} >
                                          
                                    <Link to={'/'} className='no-underline'>
                                    
                                    <span className="text-white font-bold animate-bounce mx-1">{!user ? '' : <i className="fa-solid fa-arrow-right-from-bracket text-white text-danger"></i>}</span>
                                    </Link>
                                </button>

                                }
    <button type="button" className="btn bg-primary mx-1 rounded-lg  text-white" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
    </div>
    
  </div>
          <div
                                title="Cart"
                                className="cart_icon  flex justify-center  rounded-lg p-2 text-white "
                                // onClick={() => toggleCart(true)}
                            >

                                {
                                    !user && 
                                    <button >
                                          
                                    <Link to={'/login'} className='no-underline'>
                                    <i className="fa-solid fa-user text-2xl text-white"></i>
                                    <span className="text-white font-bold animate-bounce mx-1 btn btn-primary">{!user ? 'login' : ''}</span>
                                    </Link>
                                </button>
                                
                                }
                               
                                {
                                    user && 
                                    <button className='flex' >
                                    <span className="text-white font-bold  mx-1 btn btn-success">{!user ? 'login' : user.name}</span>
                                    <span className="text-white font-bold  mx-1 btn btn-success">{!user ? 'login' : user.email}</span>
                                </button>

                                }
                                
                                  <div
                                title="Cart"
                                className="cart_icon flex bg-gray-600 rounded-lg p-2   hover:bg-gray-700"
                                onClick={() => toggleCart(true)}
                            >
                                <img src="/images/bag-icon.svg" alt="bag-icon" className='animate-waving-hand' />
                                {
                                    cartQuantity >= 1 && (
                                        <span className="text-lime-500 font-bold animate-bounce mx-1">{cartQuantity}</span>
                                    )
                                }
                            </div>
                            
                            </div>
  <div className="  flex justify-center ">
                          
                            <div className="flex justify-center">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
       
                            
        <div className=' flex justify-center gap-2'>

                            <li className="nav-item dropdown btn">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pedidos
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">prueba menu 1</a></li>
              <li><a className="dropdown-item" href="#">prueba</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">prubes</a></li>
            </ul>
          </li>  
                            <li className="nav-item dropdown btn">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Envios
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Preba menu 2</a></li>
              <li><a className="dropdown-item" href="#">prubea</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">prer</a></li>
            </ul>
          </li>  
                            <li className="nav-item dropdown btn">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Envios
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Preba menu 2</a></li>
              <li><a className="dropdown-item" href="#">prubea</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">prer</a></li>
            </ul>
          </li>  
        </div>
        
          </ul>
  </div>
  </div>

</div>

                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;