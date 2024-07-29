import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Images from '../components/page/product_detail/Images';
import InfoProduct from '../components/page/product_detail/InfoProduct';
import TabProduct from '../components/page/product_detail/TabProduct';
import axios from 'axios';

const ProductDetail = () => {
    const slug = useParams().slug;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState();
    
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`http://localhost:5000/products/s/${slug}`)
        .then(res => {
            setData(res.data);
            setLoading(false); // Đặt loading về false khi dữ liệu đã tải xong
            setImages(res.data.images[0]);
        })
        .catch(err => {
            console.log(err);
            setLoading(false); // Đặt loading về false ngay cả khi có lỗi
        });
    }, [slug]);
    
    if (loading) {
        return <div>Loading...</div>; // Hiển thị loader trong khi chờ dữ liệu
    }
    console.log(images); // đã thay đổi khi chọn màu khác
    return (
        <div className=''>
            <div className='grid py-5 px-[3%] bg-[#3E3E3F] grid-cols-[50%,50%] gap-8'>
                <Images images={images} />
                <div className='py-3'>
                    <InfoProduct info={data} setImages={setImages}/>
                </div>
            </div>
            <div className='mt-4'>
                <TabProduct />
            </div>
        </div>
    );
};

export default ProductDetail;
