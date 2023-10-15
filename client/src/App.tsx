
import './App.css'
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginAuth from './pages/users/login/LoginAuth'
import Register from './pages/users/register/Register'
import Login from './pages/users/login/Login'
import ProductOverView from './pages/users/productOverView/ProductOverView'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element = {<HomePage/>}/>
      <Route path='/product-view' element = {<ProductOverView/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/login-auth' element = {<LoginAuth/>}/>
      <Route path='/register' element = {<Register/>}/>
    </Routes>
     
    </>
  )
}

export default App
