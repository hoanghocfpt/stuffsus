import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    // set scroll to top
    window.scrollTo(0, 0);
    const [checked, setChecked] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [messageEmail, setMessageEmail] = useState('');
    const [messagePassword, setMessagePassword] = useState('');
    const [submit, setSubmit] = useState([false, false]);
    const handleValidateEmail = (e) => {
        e.preventDefault();
        const email = e.target.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(email.match(emailPattern)){
            setMessageEmail('');
            setSubmit([true, submit[1]]);
        }else{
            setMessageEmail('Email không đúng định dạng');
            setSubmit([false, submit[1]]);
        }
        console.log(messageEmail);
    }
    const handleValidatePassword = (e) => {
        e.preventDefault();
        const password = e.target.value;
        if(password.length < 6){
            setMessagePassword('Mật khẩu phải lớn hơn 6 ký tự');
            setSubmit([submit[0], false]);
        }else{
            setMessagePassword('');
            setSubmit([submit[0], true]);
        }
    }

    const handleSumitLogin = (e) => {
        e.preventDefault();
        if(submit[0] && submit[1]){
            alert('Đăng nhập thành công');
        }else{
            return;
        }
    }
    
    return (
        <div className='relative py-8'>
            <div className='w-full h-full absolute top-0 left-0 -z-10'>
                <img src="/assets/hero-2.avif" alt="background" className='w-full h-full object-cover' />
            </div>
            <div className='z-10 max-w-[750px] grid grid-cols-2 py-3 px-3 mx-auto bg-white rounded-2xl'>
                <div className='py-8 px-4 text-center'>
                    <span className='font-extrabold text-3xl select-none inline-block mb-4'>Stuffsus</span>
                    <h2 className='text-3xl font-semibold'>Chào mừng bạn trở lại</h2>
                    <p className='font-medium py-2 mb-4'>Đăng nhập để tiếp tục mua sắm</p>
                    <div>
                        <form>
                            <div className={`${messageEmail ? `border-red-200`:`border-gray-200`} flex items-center gap-2 border border-gray-200 rounded-full py-[10px] px-[10px]`}>
                                <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9ZM15.8243 13.6235C17.1533 12.523 18 10.8604 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.8604 6.84668 12.523 8.17572 13.6235C4.98421 14.7459 3 17.2474 3 20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20C5 17.7306 7.3553 15 12 15C16.6447 15 19 17.7306 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 17.2474 19.0158 14.7459 15.8243 13.6235Z" fill="#777"></path> </g></svg>
                                <input onKeyUp={(e)=>handleValidateEmail(e)} className='outline-none border-none text-sm w-full' type='text' placeholder='Email của bạn' />
                            </div>
                            <div className='text-left mb-4'>
                                {messageEmail && (<span className='pl-3 text-red-500 text-sm'>{messageEmail}</span>)}
                            </div>
                            <div className={`${messagePassword ? `border-red-200`:`border-gray-200`} flex items-center gap-2 border border-gray-200 rounded-full py-[10px] px-[10px]`}>
                                <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <input onKeyUp={(e)=>handleValidatePassword(e)} className='outline-none border-none text-sm w-full' type={showPass ? `text` : `password`} placeholder='Mật khẩu của bạn' />
                                <svg onClick={()=> setShowPass(!showPass)} className='select-none w-5 h-5 cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#444" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#777" strokeWidth="1.5"></path> </g></svg>
                            </div>
                            <div className='text-left mb-4'>
                                {messagePassword && (<span className='pl-3 text-red-500 text-sm'>{messagePassword}</span>)}
                            </div>
                            <div>
                                <div className='flex justify-between items-center mt-2'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-5 h-5 overflow-hidden rounded-full flex relative justify-center items-center border border-gray-500'>
                                            <div className={`w-3 h-3 rounded-full absolute ${checked ? `bg-[#444]`:`bg-white`}`}></div>
                                            <input type='checkbox' name='rememberPass' checked={checked} onChange={()=>setChecked(!checked)} className='w-full opacity-0 h-full object-cover' />
                                        </div>
                                        <span className='text-sm'>Nhớ tài khoản</span>
                                    </div>
                                    <span className='text-sm text-[#444] cursor-pointer'>Quên mật khẩu?</span>
                                </div>
                            </div>
                            <button onClick={handleSumitLogin} className='bg-black text-white w-full py-2 mt-4 rounded-full'>Đăng nhập</button>
                        </form>
                        <div className='pt-6 pb-2'>
                            <span className='text-sm'>Hoặc đăng nhập với</span>
                            <div className='cursor-pointer flex mt-3 items-center justify-center py-[3px] border border-gray-200 rounded-full gap-3'>
                                <div className='h-8 justify-center items-center flex'>
                                    <img className='h-6' src='/assets/google.webp' alt='google' />
                                </div>
                                <span className='text-sm font-medium text-[#121212]'>Đăng nhập với Google</span>
                            </div>
                        </div>
                        <div>
                            <span className='text-sm'>Chưa có tài khoản? <Link to='/dang-ky' className='text-blue-600'>Đăng ký ngay</Link></span>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1D1D1D] rounded-xl flex flex-col justify-center items-center px-[20%] text-center overflow-hidden'>
                    <span className='text-3xl font-medium text-white mb-5'>Đăng nhập bằng mã QR</span>
                    <div className='bg-white w-full p-5 rounded-xl'>
                        <img src='/assets/qrcode_116025548_54f1050b389cfffc7b0bd23351d41d0f.png' alt='qr-code' className='w-full h-full object-cover' />
                    </div>
                    <span className='text-white text-sm mt-4'>Sử dụng ứng dụng Stuffsus để quét mã QR</span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;