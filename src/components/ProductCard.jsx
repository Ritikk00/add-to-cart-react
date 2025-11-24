import React from 'react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useCart()
  const inCart = cart.some(p => p.id === product.id)

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
      <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
      <p className="text-xs text-gray-600 mb-2 line-clamp-3">{product.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
        {inCart ? (
          <button onClick={() => removeFromCart(product.id)} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
        ) : (
          <button onClick={() => addToCart(product)} className="px-3 py-1 bg-green-600 text-white rounded">Add to Cart</button>
        )}
      </div>
    </div>
  )
}
