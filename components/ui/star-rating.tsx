import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  className,
}: StarRatingProps) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      role="img"
      aria-label={`${rating} out of ${maxRating} stars`}
    >
      {Array.from({ length: maxRating }, (_, i) => (
        <svg
          key={i}
          className={cn(
            sizes[size],
            i < rating ? 'fill-amber text-amber' : 'fill-muted text-muted'
          )}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
