import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { site, navLinks } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">
            Maluma<span className="text-blue-300">tech</span>
          </h3>
          <p className="mt-3 text-sm text-blue-100">{site.tagline}</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-blue-100">
            <li className="flex items-center gap-2"><Phone size={16} /> {site.phone}</li>
            <li className="flex items-center gap-2"><Mail size={16} /> {site.email}</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> {site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}