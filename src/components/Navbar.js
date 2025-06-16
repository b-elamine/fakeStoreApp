"use client";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Home link */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition">
          FakeStore
        </Link>

        {/* Right side - Cart icon with counter */}
        <Link href="/cart" className="relative hover:text-gray-300 transition">
          <AiOutlineShoppingCart className="text-2xl" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}