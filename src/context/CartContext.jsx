import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart_v1')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart_v1', JSON.stringify(cart))
  }, [cart])

  function addToCart(product) {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(productId) {
    setCart(prev => prev.filter(p => p.id !== productId))
  }

  function increase(productId) {
    setCart(prev => prev.map(p => p.id === productId ? { ...p, qty: p.qty + 1 } : p))
  }

  function decrease(productId) {
    setCart(prev => prev.map(p => p.id === productId ? { ...p, qty: Math.max(1, p.qty - 1) } : p))
  }

  function toggle(product) {
    const inCart = cart.some(p => p.id === product.id)
    if (inCart) removeFromCart(product.id)
    else addToCart(product)
  }

  function total() {
    return cart.reduce((sum, p) => sum + p.price * p.qty, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increase, decrease, toggle, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
