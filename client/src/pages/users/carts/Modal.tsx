import React from 'react'

const Modal:React.FC<{visible:boolean}> = ({visible}) => {
  const handleCloseModal = () => {
    
  }
  
  if(!visible) {
    console.log("vào false");
    return null
  }
    console.log("vào true");
    return <div className='fixed top-0 right-0 left-0 bottom-0 bg-slate-500 backdrop-blur-sm bg-opacity-30 z-10 flex justify-end items-start '>
        <div className='modal-container h-full 2xl:1/4 xl:w-1/3 md:w-1/2 sm:w-1/2 bg-white '>
          <div className='relative flex justify-center items-center '>
            {/* close btn */}
          <div className='absolute top-1 left-0 cursor-pointer text-lg p-3  text-white rounded-full hover:opacity-60' onClick={handleCloseModal} >
            <i className="fa-solid fa-arrow-right"></i>
            </div>
          {/* header */}
          <div className='text-center font-black bg-slate-400 w-full text-2xl p-3'>Giỏ Hàng</div>
          </div>
          {/* content */}
          <div className='overflow-y-auto h-3/4 p-3'>
            {/* product item */}
          <div className='product_item h-25 w-full border-b-2 flex justify-start text-center relative'>   
            <img className='h-full w-auto' src="https://canifa.com/img/210/300/resize/1/t/1th22w002-cr125-1-thumb.webp" alt="" />
            <p className='absolute -top-1 left-1 cursor-pointer p-1'>x</p>
            <div className='m-3'>
              <h2 className="product_name font-medium p-1">Áo sơ mi bé gái cotton dài tay họa tiết kẻ</h2>
              <div className='flex justify-between m-2'>
                <p>Màu: Đỏ</p>
                <p>Size: 130</p>
              </div>
              <div className='flex justify-between items-center m-2'>
                <p className="price font-medium">304.000 đ</p>
               <div>
                  <button className='w-8 border'>-</button>
                  <input className='text-center w-8 border'  defaultValue={1} type="text" />
                  <button className='w-8 border'>+</button>
                </div>
              </div>
            </div>
          </div>
  
          <div className='product_item h-25 w-full  border-b-2 flex justify-start text-center relative'>   
            <img className='h-full w-auto' src="https://canifa.com/img/210/300/resize/1/t/1th22w002-cr125-1-thumb.webp" alt="" />
            <p className='absolute -top-1 left-1 cursor-pointer p-1'>x</p>
            <div className='m-3'>
              <h2 className="product_name font-medium p-1">Áo sơ mi bé gái cotton dài tay họa tiết kẻ</h2>
              <div className='flex justify-between m-2'>
                <p>Màu: Đỏ</p>
                <p>Size: 130</p>
              </div>
              <div className='flex justify-between items-center m-2'>
                <p className="price font-medium">304.000 đ</p>
               <div>
                  <button className='w-8 border'>-</button>
                  <input className='text-center w-8 border'  defaultValue={1} type="text" />
                  <button className='w-8 border'>+</button>
                </div>
              </div>
            </div>
          </div>
  
          <div className='product_item h-25 w-full  border-b-2 flex justify-start text-center relative'>   
            <img className='h-full w-auto' src="https://canifa.com/img/210/300/resize/1/t/1th22w002-cr125-1-thumb.webp" alt="" />
            <p className='absolute -top-1 left-1 cursor-pointer p-1'>x</p>
            <div className='m-3'>
              <h2 className="product_name font-medium p-1">Áo sơ mi bé gái cotton dài tay họa tiết kẻ</h2>
              <div className='flex justify-between m-2'>
                <p>Màu: Đỏ</p>
                <p>Size: 130</p>
              </div>
              <div className='flex justify-between items-center m-2'>
                <p className="price font-medium">304.000 đ</p>
               <div>
                  <button className='w-8 border'>-</button>
                  <input className='text-center w-8 border'  defaultValue={1} type="text" />
                  <button className='w-8 border'>+</button>
                </div>
              </div>
            </div>
          </div>
  
          <div className='product_item h-25 w-full  border-b-2 flex justify-start text-center relative'>   
            <img className='h-full w-auto' src="https://canifa.com/img/210/300/resize/1/t/1th22w002-cr125-1-thumb.webp" alt="" />
            <p className='absolute -top-1 left-1 cursor-pointer p-1'>x</p>
            <div className='m-3'>
              <h2 className="product_name font-medium p-1">Áo sơ mi bé gái cotton dài tay họa tiết kẻ</h2>
              <div className='flex justify-between m-2'>
                <p>Màu: Đỏ</p>
                <p>Size: 130</p>
              </div>
              <div className='flex justify-between items-center m-2'>
                <p className="price font-medium">304.000 đ</p>
               <div>
                  <button className='w-8 border'>-</button>
                  <input className='text-center w-8 border'  defaultValue={1} type="text" />
                  <button className='w-8 border'>+</button>
                </div>
              </div>
            </div>
          </div>
  
          <div className='product_item h-25 w-full  border-b-2 flex justify-start text-center relative'>   
            <img className='h-full w-auto' src="https://canifa.com/img/210/300/resize/1/t/1th22w002-cr125-1-thumb.webp" alt="" />
            <p className='absolute -top-1 left-1 cursor-pointer p-1'>x</p>
            <div className='m-3'>
              <h2 className="product_name font-medium p-1">Áo sơ mi bé gái cotton dài tay họa tiết kẻ</h2>
              <div className='flex justify-between m-2'>
                <p>Màu: Đỏ</p>
                <p>Size: 130</p>
              </div>
              <div className='flex justify-between items-center m-2'>
                <p className="price font-medium">304.000 đ</p>
               <div>
                  <button className='w-8 border'>-</button>
                  <input className='text-center w-8 border'  defaultValue={1} type="text" />
                  <button className='w-8 border'>+</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* footer */}
          <div className='fixed bottom-0 p-3 h-30 2xl:1/4 xl:w-1/3 md:w-1/2 sm:w-1/2 bg-slate-200 '>
            <div className='flex justify-evenly text-slate-900 p-2 font-medium'><p>Tổng cộng :</p> <p>5.400.000 vnđ</p></div>
            <div className='flex justify-evenly  text-3xl bg-red-600 font-extrabold text-white p-2 cursor-pointer hover:opacity-70 rounded-md'>Thanh Toán</div>
            </div>
        </div>
      </div>
  }
export default Modal
