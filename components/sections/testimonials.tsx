'use client';

import { motion } from 'framer-motion';
import { StarRating } from '@/components/ui/star-rating';
import { TestimonialBadge, TrustpilotBadge } from '@/components/ui/trust-badges';
import { testimonials, companyInfo } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';

export function Testimonials() {
  const { ref, animate, variants } = useScrollAnimation();

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={animate}
          variants={variants}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-semibold text-navy md:text-4xl">
            Trusted by {companyInfo.stats.homesPowered} UK Homeowners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say.
          </p>
          <div className="mt-4 flex justify-center">
            <TrustpilotBadge
              rating={companyInfo.stats.rating}
              reviewCount={companyInfo.stats.reviewCount}
            />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
