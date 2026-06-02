'use client';

import { motion } from 'framer-motion';
import { StarRating } from '@/components/ui/star-rating';
import { TestimonialBadge, TrustpilotBadge } from '@/components/ui/trust-badges';
import { testimonials, companyInfo } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';

export function Testimonials() {
  const { ref, animate, variants } = useScrollAnimation();

  return (
    <section className="bg-secondary py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={animate}
          variants={variants}
          className="text-center"
        >
          <h2 className="text-balance text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
            Trusted by {companyInfo.stats.homesPowered} UK Homeowners
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 md:text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say.
          </p>
          <div className="mt-3 flex justify-center sm:mt-4">
            <TrustpilotBadge
              rating={companyInfo.stats.rating}
              reviewCount={companyInfo.stats.reviewCount}
            />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { ref, animate, variants } = useScrollAnimation({ delay: index * 0.1 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={animate}
      variants={variants}
      className="flex flex-col rounded-xl border border-border bg-card p-6"
    >
      {/* Badge */}
      {testimonial.badge && (
        <div className="mb-4">
          <TestimonialBadge
            type={testimonial.badge.type}
            text={testimonial.badge.text}
          />
        </div>
      )}

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <div>
          <p className="font-semibold text-navy">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
        <StarRating rating={testimonial.rating} size="sm" />
      </div>
    </motion.div>
  );
}
