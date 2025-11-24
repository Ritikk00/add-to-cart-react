import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  )
}
