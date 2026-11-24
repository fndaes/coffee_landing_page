import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id?: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3.5",
            centered && "justify-center",
          )}
        >
          <span
            className={cn(
              "font-editorial text-base italic",
              isDark ? "text-gold" : "text-gold-deep",
            )}
          >
            {index}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-9",
              isDark ? "bg-gold/50" : "bg-gold-deep/60",
            )}
          />
          <span
            className={cn(
              "text-[0.64rem] font-medium uppercase tracking-[0.28em]",
              isDark ? "text-cream/70" : "text-roasted",
            )}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          id={id}
          className={cn(
            "mt-6 max-w-[20ch] text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-[-0.015em]",
            isDark ? "text-cream" : "text-espresso",
            centered && "mx-auto max-w-[24ch]",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-xl text-[0.95rem] leading-relaxed",
              isDark ? "text-cream/70" : "text-roasted",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
