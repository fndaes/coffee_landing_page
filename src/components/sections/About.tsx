import { ArrowRight } from "lucide-react";
import { ImageFrame } from "../ui/ImageFrame";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const processSteps = [
  {
    index: "01",
    title: "Pilih",
    description:
      "Biji single origin dari petani Puntang dan Lembang, dipilih per musim panen.",
  },
  {
    index: "02",
    title: "Sangrai",
    description:
      "Batch kecil di roastery kami agar karakter manis dan asam tetap seimbang.",
  },
  {
    index: "03",
    title: "Seduh",
    description:
      "Espresso atau manual brew, disesuaikan dengan selera dan waktu Anda.",
  },
];

const origins = ["Puntang", "Lembang", "Rotasi Musiman"];

export function About() {
  return (
    <section
      id="tentang"
      aria-labelledby="tentang-heading"
      className="relative overflow-x-clip py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-32">
              <div className="relative pb-10 sm:pb-12 lg:pb-8">
                <ImageFrame
                  src="/images/about-roastery.jpg"
                  alt="Biji kopi sangrai dan cangkir kopi di meja roastery Roast & Root"
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="aspect-[4/5]"
                >
                  <div className="absolute left-0 top-0 bg-cream/92 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[0.52rem] font-medium uppercase tracking-[0.26em] text-roasted">
                      Roastery
                    </p>
                    <p className="mt-0.5 font-editorial text-lg italic text-espresso">
                      Batch kecil
                    </p>
                  </div>
                </ImageFrame>

                <figure className="absolute bottom-0 right-0 w-36 border border-espresso/10 bg-cream p-2 sm:right-4 sm:w-44 lg:-bottom-2">
                  <img
                    src="/images/about-beans.jpg"
                    alt="Biji kopi sangrai di atas permukaan kayu"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="mt-2 px-0.5 pb-0.5 font-editorial text-xs italic text-roasted">
                    Sangrai mingguan, diseduh harian.
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <SectionHeading
              id="tentang-heading"
              index="01"
              eyebrow="About Our Coffee"
              title={
                <>
                  Dari tanah{" "}
                  <em className="font-editorial italic text-burgundy">
                    Puntang
                  </em>{" "}
                  ke cangkirmu.
                </>
              }
            />

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-roasted">
                <p className="drop-cap">
                  Roast &amp; Root lahir dari kebiasaan sederhana: menyeduh kopi
                  yang jujur, lalu berbagi cangkir dengan orang-orang di
                  sekitar. Kami bekerja bersama petani di Jawa Barat, menyangrai
                  dalam batch kecil, dan menyajikan setiap gelas tanpa
                  terburu-buru.
                </p>
                <p>
                  Bagi kami, kedai kopi bukan sekadar tempat singgah. Ia ruang
                  untuk belajar, menyelesaikan pekerjaan, berdiskusi, atau
                  sekadar duduk tenang di tengah Cimahi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <ol className="mt-10 border-t border-espresso/15">
                {processSteps.map((step) => (
                  <li
                    key={step.index}
                    className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-espresso/15 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-x-6"
                  >
                    <span className="font-editorial text-lg italic leading-none text-gold-deep">
                      {step.index}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-espresso transition-colors group-hover:text-burgundy">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-roasted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2.5">
                <span className="text-[0.58rem] font-medium uppercase tracking-[0.24em] text-roasted/80">
                  Single Origin
                </span>
                {origins.map((origin) => (
                  <span
                    key={origin}
                    className="border border-espresso/15 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-espresso"
                  >
                    {origin}
                  </span>
                ))}
              </div>

              <a
                href="#menu"
                className="group mt-9 inline-flex items-center gap-2.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:text-burgundy"
              >
                <span className="border-b border-gold-deep/60 pb-1">
                  Lihat signature menu
                </span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
