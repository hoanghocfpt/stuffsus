import React from 'react';
import Slider from '../components/page/home/Slider';
import Product from '../components/page/home/Product';
import Video from '../components/page/home/Video';

const HomePage = () => {
  // set scroll to top
  // window.scrollTo(0, 0);
  const listProduct = [
    {
        id: 1,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    },
    {
        id: 2,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    },
    {
        id: 3,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    },
    {
        id: 4,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    },
    {
        id: 5,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    },
    {
        id: 6,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    },
    {
        id: 7,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    },
    {
        id: 8,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    },
    {
        id: 9,
        name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
        price: 500000,
        salePrice: 489000,
        rating: 5.0,
        img: '/products/demo.jpg',
        totalRating: 120
    }
  ];
  return (
    <div className=''>
      <Slider />
      <div className='px-[3%] mt-4 py-6'>
        <h2 className='font-semibold text-3xl mb-3'>Sản Phẩm Nổi Bật</h2>
        <div>
          <div className='flex items-center gap-5 overflow-hidden'>
            {listProduct.map((item, index) => (
              <Product key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className='px-[3%]'>
        <h2 className='font-semibold text-3xl mb-3'>Danh mục nổi bật</h2>
        <div className='grid grid-cols-4 gap-3'>
          <div className='overflow-hidden h-[150px] relative cursor-pointer border rounded-lg py-3 px-6 flex items-center justify-center'>
            <span className='text-white z-10 font-extrabold text-xl'>Chăn, Ga, Gối & Nệm</span>
            <div className='w-full z-0 h-full absolute bg-[#00000037]'></div>
            <div className='-z-10 absolute w-full h-full top-0 left-0'>
              <img className='w-full h-full object-cover' src='/categories/category-demo.jpg' alt='bed' />
            </div>
          </div>
          <div className='overflow-hidden h-[150px] relative cursor-pointer border rounded-lg py-3 px-6 flex items-center justify-center'>
            <span className='text-white z-10 font-extrabold text-xl'>Chăn, Ga, Gối & Nệm</span>
            <div className='w-full z-0 h-full absolute bg-[#00000037]'></div>
            <div className='-z-10 absolute w-full h-full top-0 left-0'>
              <img className='w-full h-full object-cover' src='/categories/category-demo.jpg' alt='bed' />
            </div>
          </div>
          <div className='overflow-hidden h-[150px] relative cursor-pointer border rounded-lg py-3 px-6 flex items-center justify-center'>
            <span className='text-white z-10 font-extrabold text-xl'>Chăn, Ga, Gối & Nệm</span>
            <div className='w-full z-0 h-full absolute bg-[#00000037]'></div>
            <div className='-z-10 absolute w-full h-full top-0 left-0'>
              <img className='w-full h-full object-cover' src='/categories/category-demo.jpg' alt='bed' />
            </div>
          </div>
          <div className='overflow-hidden h-[150px] relative cursor-pointer border rounded-lg py-3 px-6 flex items-center justify-center'>
            <span className='text-white z-10 font-extrabold text-xl'>Chăn, Ga, Gối & Nệm</span>
            <div className='w-full z-0 h-full absolute bg-[#00000037]'></div>
            <div className='-z-10 absolute w-full h-full top-0 left-0'>
              <img className='w-full h-full object-cover' src='/categories/category-demo.jpg' alt='bed' />
            </div>
          </div>
          <div className='overflow-hidden h-[150px] relative cursor-pointer border rounded-lg py-3 px-6 flex items-center justify-center'>
            <span className='text-white z-10 font-extrabold text-xl'>Chăn, Ga, Gối & Nệm</span>
            <div className='w-full z-0 h-full absolute bg-[#00000037]'></div>
            <div className='-z-10 absolute w-full h-full top-0 left-0'>
              <img className='w-full h-full object-cover' src='/categories/category-demo.jpg' alt='bed' />
            </div>
          </div>
        </div>
      </div>
      <div className='px-[3%]'>
        <h2 className='font-semibold text-center text-3xl mb-3'>Trending On TikTok</h2>
        <div className='grid gap-4 grid-cols-5'>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />

        </div>
      </div>
    </div>
  );
};

export default HomePage;