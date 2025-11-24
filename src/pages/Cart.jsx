import React from 'react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, increase, decrease, removeFromCart, total } = useCart()

  const subtotal = total()
  const discount = +(subtotal * 0.1).toFixed(2)
  const final = +(subtotal - discount).toFixed(2)

  if (cart.length === 0) return <div className="text-center">Your cart is empty.</div>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">${item.price.toFixed(2)} each</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => decrease(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
              <div className="px-3">{item.qty}</div>
              <button onClick={() => increase(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
            </div>
            <div className="w-32 text-right font-semibold">${(item.price * item.qty).toFixed(2)}</div>
            <div>
              <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded shadow max-w-md">
        <div className="flex justify-between mb-2">
          <div>Subtotal</div>
          <div>${subtotal.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mb-2">
          <div>Discount (10%)</div>
          <div>-${discount.toFixed(2)}</div>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <div>Total</div>
          <div>${final.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}
