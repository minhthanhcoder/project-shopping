import React from 'react'
import "../../../assets/style/login-auth.css"
import "../../../assets/style/register.css"

import { Link } from 'react-router-dom'


const Register:React.FC<{}> = () => {
    return (
      <>
      <div className="form-main flex justify-center items-center">
        <div className='form-container_register h-6'>
            <div className="form_title">Đăng Ký</div> 
            <form>
                <div className='input_items'>
                <input className='input_style' type="text" name='email' placeholder='Nhập Email hoặc Số điện thoại'/>
                </div>

                <div className='input_items'>
                <input className='input_style' placeholder='Nhập mật khẩu' type="password" name='password' />
                </div>

                <div className='input_items'>
                <input className='input_style' placeholder='Nhập mật lại khẩu' type="password" name='password' />
                </div>

                <div className='form_btn'>
                  <Link to={"/"}> <button className='form_btn-item'>Quay lại</button></Link>
                   <button className='form_btn-item' type='submit'>Xác nhận</button>
                </div>
                <div className='form_change'>Bạn đã có tài khoản, <Link to={"/login-auth"}>
                    <button className='form_change-btn'>Đăng nhập ngay</button>
                    </Link> </div>
            </form>
        </div>
      </div>
    </>
      )
}

export default Register
