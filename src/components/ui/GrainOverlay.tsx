import { cn } from "../../lib/cn";

type GrainOverlayProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function GrainOverlay({
  tone = "light",
  className,
}: GrainOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "grain-layer absolute inset-0",
        tone === "dark" && "grain-layer-dark",
        className,
      )}
    />
  );
}
