import { Car, Plug, Users, Wifi, type LucideIcon } from "lucide-react";
import { facilities, type FacilityIcon } from "../../data/facilities";
import { BeanMark } from "../ui/BeanMark";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap: Record<FacilityIcon, LucideIcon> = {
  wifi: Wifi,
  outlet: Plug,
  meeting: Users,
  parking: Car,
};

export function Facilities() {
  return (
    <section
      id="fasilitas"
      aria-labelledby="fasilitas-heading"
      className="relative overflow-x-clip py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                id="fasilitas-heading"
                index="03"
                eyebrow="Facilities"
                title={
                  <>
                    Dirancang untuk{" "}
                    <em className="font-editorial italic text-burgundy">
                      berlama-lama
                    </em>
                    .
                  </>
                }
                description="Meja lapang, colokan di mana-mana, dan koneksi yang tidak membuat Anda menunggu."
              />
              <p className="mt-8 max-w-xs border-l border-gold-deep/50 pl-4 text-sm leading-relaxed text-roasted">
                Cocok untuk belajar, rapat kecil, atau menyelesaikan pekerjaan
                sampai kedai tutup.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <ul className="grid gap-px border-y border-espresso/12 bg-espresso/12 sm:grid-cols-2">
                {facilities.map((facility) => {
                  const Icon = iconMap[facility.icon];

                  return (
                    <li
                      key={facility.id}
                      className="group relative bg-cream p-7 transition-colors duration-500 hover:bg-cream-deep/45 sm:p-8 lg:p-10"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                      />
                      <div className="flex items-start justify-between gap-4">
                        <Icon
                          className="size-6 text-roasted transition-colors duration-300 group-hover:text-gold-deep"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        <span className="font-editorial text-sm italic text-roasted/60">
                          {facility.index}
                        </span>
                      </div>
                      <h3 className="mt-8 font-display text-xl text-espresso">
                        {facility.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-roasted">
                        {facility.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 flex items-center gap-2.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-roasted/75">
                <BeanMark className="size-3.5 text-gold-deep" />
                Ramah untuk pelajar, pekerja remote, dan komunitas
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
