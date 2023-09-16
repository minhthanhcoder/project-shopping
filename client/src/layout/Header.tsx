import React from 'react'

const Header:React.FC<{}> = () => {
  return (
    <>
     <div className='flex justify-between bg-amber-200 h-12 text-center items-center '>
     <div className='mx-2'>Home</div>
      <div className='bg-zinc-50 rounded-md h-8 flex items-center ' >
        <input className='rounded-md' type="text" />
        <span><i className="px-2 cursor-pointer fa-solid fa-magnifying-glass"></i></span>
      </div>
      <div className='flex justify-between items-center'>
        <div><i className="fa-solid fa-cart-shopping"></i></div>
        <div><i className="fa-solid fa-bell"></i></div>
        <div className='flex justify-center items-center mx-2'>
            <button >Đăng ký</button>
            <button>Đăng nhập</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Header
