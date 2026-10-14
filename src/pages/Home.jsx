import { Link } from 'react-router-dom'
import { ShieldCheck, Zap, Headphones, Wrench } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter'
import HeroVisual from '../components/HeroVisual'
import ServiceExplorer from '../components/ServiceExplorer'
import CTA from '../components/CTA'

const words = ['websites', 'software', 'IT solutions', 'laptop gear']

const strip = [
  'Websites', 'Web apps', 'Custom software', 'Chargers', 'Laptop bags',
  'Keyboards and mice', 'Networks', 'Security advice', 'IT consultation', 'Storage',
]

const reasons = [
  { icon: Zap, title: 'Fast turnaround', text: 'Clear timelines and quick replies, so your project keeps moving.' },
  { icon: ShieldCheck, title: 'Reliable and secure', text: 'Clean, well-tested work and products you can trust.' },
  { icon: Wrench, title: 'Practical solutions', text: 'We recommend what you actually need, not what costs the most.' },
  { icon: Headphones, title: 'Friendly support', text: 'You can reach us directly, before and after the job is done.' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Malumatech | Websites, Software, Laptop Accessories and IT Consultation"
        description="Malumatech builds websites and software, sells quality laptop accessories, and offers practical IT consultation."
      />

      {/* Hero */}
      <section className="grid-bg relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 animate-float-slow rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 animate-float rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-block rounded-full bg-soft px-4 py-1 text-sm font-semibold text-brand">
              Software. Accessories. Consultation.
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Smart technology for your
              <Typewriter words={words} />
            </h1>
            <p className="mt-5 max-w-lg text-lg text-navy/70">
              Malumatech builds websites and software, supplies quality laptop
              accessories, and gives honest IT advice to people and businesses.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-lg bg-brand px-6 py-3 text-center font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/shop"
                className="rounded-lg border border-brand px-6 py-3 text-center font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-soft"
              >
                Browse Accessories
              </Link>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* Scrolling strip */}
      <section className="overflow-hidden border-y border-soft bg-soft py-4">
        <div className="flex w-max animate-marquee gap-4">
          {[...strip, ...strip].map((item, i) => (
            <span
              key={i}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Interactive services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">What do you need today?</h2>
            <p className="mt-3 text-navy/70">
              Pick a service to see what we offer and start a conversation.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ServiceExplorer />
        </Reveal>
      </section>

      {/* Why us */}
      <section className="bg-soft">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Why choose Malumatech</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="group h-full rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-navy/70">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}