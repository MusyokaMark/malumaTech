import { useState } from 'react'
import { Code, ShieldCheck, Wifi, Cpu, Globe, Smartphone } from 'lucide-react'

const lines = [
  { w: '45%', c: 'bg-blue-300' },
  { w: '70%', c: 'bg-white/80', indent: true },
  { w: '55%', c: 'bg-blue-400', indent: true },
  { w: '65%', c: 'bg-white/80', indent: true },
  { w: '30%', c: 'bg-blue-300' },
  { w: '60%', c: 'bg-blue-500' },
  { w: '75%', c: 'bg-white/80', indent: true },
  { w: '40%', c: 'bg-blue-300' },
]

const chips = [
  { Icon: Code, pos: 'left-0 top-10', depth: 30, delay: '0s' },
  { Icon: ShieldCheck, pos: 'right-0 top-16', depth: 45, delay: '1s' },
  { Icon: Wifi, pos: 'left-6 bottom-12', depth: 38, delay: '2s' },
  { Icon: Cpu, pos: 'right-8 bottom-6', depth: 25, delay: '0.5s' },
  { Icon: Globe, pos: 'left-1/3 top-0', depth: 50, delay: '1.5s' },
  { Icon: Smartphone, pos: 'right-1/4 bottom-0', depth: 35, delay: '2.5s' },
]

export default function HeroVisual() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    })
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative mx-auto h-[420px] w-full max-w-md"
    >
      {/* Rotating dashed rings */}
      <div className="absolute inset-6 animate-orbit rounded-full border-2 border-dashed border-brand/25" />
      <div className="absolute inset-16 animate-orbit rounded-full border border-brand/20 [animation-direction:reverse]" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />

      {/* Laptop */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-72 transition-transform duration-200 ease-out sm:w-80"
          style={{
            transform: `perspective(900px) rotateY(${tilt.x * 16}deg) rotateX(${-tilt.y * 12}deg)`,
          }}
        >
          <div className="rounded-t-2xl border-4 border-navy bg-navy p-4 shadow-2xl shadow-brand/30">
            <div className="mb-4 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            </div>
            <div className="space-y-2.5">
              {lines.map((l, i) => (
                <div key={i} className={l.indent ? 'pl-5' : ''}>
                  <div
                    className={`code-line h-2 rounded-full ${l.c}`}
                    style={{ width: l.w, animationDelay: `${0.4 + i * 0.35}s` }}
                  />
                </div>
              ))}
              <div className="h-4 w-1.5 animate-blink bg-blue-300" />
            </div>
          </div>
          <div className="-mx-4 h-3 rounded-b-2xl bg-blue-200 shadow-lg" />
        </div>
      </div>

      {/* Floating icon chips, each moving at a different depth */}
      {chips.map(({ Icon, pos, depth, delay }, i) => (
        <div
          key={i}
          className={`absolute ${pos} transition-transform duration-200 ease-out`}
          style={{ transform: `translate(${tilt.x * depth}px, ${tilt.y * depth}px)` }}
        >
          <div
            className="animate-float flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-xl shadow-brand/20"
            style={{ animationDelay: delay }}
          >
            <Icon size={22} />
          </div>
        </div>
      ))}
    </div>
  )
}