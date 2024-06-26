import React from 'react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
    // set scroll to top
    window.scrollTo(0, 0);
    const listProduct = [
        {
            id: 1,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        },
        {
            id: 2,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        },
        {
            id: 3,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        },
        {
            id: 4,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        },
        {
            id: 5,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        },
        {
            id: 6,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        },
        {
            id: 7,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        },
        {
            id: 8,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        },
        {
            id: 9,
            name: 'Phone holder Skti',
            price: 49.99,
            salePrice: 69.99,
            rating: 5.0,
            totalRating: 120
        }
    ];
    return (
        <>
            <div className='h-[500px] relative flex justify-center overflow-hidden items-center w-full'>
                <div>
                    <img src='/assets/hero-1.jpg' alt=''></img>
                </div>
                <h2 className='absolute bottom-0 font-extrabold text-white text-[200px] drop-shadow-xl'>Cửa hàng</h2>
            </div>
            <div className='w-full flex px-[3%] justify-center'>
                <div className='w-full pt-6 rounded-2xl bg-white -translate-y-24'>
                    <div className='flex items-center px-[2%] justify-between'>
                        <span className='font-semibold text-2xl'>Tất cả những thứ bạn cần</span>
                        <div className='border flex items-center py-[3px] px-[3px] rounded-full'>
                            <div className='pl-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#121212" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <input type='text' placeholder='Tìm kiếm sản phẩm' className='text-sm px-2 border-none outline-none w-full'></input>
                            <button className='bg-black text-white px-5 py-2 text-sm flex-shrink-0 rounded-full'>Tìm kiếm</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-[20%,1fr] gap-2 py-8'>
                        <div className='py-5 pr-4'>
                            <span className='font-medium text-xl'>Danh mục</span>
                            <div className='py-3 flex flex-col gap-2'>
                                <div className='flex items-center px-3 py-2 hover:bg-[#F2F2F2] cursor-pointer rounded-lg justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#555" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                                        </svg>
                                        <span className='text-sm text-[#555] font-medium'>Tất cả</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#555" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className='flex items-center px-3 py-2 hover:bg-[#F2F2F2] cursor-pointer rounded-lg justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#555" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                                        </svg>
                                        <span className='text-sm text-[#555] font-medium'>Tất cả</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#555" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className='font-medium text-xl mb-4 inline-block'>Đang hiển thị 20 sản phẩm</span>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {listProduct.map((item, index) => (
                                    <div className=''>
                                    <div className='w-full h-auto rounded-xl overflow-hidden'>
                                        <img className='h-full w-full object-cover' src='/products/demo.avif' alt=''></img>
                                    </div>
                                    <div className='py-3'>
                                        <Link to={`/san-pham/`+item.id} className='text-xl font-semibold text-[#333]'>Phone holder Skti {item.id}</Link>
                                        <div className='flex items-end justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F19D4E" className="size-6">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                </svg>
                                                <span className='text-sm font-medium text-[#555]'>5.0 (120 đánh giá)</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-2xl font-semibold text-[#333]'>$49.99</span>
                                                <span className='text-sm text-[#555] line-through'>$69.99</span>
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
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;