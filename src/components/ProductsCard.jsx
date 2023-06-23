import React, { useContext, useEffect, useState } from 'react';
import cartContext from '../context/cartContext';
import { formatearDinero } from '../helper/MonedaLocal';
import Toast from './Toast';

const ProductsCard = (props) => {

    const { foto, quantity, nombre, precio, cantidad, categorias, foto_uno, foto_dos, foto_tres, rating, description} = props;
    // console.log(imagen_producto.imagen);
    const { addItem } = useContext(cartContext);
    const [isAdded, setIsAdded] = useState(false);
    const [fotoModal, setFotoModal] = useState(null);
   
  

    const handleAddToCart = () => {

        
        const item = { ...props };
        // console.log(item);
        addItem(item);

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);

    };

    return (
        <>
        
        <div className=" bg-white shadow-lg rounded container-fluid   ">
  <div className=''>
     <figure className='flex justify-center border-none'  
      
     >
       <img  src={`/images/${foto}`} id={foto.split('.')[0]} width={140} className='hover:cursor-zoom-in'    data-bs-toggle="modal"
      onClick={() => {
document.querySelector(".fotos").src = 'images/'+foto;
document.querySelector(".fotos_uno").src = 'images/'+foto_uno;
document.querySelector(".fotos_dos").src = 'images/'+foto_dos;
document.querySelector(".fotos_tres").src = 'images/'+foto_tres;
document.querySelector("#precio").textContent = formatearDinero(precio);
document.querySelector("#descripcion").textContent = description;
document.querySelector("#modaladminsLabel").textContent = nombre;

    }}
      data-bs-target="#modaladmins"  alt="item-img" />
      
                </figure>   <h3 className='text-yellow-500'>{rating}</h3>  
                 <p className="text-gray-400 font-semibold text-lg text-center">{categorias.categoria}</p>
                
                <h1 className="text-gray-800 text-center text-base mt-1" id='nombre_producto'>{nombre}</h1>
                
              
                <div
                          className="modal fade"
                          id="modaladmins"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="fs-5 m-0 w-full"
                                  id="modaladminsLabel"
                               
                                >
                                  {nombre}
                                </h1>
                                
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                             <span className='text-2xl' id='descripcion'></span>

                                <img
                                  className=" rounded  fotos mx-auto"
                                  alt="Foto admin"
                                  width={300}
                                 
                                />
                        <h3 className='text-red-600 font-bold' id='precio'></h3>
                                 
                                <div className='flex justify-center items-center  border-2 border-gray-600 rounded'
                                onClick={(e)=>  {
                                  document.querySelector(".fotos").src = e.target.src;
                                  // document.querySelector("#precio").textContent = 'dsd'

                                }}
                                >

                                <img
                                  className=" fotos_uno" alt="Foto admin" width={120}  />
                                <img
                                  className=" fotos_dos" alt="Foto admin"width={120}/>
                                <img
                                  className=" fotos_tres" alt="Foto admin" width={120}/>
                                </div>
                               
                                 {/* <span className='text-yellow-400'>{rating}</span> */}
                              </div>
                          
                            </div>
                          </div>
                        </div>
    <div className="flex justify-between">
    
      <button className="text-white hover:text-blue-500">
      
      </button>
    </div>
    <div>
        
      <span
        className="uppercase text-sm bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium "
      >
        Disponible: {cantidad < 10 ? <span className="uppercase text-sm bg-red-50 p-0.5 font-bold border-red-500  rounded text-red-700 ">{cantidad}</span> : cantidad < 30 ? <span className="uppercase text-sm bg-yellow-50 p-0.5 border-yellow-500  rounded text-yellow-700 font-bold">{cantidad}</span> : <span className="uppercase text-sm font-bold bg-green-50 p-0.5 border-green-500  rounded text-green-700 ">{cantidad}</span>}

      </span>
    </div>
  </div>
  <div className="p-1">

 
    
    <p className="text-center text-2xl text-red-600 font-bold mt-1">{formatearDinero(precio)} </p>
    <p className="text-left text-sm text-green-600 font-bold mt-1">Envio gratis </p>
  

    <button
                    type="button"
                    className={`py-2 px-4  bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50  w-full flex items-center justify-center ${isAdded ? 'Añadiendo al carrito' + quantity : ''}`}
                    onClick={() => {
                      handleAddToCart()
                    }}
                    
                >
                    {isAdded ? <span>Añadiendo {quantity} al carrito </span> : 'Añadir al carrito' }
                    {isAdded && 
                    <>
                    <Toast  />
                    </>
                    }
                </button>
               
  </div>
</div>

        </>
    );
    
};

export default ProductsCard;