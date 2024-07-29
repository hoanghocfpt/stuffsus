import React from 'react';
import Slider from '../components/page/home/Slider';
import Product from '../components/page/home/Product';
import Video from '../components/page/home/Video';
import CategoriesPopular from '../components/page/home/CategoriesPopular';
import ProductPolular from '../components/page/home/ProductPolular';

const HomePage = () => {
  // set scroll to top
  window.scrollTo(0, 0);
  return (
    <div className=''>
      <Slider />
      <ProductPolular />
      <CategoriesPopular />
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