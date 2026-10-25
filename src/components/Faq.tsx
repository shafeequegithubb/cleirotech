import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { FAQ } from "../data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section--tint" id="faq">
      <div className="container faq">
        <Reveal className="faq__head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section__title section__title--left">
            Questions, <em>answered</em>
          </h2>
          <p className="section__lead section__lead--left">
            Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll reply within one
            business day.
          </p>
        </Reveal>

        <div className="faq__list">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`faq__item ${isOpen ? "is-open" : ""}`}>
                  <button
                    className="faq__q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <Plus size={22} className="faq__plus" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq__a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
