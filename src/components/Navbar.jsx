import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cart } = useCart()
  const count = cart.reduce((s, p) => s + p.qty, 0)

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Products</Link>
        <nav>
          <Link to="/cart" className="px-4 py-2 bg-indigo-600 text-white rounded-md">
            Cart ({count})
          </Link>
        </nav>
      </div>
    </header>
  )
}
