
import './App.css'
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginAuth from './pages/users/login/LoginAuth'
import Register from './pages/users/register/Register'
import Login from './pages/users/login/Login'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element = {<HomePage/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/login-auth' element = {<LoginAuth/>}/>
      <Route path='/register' element = {<Register/>}/>
    </Routes>
     
    </>
  )
}

export default App
