'use client';

import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import { pricingTiers } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface PricingProps {
  onCTAClick: () => void;
}

export function Pricing({ onCTAClick }: PricingProps) {
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
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            No hidden fees. All prices include installation, VAT, and our
            comprehensive warranty package.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
              onCTAClick={onCTAClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  tier: (typeof pricingTiers)[0];
  index: number;
  onCTAClick: () => void;
}

function PricingCard({ tier, index, onCTAClick }: PricingCardProps) {
  const { ref, animate, variants } = useScrollAnimation({ delay: index * 0.1 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={animate}
      variants={variants}
      className={cn(
        'relative flex flex-col rounded-2xl border bg-card p-8',
        tier.popular
          ? 'border-2 border-navy shadow-xl lg:scale-105'
          : 'border-border'
      )}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-navy px-4 py-1.5 text-sm font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-navy">{tier.name}</h3>
        <p className="mt-1 text-muted-foreground">{tier.systemSize} system</p>
      </div>

      {/* Price */}
      <div className="mt-6 text-center">
        <span className="text-4xl font-semibold text-navy">{tier.price}</span>
        <p className="mt-1 text-sm text-muted-foreground">{tier.priceNote}</p>
      </div>

      {/* Savings */}
      <div className="mt-4 rounded-lg bg-amber/10 p-3 text-center">
        <p className="text-sm text-muted-foreground">Estimated annual savings</p>
        <p className="font-semibold text-amber">{tier.savingsPerYear}</p>
      </div>

      {/* Features */}
      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-success"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA - CTA #3a, #3b, #3c */}
      <div className="mt-8">
        <CTAButton
          onClick={onCTAClick}
          variant="primary"
          fullWidth
        >
          Check my eligibility free
        </CTAButton>
      </div>
    </motion.div>
  );
}
