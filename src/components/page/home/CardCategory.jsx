import React from 'react';

const CardCategory = ({index,item}) => {
    return (
        <div key={index} className='overflow-hidden relative cursor-pointer border rounded-xl py-3 px-6 flex items-center justify-center'>
            
            <div className='w-full -z-10 h-full absolute bg-[#323232]'></div>
            <div className='-z-10 text-center'>
                <img className='w-full h-full object-cover' src={item.image} alt='category' />
                <span className='text-white z-10 font-extrabold text-xl'>{item.name}</span>
            </div>
        </div>
    );
};

export default CardCategory;