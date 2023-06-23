import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useContext} from 'react'
import {UserContext} from './context/AuthProvider';
import Home_Page from './components/Home_Page';
import Login from './pages/Login';
import Register from './pages/Register';
import Comprar from './pages/Comprar';
function App() {
  let {user, logout} = useContext(UserContext); 
  let obj = user;
  if (obj != null && user.role === 'administrador' && user.active == 1) {
    user = [user.role, user.active];
 
 }else if(obj != null && user.role === 'administrativo' && user.active == 1) {
   user = [user.role, user.active];
 }
 else if(obj != null && user.role === 'tecnico' && user.active == 1) {
   user = [user.role, user.active];
   
 }
 else if(obj != null && user.role === 'cliente' && user.active == 1) {
   user = [user.role, user.active];
  
 }
 else if(obj != null && user.role === 'jefe' && user.active == 1) {
   user = [user.role, user.active];
 
 }
 else if(obj != null && user.role === 'super' && user.active == 1) {
   user = [user.role, user.active];
 }
 
  return (
   <div>
      <BrowserRouter>
      <Routes>
      {(user && user[0] === 'administrador' || user && user[0] === 'super') && <> 
      <Route index element={<Home_Page />} />
      <Route path='Comprar' element={<Comprar />} /> 
               <Route path="*" element={<Navigate to={user ? '/':'/login'} />} />
      </>}

           
        {!user && (
          <>
           <Route path='login' element={<Login />} /> 
            <Route path='registro' element={<Register />} />  
            <Route path='/' element={<Home_Page />} />  
          {/* <Route path="/noautorizado" element={<NoActorizado/>} /> */}
          </>
        )}
      </Routes>

      </BrowserRouter>
   </div>
  );
}

export default App;
