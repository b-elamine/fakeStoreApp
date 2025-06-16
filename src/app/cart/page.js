"use client";
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>
      
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p>Quantité: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
          
          <div className="border-t pt-4 text-right">
            <p className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4">
              Passer la commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
}