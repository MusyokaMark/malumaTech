import { useMemo, useState } from 'react'
import { Truck, BadgeCheck, MessageCircle, Search, SearchX } from 'lucide-react'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import CTA from '../components/CTA'
import { products, categories } from '../data/products'

export default function Shop() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('default')

  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        (active === 'All' || p.category === active) &&
        `${p.name} ${p.text} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase())
    )
    if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [active, query, sort])

  return (
    <>
      <Seo
        title="Laptop Accessories | Malumatech"
        description="Chargers, laptop bags, keyboards, mice and storage. Build an order list and send it on WhatsApp."
      />

      <section className="bg-brand">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-extrabold text-white">Laptop Accessories</h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            Add the items you want to your order list, then send everything in one WhatsApp message.
          </p>
        </div>
      </section>

      <section className="border-b border-soft bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 text-sm font-medium sm:grid-cols-3">
          <p className="flex items-center gap-2"><BadgeCheck size={18} className="text-brand" /> Genuine products</p>
          <p className="flex items-center gap-2"><MessageCircle size={18} className="text-brand" /> Quick ordering on WhatsApp</p>
          <p className="flex items-center gap-2"><Truck size={18} className="text-brand" /> Delivery can be arranged</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Search and sort */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chargers, mouse, bag..."
              className="w-full rounded-lg border border-blue-100 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
            className="rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-brand"
          >
            <option value="default">Sort: Featured</option>
            <option value="low">Price: Low to high</option>
            <option value="high">Price: High to low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {/* Categories */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === c ? 'bg-brand text-white' : 'bg-soft text-navy hover:bg-blue-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-navy/60">
          Showing {visible.length} {visible.length === 1 ? 'item' : 'items'}
        </p>

        {visible.length > 0 ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center rounded-2xl bg-soft px-6 py-14 text-center">
            <SearchX size={36} className="text-brand" />
            <p className="mt-3 font-bold">No items match your search</p>
            <p className="mt-1 text-sm text-navy/70">
              Try another word, or message us and we will source it for you.
            </p>
            <button
              onClick={() => { setQuery(''); setActive('All') }}
              className="mt-4 rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      <CTA />
    </>
  )
}