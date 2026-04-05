'use client';

import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import {
  MCSBadge,
  TrustedTraderBadge,
  TrustpilotBadge,
} from '@/components/ui/trust-badges';
import { companyInfo } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { ref, animate, variants } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')",
        }}
      />
      {/* White gradient overlay for legibility - slightly more transparent to show solar panels */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/85" />
      {/* Subtle dark gradient at bottom edge for smooth transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-100/50 to-transparent" />

      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={animate}
        variants={variants}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        {/* Trust Badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <MCSBadge size="sm" />
          <TrustedTraderBadge size="sm" />
        </div>

        {/* Headline */}
        <h1 className="text-balance text-4xl font-semibold leading-tight text-navy md:text-5xl lg:text-6xl">
          Find out if your home qualifies for solar — get your results by SMS in minutes
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Answer a few quick questions about your home and energy bill. We&apos;ll send your free eligibility result and rough savings estimate straight to your phone — no waiting, no obligation.
        </p>

        {/* Trustpilot Rating */}
        <div className="mt-6 flex justify-center">
          <TrustpilotBadge
            rating={companyInfo.stats.rating}
            reviewCount={companyInfo.stats.reviewCount}
          />
        </div>

        {/* CTA Button - CTA #1 */}
        <div className="mt-10">
          <CTAButton onClick={onCTAClick} size="large" pulse>
            Get my free SMS result
          </CTAButton>
        </div>

        {/* Reassurance text */}
        <p className="mt-4 text-sm text-muted-foreground">
          Free · No obligation · Results sent by SMS in minutes
        </p>
      </motion.div>
    </section>
  );
}
