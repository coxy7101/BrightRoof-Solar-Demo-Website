'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import { companyInfo } from '@/lib/data';

interface StickyMobileBarProps {
  onCTAClick: () => void;
  formRef: React.RefObject<HTMLElement | null>;
}

export function StickyMobileBar({ onCTAClick, formRef }: StickyMobileBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const formElement = formRef.current;
    if (!formElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide bar when form is visible
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    observer.observe(formElement);

    return () => {
      observer.disconnect();
    };
  }, [formRef]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-md items-center justify-between gap-4">
            {/* Phone */}
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-navy"
              aria-label={`Call ${companyInfo.phone}`}
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-sm font-semibold">{companyInfo.phone}</span>
            </a>

            {/* CTA - CTA #5 */}
            <CTAButton
              onClick={onCTAClick}
              className="flex-1 md:flex-none md:min-w-0 md:w-auto"
            >
              Get my free result
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
