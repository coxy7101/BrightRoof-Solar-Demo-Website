'use client';

import { useRef, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { WhyChoose } from '@/components/sections/why-choose';
import { Testimonials } from '@/components/sections/testimonials';
import { SavingsEstimator } from '@/components/sections/savings-estimator';
import { Pricing } from '@/components/sections/pricing';
import { Guarantees } from '@/components/sections/guarantees';
import { FAQ } from '@/components/sections/faq';
import { LeadCapture } from '@/components/sections/lead-capture';
import { Footer } from '@/components/sections/footer';
import { StickyMobileBar } from '@/components/sections/sticky-mobile-bar';

export default function BrightRoofLandingPage() {
  const leadFormRef = useRef<HTMLElement>(null);

  // Scroll to lead form handler - used by all CTAs
  const scrollToForm = useCallback(() => {
    leadFormRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <>
      {/* Header - CTA #4 */}
      <Header onCTAClick={scrollToForm} />

      <main>
        {/* Hero Section - CTA #1 */}
        <Hero onCTAClick={scrollToForm} />

        {/* Why Choose Section */}
        <WhyChoose />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Savings Estimator - CTA #2 */}
        <SavingsEstimator onCTAClick={scrollToForm} />

        {/* Pricing Section - CTA #3a, #3b, #3c */}
        <Pricing onCTAClick={scrollToForm} />

        {/* Guarantees Section */}
        <Guarantees />

        {/* FAQ Section - CTA #6 */}
        <FAQ onCTAClick={scrollToForm} />

        {/* Lead Capture Form - CTA #7 */}
        <LeadCapture ref={leadFormRef} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar - CTA #5 */}
      <StickyMobileBar onCTAClick={scrollToForm} formRef={leadFormRef} />
    </>
  );
}
