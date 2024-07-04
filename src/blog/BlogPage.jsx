import LatestBlogConponent from "../components/blog/LatestBlogComponent";
import TopBlogComponent from "../components/blog/TopBlogComponent";


const BlogPage = () => {
    return (
        <>
            <div className='h-[600px] relative grid grid-cols-2 justify-center overflow-hidden items-center w-full'>
                <div className='bg-black relative w-full h-full flex pl-[5.7%] pr-[8%] flex-col justify-center'>
                    <div className='flex items-center mb-2 gap-2'>
                        <span className='text-sm text-white'>Bài viết mới</span>
                        <span className='text-sm text-white'>•</span>
                        <span className='text-sm text-[#d2d2d2]'>4 phút đọc</span>
                    </div>
                    <span className='text-4xl font-semibold mb-2 text-white leading-tight hover:underline cursor-pointer'>Nghệ thuật thiết kế, trang trí nội thất nhà cửa</span>
                    <span className='line-clamp-2 font-light text-[#d2d2d2]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  in lacus, luctus tincidunt. Nulla in vel, sit amet. </span> 
                    <button className='bg-white w-fit font-medium text-black px-5 py-2 text-sm flex-shrink-0 rounded-full mt-5'>Đọc thêm</button>
                    <div className='flex items-center gap-3 cursor-pointer absolute py-2 px-2 bottom-[116px] right-10'>
                        <span className='text-sm text-white'>Tiếp theo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>  

                    </div>
                </div>
                <div className="h-full w-full overflow-hidden">
                    <img className="w-full h-full object-cover hover:scale-105 transition-all duration-300" src='/assets/photo-1608402515433-d43f0fc28812.avif' alt=''></img>
                </div>
            </div>
            <div className='w-full flex px-[3%] justify-center'>
                <div className='w-full pt-6 rounded-2xl bg-white -translate-y-24'>
                    <div className='flex items-center px-[2%] justify-between'>
                        <span className='font-semibold text-2xl'>Blog Stuffsus</span>
                        <div className='border flex items-center py-[3px] px-[3px] rounded-full'>
                            <div className='pl-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#121212" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <input type='text' placeholder='Tìm kiếm bài viết' className='text-sm px-2 border-none outline-none w-full'></input>
                            <button className='bg-black text-white px-5 py-2 text-sm flex-shrink-0 rounded-full'>Tìm kiếm</button>
                        </div>
                    </div>
                    <div className='gap-2 py-8'>
                        <TopBlogComponent></TopBlogComponent>
                        <LatestBlogConponent></LatestBlogConponent>
                    </div>
                </div>
            </div>
        </>
    );
};



export default BlogPage;