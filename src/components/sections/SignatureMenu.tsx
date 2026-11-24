import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  menuFilters,
  menuItems,
  type MenuFilter,
} from "../../data/menu";
import { cn } from "../../lib/cn";
import { EASE_OUT } from "../../lib/motion";
import { GrainOverlay } from "../ui/GrainOverlay";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function SignatureMenu() {
  const [filter, setFilter] = useState<MenuFilter>("Semua");
  const [previewId, setPreviewId] = useState<string>(menuItems[0].id);

  const items = useMemo(
    () =>
      filter === "Semua"
        ? menuItems
        : menuItems.filter((item) => item.category === filter),
    [filter],
  );

  const preview =
    items.find((item) => item.id === previewId) ?? items[0];

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative isolate overflow-x-clip border-y border-espresso/10 bg-cream-deep/70 py-24 sm:py-28 lg:py-32"
    >
      <GrainOverlay className="opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading
            id="menu-heading"
            index="02"
            eyebrow="Signature Menu"
            title={
              <>
                Menu yang{" "}
                <em className="font-editorial italic text-burgundy">jujur</em>,
                diseduh dengan tenang.
              </>
            }
            description="Dari espresso klasik hingga manual brew single origin. Semua diseduh dengan takaran yang konsisten."
          />
          <p className="max-w-[13rem] shrink-0 border-l border-gold-deep/50 pl-4 text-xs leading-relaxed text-roasted lg:mb-2">
            Harga dapat berubah — konfirmasi ketersediaan dan harga terbaru di
            kedai.
          </p>
        </div>

        <Reveal delay={0.1}>
          <div
            role="group"
            aria-label="Filter kategori menu"
            className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-espresso/15 sm:gap-x-4"
          >
            {menuFilters.map((category) => {
              const active = filter === category;
              const count =
                category === "Semua"
                  ? menuItems.length
                  : menuItems.filter((item) => item.category === category)
                      .length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={active}
                  className={cn(
                    "relative flex items-baseline gap-1.5 px-1 py-3.5 text-[0.66rem] font-medium uppercase tracking-[0.2em] transition-colors",
                    active
                      ? "text-espresso"
                      : "text-roasted/70 hover:text-espresso",
                  )}
                >
                  {category}
                  <span className="font-editorial text-[0.68rem] italic text-gold-deep">
                    {count}
                  </span>
                  {active ? (
                    <motion.span
                      layoutId="menu-filter-underline"
                      className="absolute inset-x-0 -bottom-px h-px bg-gold-deep"
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                    />
                  ) : null}
                </button>
              );
            })}
            <span className="ml-auto hidden pb-3.5 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-roasted/70 sm:block">
              {items.length} pilihan
            </span>
          </div>
        </Reveal>

        <p aria-live="polite" className="sr-only">
          {items.length} menu ditampilkan untuk kategori {filter}.
        </p>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={preview.id}
                    src={preview.image}
                    alt={preview.imageAlt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.54rem] font-medium uppercase tracking-[0.3em] text-cream/75">
                    {preview.category}
                  </p>
                  <p className="mt-2 font-display text-2xl text-cream">
                    {preview.name}
                  </p>
                  <p className="mt-1 font-editorial text-lg italic text-cream/80">
                    {preview.notes}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-espresso/15 pt-3">
                <span className="text-[0.56rem] font-medium uppercase tracking-[0.24em] text-roasted/70">
                  Harga di kedai
                </span>
                <span className="font-display text-lg text-espresso">
                  {preview.price}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="hidden grid-cols-[4.5rem_minmax(0,1fr)_7rem_7rem] gap-6 border-b border-espresso/20 pb-2 text-[0.55rem] font-medium uppercase tracking-[0.22em] text-roasted/70 md:grid">
              <span aria-hidden="true" />
              <span>Pilihan</span>
              <span>Kategori</span>
              <span className="text-right">Harga</span>
            </div>

            <motion.ul layout className="mt-2 md:mt-0">
              <AnimatePresence initial={false} mode="popLayout">
                {items.map((item) => (
                  <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                  >
                    <div
                      onMouseEnter={() => setPreviewId(item.id)}
                      onClick={() => setPreviewId(item.id)}
                      className={cn(
                        "group grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-espresso/15 py-4 transition-colors sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:gap-5 md:grid-cols-[4.5rem_minmax(0,1fr)_7rem_7rem] md:gap-6 md:py-5",
                        preview.id === item.id && "lg:border-gold-deep/50",
                      )}
                    >
                      <div className="media-zoom relative aspect-square overflow-hidden bg-cream">
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="font-display text-lg leading-tight text-espresso transition-colors duration-300 group-hover:text-burgundy sm:text-xl">
                            {item.name}
                          </h3>
                          {item.badge ? (
                            <span className="border border-gold-deep/40 px-2 py-0.5 text-[0.5rem] font-medium uppercase tracking-[0.18em] text-gold-deep">
                              {item.badge}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 text-[0.82rem] leading-relaxed text-roasted">
                          {item.notes}
                        </p>
                        <p className="mt-1.5 text-[0.54rem] font-medium uppercase tracking-[0.2em] text-roasted/70 md:hidden">
                          {item.category}
                        </p>
                      </div>

                      <div className="hidden md:block">
                        <span className="text-[0.56rem] font-medium uppercase tracking-[0.2em] text-roasted/75">
                          {item.category}
                        </span>
                      </div>

                      <p className="whitespace-nowrap text-right font-display text-base text-espresso sm:text-lg">
                        {item.price}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            <p className="mt-6 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-roasted/70">
              Manual brew tersedia sesuai biji yang sedang di-roast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
