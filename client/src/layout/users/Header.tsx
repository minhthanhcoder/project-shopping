import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import "../../assets/style/header.css"
import "../../assets/style/modal.css"
import Modal from '../../pages/users/carts/Modal'

const Header:React.FC<{}> = () => {
  const data = localStorage.getItem("isLogin")
  const isLogin = data?  JSON.parse(data) : null
  console.log(isLogin);
  const navigate = useNavigate()
  const handleLogOut = () => {
   localStorage.removeItem("isLogin")
   navigate("/")
  }
   
  const [modal, setModal] = useState(false)
  
  const handleOpenModal = ()=> {
    setModal(true)
  }

  const handleCloseModal = ()=> {
    setModal(false)
  }
  return (
    <>
     <div className=' flex justify-between bg-white shadow h-14 text-center items-center fixed top-0 left-0 right-0 z-10'>
     <Link to={"/"}>
     <div className='cursor-pointer'><img src="https://canifa.com/assets/images/logo.svg" alt="logo" /></div>
     </Link>
      <div className='bg-zinc-50 rounded-md h-8 flex items-center border border-red-500 ' >
        <input className='outline-none  rounded-md px-2' type="text" />
        <span><i className="text-red-700 px-2 cursor-pointer fa-solid fa-magnifying-glass"></i></span>
      </div>
      <div className='flex justify-between items-center'>
        <div onClick={()=>handleOpenModal()} className='relative'><i className="bg-transparent text-red-700 font-semibold cursor-pointer hover:opacity-50 py-2 px-4 border border-red-500 hover:border-transparent rounded fa-solid fa-cart-shopping mx-2 "></i>
        <div className='rounded-full bg-red-700 w-6 text-white absolute -top-2 -left-1'>1</div>
        </div>
        
        <div className='relative'><i className="bg-transparent text-red-700 font-semibold cursor-pointer hover:opacity-50 py-2 px-4 border border-red-500 hover:border-transparent rounded fa-solid fa-bell mx-2"></i>
        <div className='rounded-full bg-red-700 w-6 -top-2 -left-1 text-white absolute'>0</div>
        </div>
      {isLogin === null ? <>
        <div className='flex justify-center items-center mx-2'>
            <Link to={"/login"}>
            <button 
            className='bg-transparent text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded mx-2'>
              Đăng nhập</button>
            </Link>
        </div>
      </> : <>
      <div>
      <div className='user-profile'>
          <img 
          className='h-8 w-8 mr-3 cursor-pointer hover:opacity-50 rounded-full' 
          src=  {isLogin.image? isLogin.image : "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"}  alt="profile" />
        <ul className='user-profile-list shadow-md'>
          <li className='bg-transparent hover:opacity-50 text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded'>Thông tin cá nhân</li>
          <li className='bg-transparent hover:opacity-50 text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded'>Tài khoản thanh toán</li>
          <li className='bg-transparent hover:opacity-50 text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded'>Đổi mật khẩu</li>
          <li onClick={()=>handleLogOut()} className='bg-transparent hover:opacity-50 text-red-700 font-semibold  py-2 px-4 border border-red-500 hover:border-transparent rounded'>Đăng xuất</li>
        </ul> 
        </div>
      </div>
      </>}
      </div>
     </div>
     <Modal visible = {modal}/>
    </>
  )
}
export default Header
