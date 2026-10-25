import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import poster from "../assets/images/brand-poster.webp";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { VALUES } from "../data/site";

export function WhyCleiro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section className="section section--tint" id="why" ref={ref}>
      <div className="container why">
        <motion.div className="why__media" style={{ y, rotate }}>
          <img src={poster} alt="Cleiro Digital — Think clear, think Cleiro" loading="lazy" />
        </motion.div>

        <div className="why__copy">
          <Reveal>
            <span className="eyebrow">Why Cleiro?</span>
            <h2 className="section__title section__title--left">
              Clear thinking. <em>Real results.</em>
            </h2>
            <p className="section__lead section__lead--left">
              The name says it all — <strong>Cleiro</strong> is about clarity. We cut through the noise,
              define what really matters for your business, and build digital products that are
              beautiful, fast and easy to use.
            </p>
          </Reveal>

          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="value">
                  <span className="value__icon">
                    <Icon name={v.icon} size={24} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
