import React, { useState } from 'react';
import Description from './Description';
import Review from './Review';

const TabProduct = () => {
    const [tab, setTab] = useState(true);
    return (
        <div className='max-w-[800px] w-full mx-auto'>
            <div className='flex items-center pt-4 justify-center'>
                <div onClick={()=> setTab(true)} className={`px-5 cursor-pointer ${tab ? `border-gray-900`:`border-transparent`} border-b-2 py-2`}>
                    <span className='font-medium text-[#121212]'>Mô tả</span>
                </div>
                <div onClick={()=> setTab(false)} className={`px-5 cursor-pointer ${!tab ? `border-gray-900`:`border-transparent`} border-b-2 py-2`}>
                    <span className='font-medium text-[#444]'>Đánh giá</span>
                </div>
            </div>
            <div className='border-t py-4'>
                { tab && tab ? <Description /> : <Review /> }
            </div>
        </div>
    );
};

export default TabProduct;