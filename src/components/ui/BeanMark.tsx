export function BeanMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <ellipse
        cx="12"
        cy="12"
        rx="5.2"
        ry="8"
        transform="rotate(-28 12 12)"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.6 6.4c3.6 2.6 4.7 8.4 1.2 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
