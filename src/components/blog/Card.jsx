
const Card = () => {
    return (
    <>
        <div className='group cursor-pointer'>
            <div className='overflow-hidden mb-3 rounded-2xl h-[400px]'>
                <img className='group-hover:scale-[1.02] transition-all duration-300 w-full h-full object-cover' src='/assets/blog-1.jpg' alt='demo'/>
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
    </>
    )
}


export default Card;