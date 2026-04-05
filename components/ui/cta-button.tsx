'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { pulseVariants } from '@/lib/hooks/use-scroll-animation';

interface CTAButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  pulse?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'default',
      pulse = false,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] cursor-pointer';

    const variants = {
      primary:
        'bg-amber text-white hover:bg-amber-hover focus-visible:ring-amber',
      secondary:
        'bg-navy text-white hover:bg-navy-light focus-visible:ring-navy',
    };

    const sizes = {
      default: 'px-6 py-3 text-base',
      large: 'px-8 py-4 text-lg',
    };

    const widthStyles = fullWidth
      ? 'w-full'
      : 'w-full md:w-auto md:min-w-[280px]';

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          widthStyles,
          className
        )}
        variants={pulse ? pulseVariants : undefined}
        initial={pulse ? 'initial' : undefined}
        animate={pulse ? 'animate' : undefined}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

CTAButton.displayName = 'CTAButton';

export { CTAButton };
