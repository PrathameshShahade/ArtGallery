import React from 'react';
import './Productcard.css';

export default function ProductCard({product}) {
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer rounded-md shadow-lg overflow-hidden">
            <div className="h-[15rem]">
                <img className="h-full w-full object-cover image" src={product.imageUrl} alt="Product" />
            </div>
            <div className="textpart bg-white p-3">
                <div className="mb-2">
                    <p className="font-bold text-xl">{product.title}</p>
                    <p className="text-gray-600">By {product.artist}</p>
                </div>
                <div>
                    <p className="text-lg font-semibold text-gray-800">{product.price}</p>
                </div>
            </div>
        </div>
    );
}
