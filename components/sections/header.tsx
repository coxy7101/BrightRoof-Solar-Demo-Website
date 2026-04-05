'use client';

import { BrightRoofLogo } from '@/components/ui/bright-roof-logo';
import { CTAButton } from '@/components/ui/cta-button';
import { companyInfo } from '@/lib/data';

interface HeaderProps {
  onCTAClick: () => void;
}

export function Header({ onCTAClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <BrightRoofLogo />

        {/* Right side: Phone + CTA */}
        <div className="flex items-center gap-4">
          {/* Phone number - hidden on mobile */}
          <a
            href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
            className="hidden items-center gap-2 text-navy transition-colors hover:text-amber md:flex"
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

          {/* CTA Button */}
          <CTAButton
            onClick={onCTAClick}
            className="hidden sm:inline-flex md:min-w-0 md:w-auto md:px-4"
          >
            Get your free result
          </CTAButton>

          {/* Mobile phone icon only */}
          <a
            href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-amber text-white sm:hidden"
            aria-label="Call us"
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
          </a>
        </div>
      </div>
    </header>
  );
}
