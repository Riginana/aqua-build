type Props = { fill?: string; flip?: boolean; className?: string };

export function WaveDivider({ fill = "var(--background)", flip = false, className = "" }: Props) {
  return (
    <div className={`pointer-events-none w-full leading-[0] ${className}`} style={{ transform: flip ? "rotate(180deg)" : undefined }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[60px] w-full md:h-[80px]" aria-hidden>
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
