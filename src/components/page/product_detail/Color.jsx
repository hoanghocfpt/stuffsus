import React, { useState } from 'react';

const Color = ({color,color_code,selectedColor, setSelectedColor}) => {
    const handleSelectColor = (item) => {
        setSelectedColor(item);
    }
    return (
        <div className='py-3'>
            <span className='text-[#dbdbdb] font-semibold text-sm'>Màu sắc: {selectedColor}</span>
            <div className='flex items-center gap-4 pt-2'>
                {
                    color && color.map((item,index)=>{
                        return(
                            <div onClick={()=>handleSelectColor(item)} style={{ backgroundColor: color_code[index] }} className={`${item===selectedColor ? `border-blue-400`:`border-transparent`} border-2 cursor-pointer shadow-inner shadow-[#0004] border-transparent py-2 px-3 rounded-full flex-shrink-0 w-10 h-10`}></div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Color;