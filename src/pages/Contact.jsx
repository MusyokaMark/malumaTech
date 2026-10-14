import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { site } from "../data/site";
import Seo from '../components/Seo';

const topics = [
  "Website or software",
  "Laptop accessories",
  "IT consultation",
  "Something else",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: topics[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Malumatech, I would like to make an enquiry.",
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // No form service set up yet: open WhatsApp with the message
    if (!site.formEndpoint) {
      const text =
        `Hello Malumatech, my name is ${form.name}.\n` +
        `Topic: ${form.topic}\n` +
        `Phone: ${form.phone}\n` +
        (form.email ? `Email: ${form.email}\n` : "") +
        `Message: ${form.message}`;
      window.open(
        `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank",
      );
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({
        name: "",
        phone: "",
        email: "",
        topic: topics[0],
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const input =
    "mt-1 w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <>
      <Seo
        title="Services | Malumatech"
        description="Website and software development, networks, security and IT consultation from Malumatech."
      />
      {/* Page header */}
      <section className="bg-brand">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            Tell us what you need and we will reply with advice and a clear
            quote.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold">Send us a message</h2>

          {status === "sent" ? (
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-soft p-6">
              <CheckCircle className="mt-0.5 shrink-0 text-brand" />
              <div>
                <p className="font-bold">
                  Thank you, your message has been sent.
                </p>
                <p className="mt-1 text-sm text-navy/70">
                  We will get back to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">
                  Full name
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={update}
                    className={input}
                  />
                </label>
                <label className="text-sm font-semibold">
                  Phone number
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    className={input}
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">
                  Email (optional)
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    className={input}
                  />
                </label>
                <label className="text-sm font-semibold">
                  I need help with
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={update}
                    className={input}
                  >
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-sm font-semibold">
                Message
                <textarea
                  required
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={update}
                  className={input}
                />
              </label>

              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong. Please try again or use WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
              >
                <Send size={18} />
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>

        {/* Contact details */}
        <aside className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl bg-soft p-6">
            <h3 className="font-bold">Reach us directly</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                  <Phone size={18} />
                </span>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="font-medium hover:text-brand"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                  <Mail size={18} />
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium hover:text-brand"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                  <MapPin size={18} />
                </span>
                <span className="font-medium">{site.location}</span>
              </li>
            </ul>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-brand p-5 font-semibold text-white transition hover:bg-brand-dark"
          >
            <MessageCircle size={20} /> Chat with us on WhatsApp
          </a>
        </aside>
      </section>
    </>
  );
}
