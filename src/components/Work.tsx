import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WORK } from "../data/site";

export function Work() {
  return (
    <section className="section section--tint" id="work">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section__title">
            Brands we&apos;ve helped <em>stand out</em>
          </h2>
          <p className="section__lead">
            A look at the kind of premium, purposeful digital experiences we love building.
          </p>
        </Reveal>

        <div className="work">
          {WORK.map((w, i) => (
            <Reveal key={w.name} delay={(i % 3) * 0.1}>
              <article className={`project project--${w.tone}`}>
                <span className="project__type">{w.type}</span>
                <span className="project__initial" aria-hidden="true">
                  {w.name.charAt(0)}
                </span>
                <div className="project__body">
                  <h3>{w.name}</h3>
                  <p>{w.text}</p>
                  <ul className="tags tags--light">
                    {w.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <ArrowUpRight className="project__arrow" size={24} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
