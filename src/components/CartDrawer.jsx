import { useEffect, useState } from 'react'
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { site } from '../data/site'

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, clear, total } = useCart()
  const [name, setName] = useState('')
  const [area, setArea] = useState('')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  const lines = items
    .map((i) => `- ${i.qty} x ${i.name} (KES ${(i.price * i.qty).toLocaleString()})`)
    .join('\n')

  const message =
    `Hello Malumatech, I would like to order:\n${lines}\n` +
    `Total: KES ${total.toLocaleString()}\n` +
    (name ? `Name: ${name}\n` : '') +
    (area ? `Delivery area: ${area}\n` : '') +
    `Please confirm availability.`

  const link = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

  const field =
    'w-full rounded-lg border border-blue-100 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20'

  return (
    <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`}>
      {/* Dark overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-navy/50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <aside
        aria-label="Your order list"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-soft px-5 py-4">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <ShoppingBag size={20} className="text-brand" /> Your order list
          </h2>
          <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-lg p-1 hover:bg-soft">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-soft text-brand">
              <ShoppingBag size={30} />
            </span>
            <p className="mt-4 font-bold">Your list is empty</p>
            <p className="mt-1 text-sm text-navy/70">
              Add accessories from the shop and send them all in one message.
            </p>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {items.map((i) => (
                <li key={i.id} className="rounded-xl border border-soft p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">{i.name}</p>
                      <p className="text-sm text-navy/70">KES {i.price.toLocaleString()} each</p>
                    </div>
                    <button onClick={() => remove(i.id)} aria-label={`Remove ${i.name}`} className="text-navy/50 hover:text-red-600">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease" className="flex h-8 w-8 items-center justify-center rounded-lg bg-soft hover:bg-blue-100">
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center font-semibold">{i.qty}</span>
                      <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase" className="flex h-8 w-8 items-center justify-center rounded-lg bg-soft hover:bg-blue-100">
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-bold">KES {(i.price * i.qty).toLocaleString()}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t border-soft px-5 py-4">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name (optional)" className={field} />
              <input value={area} onChange={(e) => setArea(e.target.value)} placeholder="Delivery area (optional)" className={field} />
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-extrabold">KES {total.toLocaleString()}</span>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark"
              >
                <MessageCircle size={18} /> Send order on WhatsApp
              </a>
              <button onClick={clear} className="w-full text-sm font-medium text-navy/60 hover:text-red-600">
                Clear list
              </button>
              <p className="text-center text-xs text-navy/60">
                We will confirm availability, final price and delivery on WhatsApp.
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}