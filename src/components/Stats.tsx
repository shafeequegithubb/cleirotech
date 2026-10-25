import { Reveal } from "./Reveal";
import { STATS } from "../data/site";

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
