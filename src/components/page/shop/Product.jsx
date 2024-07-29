import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({index,item}) => {
    const price = item.product_variant[0].price.toLocaleString('vi-VI', {style : 'currency', currency : 'VND'});
    return (
        <div key={index} className=''>
            <Link to={'/san-pham/'+item.slug} className='block w-full bg-[#ebebeb] aspect-[4/3] pb-5 rounded-xl overflow-hidden'>
                <img className='h-full w-full object-contain' src={item.images[1].images[0]} alt='' />
            </Link>
            <div className='py-3'>
                <Link to={'/san-pham/'+item.slug} className='text-xl font-semibold line-clamp-2 text-[#333]'>{item.title} {item.id}</Link>
                <div className='flex items-end justify-between'>
                    <div className='flex items-center gap-2'>
                        <span className='text-2xl font-semibold text-[#333]'>{price}</span>
                        {item.product_variant[0].sale > 0 && <span className='text-sm font-semibold text-[#555] line-through'>{item.product_variant[0].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span> }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;