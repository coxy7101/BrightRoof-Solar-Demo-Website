import { cn } from '@/lib/utils';

interface BrightRoofLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export function BrightRoofLogo({
  className,
  variant = 'dark',
  showText = true,
}: BrightRoofLogoProps) {
  const textColor = variant === 'dark' ? 'text-navy' : 'text-white';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Sun Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Sun rays */}
        <g className="fill-amber">
          <rect x="18" y="2" width="4" height="6" rx="2" />
          <rect x="18" y="32" width="4" height="6" rx="2" />
          <rect
            x="32"
            y="18"
            width="4"
            height="6"
            rx="2"
            transform="rotate(90 32 18)"
          />
          <rect
            x="8"
            y="18"
            width="4"
            height="6"
            rx="2"
            transform="rotate(90 8 18)"
          />
          <rect
            x="29.3"
            y="6.3"
            width="4"
            height="6"
            rx="2"
            transform="rotate(45 29.3 6.3)"
          />
          <rect
            x="8.5"
            y="27.1"
            width="4"
            height="6"
            rx="2"
            transform="rotate(45 8.5 27.1)"
          />
          <rect
            x="33.7"
            y="29.3"
            width="4"
            height="6"
            rx="2"
            transform="rotate(135 33.7 29.3)"
          />
          <rect
            x="12.9"
            y="8.5"
            width="4"
            height="6"
            rx="2"
            transform="rotate(135 12.9 8.5)"
          />
        </g>
        {/* Sun center */}
        <circle cx="20" cy="20" r="8" className="fill-amber" />
        {/* Roof shape overlay */}
        <path
          d="M20 14L28 22H12L20 14Z"
          className={variant === 'dark' ? 'fill-navy' : 'fill-white'}
        />
      </svg>

      {showText && (
        <span className={cn('text-xl font-semibold', textColor)}>
          BrightRoof
          <span className="text-amber"> Solar</span>
        </span>
      )}
    </div>
  );
}
