import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { site } from '../data/site'

export default function CTA() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Hello Malumatech, I would like to make an enquiry.'
  )}`

  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">
          Tell us what you need. We will reply quickly with advice and a clear quote.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-brand transition hover:bg-soft"
          >
            Request a Quote
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}