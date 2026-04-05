'use client';

import { BrightRoofLogo } from '@/components/ui/bright-roof-logo';
import {
  MCSBadge,
  TrustedTraderBadge,
  TrustpilotBadge,
} from '@/components/ui/trust-badges';
import { companyInfo } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Logo and Contact */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <BrightRoofLogo variant="light" />
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-amber"
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
              <span className="font-semibold">{companyInfo.phone}</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <TrustpilotBadge
              rating={companyInfo.stats.rating}
              reviewCount={companyInfo.stats.reviewCount}
              className="[&_span]:text-white/80 [&_.font-semibold]:text-white"
            />
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <MCSBadge size="sm" />
            <TrustedTraderBadge size="sm" />
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-4 text-center text-sm text-white/60 lg:flex-row lg:justify-between">
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
