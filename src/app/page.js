"use client"

import ProductCard from "@/components/ProductCard";
import {useState, useEffect} from 'react';
import { fetchProducts } from '../utils/api';

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();

  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl  font-bold text-gray-800 mb-4"> Our Products </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
          </div>
    </div>
  );
}