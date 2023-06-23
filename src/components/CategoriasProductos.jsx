
const CategoriasProductos = () => {
  return (
    <>
    <div className=" flex  flex-wrap  justify-center gap-2 " role="group" aria-label="Basic radio toggle button group">
            <input hidden type="radio" className="btn-check hover:bg-black " name="btnradio" id="btnradio11" value={1}   />
            <label className="btn btn-outline-success  cursor-pointer" htmlFor="btnradio11">Artesanía indígena</label>
            <input hidden type="radio" className="btn-check" name="btnradio" id="btnradio22" value={2}  />
            <label className="btn btn-outline-success  cursor-pointer" htmlFor="btnradio22">Artesanía tradicional popular</label>
            <input hidden type="radio" className="btn-check" name="btnradio" id="btnradio33"  value={3}  />
            <label className="btn btn-outline-success  cursor-pointer" htmlFor="btnradio33">Artesanía contemporánea</label>
            <input hidden type="radio" className="btn-check" name="btnradio" id="btnradio44"  value={''}  />
            <label className="btn btn-outline-success  cursor-pointer" htmlFor="btnradio44">Todos</label>
        </div>
        
   </>
  )
}

export default CategoriasProductos