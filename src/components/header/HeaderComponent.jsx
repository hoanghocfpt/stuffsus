import React, { useState } from 'react';
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import './HeaderComponent.css';
import { useSelector } from 'react-redux';
const HeaderComponent = () => {
    // gio hang
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((count, item) => count + Number(item.quantity), 0);

    const path = useLocation().pathname;
    const isProductDetail = path.includes('san-pham');
    console.log(path,isProductDetail);
    return (
        <div className={`flex py-4 sticky top-0 z-50 ${isProductDetail ? 'bg-[#101010]' :'bg-[#fff]'} shadow-md items-center justify-between px-[3%]`}>
            <div className={`font-black text-xl ${isProductDetail ? 'text-[#fff]' :'text-gray-500'}`}>Stuffsus</div>
            <div className='flex justify-center gap-4'>
                <NavLink className={`font-medium ${isProductDetail ? 'text-[#fff]' :'text-gray-500'}`} to="/">Trang chủ</NavLink>
                <NavLink className={`font-medium ${isProductDetail ? 'text-[#fff]' :'text-gray-500'}`} to="/cua-hang">Cửa hàng</NavLink>
                <NavLink className={`font-medium ${isProductDetail ? 'text-[#fff]' :'text-gray-500'}`} to="/blog">Blog</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <div className={`cursor-pointer ${isProductDetail ? 'bg-[#5E5E60] border-[#5E5E60]' :'bg-[#fff] border-gray-400'} hover:border-gray-800 transition-all duration-200 w-10 h-10 flex justify-center items-center border rounded-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className={`w-5 h-5 ${isProductDetail ? 'stroke-[#fff]' :'stroke-[#121212]'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <NavLink to='/gio-hang' className={`relative cursor-pointer ${isProductDetail ? 'bg-[#5E5E60] border-[#5E5E60]' :'bg-[#fff] border-gray-400'} hover:border-gray-800 transition-all duration-200 w-10 h-10 flex justify-center items-center border rounded-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className={`w-5 h-5 ${isProductDetail ? 'stroke-[#fff]' :'stroke-[#121212]'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span className='absolute -top-2 -right-1 text-xs text-white px-[2px] py-[2px] w-4 h-4 flex justify-center items-center bg-red-600 rounded-full'>{cartCount}</span>
                </NavLink>
                <Link to="/dang-nhap" className={`${isProductDetail ? 'bg-white text-black' :'bg-black text-white'} font-medium px-5 py-2 rounded-full`}>Đăng nhập</Link>
            </div>
        </div>
    );
};

export default HeaderComponent;