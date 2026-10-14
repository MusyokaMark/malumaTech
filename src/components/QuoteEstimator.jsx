import { useState } from 'react'
import { Check, ArrowLeft, ArrowRight, MessageCircle, RotateCcw } from 'lucide-react'
import { site } from '../data/site'
import { projectTypes, pageOptions, extras } from '../data/pricing'

const stepTitles = ['Project type', 'Size', 'Extras', 'Your estimate']
const kes = (n) => `KES ${n.toLocaleString()}`

export default function QuoteEstimator() {
  const [step, setStep] = useState(0)
  const [type, setType] = useState(null)
  const [pages, setPages] = useState(pageOptions[0])
  const [picked, setPicked] = useState([])

  const toggle = (id) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const chosenExtras = extras.filter((e) => picked.includes(e.id))
  const total =
    (type ? type.price : 0) +
    pages.price +
    chosenExtras.reduce((sum, e) => sum + e.price, 0)
  const low = total
  const high = Math.round((total * 1.25) / 1000) * 1000

  const message =
    `Hello Malumatech, I used the quote estimator.\n` +
    `Project: ${type?.label}\n` +
    `Size: ${pages.label}\n` +
    `Extras: ${chosenExtras.length ? chosenExtras.map((e) => e.label).join(', ') : 'None'}\n` +
    `Estimate shown: ${kes(low)} to ${kes(high)}\n` +
    `I would like to discuss this project.`
  const link = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

  const reset = () => {
    setStep(0)
    setType(null)
    setPages(pageOptions[0])
    setPicked([])
  }

  const option = (on) =>
    `flex w-full items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left transition ${
      on
        ? 'border-brand bg-brand text-white shadow-lg shadow-brand/20'
        : 'border-blue-100 bg-white hover:border-brand/50 hover:bg-soft'
    }`

  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-soft p-6 sm:p-8">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {stepTitles.map((t, i) => (
          <div key={t} className="flex-1">
            <div className={`h-1.5 rounded-full transition-all ${i <= step ? 'bg-brand' : 'bg-blue-200'}`} />
            <p className={`mt-2 hidden text-xs font-semibold sm:block ${i === step ? 'text-brand' : 'text-navy/50'}`}>
              {t}
            </p>
          </div>
        ))}
      </div>

      <div key={step} className="mt-6 animate-fade-up">
        {step === 0 && (
          <>
            <h3 className="text-xl font-bold">What would you like us to build?</h3>
            <div className="mt-5 space-y-3">
              {projectTypes.map((t) => {
                const Icon = t.icon
                return (
                  <button
                    key={t.id}
                    onClick={() => setType(t)}
                    className={option(type?.id === t.id)}
                  >
                    <span className="flex items-center gap-4">
                      <Icon size={24} />
                      <span>
                        <span className="block font-bold">{t.label}</span>
                        <span className={`block text-sm ${type?.id === t.id ? 'text-blue-100' : 'text-navy/60'}`}>
                          {t.text}
                        </span>
                      </span>
                    </span>
                    {type?.id === t.id && <Check size={20} />}
                  </button>
                )
              })}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h3 className="text-xl font-bold">How big should it be?</h3>
            <div className="mt-5 space-y-3">
              {pageOptions.map((p) => (
                <button key={p.id} onClick={() => setPages(p)} className={option(pages.id === p.id)}>
                  <span className="font-semibold">{p.label}</span>
                  {pages.id === p.id && <Check size={20} />}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="text-xl font-bold">Any extras? (optional)</h3>
            <div className="mt-5 space-y-3">
              {extras.map((e) => {
                const on = picked.includes(e.id)
                return (
                  <button key={e.id} onClick={() => toggle(e.id)} className={option(on)}>
                    <span className="font-semibold">{e.label}</span>
                    <span className={`flex h-6 w-6 items-center justify-center rounded-md border ${on ? 'border-white' : 'border-blue-200'}`}>
                      {on && <Check size={16} />}
                    </span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="text-xl font-bold">Your estimated price</h3>
            <div className="mt-5 rounded-2xl bg-brand p-6 text-center text-white">
              <p className="text-sm text-blue-100">Estimated range</p>
              <p className="mt-1 text-3xl font-extrabold sm:text-4xl">
                {kes(low)} to {kes(high)}
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex justify-between"><span>{type?.label}</span><span className="font-semibold">{kes(type?.price ?? 0)}</span></li>
              <li className="flex justify-between"><span>{pages.label}</span><span className="font-semibold">{kes(pages.price)}</span></li>
              {chosenExtras.map((e) => (
                <li key={e.id} className="flex justify-between"><span>{e.label}</span><span className="font-semibold">{kes(e.price)}</span></li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-navy/60">
              This is a rough estimate only. The final quote depends on your exact requirements.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
              >
                <MessageCircle size={18} /> Send this to Malumatech
              </a>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand px-6 py-3 font-semibold text-brand transition hover:bg-white"
              >
                <RotateCcw size={16} /> Start again
              </button>
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      {step < 3 && (
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-navy transition hover:bg-white disabled:invisible"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <button
            onClick={() => setStep(step + 1)}
            disabled={step === 0 && !type}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2 font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === 2 ? 'See estimate' : 'Next'} <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}