"use client";

import { useEffect, useState } from 'react';
import { getProductById } from '../../../utils/api';

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(params.id);
      setProduct(data);
    };
    fetchProduct();
  }, [params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Rating:</span> {product.rating?.rate} ({product.rating?.count} reviews)
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}