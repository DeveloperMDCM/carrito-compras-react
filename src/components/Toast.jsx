
const Toast = () => {
  return (
    
    <div id="toast-simple" className="flex fixed top-32  right-0 sm:fixed md:mt-20 sm:top-32 md:right-0 items-center w-full max-w-xs p-3 mx-2 text-gray-500 bg-gray-900 divide-gray-200 rounded-lg shadow dark:text-gray-400  " role="alert">
  
    <div className="pl-4 text-sm font-normal"> <i className="fa-solid  fa-circle-plus flex flex-col text-green-600"><span className="font-bold text-sm text-white"> Producto agregado </span></i></div>
    <img src='http://201.232.254.252:5173/images/sombrero.png' width={40} alt="" />
</div>
  )
}

export default Toast