import React, { useEffect, useState } from 'react';
import Product from '../components/page/shop/Product';
import axios from 'axios';

const ShopPage = () => {
    // set scroll to top
    window.scrollTo(0, 0);
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setListProduct(response.data);
                console.log(response);
            } catch (error) {
                console.log('Failed to fetch data', error);
            }
        };
        fetchData();
    }, []);
    console.log(listProduct);
    return (
        <>
            <div className='h-[500px] relative flex justify-center overflow-hidden items-center w-full'>
                <div>
                    <img src='/assets/hero-1.jpg' alt=''/>
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
                                {listProduct.map((item, index) => <Product key={index} item={item} index={index} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;