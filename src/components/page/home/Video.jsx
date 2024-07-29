import React from 'react';

const Video = ({data}) => {
    return (
        <div className='group relative flex justify-center items-center cursor-pointer overflow-hidden rounded-xl'>
            <div className='w-full h-full'>
              <img className='w-full h-full object-cover' src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-i-photomode-euttp/ed042804e0914c319d0d7f192e049ba5~tplv-photomode-image.jpeg?lk3s=81f88b70&nonce=16021&refresh_token=990e4bfca4c0ef8727fe9f52526d8f1e&x-expires=1721142000&x-signature=uZiIsyWXpw02R%2BF3Xwy5ZcmI7Z8%3D&shp=81f88b70&shcp=-' alt='tiktok' />
            </div>
            <div className='absolute'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="transparent" className="transition-all duration-300 group-hover:fill-[#fff] w-12 h-12">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='absolute flex gap-1 bottom-3 left-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              <span className='text-white font-medium'>24M</span>
            </div>
        </div>
    );
};

export default Video;