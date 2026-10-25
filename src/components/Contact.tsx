import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, SERVICES } from "../data/site";

type Form = { name: string; email: string; phone: string; service: string; message: string };
const empty: Form = { name: "", email: "", phone: "", service: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<Form>(empty);

  const update =
    (key: keyof Form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const body = () =>
    [
      `Hi Cleiro Digital,`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service || "Not sure yet"}`,
      ``,
      form.message,
    ].join("\n");

  // Opens the visitor's email app with the message pre-filled.
  // Swap this for a form service (Formspree, EmailJS, your own API) when ready.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${form.name}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${encodeURIComponent(body())}`;
  };

  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    form.name ? body() : "Hi Cleiro Digital, I'd like to discuss a project.",
  )}`;

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <Reveal className="contact__info">
          <span className="eyebrow">Let&apos;s Work Together</span>
          <h2 className="section__title section__title--left">
            Tell us about your <em>project</em>
          </h2>
          <p className="section__lead section__lead--left">
            Share a few details and we&apos;ll get back to you within one business day with ideas, a
            timeline and a clear quote.
          </p>

          <ul className="contact__list">
            <li>
              <span><Mail size={20} /></span>
              <div>
                <small>Email</small>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </li>
            <li>
              <span><Phone size={20} /></span>
              <div>
                <small>Call / WhatsApp</small>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
              </div>
            </li>
            <li>
              <span><MapPin size={20} /></span>
              <div>
                <small>Studio</small>
                <p>{CONTACT.location}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="contact__formwrap">
          <form className="form" onSubmit={onSubmit}>
            <div className="form__row">
              <label>
                Your name
                <input required value={form.name} onChange={update("name")} placeholder="Full name" />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <div className="form__row">
              <label>
                Mobile number
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+91"
                />
              </label>
              <label>
                I&apos;m interested in
                <select value={form.service} onChange={update("service")}>
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              What&apos;s your project about?
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us about your idea, goals and timeline"
              />
            </label>

            <div className="form__actions">
              <button type="submit" className="btn btn--primary btn--lg">
                Send Message <Send size={18} />
              </button>
              <a
                className="btn btn--ghost btn--lg"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
