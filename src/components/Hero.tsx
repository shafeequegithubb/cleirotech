import { useRef, type MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import markLight from "../assets/images/logo-mark.png";
import { Icon } from "./Icon";
import { VALUES } from "../data/site";
import { scrollToTarget } from "../lib/lenis";

const ease = [0.22, 1, 0.36, 1] as const;

const CHIPS = [
  { label: "Web Development", className: "chip--a" },
  { label: "Mobile Apps", className: "chip--b" },
  { label: "UI / UX Design", className: "chip--c" },
  { label: "Digital Marketing", className: "chip--d" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const go = (e: MouseEvent, href: string) => {
    e.preventDefault();
    scrollToTarget(href);
  };

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__dots hero__dots--tr" />
        <span className="hero__dots hero__dots--br" />
        <span className="hero__curve" />
      </div>

      <div className="container hero__grid">
        <motion.div className="hero__copy" style={{ y: yText }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease }}
          >
            Software development
          </motion.span>

          <h1 className="hero__title">
            <span className="mask">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 1.6, ease }}
              >
                Think clear.
              </motion.span>
            </span>
            <span className="mask">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 1.75, ease }}
              >
                Think <em>Cleiro.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2, ease }}
          >
            Clear thinking leads to smart strategies, powerful solutions and real results. We design
            and build premium websites, mobile apps and digital experiences that help your business
            grow.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.15, ease }}
          >
            <a href="#contact" className="btn btn--primary btn--lg" onClick={(e) => go(e, "#contact")}>
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn--ghost btn--lg" onClick={(e) => go(e, "#services")}>
              Explore Services <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="hero__visual" style={{ y: yVisual }} aria-hidden="true">
          <motion.div
            className="orbit orbit--1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 1.6, ease }}
          />
          <div className="orbit orbit--2">
            <span className="orbit__dot" />
          </div>
          <div className="orbit orbit--3" />
          <motion.img
            src={markLight}
            alt=""
            className="hero__mark"
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.3, delay: 1.7, ease }}
          />
          {CHIPS.map((c, i) => (
            <motion.span
              key={c.label}
              className={`chip ${c.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -9, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 2.2 + i * 0.12 },
                y: { duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: 2.2 + i * 0.12 },
              }}
            >
              {c.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="container hero__values"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 2.4, ease }}
      >
        {VALUES.map((v) => (
          <div className="hero__value" key={v.title}>
            <Icon name={v.icon} size={26} strokeWidth={1.6} />
            <span>{v.title}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
