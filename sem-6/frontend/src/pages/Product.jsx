import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import Relatedproduct from '../Components/Relatedproduct';
import { ShopContext } from '../context/ShopContext';

function Product() {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState(null);
  const sizes = ["S", "M", "L","XL","XXL"];

  const fetchProductData = async () => {
    const singleItem = products.find(item => item._id === productId);
    if (singleItem) {
      setProductData(singleItem);
      setImage(singleItem.image[0]);
    }
  };

  useEffect(() => {
    if (products && productId) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm-gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow--y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:md-3 flex-shrink-0 cursor-pointer"
                  alt={`Product image ${index + 1}`}
                />
              ))

            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className="flex space-x-2">
      {sizes.map((item, index) => (
        <button
          onClick={() => setSize(item)}
          className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>

          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchang policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Descripition & review section */}

      <div className='mt-20'>
            <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>E-commerce, put simply, is the practice of buying and selling goods or services using the Internet . It has gained immense popularity as a way of doing business because it's convenient and accessible at the same time.</p>
              <p>the process of creating something more advanced; a more advanced product
              The process of making something more advanced and advanced; a more advanced and advanced object or product.</p>
            </div>
      </div>

              {/* display related products */}
              <Relatedproduct category={productData.category} subCategory={productData.subCategory} />


    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
