import React, { useState, useEffect } from 'react';
import Size from './Size';
import Color from './Color';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../../redux/slices/cartslice';



const InfoProduct = ({info,setImages}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);


    const variant = info.product_variant;
    const [selectedSize, setSelectedSize] = useState(variant[0].size);
    const [selectedColor, setSelectedColor] = useState(variant[0].color);
    const [stock, setStock] = useState(variant[0].stock);
    const [sale, setSale] = useState(variant[0].sale);
    const initialPrice = variant[0].price - (variant[0].price * variant[0].sale / 100);
    const [price, setPrice] = useState(initialPrice);
    const product = {...info,selectedSize, selectedColor, price,sale, quantity};
    const priceFormat = price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    
    const sizeSet = new Set();
    const colorSet = new Set();
    const colorCodeSet = new Set();
    
    if(variant){
        variant.forEach(element => {
            sizeSet.add(element.size);
            colorSet.add(element.color);
            colorCodeSet.add(element.color_code);
        });
    }
    
    const setPriceProduct = (size, color) => {
        const selectedVariant = variant.find(element => element.size === size && element.color === color);
        if (selectedVariant) {
            const sale = selectedVariant.price * selectedVariant.sale / 100;
            setPrice(selectedVariant.price - sale);
            setStock(selectedVariant.stock);
            setSale(selectedVariant.sale);
        }
    };
    
    useEffect(() => {
        const images = info.images.reduce((acc, item) => {
            acc[item.color] = item;
            return acc;
        }, {});
        setImages(images[selectedColor]);
        setPriceProduct(selectedSize, selectedColor);
    }, [selectedSize, selectedColor, variant]);
    return (
        <>
            <h2 className='text-4xl text-white font-semibold'>{info.title}</h2>
            <Size size={Array.from(sizeSet)} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            <Color color={Array.from(colorSet)} color_code={Array.from(colorCodeSet)} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
            <div className='flex items-end gap-4 mb-5'>
                <span className='font-bold text-3xl text-[#fff]'>{priceFormat}</span>
                <span className='line-through text-xl text-[#FAF6EF]'>{price !== initialPrice && (variant.find(v => v.size === selectedSize && v.color === selectedColor).price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                {sale > 0 && <span className='text-[#fff] text-xl'>{`(-`+sale+`%)`}</span>}
            </div>
            {stock > 0 ? (<div className='flex gap-3 w-full pt-8'>
                <button onClick={() => dispatch(addToCart({ item: product, quantity: quantity }))} className='flex-shrink-0 border-[1.7px] border-[#fff] text-[#555] px-5 font-medium flex items-center gap-2 py-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="size-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <span className='text-[#fff]'>Thêm vào giỏ hàng</span>
                </button>
                <button className='w-fit border-[1.7px] border-[#fff] bg-[#fff] text-black px-8 py-2 rounded-full inline-block flex-shrink-0'>Mua ngay</button>
            </div>) : <span className='text-[#FF9F00] text-3xl'>Tạm thời hết hàng.</span>}
        </>
    );
};

export default InfoProduct;
