import {
  Target,
  Eye,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import CTA from "../components/CTA";
import Seo from "../components/Seo";

const values = [
  {
    icon: Handshake,
    title: "Honesty",
    text: "Clear prices, clear timelines, and advice that puts your needs first.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    text: "We test our work and supply products we are happy to stand behind.",
  },
  {
    icon: Users,
    title: "Service",
    text: "You deal directly with the people doing the work, before and after the job.",
  },
  {
    icon: Lightbulb,
    title: "Practicality",
    text: "We recommend solutions that fit your budget and actually get used.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="Services | Malumatech"
        description="Website and software development, networks, security and IT consultation from Malumatech."
      />
      {/* Page header */}
      <section className="bg-brand">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-extrabold text-white">
            About Malumatech
          </h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            A young technology company helping people and businesses get more
            from their computers, websites and software.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Who we are</h2>
            <p className="mt-4 leading-relaxed text-navy/70">
              Malumatech brings three things together: software and website
              creation, laptop accessories, and IT consultation. Many people
              have to visit different providers for each of these. We bring them
              under one roof so you deal with one team that understands your
              whole setup.
            </p>
            <p className="mt-4 leading-relaxed text-navy/70">
              Whether you need a website for your business, a reliable charger
              for your laptop, or advice before buying new equipment, we aim to
              give you a simple, honest answer and good service.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl bg-soft p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <Target size={22} />
              </span>
              <h3 className="mt-4 font-bold">Our mission</h3>
              <p className="mt-1 text-sm text-navy/70">
                To make good technology simple and affordable for everyone we
                serve.
              </p>
            </div>
            <div className="rounded-2xl bg-soft p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <Eye size={22} />
              </span>
              <h3 className="mt-4 font-bold">Our vision</h3>
              <p className="mt-1 text-sm text-navy/70">
                To be the first name people think of for dependable IT help and
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-soft">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">What we stand for</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-navy/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
