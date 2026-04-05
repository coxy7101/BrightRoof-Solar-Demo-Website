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
          Stop paying energy bills that never stop rising
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Thousands of UK homeowners have cut their electricity bills by up to 70% with solar — many pay nothing upfront. Find out in minutes if your home qualifies and how much you could save.
        </p>

        {/* Benefit Icons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="text-sm font-medium text-navy">Cut bills by up to 70%</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
            <span className="text-sm font-medium text-navy">Earn money back via SEG</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-sm font-medium text-navy">Increase your home&apos;s value</span>
          </div>
        </div>

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
