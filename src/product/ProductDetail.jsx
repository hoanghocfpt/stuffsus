import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    // set scroll to top
    window.scrollTo(0, 0);
    const slug = useParams().slug;
    return (
        <div className='px-[3%]'>
            <div className='py-5'>
                <span>Cửa hàng</span>
                <span> / </span>
                <span>{slug}</span>
            </div>
            <div className='grid grid-cols-[40%,1fr] gap-8'>
                <div className='pb-12'>
                    <div className='overflow-hidden rounded-xl'>
                        <img className='w-full h-full object-cover' src="https://via.placeholder.com/500" alt="product" />
                    </div>
                    <div className='flex items-center gap-3 py-2'>
                        <div className='overflow-hidden rounded-md'>
                            <img src="https://via.placeholder.com/100" alt="product" />
                        </div>
                        <div className='overflow-hidden rounded-md'>
                            <img src="https://via.placeholder.com/100" alt="product" />
                        </div>
                        <div className='overflow-hidden rounded-md'>
                            <img src="https://via.placeholder.com/100" alt="product" />
                        </div>
                        <div className='overflow-hidden rounded-md'>
                            <img src="https://via.placeholder.com/100" alt="product" />
                        </div>
                    </div>
                </div>
                <div className='py-3'>
                    <h2 className='uppercase text-4xl font-semibold'>headsound xiaomi black</h2>
                    <div className='py-4 flex items-center gap-5'>
                        <div className='flex items-center gap-2'>
                            <span className='text-[#555]'>Thương hiệu:</span>
                            <span className='font-semibold'>Xiaomi</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA825" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                            <span className='font-semibold text-[#555] flex items-center'>4.9 (<p className='font-normal'>150 đánh giá</p>)</span>
                        </div>
                        
                    </div>
                    <div className='flex items-end gap-4'>
                        <span className='font-bold text-3xl'>500.000 đ</span>
                        <span className='line-through text-xl'>600.000 đ</span>
                    </div>
                    <div className='py-3'>
                        <span className='text-xl font-medium'>Màu sắc</span>
                        <div className='flex items-center gap-4 pt-2'>
                            <div className='overflow-hidden rounded-md cursor-pointer outline outline-gray-600'>
                                <img src="https://via.placeholder.com/70" alt="color" />
                            </div>
                            <div className='overflow-hidden rounded-md cursor-pointer'>
                                <img src="https://via.placeholder.com/70" alt="color" />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center pt-4'>
                        <div className='px-5 cursor-pointer border-b-2 border-gray-900 py-2'>
                            <span className='font-medium text-[#121212]'>Mô tả</span>
                        </div>
                        <div className='px-5 cursor-pointer py-2'>
                            <span className='font-medium text-[#444]'>Đánh giá</span>
                        </div>
                    </div>
                    <div className='border-t py-4'>
                        lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;