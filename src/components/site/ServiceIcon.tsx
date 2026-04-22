type Props = { name: "pool" | "hammam" | "banya" | "sauna" | "fountain" | "water"; className?: string };

export function ServiceIcon({ name, className = "h-10 w-10" }: Props) {
  const stroke = "currentColor";
  switch (name) {
    case "pool":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 32c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2" />
          <path d="M4 40c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2" />
          <path d="M14 28V12a4 4 0 0 1 8 0" />
          <path d="M34 28V12a4 4 0 0 0-8 0" />
        </svg>
      );
    case "hammam":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M8 36h32" /><path d="M12 36V20a12 12 0 0 1 24 0v16" />
          <path d="M18 14c0-3 3-3 3-6M26 14c0-3 3-3 3-6" />
        </svg>
      );
    case "banya":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 20 24 8l18 12" /><path d="M10 20v20h28V20" />
          <path d="M20 40V28h8v12" /><path d="M14 26h4M30 26h4" />
        </svg>
      );
    case "sauna":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="8" y="10" width="32" height="28" rx="2" />
          <path d="M14 10v28M20 10v28M26 10v28M32 10v28" />
          <path d="M16 6c0 2 2 2 2 4M24 6c0 2 2 2 2 4M32 6c0 2 2 2 2 4" />
        </svg>
      );
    case "fountain":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M24 6v8" /><path d="M18 14a6 6 0 0 1 12 0" />
          <path d="M10 30c0-6 6-6 6-12M38 30c0-6-6-6-6-12" />
          <path d="M6 36h36" /><path d="M8 42h32" />
        </svg>
      );
    case "water":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M24 6c8 10 12 16 12 22a12 12 0 0 1-24 0c0-6 4-12 12-22z" />
          <path d="M18 28a6 6 0 0 0 6 6" />
        </svg>
      );
  }
}
