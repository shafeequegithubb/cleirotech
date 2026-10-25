import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/site";
import { scrollToTarget } from "../lib/lenis";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="floating">
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="floating__top"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => scrollToTarget(0)}
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
      <a
        className="floating__wa"
        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
          "Hi Cleiro Digital, I'd like to discuss a project.",
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
