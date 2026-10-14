import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <section className="grid-bg">
      <Seo title="Page not found | Malumatech" description="This page could not be found." />
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <span className="flex h-16 w-16 animate-float items-center justify-center rounded-2xl bg-brand text-white shadow-xl shadow-brand/30">
          <Compass size={32} />
        </span>
        <p className="mt-6 text-6xl font-extrabold text-brand">404</p>
        <h1 className="mt-2 text-2xl font-bold">We could not find that page</h1>
        <p className="mt-3 text-navy/70">
          The link may be broken or the page may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
        >
          <Home size={18} /> Back to home
        </Link>
      </div>
    </section>
  )
}