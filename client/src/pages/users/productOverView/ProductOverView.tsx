import React from 'react'
import Header from '../../../layout/users/Header'
import Footer from '../../../layout/users/Footer'
import "../../../assets/style/product-view.css"

const ProductOverView:React.FC<{}> = () => {
  return (
   <>
   <Header/>
    <div className='product-view_container'>
        <h2 className='product-view_title text-center text-3xl text-slate-800'>Chi tiết sản phẩm</h2>
      <div className='product-view_body'>
      <div>
      <img className='product-img' src='https://canifa.com/img/1000/1500/resize/6/b/6bp23w004-sp234-2-thumb.webp'  />
      </div>
      <div className='product-infomation'>
        <h3 className='text-xl'>Quần nỉ nữ basic dáng jogger</h3>
        <p>Mã sp:6BP23W004</p>
        <div className='text-xl font-medium text-red-600 my-3'>299.000 ₫</div>
        <div>
        <p>Màu sắc:</p>
        <div className='flex justify-center border-2'>
          <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-cyan-400 cursor-pointer'></div>
          <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-white cursor-pointer'></div>
          <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-black cursor-pointer'></div>
        </div>
        <div>
        <p>Kích cỡ:</p>
        <div className='flex justify-center text-center items-center border-2'>
          <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>S</button>
          <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>M</button>
          <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>L</button>
          <button className=' m-3 h-10 w-10 border-1 border-gray-300'>XL</button>
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default ProductOverView
