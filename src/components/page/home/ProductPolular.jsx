import React from 'react';
import Product from './Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductPolular = () => {
    // setting slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const listProduct = [
        {
            id: 1,
            name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
            price: 500000,
            salePrice: 489000,
            rating: 5.0,
            img: '/products/demo.jpg',
            totalRating: 120
        },
        {
            id: 2,
            name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
            price: 500000,
            salePrice: 489000,
            rating: 5.0,
            img: '/products/demo.jpg',
            totalRating: 120
        },
        {
            id: 3,
            name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
            price: 500000,
            salePrice: 489000,
            rating: 5.0,
            img: '/products/demo.jpg',
            totalRating: 120
        },
        {
            id: 4,
            name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
            price: 500000,
            salePrice: 489000,
            rating: 5.0,
            img: '/products/demo.jpg',
            totalRating: 120
        },
        {
            id: 5,
            name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
            price: 500000,
            salePrice: 489000,
            rating: 5.0,
            img: '/products/demo.jpg',
            totalRating: 120
        },
        {
            id: 6,
            name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
            price: 500000,
            salePrice: 489000,
            rating: 5.0,
            img: '/products/demo.jpg',
            totalRating: 120
        },
        {
            id: 7,
            name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
            price: 500000,
            salePrice: 489000,
            rating: 5.0,
            img: '/products/demo.jpg',
            totalRating: 120
        },
        {
            id: 8,
            name: 'Bàn làm việc FUNA (BLV09) 4 chân sắt tròn to 50x50 chắc chắn, decor phòng phong cách hiên đại, vintage.',
            price: 500000,
            salePrice: 489000,
            rating: 5.0,
            img: '/products/demo.jpg',
            totalRating: 120
        }
    ];
    return (
        <div className='px-[3%] mt-4 py-6'>
            <h2 className='font-semibold text-3xl mb-3'>Sản Phẩm Nổi Bật</h2>
            <div>
                <Slider {...settings}>
                    {listProduct.map((item, index) => (
                    <Product key={index} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductPolular;