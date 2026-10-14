import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)
const KEY = 'malumatech-order-list'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || []
    } catch {
      return []
    }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable, the list still works for this visit */
    }
  }, [items])

  const add = ({ id, name, price }) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === id)
      if (found) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { id, name, price, qty: 1 }]
    })

  const setQty = (id, qty) =>
    setItems((prev) =>
      qty < 1 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    )

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))
  const clear = () => setItems([])

  const count = items.reduce((n, i) => n + i.qty, 0)
  const total = items.reduce((n, i) => n + i.qty * i.price, 0)

  return (
    <CartContext.Provider
      value={{ items, open, setOpen, add, setQty, remove, clear, count, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)