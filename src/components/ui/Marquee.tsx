import { cn } from "../../lib/cn";
import { BeanMark } from "./BeanMark";

type MarqueeProps = {
  items: string[];
  tone?: "light" | "dark";
  className?: string;
};

export function Marquee({ items, tone = "light", className }: MarqueeProps) {
  const content = (key: string) => (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item) => (
        <li
          key={`${key}-${item}`}
          className={cn(
            "flex items-center gap-6 px-6 text-[0.66rem] font-medium uppercase tracking-[0.3em]",
            tone === "dark" ? "text-cream/65" : "text-roasted/85",
          )}
        >
          <span className="whitespace-nowrap">{item}</span>
          <BeanMark className="size-3.5 shrink-0 text-gold" />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex overflow-hidden border-y py-4",
        tone === "dark" ? "border-cream/15" : "border-espresso/15",
        className,
      )}
    >
      <div className="flex w-max animate-marquee">
        {content("a")}
        {content("b")}
      </div>
    </div>
  );
}
