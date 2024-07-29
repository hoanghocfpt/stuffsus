import React, { useState } from 'react';

const Size = ({size,selectedSize,setSelectedSize}) => {
    // const [selectSize, setSelectSize] = useState(selectedSize);
    const handleSelectSize = (e) => {
        setSelectedSize(e.target.textContent);
    }
    return (
        <div className='py-3'>
            <span className='text-[#dbdbdb] font-semibold text-sm'>Dung lượng:</span>
            <div className='flex items-center gap-4 pt-2'>
                {/* <div className='bg-[#1c1c1d] cursor-pointer border border-gray-500 py-2 px-3 rounded-lg'>
                    <span className='text-[#dbdbdb] text-sm leading-none'>256GB</span>
                </div> */}
                {size && size.map((item, index) => (
                    <div onClick={handleSelectSize} className={`bg-[#2f3033] cursor-pointer border ${selectedSize === item ? `border-white`:`border-transparent`} py-2 px-3 rounded-lg`}>
                        <span className='text-[#dbdbdb] text-sm leading-none'>{item}</span>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Size;