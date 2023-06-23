import React, { useState, useEffect } from 'react';
// import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';
import ListaResultados from '../components/ListaResultados';
import CategoriasProductos from '../components/CategoriasProductos';
import { useFetch } from '../useFetch';
import Spinner from '../components/Spinner';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import "../Spinner.css";
let limite = 'limite=15'
let categoriaProducto = 'categoria='
const Home = () => {
    // const [productos, setProductos] = useState([]);
    const url = `${import.meta.env.VITE_BACKEND_URL}producto.php`;
    const { response, error, loading, fetchData } = useFetch(url);
    const { productos } = response;
    // console.log(productos) ;
    const handleResultados = (e) => {
        limite = (`limite=${e.target.value}`)
        // console.log(limite);
        if(e.target.value === ''){
          fetchData(limite, categoriaProducto);
        }
        
        if(limite != undefined || limite != null) {
          fetchData(limite, categoriaProducto);
        }
    }
      const handleCategorias = (e) => {
        categoriaProducto = (`categoria=${e.target.value}`)
        if(e.target.value === ''){
          fetchData(limite, categoriaProducto);
        }
       
        fetchData(limite, categoriaProducto);
      
        
    }
    const handleRecargarDatos = () => {
        fetchData(limite, categoriaProducto);
      }

      useEffect(() => {
        const accordionBtns = document.querySelectorAll(".accordion");
    
        accordionBtns.forEach((accordion) => {
          accordion.onclick = function () {
            this.classList.toggle("is-open");
    
            let content = this.nextElementSibling;
            // console.log(content);
    
            if (content.style.maxHeight) {
              //this is if the accordion is open
              content.style.maxHeight = null;
            } else {
              //if the accordion is currently closed
              content.style.maxHeight = content.scrollHeight + "px";
            //   console.log(content.style.maxHeight);
            }
          };
        });
      }, []);
      
    return (
        <>
        
                
             
          <div className=" flex flex-col justify-center items-center text-center">
          <button className="accordion text-center shadow-sm">
          <i className="fa-solid fa-filter "></i>
                  <span className="menu-title mx-7 text-sm ">Filtro para los productos</span>
                </button>

                <div className="accordion-content">
                  
             <div className="  text-white w-full  flex justify-between flex-col" >
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
          <div onChange={handleResultados}  >
              <ListaResultados  />
          </div>
          <div onChange={handleCategorias} className="flex flex-col m-3" >
              <CategoriasProductos />
          </div>

      <div  role="group">
  <button onClick={() => openModal(1)}
                data-bs-toggle="modal"
                data-bs-target="#modalProducts" type="button" className="px-4 mb-2 border-green-900  text-black hover:bg-green-400 py-2 text-sm font-medium   border  rounded-l-lg  hover:text-white focus:z-10 focus:ring-2  ">
  <i className="fa-solid  fa-circle-plus flex flex-col text-green-600"></i> Nuevo
  </button>
  <button onClick={handleRecargarDatos}  type="button" className="px-4 py-2 text-sm font-medium text-black hover:bg-red-400 border border-gray-900 rounded-r-md">
  <i className="fa-solid fa-spinner  text-red-600 "></i> Recargar
  </button>

  </div>
            </div>
            </div>
                </div>
             {/* Botones para limite de resultados  */}
            {loading && (
        <>
          <Spinner className="mt-2" />
        </>
      )}
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productos?.map((item) => (
                                <ProductsCard key={item.id} {...item} />  
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;