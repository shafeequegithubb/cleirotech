import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import markDark from "../assets/images/logo-mark-dark.png";
import { Reveal } from "./Reveal";
import { scrollToTarget } from "../lib/lenis";

export function CtaBand() {
  const go = (e: MouseEvent) => {
    e.preventDefault();
    scrollToTarget("#contact");
  };

  return (
    <section className="band">
      <img src={markDark} alt="" className="band__mark" aria-hidden="true" />
      <div className="container band__inner">
        <Reveal>
          <span className="eyebrow eyebrow--light">Let&apos;s Collaborate</span>
          <h2 className="band__title">
            Have a vision? Let&apos;s engineer it <em>together.</em>
          </h2>
          <p className="band__lead">
            From concept to launch, we build custom web, mobile and business solutions that accelerate
            growth.
          </p>
          <a href="#contact" className="btn btn--primary btn--lg" onClick={go}>
            Start Your Project <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
