import React, { useEffect } from 'react'
import Header from '../../../layout/users/Header'
import Footer from '../../../layout/users/Footer'
import "../../../assets/style/product-view.css"
import {useSelector} from "react-redux"

const ProductOverView:React.FC<{}> =  () => {

  const data =  useSelector((state:any) => state.products.getOnePro)
  console.log("data", data);
  
  


  const isLogin = JSON.parse(localStorage.getItem("isLogin")|| "[]")
  const handleAddCart = (id:number) => {
    
    if(!isLogin) {
      console.log("login");
      
    }else {
      console.log("addcart");
      
    }
    
  }
  return (
   <>
   <Header/>
    <div className='product-view_container'>
        <h2 className='product-view_title text-center text-3xl text-slate-800 border-b-2 pb-2'>Chi tiết sản phẩm</h2>
      <div className='product-view_body'>
      <div>
      <img className='product-img' src={data[0].Image} />
      </div>
      <div className='product-infomation'>
        <h3 className='text-2xl font-medium'>{data[0].ProductName}</h3>
        <p className='mb-10'>Mã sp:6BP23W004</p>
        <div className='text-3xl font-medium text-red-600 my-3'>{Number(data[0].Price).toLocaleString("en")} ₫</div>
        <div>
        <p>Màu sắc:</p>
        <div className='flex justify-center border-2'>
          <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-cyan-400 cursor-pointer'></div>
          <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-white cursor-pointer'></div>
          <div className=' m-3 h-10 w-10 rounded-full border-2 border-white shadow-md bg-black cursor-pointer'></div>
        </div>
        <div className='mt-10'>
        <p>Kích cỡ:</p>
        <div className='flex justify-center text-center items-center border-2'>
          <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>S</button>
          <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>M</button>
          <button className=' m-3 h-10 w-10 border-1 border-gray-300 '>L</button>
          <button className=' m-3 h-10 w-10 border-1 border-gray-300'>XL</button>
        </div>
        <div className='mt-10'>
          <button className='bg-gray-700 text-white rounded-sm p-3 font-medium w-full my-2 hover:opacity-70'>Mua ngay</button>
          <button onClick={()=>handleAddCart(data[0].ProductId)} className='bg-red-500 text-white rounded-sm p-3 font-medium w-full my-2 hover:opacity-70'>Thêm vào giỏ hàng</button>
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
