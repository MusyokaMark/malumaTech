import { useState } from 'react'
import { MessageCircle, Plus, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { site } from '../data/site'

export default function ProductCard({ id, name, category, price, icon: Icon, text }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    add({ id, name, price })
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  const ask = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Malumatech, is the ${name} available?`
  )}`

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-soft bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-40 items-center justify-center bg-soft text-brand">
        <Icon size={56} strokeWidth={1.5} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">{category}</p>
        <h3 className="mt-1 font-bold">{name}</h3>
        <p className="mt-1 flex-1 text-sm text-navy/70">{text}</p>
        <p className="mt-4 text-lg font-extrabold">KES {price.toLocaleString()}</p>

        <button
          onClick={handleAdd}
          className={`mt-3 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
            added ? 'bg-blue-500' : 'bg-brand hover:bg-brand-dark'
          }`}
        >
          {added ? <><Check size={16} /> Added</> : <><Plus size={16} /> Add to order list</>}
        </button>

        <a
          href={ask}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-1 text-xs font-semibold text-brand hover:text-brand-dark"
        >
          <MessageCircle size={14} /> Ask about this item
        </a>
      </div>
    </div>
  )
}