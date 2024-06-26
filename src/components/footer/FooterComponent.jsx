import React from 'react';

const FooterComponent = () => {
    return (
        <>
        <div className='px-[3%] pt-4'>
            <div className='bg-[#2A2A2A] py-8 px-4 rounded-2xl flex justify-center'>
                <div className='max-w-[700px] w-full text-center flex flex-col justify-center items-center'>
                    <h3 className='text-white font-bold text-3xl '>Nhận ưu đãi những sản phẩm mới nhất của chúng tôi?</h3>
                    <div className='bg-white w-full max-w-[400px] mt-5 py-[3px] px-[3px] rounded-full flex items-center'>
                        <input type='text' placeholder='Nhập email của bạn' className='outline-none w-full border-none px-3'></input>
                        <button className='bg-black text-white px-5 py-2 inline-block flex-shrink-0 rounded-full'>Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-8 px-[3%] flex justify-between'>
            <div className='flex gap-8 items-start'>
                <div className='w-[30%]'>
                    <span className='text-5xl font-extrabold select-none'>Stuffsus</span>
                    <p className=' text-gray-500 mt-3'>Chúng tôi cung cấp những sản phẩm tốt nhất cho bạn.</p>
                </div>
                <div>
                    <span className='text-lg font-semibold inline-block mb-3'>About</span>
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer hover:underline'>Giới thiệu</li>
                        <li className='cursor-pointer hover:underline'>Blog</li>
                        <li className='cursor-pointer hover:underline'>Liên hệ</li>
                    </ul>
                </div>
                <div>
                    <span className='text-lg font-semibold inline-block mb-3'>Chính sách</span>
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer hover:underline'>Chính sách bảo mật</li>
                        <li className='cursor-pointer hover:underline'>Chính sách vận chuyển</li>
                        <li className='cursor-pointer hover:underline'>Chính sách đổi trả</li>
                    </ul>
                </div>
            </div>
            <div className='py-5 px-12'>
                <span className='inline-block mb-2 text-lg'>Theo dõi chúng tôi qua:</span>
                <div className='flex items-center gap-2'>
                    <a href='https://example.com/'>
                        <svg className='w-16 h-16' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
                    </a>
                    <a href='https://example.com/'>
                        <svg className='w-14 h-14' fill="#000000" viewBox="0 0 19.2 19.2" data-name="Instagram w/circle" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path></g></svg>
                    </a>
                    <a href='https://example.com/'>
                        <svg className='w-14 h-14' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>
                    </a>
                    <a href='https://example.com/'>
                        <svg className='w-14 h-14' fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2 c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"></path> </g></svg>
                    </a>
                </div>
            </div>
        </div>
        <div className='px-[3%]'>
            <div className='pt-5 pb-5 border-t flex justify-between items-center'>
                <p className='font-medium'>© 2024 Stuffsus. All rights reserved</p>
                <div className='flex items-center gap-3'>
                    <a className='font-medium' href='https://example.com'>Terms of Service</a>
                    <a className='font-medium' href='https://example.com'>Privacy Policy</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default FooterComponent;