'use client';

import { motion } from 'framer-motion';
import { guarantees } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';

export function Guarantees() {
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
            Our Guarantees to You
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 md:text-lg">
            We stand behind our work with industry-leading warranties and
            guarantees.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-4">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard
              key={guarantee.id}
              guarantee={guarantee}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface GuaranteeCardProps {
  guarantee: (typeof guarantees)[0];
  index: number;
}

function GuaranteeCard({ guarantee, index }: GuaranteeCardProps) {
  const { ref, animate, variants } = useScrollAnimation({ delay: index * 0.1 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={animate}
      variants={variants}
      className="border-l-[3px] border-amber pl-5"
    >
      <h3 className="text-lg font-semibold text-navy">{guarantee.title}</h3>
      <p className="mt-2 text-muted-foreground">{guarantee.description}</p>
    </motion.div>
  );
}
