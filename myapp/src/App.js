import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Admin from './component/Admin';
import Login from './component/Login';
import Auth from './component/Auth';
import SignUp from './component/SignUp';
import User from './component/User';

function App(){
  return (
    <div>
      <Auth>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Auth>
      
    </div>
  );
}

export default App;
