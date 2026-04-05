'use client';

import { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import { timePreferences } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface FormData {
  firstName: string;
  phone: string;
  postcode: string;
  timePreference: string;
}

interface FormErrors {
  firstName?: string;
  phone?: string;
  postcode?: string;
  timePreference?: string;
}

export const LeadCapture = forwardRef<HTMLElement>(function LeadCapture(_, ref) {
  const { ref: animRef, animate, variants } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    phone: '',
    postcode: '',
    timePreference: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation helpers
  const validatePhone = (phone: string): boolean => {
    // UK phone: starts with 0 or +44, 10-11 digits
    const cleaned = phone.replace(/\s/g, '');
    const ukPhoneRegex = /^(\+44|0)[0-9]{9,10}$/;
    return ukPhoneRegex.test(cleaned);
  };

  const validatePostcode = (postcode: string): boolean => {
    // UK postcode format
    const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i;
    return postcodeRegex.test(postcode.trim());
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim() || formData.firstName.trim().length < 2) {
      newErrors.firstName = 'Please enter your first name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid UK phone number';
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Please enter your postcode';
    } else if (!validatePostcode(formData.postcode)) {
      newErrors.postcode = 'Please enter a valid UK postcode';
    }

    if (!formData.timePreference) {
      newErrors.timePreference = 'Please select a preferred time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        phone: '',
        postcode: '',
        timePreference: '',
      });
      setIsSuccess(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section ref={ref} className="bg-background py-16 md:py-24" id="lead-form">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={animRef as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={animate}
          variants={variants}
          className="rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold text-navy md:text-4xl">
              Get your free solar eligibility result
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us a little about your home and energy use. We&apos;ll send your personalised eligibility result and savings estimate straight to your phone within minutes. If your home looks like a great fit, one of our advisors may give you a quick call to talk you through your options — no pressure, no obligation.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 rounded-lg bg-success/10 p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
                  <svg
                    className="h-8 w-8 text-success"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy">
                  Thanks {formData.firstName}!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  One of our advisors will call you within 2 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-navy"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={cn(
                      'mt-2 w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20',
                      errors.firstName ? 'border-destructive' : 'border-input'
                    )}
                    aria-describedby={
                      errors.firstName ? 'firstName-error' : undefined
                    }
                  />
                  {errors.firstName && (
                    <p
                      id="firstName-error"
                      className="mt-1 text-sm text-destructive"
                    >
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07123 456789"
                    className={cn(
                      'mt-2 w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20',
                      errors.phone ? 'border-destructive' : 'border-input'
                    )}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Postcode */}
                <div>
                  <label
                    htmlFor="postcode"
                    className="block text-sm font-medium text-navy"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="SW1A 1AA"
                    className={cn(
                      'mt-2 w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20',
                      errors.postcode ? 'border-destructive' : 'border-input'
                    )}
                    aria-describedby={
                      errors.postcode ? 'postcode-error' : undefined
                    }
                  />
                  {errors.postcode && (
                    <p
                      id="postcode-error"
                      className="mt-1 text-sm text-destructive"
                    >
                      {errors.postcode}
                    </p>
                  )}
                </div>

                {/* Time Preference */}
                <div>
                  <label
                    htmlFor="timePreference"
                    className="block text-sm font-medium text-navy"
                  >
                    Best time to call
                  </label>
                  <select
                    id="timePreference"
                    name="timePreference"
                    value={formData.timePreference}
                    onChange={handleChange}
                    className={cn(
                      'mt-2 w-full rounded-lg border bg-background px-4 py-3 text-foreground focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20',
                      errors.timePreference
                        ? 'border-destructive'
                        : 'border-input',
                      !formData.timePreference && 'text-muted-foreground'
                    )}
                    aria-describedby={
                      errors.timePreference ? 'timePreference-error' : undefined
                    }
                  >
                    <option value="">Select a time</option>
                    {timePreferences.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.timePreference && (
                    <p
                      id="timePreference-error"
                      className="mt-1 text-sm text-destructive"
                    >
                      {errors.timePreference}
                    </p>
                  )}
                </div>

                {/* Submit Button - CTA #7 */}
                <CTAButton
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-8"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Send my free result by SMS'
                  )}
                </CTAButton>

                {/* Privacy Note */}
                <p className="text-center text-xs text-muted-foreground">
                  🔒 Your details are safe. Results sent by SMS within minutes. We will never share your data or spam you.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
});
