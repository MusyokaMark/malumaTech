import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Code, Laptop, Lightbulb, Check, MessageCircle, ArrowRight } from 'lucide-react'
import { site } from '../data/site'

const tabs = [
  {
    id: 'web',
    label: 'Software and Web',
    icon: Code,
    title: 'Websites and software built around your business',
    text: 'From a simple business website to a custom system, we design, build and test it so it works well on every device.',
    points: ['Business websites', 'Online shops and catalogues', 'Custom systems and dashboards', 'Mobile-friendly design'],
    to: '/services',
    linkLabel: 'See web services',
    msg: 'Hello Malumatech, I would like to talk about a website or software project.',
  },
  {
    id: 'shop',
    label: 'Laptop Accessories',
    icon: Laptop,
    title: 'Accessories you can order in minutes',
    text: 'Chargers, bags, keyboards, mice, storage and more. Choose an item and send your order straight through WhatsApp.',
    points: ['Chargers and cables', 'Laptop bags and cases', 'Keyboards and mice', 'Flash drives and hard drives'],
    to: '/shop',
    linkLabel: 'Browse the shop',
    msg: 'Hello Malumatech, I am looking for a laptop accessory.',
  },
  {
    id: 'it',
    label: 'IT Consultation',
    icon: Lightbulb,
    title: 'Honest advice before you spend',
    text: 'Not sure what you need? We help you choose the right systems, equipment and security steps for your budget.',
    points: ['Networks and setup', 'Security advice', 'Systems planning', 'Equipment recommendations'],
    to: '/services',
    linkLabel: 'See consultation',
    msg: 'Hello Malumatech, I would like IT consultation.',
  },
]

export default function ServiceExplorer() {
  const [active, setActive] = useState(0)
  const t = tabs[active]
  const Icon = t.icon
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.msg)}`

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <div className="flex gap-3 overflow-x-auto pb-1 lg:flex-col">
        {tabs.map((tab, i) => {
          const TabIcon = tab.icon
          const on = i === active
          return (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-3 rounded-2xl border px-5 py-4 text-left font-semibold transition ${
                on
                  ? 'border-brand bg-brand text-white shadow-lg shadow-brand/30'
                  : 'border-soft bg-white text-navy hover:border-brand/40 hover:bg-soft'
              }`}
            >
              <TabIcon size={22} />
              {tab.label}
            </button>
          )
        })}
      </div>

      <div key={t.id} className="animate-fade-up rounded-3xl bg-soft p-8 lg:col-span-2">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white">
          <Icon size={28} />
        </span>
        <h3 className="mt-5 text-2xl font-bold">{t.title}</h3>
        <p className="mt-3 leading-relaxed text-navy/70">{t.text}</p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {t.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm font-medium">
              <Check size={18} className="text-brand" /> {p}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to={t.to}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            {t.linkLabel} <ArrowRight size={16} />
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand px-5 py-3 font-semibold text-brand transition hover:bg-white"
          >
            <MessageCircle size={16} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}