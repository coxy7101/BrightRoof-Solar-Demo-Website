'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';

interface SavingsEstimatorProps {
  onCTAClick: () => void;
}

export function SavingsEstimator({ onCTAClick }: SavingsEstimatorProps) {
  const { ref, animate, variants } = useScrollAnimation();
  const [monthlyBill, setMonthlyBill] = useState(100);

  // Calculate estimates based on monthly bill
  const estimates = useMemo(() => {
    // System size scales linearly from 3kW (£50) to 10kW (£500)
    const minBill = 50;
    const maxBill = 500;
    const minSystem = 3;
    const maxSystem = 10;

    const clampedBill = Math.min(Math.max(monthlyBill, minBill), maxBill);
    const systemSize =
      minSystem +
      ((clampedBill - minBill) / (maxBill - minBill)) * (maxSystem - minSystem);

    // Annual saving = monthly bill × 8
    const annualSaving = monthlyBill * 8;

    // Payback period based on system size
    let paybackYears: string;
    if (systemSize < 5) {
      paybackYears = '8-9';
    } else if (systemSize < 7) {
      paybackYears = '6-7';
    } else {
      paybackYears = '5-6';
    }

    return {
      systemSize: systemSize.toFixed(1),
      annualSaving: annualSaving.toLocaleString('en-GB'),
      paybackYears,
    };
  }, [monthlyBill]);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={animate}
          variants={variants}
          className="rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold text-navy md:text-4xl">
              See How Much You Could Save
            </h2>
            <p className="mt-4 text-muted-foreground">
              Enter your current monthly electricity bill to get an instant
              estimate.
            </p>
          </div>

          {/* Slider Input */}
          <div className="mt-8">
            <label
              htmlFor="monthly-bill"
              className="block text-center text-lg font-medium text-navy"
            >
              Monthly electricity bill
            </label>
            <div className="mt-4 text-center">
              <span className="text-4xl font-semibold text-amber">
                £{monthlyBill}
              </span>
            </div>
            <input
              type="range"
              id="monthly-bill"
              min="50"
              max="500"
              step="10"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-amber"
              aria-label="Monthly electricity bill amount"
            />
            <div className="mt-2 flex justify-between text-sm text-muted-foreground">
              <span>£50</span>
              <span>£500</span>
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <ResultCard
              label="System Size"
              value={`${estimates.systemSize}kW`}
              sublabel="Recommended"
            />
            <ResultCard
              label="Annual Savings"
              value={`£${estimates.annualSaving}`}
              sublabel="Estimated"
              highlight
            />
            <ResultCard
              label="Payback Period"
              value={`${estimates.paybackYears} years`}
              sublabel="Typical"
            />
          </div>

          {/* CTA - CTA #2 */}
          <div className="mt-8 text-center">
            <CTAButton onClick={onCTAClick}>Get my personalised result by SMS</CTAButton>
            <p className="mt-3 text-sm text-muted-foreground">
              Free personalised assessment based on your home
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ResultCardProps {
  label: string;
  value: string;
  sublabel: string;
  highlight?: boolean;
}

function ResultCard({ label, value, sublabel, highlight }: ResultCardProps) {
  return (
    <div
      className={`rounded-lg p-4 text-center ${
        highlight ? 'bg-amber/10 ring-1 ring-amber/20' : 'bg-secondary'
      }`}
    >
      <p className="text-sm text-muted-foreground">{label}</p>
      <p
        className={`mt-1 text-2xl font-semibold ${
          highlight ? 'text-amber' : 'text-navy'
        }`}
      >
        {value}
      </p>
      <p className="text-xs text-muted-foreground">{sublabel}</p>
    </div>
  );
}
