import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  offsetClassName?: string;
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
};

export function ImageFrame({
  src,
  alt,
  className,
  offsetClassName,
  priority = false,
  sizes,
  children,
}: ImageFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute -inset-3 border border-gold/45",
          offsetClassName,
        )}
      />
      <div className="relative h-full w-full overflow-hidden bg-cream-deep">
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="h-full w-full object-cover"
        />
        {children}
      </div>
    </div>
  );
}
