import { ArrowUpRight, Menu } from "lucide-react";
import { useCallback, useState } from "react";
import { navLinks } from "../../data/navigation";
import { useScrolled } from "../../hooks/useScrolled";
import { cn } from "../../lib/cn";
import { whatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const scrolled = useScrolled(32);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
          scrolled
            ? "bg-cream/90 shadow-[0_1px_0_0_rgba(74,44,36,0.12)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[5.5rem] lg:px-12">
          <a
            href="#beranda"
            className="group flex items-baseline gap-3"
            aria-label="Roast & Root — kembali ke beranda"
          >
            <span className="font-display text-xl tracking-tight text-espresso sm:text-[1.4rem]">
              Roast <span className="text-gold-deep">&amp;</span> Root
            </span>
            <span className="hidden text-[0.58rem] font-medium uppercase tracking-[0.3em] text-roasted/80 xl:inline">
              Coffee House · Cimahi
            </span>
          </a>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="px-5 py-3"
                icon={<ArrowUpRight className="size-3.5" />}
              >
                WhatsApp
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Buka menu navigasi"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex min-h-11 items-center gap-2.5 border border-espresso/20 px-4 py-2 text-espresso transition-colors hover:border-gold-deep hover:text-gold-deep lg:hidden"
            >
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.24em]">
                Menu
              </span>
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
