import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useMemo } from 'react';
import { clearCart, removeFromCart, updateCartItemQuantity } from '../redux/slices/cartslice';
const CartPage = () => {
    
    const cartItems = useSelector((state) => state.cart?.items) || [];
    const cartCount = cartItems.reduce((count, item) => count + Number(item.quantity), 0);
    console.log(cartItems);
    const dispatch = useDispatch();
    const total = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0), [cartItems]);

    // color
    
    return (
        <div className='px-[3%] pt-4'>
            <div className='mb-3 flex items-center gap-2'>
                <span>Trang chủ</span>
                <span>/</span>
                <span className='font-semibold'>Giỏ hàng</span>
            </div>
            <h2 className='text-3xl font-semibold'>Giỏ hàng</h2>
            <div className='grid grid-cols-[1fr,22%] gap-[2%]'>
                <div className='py-2'>
                    <div className='flex justify-between items-center px-3 py-3 border rounded-xl'>
                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 flex-shrink-0 bg-black outline-none overflow-hidden rounded-md flex relative justify-center items-center border border-gray-500'>
                                <svg className='w-3 h-3 rounded-full absolute' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                <input type='checkbox' className='w-full opacity-0 z-10 h-full object-cover'/>
                            </div>
                            <span className='text-sm'>Chọn tất cả</span>
                        </div>
                        <button onClick={()=>dispatch(clearCart())} className='bg-black text-white px-5 py-2 outline-none text-sm flex-shrink-0 rounded-full'>Xóa giỏ hàng</button>
                    </div>
                    <div className='py-3'>
                        <div className='border rounded-xl'>
                            {cartItems.map((item) => (
                                <div key={item._id} className='flex justify-between relative items-center px-3 py-3 w-full'>
                                    <div onClick={() => dispatch(removeFromCart({ 
                                            _id: item._id, 
                                            selectedSize: item.selectedSize, 
                                            selectedColor: item.selectedColor 
                                        }))} className='absolute cursor-pointer top-3 right-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-5 h-5 flex-shrink-0 bg-transparent outline-none overflow-hidden rounded-md flex relative justify-center items-center border border-gray-500'>
                                            <svg className='w-3 h-3 rounded-full absolute' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                            <input type='checkbox' className='w-full opacity-0 z-10 h-full object-cover'/>
                                        </div>
                                        <div className='h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl'>
                                            <img className='w-full h-full object-cover' src={item.images[0].images[0]} alt="product" />
                                        </div>
                                        <div className=''>
                                            <span className='font-bold block cursor-pointer text-xs border w-fit px-2 py-1 rounded-full'>Tai nghe</span>
                                            <span className='font-bold'>{item.title}</span>
                                            <div className='flex items-center gap-3'>
                                                <div>
                                                    <span className='text-xs pr-1'>Dung lượng:</span>
                                                    <span className='text-xs font-semibold'>{item.selectedSize}</span>
                                                </div>
                                                <div>
                                                    <span className='text-xs pr-1'>Color:</span>
                                                    <span className='text-xs font-semibold'>{item.selectedColor}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end mt-8'>
                                        <div className='flex flex-col'>
                                            <span className='mb-2 text-sm text-right text-[#666] leading-none'>{item.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                            <span className='leading-none mb-3 text-xl font-semibold'>{(item.price*item.quantity).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                        </div>
                                        <div className='flex w-fit items-center border py-1 px-2 rounded-full justify-between'>
                                            <div onClick={()=>{if(item.quantity < 2){return} dispatch(updateCartItemQuantity({ _id: item._id,selectedSize:item.selectedSize,selectedColor:item.selectedColor, quantity: item.quantity-1 }))}}  className='cursor-pointer px-2'>
                                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                </svg>
                                            </div>
                                            <div className='w-8 flex justify-center items-center'>
                                                <span className='font-semibold'>{item.quantity}</span>
                                            </div>
                                            <div onClick={() => dispatch(updateCartItemQuantity({ 
                                                _id: item._id, 
                                                selectedSize: item.selectedSize, 
                                                selectedColor: item.selectedColor, 
                                                quantity: item.quantity + 1 
                                            }))}
                                            className='cursor-pointer px-2'>
                                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        
                    </div>
                </div>
                <div className='mt-2 h-fit px-3 py-3 border rounded-xl'>
                    <span className='text-xl font-semibold'>Xem trước đơn hàng</span>
                    <div className='flex items-center justify-between py-2'>
                        <span>Tạm tính:</span>
                        <span className='font-bold text-lg'>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <button className='w-full bg-black text-white px-5 py-2 outline-none flex-shrink-0 rounded-full'>Thanh toán ngay ({cartCount})</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;