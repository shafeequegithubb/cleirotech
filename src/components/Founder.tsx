import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import founder from "../assets/images/founder.webp";
import { Reveal } from "./Reveal";
import { scrollToTarget } from "../lib/lenis";

export function Founder() {
  const go = (e: MouseEvent) => {
    e.preventDefault();
    scrollToTarget("#contact");
  };

  return (
    <section className="section" id="founder">
      <div className="container founder">
        <Reveal className="founder__media">
          <div className="founder__frame">
            <img src={founder} alt="Mohammed Shafeeque, Founder of Cleiro Digital" loading="lazy" />
          </div>
          <div className="founder__badge">
            <strong>Founder</strong>
            <span>Cleiro Digital</span>
          </div>
        </Reveal>

        <div className="founder__copy">
          <Reveal>
            <span className="eyebrow">Meet the Founder</span>
            <h2 className="section__title section__title--left">
              Mohammed <em>Shafeeque</em>
            </h2>
            <p className="founder__quote">
              “Clear thinking leads to smart strategies, powerful solutions and real results.”
            </p>
            <p className="section__lead section__lead--left">
              Mohammed started out as a Flutter developer, building mobile apps — including
              Odoo-connected apps — before founding Cleiro Digital with one goal: to give businesses
              across Kerala a clear, premium and high-performing digital presence.
            </p>
            <p className="section__lead section__lead--left">
              Today he leads every project personally, from the first conversation to launch, across
              mobile and web — so you always know who is building your product.
            </p>
            <ul className="tags tags--outline">
              <li>Flutter</li>
              <li>React</li>
              <li>Mobile &amp; Web</li>
              <li>Premium UI</li>
              <li>Odoo Integrations</li>
            </ul>
            <a href="#contact" className="btn btn--primary btn--lg" onClick={go}>
              Let&apos;s Talk <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
