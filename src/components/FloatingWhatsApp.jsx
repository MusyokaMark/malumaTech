import { MessageCircle } from 'lucide-react'
import { site } from '../data/site'

export default function FloatingWhatsApp() {
  const link = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Hello Malumatech, I visited your website and I would like to make an enquiry.'
  )}`

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Malumatech on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-brand/40 transition group-hover:scale-110 group-hover:bg-brand-dark">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-30" />
        <MessageCircle size={26} className="relative" />
      </span>
    </a>
  )
}