import React from 'react';

const CartPage = () => {
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
                        <button className='bg-black text-white px-5 py-2 outline-none text-sm flex-shrink-0 rounded-full'>Xóa</button>
                    </div>
                    <div className='py-3'>
                        <div className='flex justify-between relative items-center px-3 py-3 border rounded-xl'>
                            <div className='absolute cursor-pointer top-3 right-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
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
                                    <img className='w-full h-full object-cover' src="/products/demo.avif" alt="product" />
                                </div>
                                <div className=''>
                                    <span className='font-bold block cursor-pointer text-xs border w-fit px-2 py-1 rounded-full'>Tai nghe</span>
                                    <span className='font-bold'>TWS HeadPhone</span>
                                    <div className='flex items-center gap-3'>
                                        <div>
                                            <span className='text-xs pr-1'>Type:</span>
                                            <span className='text-xs font-semibold'>Wireless</span>
                                        </div>
                                        <div>
                                            <span className='text-xs pr-1'>Color:</span>
                                            <span className='text-xs font-semibold'>Black</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-end mt-8'>
                                <div className='flex flex-col'>
                                    <span className='line-through text-sm text-right text-[#666] leading-none'>500.000 đ</span>
                                    <span className='leading-none mb-3 text-xl font-semibold'>399.000 đ</span>
                                </div>
                                <div className='flex w-fit items-center border py-1 px-2 rounded-full justify-between'>
                                    <div className='cursor-pointer px-2'>
                                        <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                        </svg>
                                    </div>
                                    <div className='w-8 flex justify-center items-center'>
                                        <span className='font-semibold'>1</span>
                                    </div>
                                    <div className='cursor-pointer px-2'>
                                        <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-2 h-fit px-3 py-3 border rounded-xl'>
                    <span className='text-xl font-semibold'>Xem trước đơn hàng</span>
                    <div className='flex items-center justify-between py-2'>
                        <span>Tạm tính:</span>
                        <span className='font-bold text-lg'>399.000 đ</span>
                    </div>
                    <button className='w-full bg-black text-white px-5 py-2 outline-none flex-shrink-0 rounded-full'>Thanh toán ngay (3)</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;