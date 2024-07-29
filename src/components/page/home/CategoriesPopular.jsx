import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import CardCategory from './CardCategory';
const CategoriesPopular = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
          .then(function (response) {
            setCategories(response.data); // Example: if your response data is an array
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []); // Empty dependency array to run once on mount
      
    console.log(categories);
    return (
        <div className='px-[3%] mb-12'>
            <h2 className='font-semibold text-3xl mb-3'>Danh mục nổi bật</h2>
            <div className='grid grid-cols-6 gap-3'>
            {categories.map((item, index) => <CardCategory key={index} item={item} />)}
            </div>
        </div>
    );
};

export default CategoriesPopular;