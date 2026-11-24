import {
  ArrowUpRight,
  Check,
  Clock3,
  GraduationCap,
} from "lucide-react";
import { promotion } from "../../data/promotion";
import { whatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { GrainOverlay } from "../ui/GrainOverlay";
import { Reveal } from "../ui/Reveal";

const promoMessage =
  "Halo Roast & Root! Saya ingin bertanya tentang promo 10% OFF untuk pelajar dan mahasiswa.";

export function Promotion() {
  return (
    <section
      id="promo"
      aria-labelledby="promo-heading"
      className="relative isolate overflow-hidden bg-maroon py-24 text-cream sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="promo-glow absolute inset-0" />
      <GrainOverlay tone="dark" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3.5">
                <span className="font-editorial text-base italic text-gold">
                  04
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-gold/50"
                />
                <span className="text-[0.64rem] font-medium uppercase tracking-[0.28em] text-cream/70">
                  Special Promotion
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="promo-heading"
                className="mt-6 leading-[0.92] tracking-[-0.02em]"
              >
                <span className="block text-[clamp(3.2rem,9vw,7rem)] text-cream">
                  {promotion.discount}
                </span>
                <span className="mt-2 block font-editorial text-[clamp(1.8rem,4.5vw,3rem)] italic text-gold">
                  {promotion.label}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-cream/75">
                {promotion.description}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
                {promotion.terms.map((term) => (
                  <li
                    key={term}
                    className="flex gap-3 text-sm leading-relaxed text-cream/70"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-gold/80"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href={whatsappLink(promoMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="light"
                  icon={<ArrowUpRight className="size-4" />}
                >
                  Tanya Promo
                </Button>
                <p className="max-w-[15rem] text-xs leading-relaxed text-cream/45">
                  {promotion.note}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18} y={30}>
              <div
                aria-hidden="true"
                className="relative mx-auto w-full max-w-sm border border-cream/20 bg-cream p-2 text-espresso shadow-[0_48px_90px_-40px_rgba(0,0,0,0.65)] transition-transform duration-500 lg:rotate-[-1.5deg] lg:hover:rotate-0"
              >
                <span className="absolute -left-3 top-[58%] size-6 rounded-full bg-maroon" />
                <span className="absolute -right-3 top-[58%] size-6 rounded-full bg-maroon" />

                <div className="border border-espresso/15 px-6 py-7 sm:px-8 sm:py-8">
                  <div className="flex items-center justify-between gap-4 border-b border-espresso/15 pb-4">
                    <span className="text-[0.56rem] font-medium uppercase tracking-[0.26em] text-roasted">
                      Roast &amp; Root
                    </span>
                    <span className="text-[0.52rem] font-medium uppercase tracking-[0.24em] text-gold-deep">
                      Cimahi
                    </span>
                  </div>

                  <p className="mt-7 text-[0.56rem] font-medium uppercase tracking-[0.28em] text-burgundy">
                    {promotion.ticket.kicker}
                  </p>
                  <p className="mt-2 font-display text-[4.6rem] leading-[0.85] tracking-[-0.03em] text-espresso">
                    {promotion.ticket.discount}
                  </p>
                  <p className="mt-1 font-editorial text-3xl italic text-burgundy">
                    {promotion.ticket.off}
                  </p>

                  <div className="my-7 border-t border-dashed border-espresso/25" />

                  <ul className="space-y-3 text-sm text-roasted">
                    <li className="flex items-center gap-3">
                      <GraduationCap
                        className="size-4 shrink-0 text-gold-deep"
                        strokeWidth={1.6}
                      />
                      {promotion.ticket.requirement}
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock3
                        className="size-4 shrink-0 text-gold-deep"
                        strokeWidth={1.6}
                      />
                      {promotion.ticket.schedule}
                    </li>
                  </ul>

                  <div
                    className="mt-7 h-7 w-full opacity-60"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, #4a2c24 0 2px, transparent 2px 5px, #4a2c24 5px 6px, transparent 6px 11px)",
                    }}
                  />

                  <p className="mt-2 text-[0.5rem] font-medium uppercase tracking-[0.24em] text-roasted/70">
                    {promotion.ticket.footer}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
