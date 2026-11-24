import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { navLinks } from "../../data/navigation";
import { site } from "../../data/site";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { EASE_OUT } from "../../lib/motion";
import { whatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { GrainOverlay } from "../ui/GrainOverlay";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduced = usePrefersReducedMotion();
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;

    const previousActive = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 90);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      previousActive?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="fixed inset-0 z-[80] lg:hidden"
          initial={{ opacity: reduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.3 }}
        >
          <button
            type="button"
            aria-label="Tutup menu"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-bark/55 backdrop-blur-[2px]"
          />

          <motion.div
            ref={panelRef}
            className="absolute inset-y-0 right-0 flex w-full max-w-[26rem] flex-col overflow-y-auto bg-cream"
            initial={{ x: reduced ? 0 : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: reduced ? 0 : "100%" }}
            transition={{ duration: reduced ? 0 : 0.55, ease: EASE_OUT }}
          >
            <GrainOverlay />

            <div className="relative z-10 flex items-center justify-between gap-4 border-b border-espresso/12 px-6 py-5">
              <span className="font-display text-lg tracking-tight text-espresso">
                Roast <span className="text-gold-deep">&amp;</span> Root
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup menu navigasi"
                className="flex size-11 items-center justify-center border border-espresso/20 text-espresso transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav
              aria-label="Navigasi mobile"
              className="relative z-10 flex-1 px-6 py-8"
            >
              <ul>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: reduced ? 0 : 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduced ? 0 : 0.18 + index * 0.055,
                      duration: 0.5,
                      ease: EASE_OUT,
                    }}
                    className="border-b border-espresso/10"
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-editorial text-xs italic text-gold-deep">
                          0{index + 1}
                        </span>
                        <span className="font-display text-[1.7rem] leading-none text-espresso transition-colors group-hover:text-burgundy">
                          {link.label}
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 text-roasted/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-deep" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="relative z-10 border-t border-espresso/12 px-6 py-6">
              <Button
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full"
                icon={<ArrowUpRight className="size-4" />}
              >
                Chat via WhatsApp
              </Button>
              <p className="mt-5 font-editorial text-base italic text-roasted">
                {site.tagline}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
