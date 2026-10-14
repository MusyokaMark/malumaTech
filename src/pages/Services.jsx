import Seo from "../components/Seo";
import QuoteEstimator from "../components/QuoteEstimator";
import FAQ from "../components/FAQ";
import Reveal from "../components/Reveal";
import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Network,
  ShieldCheck,
  Server,
  Monitor,
  Search,
  ClipboardList,
  PenTool,
  Code,
  Rocket,
  Check,
} from "lucide-react";
import CTA from "../components/CTA";


const webServices = [
  {
    icon: Globe,
    title: "Business websites",
    text: "Clean, fast websites that present your business and bring in enquiries.",
  },
  {
    icon: ShoppingCart,
    title: "Online shops",
    text: "Product catalogues with simple ordering, ready to grow with your business.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom software and systems",
    text: "Dashboards, booking, inventory and management tools built around how you work.",
  },
  {
    icon: Smartphone,
    title: "Mobile-friendly design",
    text: "Every project works smoothly on phones, tablets and computers.",
  },
];

const itServices = [
  {
    icon: Network,
    title: "Networks and setup",
    text: "Office Wi-Fi, networking and device setup that stays stable.",
  },
  {
    icon: ShieldCheck,
    title: "Security advice",
    text: "Practical steps to protect your data, accounts and devices.",
  },
  {
    icon: Server,
    title: "Systems planning",
    text: "Help choosing software, hosting and tools that fit your budget.",
  },
  {
    icon: Monitor,
    title: "Equipment advice",
    text: "Honest guidance on which laptops and accessories to buy for your needs.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discuss",
    text: "We listen to your goals, budget and timeline.",
  },
  {
    icon: ClipboardList,
    title: "Plan and quote",
    text: "You receive a clear plan and a fair price before we start.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "We prepare the layout and you approve it.",
  },
  {
    icon: Code,
    title: "Build and test",
    text: "We develop the work and test it on real devices.",
  },
  {
    icon: Rocket,
    title: "Launch and support",
    text: "We go live, train you if needed, and stay available for help.",
  },
];

function ServiceBlock({ heading, intro, items, bullets, tinted }) {
  return (
    <section className={tinted ? "bg-soft" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <p className="mt-3 text-navy/70">{intro}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-soft bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-soft text-brand">
                <Icon size={24} />
              </span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy/70">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm font-medium">
              <Check size={18} className="text-brand" /> {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Malumatech"
        description="Website and software development, networks, security and IT consultation from Malumatech."
      />
      {/* Page header */}
      <section className="bg-brand">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-extrabold text-white">Our Services</h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            From a simple website to a full business system, and the IT advice
            to back it up. Everything is explained in plain language.
          </p>
        </div>
      </section>

      <ServiceBlock
        heading="Software and Web Creation"
        intro="We design and build digital products that look professional and are easy for your customers to use."
        items={webServices}
        bullets={[
          "Fast loading pages",
          "Easy for you to update",
          "Search-friendly structure",
          "Secure and well tested",
        ]}
      />

      <ServiceBlock
        tinted
        heading="IT Consultation"
        intro="Not sure what you need? We help you make good technology decisions before you spend money."
        items={itServices}
        bullets={[
          "Plain-language advice",
          "No pressure to overspend",
          "On-site or remote help",
          "Follow-up support",
        ]}
      />

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">How we work</h2>
            <p className="mt-3 text-navy/70">
              A simple five-step process so you always know what happens next.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                  <Icon size={24} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-navy/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote estimator */}
      <section className="bg-soft/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Get an instant estimate</h2>
              <p className="mt-3 text-navy/70">
                Answer three quick questions and see a rough price for your
                project.
              </p>
            </div>
          </Reveal>
          <QuoteEstimator />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      <CTA />
    </>
  );
}
