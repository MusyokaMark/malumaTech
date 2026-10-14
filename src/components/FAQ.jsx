import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How long does a website take?',
    a: 'A simple business website usually takes one to three weeks. Larger shops and custom systems take longer. We give you a clear timeline in the quote.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. We stay available after the site goes live, and we can also arrange a support package if you want regular updates.',
  },
  {
    q: 'Can I update the website myself?',
    a: 'Yes. We can set it up so you can change text, prices and products easily, and we can show you how.',
  },
  {
    q: 'How do I order laptop accessories?',
    a: 'Choose an item in the shop and press the WhatsApp button. We confirm availability and arrange payment and delivery with you.',
  },
  {
    q: 'Do you deliver?',
    a: 'Delivery can be arranged depending on your location. Message us with your area and we will confirm the cost.',
  },
  {
    q: 'How do payments work for projects?',
    a: 'We agree on the price first. Larger projects are usually paid in stages, for example a deposit to start and the balance on delivery.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className="rounded-2xl border border-soft bg-white shadow-sm">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold"
              aria-expanded={isOpen}
            >
              {f.q}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-brand">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-navy/70">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}