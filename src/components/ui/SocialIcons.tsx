type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2.75a9.25 9.25 0 0 0-7.88 14.1L3 21l4.26-1.12a9.25 9.25 0 1 0 4.78-17.13Z" />
      <path
        d="M9.1 7.7c-.2-.48-.4-.49-.6-.5h-.5c-.18 0-.47.07-.72.34-.25.28-.94.93-.94 2.25 0 1.33.97 2.6 1.1 2.78.14.18 1.87 2.98 4.58 4.06 2.26.9 2.72.72 3.21.67.5-.04 1.58-.65 1.8-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.31-.28-.14-1.58-.78-1.83-.87-.24-.09-.42-.13-.6.14-.18.27-.69.86-.84 1.04-.16.18-.31.2-.59.07-.27-.14-1.14-.43-2.16-1.34-.8-.72-1.34-1.59-1.5-1.86-.15-.28-.01-.42.12-.56.13-.13.28-.32.42-.49.13-.17.18-.29.27-.49.09-.2.05-.36-.02-.5-.07-.13-.6-1.44-.82-1.97Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
