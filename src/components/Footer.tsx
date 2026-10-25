import type { MouseEvent } from "react";
import { Logo } from "./Logo";
import { BRAND, CONTACT, NAV_LINKS, SERVICES } from "../data/site";
import { scrollToTarget } from "../lib/lenis";

export function Footer() {
  const go = (e: MouseEvent, href: string) => {
    e.preventDefault();
    scrollToTarget(href);
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo tone="dark" size={56} />
          <p>{BRAND.tagline} Web, mobile and digital solutions from the heart of Kerala.</p>
          <p className="footer__slogan">{BRAND.slogan}</p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => go(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={(e) => go(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" onClick={(e) => go(e, "#services")}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
            </li>
            <li>{CONTACT.location}</li>
            <li className="footer__social">
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              {CONTACT.linkedin && (
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {BRAND.name} {BRAND.suffix}. All rights reserved.
        </span>
        <span>Crafted with clarity in Kerala.</span>
      </div>
    </footer>
  );
}
