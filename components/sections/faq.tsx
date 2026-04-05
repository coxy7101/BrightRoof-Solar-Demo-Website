'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import { faqs } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface FAQProps {
  onCTAClick: () => void;
}

export function FAQ({ onCTAClick }: FAQProps) {
  const { ref, animate, variants } = useScrollAnimation();
  const [openId, setOpenId] = useState<number | null>(1); // First item open by default

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={animate}
          variants={variants}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-semibold text-navy md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers. If you can&apos;t find what
            you&apos;re looking for, give us a call.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>

        {/* CTA - CTA #6 */}
        <motion.div
          initial="hidden"
          animate={animate}
          variants={variants}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-muted-foreground">Still have questions?</p>
          <CTAButton onClick={onCTAClick}>{"Get my free eligibility result \u2192"}</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  const { ref, animate, variants } = useScrollAnimation({ delay: index * 0.05 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={animate}
      variants={variants}
      className="overflow-hidden rounded-lg border border-border bg-card"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-secondary/50"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="pr-4 font-semibold text-navy">{faq.question}</span>
        <svg
          className={cn(
            'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border-t border-border px-6 pb-6 pt-4">
              <p className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
