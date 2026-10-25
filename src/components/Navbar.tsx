import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "../data/site";
import { scrollToTarget } from "../lib/lenis";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(href);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Logo />

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary nav__cta" onClick={(e) => go(e, "#contact")}>
          Get In Touch
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--primary" onClick={(e) => go(e, "#contact")}>
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
