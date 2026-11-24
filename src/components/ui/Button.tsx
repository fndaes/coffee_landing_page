import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "gold" | "light" | "ghost-light";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-espresso text-cream hover:bg-bark",
  gold: "border border-gold/70 text-espresso hover:border-gold hover:bg-gold hover:text-bark",
  light: "bg-cream text-bark hover:bg-gold",
  "ghost-light":
    "border border-cream/35 text-cream hover:border-gold hover:text-gold",
};

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group/btn inline-flex min-h-11 items-center justify-center gap-2.5 px-6 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        >
          {icon}
        </span>
      ) : null}
    </a>
  );
}
