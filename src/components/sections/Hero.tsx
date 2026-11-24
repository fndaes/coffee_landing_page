import { ArrowRight, ArrowUpRight } from "lucide-react";
import { whatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { ImageFrame } from "../ui/ImageFrame";
import { Marquee } from "../ui/Marquee";
import { Reveal } from "../ui/Reveal";

const marqueeItems = [
  "Single Origin Puntang",
  "Sangrai Batch Kecil",
  "Manual Brew",
  "Wi-Fi Kencang",
  "Camilan Hangat",
  "Good Company",
];

export function Hero() {
  return (
    <section
      id="beranda"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="paper-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="min-w-0 lg:col-span-7 lg:pb-8">
            <Reveal>
              <p className="eyebrow">Cimahi, Jawa Barat — Roastery &amp; Coffee House</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                id="hero-heading"
                className="mt-7 text-[clamp(2.7rem,6.6vw,5.4rem)] leading-[0.98] tracking-[-0.025em] text-espresso"
              >
                Ngopi{" "}
                <em className="font-editorial italic text-burgundy">Nyaman</em>
                <br />
                di Tengah Cimahi.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md font-editorial text-xl italic leading-snug text-roasted sm:text-2xl">
                Biji Kopi Pilihan dari Petani Jawa Barat.
              </p>
            </Reveal>

            <Reveal
              delay={0.24}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <Button
                href="#menu"
                variant="primary"
                icon={<ArrowRight className="size-4" />}
              >
                Jelajahi Menu
              </Button>
              <Button
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                icon={<ArrowUpRight className="size-4" />}
              >
                Reservasi via WhatsApp
              </Button>
            </Reveal>

            <Reveal delay={0.32}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-espresso/15 pt-6 sm:gap-8">
                <div>
                  <dt className="text-[0.56rem] font-medium uppercase tracking-[0.2em] text-roasted/85">
                    Sangrai
                  </dt>
                  <dd className="mt-2 font-display text-base leading-tight text-espresso sm:text-lg">
                    Batch kecil
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.56rem] font-medium uppercase tracking-[0.2em] text-roasted/85">
                    Single Origin
                  </dt>
                  <dd className="mt-2 font-display text-base leading-tight text-espresso sm:text-lg">
                    Puntang · Lembang
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.56rem] font-medium uppercase tracking-[0.2em] text-roasted/85">
                    Suasana
                  </dt>
                  <dd className="mt-2 font-display text-base leading-tight text-espresso sm:text-lg">
                    Belajar &amp; bekerja
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={34}>
              <div className="relative mx-auto max-w-[26rem] pb-12 sm:pb-16 lg:ml-auto lg:max-w-none lg:pb-14">
                <span
                  aria-hidden="true"
                  className="vertical-text absolute -left-8 top-12 hidden text-[0.55rem] font-medium uppercase tracking-[0.36em] text-roasted/60 xl:block"
                >
                  Roastery · Cimahi
                </span>

                <ImageFrame
                  src="/images/hero-brew.jpg"
                  alt="Barista Roast & Root menyeduh kopi dengan metode manual brew"
                  priority
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 26rem, 88vw"
                  className="aspect-[4/5]"
                  offsetClassName="-inset-2.5 sm:-inset-3"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-bark/45 via-bark/0 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <p className="text-[0.55rem] font-medium uppercase tracking-[0.3em] text-cream/75">
                        House Pour
                      </p>
                      <p className="mt-1.5 font-editorial text-lg italic text-cream sm:text-xl xl:text-2xl">
                        Puntang · Jawa Barat
                      </p>
                    </div>
                  </div>
                </ImageFrame>

                <figure className="absolute -bottom-2 -right-3 hidden w-36 border border-espresso/10 bg-cream p-2.5 shadow-[0_24px_50px_-24px_rgba(42,23,18,0.55)] sm:block sm:w-40 lg:-bottom-4 lg:-right-6 lg:w-44">
                  <img
                    src="/images/hero-latte.jpg"
                    alt="Portafilter dengan biji kopi segar di bar Roast & Root"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="mt-2 px-0.5 pb-0.5 font-editorial text-xs italic text-roasted">
                    Portafilter, tiap pagi.
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative mt-16 sm:mt-20 lg:mt-24">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}
