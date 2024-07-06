import Card from "./Card";

const LatestBlogConponent = () => {
    return (
        <>
            <div>
                <span className='font-medium text-xl'>Bài viết mới nhất</span>
                <div className='py-3 grid grid-cols-3 gap-x-6 gap-y-10'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='text-center mt-4'>
                    <button className='bg-black text-white px-5 py-2 text-sm flex-shrink-0 rounded-full'>Xem thêm</button>
                </div>
            </div>
        </>
    )
}

export default LatestBlogConponent;