import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({index,item}) => {
    return (
        <div key={index} className=''>
            <div className='w-full aspect-square rounded-xl overflow-hidden'>
                <img className='h-full w-full object-cover' src={item.img} alt='' />
            </div>
            <div className='py-3'>
                <Link to={`/san-pham/`+item.id} className='text-xl font-semibold line-clamp-2 text-[#333]'>{item.name} {item.id}</Link>
                <div className='flex items-end justify-between'>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F19D4E" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <span className='text-sm font-medium text-[#555]'>5.0 (120 đánh giá)</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-2xl font-semibold text-[#333]'>{item.salePrice}đ</span>
                        <span className='text-sm text-[#555] line-through'>{item.price}đ</span>
                    </div>
                </div>
                {/* thêm vào giỏ hàng (outline) và mua ngay (fill) */}
                <div className='flex gap-3 justify-center pt-3'>
                    <button className='w-1/2 border-[1.7px] border-[#777] text-[#555] px-5 font-medium flex items-center justify-center gap-2 py-2 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" className="size-6">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                        <span className='text-[#555]'>Thêm</span>
                    </button>
                    <button className='w-1/2 border-[1.7px] border-[#121212] bg-[#121212] text-white px-5 py-2 rounded-full inline-block flex-shrink-0'>Mua ngay</button>
                </div>
                
            </div>
        </div>
    );
};

export default Product;