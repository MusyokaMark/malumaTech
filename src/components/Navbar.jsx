import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count, setOpen: openCart } = useCart()

  const linkClass = ({ isActive }) =>
    `font-medium transition hover:text-brand ${
      isActive ? 'text-brand' : 'text-navy'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-soft bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-lg font-bold text-white">
            M
          </span>
          <span className="text-xl font-bold text-navy">
            Maluma<span className="text-brand">tech</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-lg bg-brand px-5 py-2 font-semibold text-white transition hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Order list button and mobile menu button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openCart(true)}
            aria-label="Open order list"
            className="relative rounded-lg p-2 text-navy transition hover:bg-soft hover:text-brand"
          >
            <ShoppingBag size={24} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-soft bg-white px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-brand px-5 py-2 text-center font-semibold text-white"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  )
}