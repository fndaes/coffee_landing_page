import { Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-labelledby="testimoni-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none font-display text-[22rem] leading-none text-espresso/[0.035]"
      >
        &rdquo;
      </span>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="testimoni-heading"
          index="06"
          eyebrow="Testimonials"
          title={
            <>
              Kata mereka yang{" "}
              <em className="font-editorial italic text-burgundy">
                sudah mampir
              </em>
              .
            </>
          }
          description="Suara komunitas yang tumbuh bersama Roast & Root."
          align="center"
        />

        <Reveal delay={0.12}>
          <ul className="mt-14 grid gap-px border-y border-espresso/12 bg-espresso/12 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <li
                key={testimonial.id}
                className="group relative flex flex-col bg-cream px-7 py-9 sm:px-8 lg:px-9 lg:py-11"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                />
                <Quote
                  className="size-7 text-gold/70"
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
                <blockquote className="mt-7 mb-8">
                  <p className="font-editorial text-[1.42rem] italic leading-[1.4] text-espresso">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-auto flex items-center justify-between gap-4 border-t border-espresso/12 pt-5">
                  <span className="text-[0.56rem] font-medium uppercase tracking-[0.26em] text-roasted/80">
                    {testimonial.role}
                  </span>
                  <span className="font-editorial text-sm italic text-gold-deep">
                    0{index + 1}
                  </span>
                </footer>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
