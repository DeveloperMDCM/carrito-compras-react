
const ListaResultados = () => {
  return (
   <>
 {/* <h2 className="text-red-500 font-bold mb-2"> Limite</h2> */}
    <div className="flex btn-group  flex-wrap  justify-center  mt-2" role="group" aria-label="Basic radio toggle button group">
    

            <input type="radio" className="btn-check " name="btnradioo" id="btnradio1" value={2}   />
            <label className="btn btn-outline-success " htmlFor="btnradio1">2</label>


<input type="radio" className="btn-check" name="btnradioo" id="btnradio2" value={4}  />
            <label className="btn btn-outline-success" htmlFor="btnradio2">4</label>


<input type="radio" className="btn-check" name="btnradioo" id="btnradio3"  value={6}  />
            <label className="btn btn-outline-success" htmlFor="btnradio3">6</label>


<input type="radio" className="btn-check" name="btnradioo" id="btnradio4" value={8}  />
            <label className="btn btn-outline-success" htmlFor="btnradio4">8</label>

<input type="radio" className="btn-check" name="btnradioo" id="btnradio5" value={''} />
            <label className="btn btn-outline-success" htmlFor="btnradio5">Todos</label>

         
        </div>
   </>
  )
}

export default ListaResultados