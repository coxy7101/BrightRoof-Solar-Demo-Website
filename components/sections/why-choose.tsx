'use client';

import { motion } from 'framer-motion';
import { FeatureIcon } from '@/components/ui/feature-icons';
import { features } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';

export function WhyChoose() {
  const { ref, animate, variants } = useScrollAnimation();

  return (
    <section className="bg-background py-12 md:py-24">
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
            Why Choose BrightRoof?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 md:text-lg">
            We&apos;re committed to making solar simple, affordable, and
            accessible for every UK home.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: (typeof features)[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const { ref, animate, variants } = useScrollAnimation({ delay: index * 0.1 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={animate}
      variants={variants}
      className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
        <FeatureIcon icon={feature.icon} />
      </div>
      <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
      <p className="mt-2 text-muted-foreground">{feature.description}</p>
    </motion.div>
  );
}
