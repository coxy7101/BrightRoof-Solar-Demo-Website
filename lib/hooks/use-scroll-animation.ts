'use client';

import { useRef } from 'react';
import { useInView, type Variants } from 'framer-motion';

interface UseScrollAnimationOptions {
  delay?: number;
  once?: boolean;
  margin?: string;
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement | null>;
  isInView: boolean;
  animate: 'hidden' | 'visible';
  variants: Variants;
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn {
  const { delay = 0, once = true, margin = '-50px' } = options;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return {
    ref,
    isInView,
    animate: isInView ? 'visible' : 'hidden',
    variants,
  };
}

// Stagger animation for card grids
export function useStaggerAnimation(
  index: number,
  baseDelay: number = 0.1
): UseScrollAnimationReturn {
  return useScrollAnimation({ delay: index * baseDelay });
}

// Pulse animation variants for CTA buttons
export const pulseVariants: Variants = {
  initial: {
    boxShadow: '0 0 0 0 rgba(245, 158, 11, 0)',
  },
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(245, 158, 11, 0.7)',
      '0 0 0 12px rgba(245, 158, 11, 0)',
    ],
    transition: {
      duration: 1.5,
      repeat: 2,
      repeatType: 'loop',
      ease: 'easeOut',
    },
  },
};

// Fade in variants for simple animations
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Scale in variants
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};
