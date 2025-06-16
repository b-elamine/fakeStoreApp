"use client";
import Link from "next/link";
import {useCart} from "@/context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); //
  return (
    <Link href={`/products/${product.id}`}> 
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{product.title}</h3>
          <p className="text-gray-700 mb-2">${product.price}</p>
          <button
        onClick={(e) => {
          e.preventDefault(); // Stop navigation if inside a Link
          e.stopPropagation(); // Prevent event bubbling
          addToCart(product);
        }}
        className="w-full bg-blue-500 text-white py-2 hover:bg-blue-600"
      >
        Add to Cart
      </button>
        </div>
      </div>
    </Link>
  );
}