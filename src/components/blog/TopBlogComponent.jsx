import React from "react";

const TopBlogComponent = () => {

    return (
        <>
            <div className='py-5 pr-4'>
                <span className='font-medium text-xl'>Bài viết nổi bật</span>
                <div className='py-3 grid grid-cols-4 gap-x-6 gap-y-3'>
                    <div className='col-span-2 row-span-2 group cursor-pointer'>
                        <div className='overflow-hidden mb-3 rounded-2xl h-[400px]'>
                            <img className='group-hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover' src='/assets/blog-1.jpg' alt='demo pictureimg'/>
                        </div>
                        <div>
                            <div>
                                <span className='text-sm text-[#444]'>9 phut doc</span>
                                <span>13.2.2024</span>
                            </div>
                            <span className='text-2xl font-semibold block group-hover:underline'>Bai viet so 2 - Nghệ thuật thiết kế, trang trí nội thất nhà cửa nam 2024</span>
                            <p className='line-clamp-3 text-[#444]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aut ducimus dignissimos adipisci quo voluptate ab officia maxime dolore, molestias enim odit culpa labore neque quidem eveniet repudiandae laboriosam odio? Repellendus optio soluta, reiciendis illo facere eaque vero ad, iusto ullam nesciunt repudiandae excepturi expedita recusandae laboriosam impedit deleniti illum.</p>
                        </div>
                    </div>
                    <div className='group col-span-2 flex gap-3 cursor-pointer'>
                        <div className='overflow-hidden rounded-lg h-[270px] w-[270px] flex-shrink-0'> 
                            <img className='group-hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover' src='/assets/photo-1608402515433-d43f0fc28812.avif' alt='img'/>
                        </div>
                        <div>
                            <div>
                                <span className='text-sm text-[#444]'>9 phut doc</span>
                                <span>13.2.2024</span>
                            </div>
                            <span className='group-hover:underline text-2xl font-semibold block'>Nghệ thuật thiết kế, trang trí nội thất nhà cửa nam 2024</span>
                            <p className='line-clamp-3 text-[#444]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  in lacus, luctus tincidunt. Nulla in vel, sit amet. </p>
                        </div>
                    </div>
                    <div className='group col-span-2 flex gap-3 cursor-pointer'>
                        <div className='overflow-hidden rounded-lg h-[270px] w-[270px] flex-shrink-0'> 
                            <img className='group-hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover' src='/assets/photo-1608402515433-d43f0fc28812.avif' alt='img'/>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <span className='text-sm text-[#444]'>9 phut doc</span>
                                <span>13.2.2024</span>
                            </div>
                            <span className='group-hover:underline text-2xl font-semibold block'>Nghệ thuật thiết kế, trang trí nội thất nhà cửa nam 2024</span>
                            <p className='line-clamp-3 text-[#444]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  in lacus, luctus tincidunt. Nulla in vel, sit amet. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBlogComponent;