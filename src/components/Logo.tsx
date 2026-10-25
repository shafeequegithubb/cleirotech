import type { MouseEvent } from "react";
import markLight from "../assets/images/logo-mark.png";
import markDark from "../assets/images/logo-mark-dark.png";
import { BRAND } from "../data/site";
import { scrollToTarget } from "../lib/lenis";

type Props = { tone?: "light" | "dark"; size?: number };

export function Logo({ tone = "light", size = 46 }: Props) {
  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    scrollToTarget(0);
  };

  return (
    <a href="#top" className={`logo logo--${tone}`} onClick={onClick} aria-label="Cleiro Digital — home">
      <img
        src={tone === "light" ? markLight : markDark}
        width={size}
        height={size}
        alt=""
        className="logo__mark"
      />
      <span className="logo__text">
        <span className="logo__name">{BRAND.name.toUpperCase()}</span>
        <span className="logo__sub">{BRAND.suffix.toUpperCase()}</span>
      </span>
    </a>
  );
}
