import { ArrowUpRight } from "lucide-react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SERVICES } from "../data/site";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Our Expertise</span>
          <h2 className="section__title">
            Everything your brand needs to <em>go digital</em>
          </h2>
          <p className="section__lead">
            From the first idea to a live product, we cover strategy, design, development and growth —
            under one roof, with one clear point of contact.
          </p>
        </Reveal>

        <div className="services">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <article className="card">
                <span className="card__index">{String(i + 1).padStart(2, "0")}</span>
                <span className="card__icon">
                  <Icon name={s.icon} size={26} strokeWidth={1.6} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <ArrowUpRight className="card__arrow" size={22} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
