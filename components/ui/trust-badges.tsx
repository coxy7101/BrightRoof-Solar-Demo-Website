import { cn } from '@/lib/utils';

interface BadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// MCS Certified Badge
export function MCSBadge({ className, size = 'md' }: BadgeProps) {
  const sizes = {
    sm: 'h-8 text-xs',
    md: 'h-10 text-sm',
    lg: 'h-12 text-base',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-md bg-badge-green-bg px-3 font-semibold text-badge-green-text',
        sizes[size],
        className
      )}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      <span>MCS Certified</span>
    </div>
  );
}

// Which? Trusted Trader Badge
export function TrustedTraderBadge({ className, size = 'md' }: BadgeProps) {
  const sizes = {
    sm: 'h-8 text-xs',
    md: 'h-10 text-sm',
    lg: 'h-12 text-base',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-md bg-badge-blue-bg px-3 font-semibold text-badge-blue-text',
        sizes[size],
        className
      )}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      <span>Which? Trusted</span>
    </div>
  );
}

// Trustpilot Rating Badge
interface TrustpilotBadgeProps extends BadgeProps {
  rating?: string;
  reviewCount?: string;
}

export function TrustpilotBadge({
  className,
  size = 'md',
  rating = '4.9',
  reviewCount = '847',
}: TrustpilotBadgeProps) {
  const sizes = {
    sm: 'text-xs gap-1',
    md: 'text-sm gap-1.5',
    lg: 'text-base gap-2',
  };

  const starSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <div className={cn('inline-flex items-center', sizes[size], className)}>
      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={cn(starSizes[size], 'fill-amber')}
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <span className="font-semibold text-navy">{rating}</span>
      <span className="text-muted-foreground">from {reviewCount} reviews</span>
    </div>
  );
}

// Testimonial Badge (for individual testimonials)
interface TestimonialBadgeProps {
  type: 'blue' | 'green';
  text: string;
  className?: string;
}

export function TestimonialBadge({
  type,
  text,
  className,
}: TestimonialBadgeProps) {
  const colors = {
    blue: 'bg-badge-blue-bg text-badge-blue-text',
    green: 'bg-badge-green-bg text-badge-green-text',
  };

  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-medium',
        colors[type],
        className
      )}
    >
      {text}
    </span>
  );
}
