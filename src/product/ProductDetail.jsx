import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    // set scroll to top
    window.scrollTo(0, 0);
    const slug = useParams().slug;
    return (
        <div className='px-[3%]'>
            <div className='py-5'>
                <Link to={'/cua-hang'}>Cửa hàng</Link>
                <span> / </span>
                <span>{slug}</span>
            </div>
            <div className='grid grid-cols-[40%,1fr] gap-8'>
                <div className='pb-12'>
                    <div className='overflow-hidden  aspect-square rounded-xl'>
                        <img className='w-full h-full object-cover' src="/products/demo.jpg" alt="product" />
                    </div>
                    <div className='flex mt-4 items-center gap-3 py-2'>
                        <div className='aspect-square flex-shrink-0 cursor-pointer h-24 overflow-hidden rounded-md'>
                            <img className='w-full h-full object-cover' src="/products/demo.jpg" alt="product" />
                        </div>
                        <div className='aspect-square flex-shrink-0 cursor-pointer h-24 overflow-hidden rounded-md'>
                            <img className='w-full h-full object-cover' src="/products/demo.jpg" alt="product" />
                        </div>
                        <div className='aspect-square flex-shrink-0 cursor-pointer h-24 overflow-hidden rounded-md'>
                            <img className='w-full h-full object-cover' src="/products/demo.jpg" alt="product" />
                        </div>
                        <div className='aspect-square flex-shrink-0 cursor-pointer h-24 overflow-hidden rounded-md'>
                            <img className='w-full h-full object-cover' src="/products/demo.jpg" alt="product" />
                        </div>
                    </div>
                </div>
                <div className='py-3'>
                    <h2 className='uppercase text-4xl font-semibold'>Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.</h2>
                    <div className='py-4 flex items-center gap-5'>
                        <div className='flex items-center gap-2'>
                            <span className='text-[#555]'>Thương hiệu:</span>
                            <span className='font-semibold'>Xiaomi</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-[#555]'>Xuất xứ:</span>
                            <span className='font-semibold'>Việt Nam</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA825" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                            <span className='font-semibold text-[#555] flex items-center'>4.9 (<p className='font-normal'>150 đánh giá</p>)</span>
                        </div>
                        
                    </div>
                    <div className='flex items-end gap-4'>
                        <span className='font-bold text-3xl'>500.000 đ</span>
                        <span className='line-through text-xl'>600.000 đ</span>
                    </div>
                    <div className='py-3'>
                        <span className='text-xl font-medium'>Size</span>
                        <div className='flex items-center gap-4 pt-2'>
                            <div className='flex items-center gap-3'>
                                <div className='h-12 aspect-square overflow-hidden rounded-md cursor-pointer border-[2.5px] border-gray-400'>
                                    <img className='w-full h-full object-cover' src="/products/demo.jpg" alt="size" />
                                </div>
                                <span>
                                    100x48 cm
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='h-12 aspect-square overflow-hidden rounded-md cursor-pointer border-[2.5px] border-transparent'>
                                    <img className='w-full h-full object-cover' src="/products/demo.jpg" alt="size" />
                                </div>
                                <span>
                                    100x48 cm
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 justify-center w-1/2 pt-3'>
                        <button className='flex-shrink-0 border-[1.7px] border-[#777] text-[#555] px-5 font-medium flex items-center justify-center gap-2 py-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" className="size-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>
                            <span className='text-[#555]'>Thêm vào giỏ hàng</span>
                        </button>
                        <button className='w-1/2 border-[1.7px] border-[#121212] bg-[#121212] text-white px-5 py-2 rounded-full inline-block flex-shrink-0'>Mua ngay</button>
                    </div>
                    <div className='flex items-center pt-4'>
                        <div className='px-5 cursor-pointer border-b-2 border-gray-900 py-2'>
                            <span className='font-medium text-[#121212]'>Mô tả</span>
                        </div>
                        <div className='px-5 cursor-pointer py-2'>
                            <span className='font-medium text-[#444]'>Đánh giá</span>
                        </div>
                    </div>
                    
                    <div className='border-t py-4'>
                        <div className=''>
                            <p>🏚️HUHU mừng đến với HUHU HUB</p>
                            <p>🤩 Chúc bạn mua sắm vui vẻ! Theo dõi cửa hàng để nhận được những điều bất ngờ</p>
                            <p>💛Mục tiêu của chúng tôi là cung cấp sản phẩm và dịch vụ chất lượng. Khi bạn gặp khó khăn khi mua sắm, vui lòng không để lại đánh giá tiêu cực, vui lòng liên hệ kịp thời với chúng tôi, chúng tôi chắc chắn sẽ làm bạn hài lòng!</p>
                            <p>💛Nếu bạn mua nhiều sản phẩm. 👉Vui lòng mua riêng. Bạn có thể nhận được đơn đặt hàng hoàn chỉnh của mình nhanh hơn!</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;