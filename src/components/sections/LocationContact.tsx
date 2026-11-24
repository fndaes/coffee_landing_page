import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { site } from "../../data/site";
import { whatsappLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/SocialIcons";

export function LocationContact() {
  return (
    <section
      id="lokasi"
      aria-labelledby="lokasi-heading"
      className="relative overflow-hidden border-t border-espresso/10 bg-cream-deep/60 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="lokasi-heading"
              index="05"
              eyebrow="Location & Contact"
              title={
                <>
                  Mampir ke{" "}
                  <em className="font-editorial italic text-burgundy">
                    Cimahi
                  </em>
                  .
                </>
              }
              description="Kami berada di Cimahi, Jawa Barat. Detail alamat lengkap dan petunjuk arah diperbarui di sini."
            />

            <Reveal delay={0.12}>
              <dl className="mt-10 space-y-6 border-t border-espresso/15 pt-8">
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <MapPin
                    className="mt-0.5 size-5 text-gold-deep"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-[0.56rem] font-medium uppercase tracking-[0.24em] text-roasted/80">
                      Alamat
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-espresso">
                      {site.address}
                      <span className="block text-roasted">
                        {site.addressDetail}
                      </span>
                    </dd>
                  </div>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <Clock3
                    className="mt-0.5 size-5 text-gold-deep"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-[0.56rem] font-medium uppercase tracking-[0.24em] text-roasted/80">
                      Jam Buka
                    </dt>
                    <dd className="mt-1.5">
                      <ul className="space-y-1.5">
                        {site.hours.map((entry) => (
                          <li
                            key={entry.label}
                            className="flex justify-between gap-6 border-b border-espresso/10 pb-1.5 text-sm last:border-0 last:pb-0"
                          >
                            <span className="text-roasted">{entry.label}</span>
                            <span className="tabular-nums text-espresso">
                              {entry.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<WhatsAppIcon className="size-4" />}
                >
                  WhatsApp
                </Button>
                <Button
                  href={site.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  icon={<ArrowUpRight className="size-4" />}
                >
                  Buka di Google Maps
                </Button>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-roasted">
                {site.hoursNote}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1} className="h-full">
              <div className="relative h-full">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 border border-gold/40"
                />
                <div className="relative aspect-[4/3] overflow-hidden border border-espresso/15 bg-cream lg:aspect-auto lg:h-full lg:min-h-[32rem]">
                  <iframe
                    title={`Peta ${site.maps.label}`}
                    src={site.maps.embed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full grayscale-[0.25]"
                  />
                  <div className="pointer-events-none absolute right-4 top-4 border border-espresso/15 bg-cream/95 px-3 py-2 backdrop-blur-sm">
                    <p className="flex items-center gap-2 text-[0.56rem] font-medium uppercase tracking-[0.22em] text-espresso">
                      <MapPin
                        className="size-3.5 text-gold-deep"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      {site.maps.label}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
