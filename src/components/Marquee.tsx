import { TICKER } from "../data/site";

export function Marquee() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((n) => (
          <div className="marquee__group" key={n}>
            {row.map((t, i) => (
              <span className="marquee__item" key={`${n}-${i}`}>
                <b>#</b>
                {t.replace(/\s|\//g, "")}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
