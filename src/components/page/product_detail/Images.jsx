import React, { useEffect, useState } from 'react';

const Images = ({images}) => {
    console.log(images);
    const [mainImage, setMainImage] = useState(images.images[0]);
    useEffect(() => {
        setMainImage(images.images[0]);
    }, [images]);
    return (
        <div className='p-5 w-full grid grid-cols-[100px,1fr] gap-4'>
            <div className='w-full overflow-hidden flex flex-col gap-2'>
                {images.images.map((image, index) => (
                    <div onClick={()=>setMainImage(image)} className={`${index === 0 && `bg-white`} aspect-square flex-shrink-0 cursor-pointer h-24 overflow-hidden rounded-md`}>
                        <img className='w-full h-full object-cover' src={image} alt="product" />
                    </div>
                ))}
            </div>
            <div className='flex-shrink-0 w-full overflow-hidden aspect-square rounded-xl'>
                <img className='w-full h-full object-cover' src={mainImage} alt="product" />
            </div>
        </div>
    );
};

export default Images;