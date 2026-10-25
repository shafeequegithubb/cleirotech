import { Reveal } from "./Reveal";
import { PROCESS } from "../data/site";

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Our Workflow</span>
          <h2 className="section__title">
            A clear process, <em>from idea to launch</em>
          </h2>
          <p className="section__lead">
            No guesswork, no surprises. Five simple stages keep every project on track, on time and
            transparent.
          </p>
        </Reveal>

        <ol className="process">
          {PROCESS.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.1}>
                <div className="step">
                  <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="step__dot" />
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
