import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { site } from "../../data/site";
import { whatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { GrainOverlay } from "../ui/GrainOverlay";
import { InstagramIcon, WhatsAppIcon } from "../ui/SocialIcons";

function scrollToTop() {
  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bark text-cream/70">
      <GrainOverlay tone="dark" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-20 pb-8 sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-gold">
              Roastery &amp; Coffee House · Cimahi
            </p>
            <p className="mt-6 font-display text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.95] tracking-[-0.02em] text-cream">
              Roast <span className="font-editorial italic text-gold">&amp;</span>{" "}
              Root
            </p>
            <p className="mt-5 max-w-xs font-editorial text-2xl italic text-cream/60">
              {site.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                icon={<ArrowUpRight className="size-4" />}
              >
                WhatsApp
              </Button>
              <Button
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost-light"
                icon={<InstagramIcon className="size-4" />}
              >
                Instagram
              </Button>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h2 className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-gold">
                Navigasi
              </h2>
              <ul className="mt-5 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-gold">
                Jam Buka
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
                {site.hours.map((entry) => (
                  <li key={entry.label}>
                    <span className="block text-cream/45">{entry.label}</span>
                    <span>{entry.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-cream/40">
                Jam dapat berubah — konfirmasi via WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-gold">
                Kontak
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-2.5 text-cream/70">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-gold/70"
                    aria-hidden="true"
                  />
                  <span>
                    {site.address}
                    <span className="block text-cream/45">
                      {site.addressDetail}
                    </span>
                  </span>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2.5 text-cream/70 transition-colors hover:text-gold"
                  >
                    <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-gold/70" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2.5 text-cream/70 transition-colors hover:text-gold"
                  >
                    <InstagramIcon className="mt-0.5 size-4 shrink-0 text-gold/70" />
                    {site.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-wide text-cream/40">
            © {new Date().getFullYear()} Roast &amp; Root. Seluruh hak
            dilindungi.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-cream/60 transition-colors hover:text-gold"
          >
            Kembali ke atas
            <ArrowUp
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
