import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const data = [
        { id: 1, image: '/assets/banner-1.webp', url: '/san-pham/1' },
        { id: 2, image: 'https://file.hstatic.net/1000069970/collection/thiet_ke_chua_co_ten__11__3e6d67fc74c04b97a66b41d6266fb83c_large.png', url: '/san-pham/1' },
        { id: 3, image: 'https://product.hstatic.net/1000069970/product/8_22e19a4908494b2893e899bb18b43bb1_large.jpg', url: '/san-pham/1' },
    ]
    const handleNext = () => {
        setActiveIndex(activeIndex + 1)
        if(activeIndex === data.length - 1){
            setActiveIndex(0)
            return;
        }
        console.log(activeIndex);
    }
    const handlePrev = () => {
        setActiveIndex(activeIndex - 1)
        if(activeIndex === 0){
            setActiveIndex(data.length - 1)
            return;
        }
        console.log(activeIndex);
    }
    // handleNext each 3s
    useEffect(()=>{
        setInterval(handleNext,3000)
    })
    return (
        <>
            <div className='px-[3%] pt-3 relative flex gap-0 w-full overflow-hidden'>
                <div className='absolute rounded-3xl overflow-hidden w-full top-0 left-0 px-[3%] pt-3 flex items-center h-full justify-between'>
                    <button className='h-full pb-3 rounded-3xl z-10 group w-[10%] bg-gradient-to-l from-[#fff0] to-[#0000] hover:to-[#1e1e1e7b]' onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff2" className="group-hover:stroke-white mx-auto w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                    <button className='h-full pb-3 rounded-3xl z-10 group w-[10%] bg-gradient-to-r from-[#fff0] to-[#0000] hover:to-[#1e1e1e7b]' onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff2" className="group-hover:stroke-white mx-auto w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                <div className='bg-[#24144e] flex gap-0 w-full items-center rounded-3xl overflow-hidden'>
                    {data.map((item, index) => (
                        <Link to={item.url} key={index} className={`${activeIndex === index ? `opacity-1`:`opacity-0`} transition-all duration-700 flex-shrink-0 overflow-hidden flex items-center justify-center w-full h-[450px]`} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            <img src={item.image} alt='banner' className='w-full h-full object-cover' />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Slider;