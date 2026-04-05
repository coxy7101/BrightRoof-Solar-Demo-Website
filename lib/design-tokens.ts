/**
 * BrightRoof Solar - Design Tokens
 * Centralized color, spacing, and typography system
 */

// ============================================================================
// COLOR PALETTE (5 total colors)
// ============================================================================

export const colors = {
  // Primary Brand Color
  primary: {
    navy: '#0A1F44',
    navyLight: '#1A3A5A',
  },

  // Accent Color
  accent: {
    amber: '#F59E0B',
    amberHover: '#D97706',
    amberActive: '#B45309',
  },

  // Neutrals
  neutral: {
    white: '#FFFFFF',
    offWhite: '#FAFAFA',
    lightGray: '#F3F4F6',
    gray: '#E5E7EB',
    darkGray: '#6B7280',
    charcoal: '#1F2937',
    black: '#111827',
  },

  // Badge Colors (Customer Service)
  badge: {
    blue: {
      background: '#EFF6FF',
      text: '#1D4ED8',
    },
    green: {
      background: '#F0FDF4',
      text: '#15803D',
    },
  },

  // Semantic Colors
  semantic: {
    background: '#FFFFFF',
    foreground: '#0A1F44',
    foregroundMuted: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    error: '#EF4444',
  },
};

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

export const typography = {
  fontFamily: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  fontWeights: {
    regular: 400,
    semibold: 600,
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '36px',
    '6xl': '42px',
  },
  lineHeight: {
    tight: 1.3,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },
};

// ============================================================================
// SPACING SYSTEM
// ============================================================================

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
  '5xl': '80px',
};

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const radius = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  full: '9999px',
};

// ============================================================================
// TRANSITIONS & ANIMATIONS
// ============================================================================

export const transitions = {
  fast: '100ms ease-in-out',
  base: '150ms ease-in-out',
  slow: '200ms ease-in-out',
};

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  mobile: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  offcanvas: 1040,
  modal: 1050,
  tooltip: 1070,
};

// ============================================================================
// BUTTON STYLES (CTA)
// ============================================================================

export const buttonStyles = {
  cta: {
    base: {
      width: '280px',
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: 600,
      borderRadius: '8px',
      backgroundColor: colors.accent.amber,
      color: colors.neutral.white,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 150ms ease-in-out',
      textAlign: 'center',
      lineHeight: 1.5,
    },
    mobile: {
      width: '100%',
      maxWidth: '100%',
    },
    hover: {
      backgroundColor: colors.accent.amberHover,
    },
    active: {
      transform: 'scale(0.97)',
    },
  },
};

// ============================================================================
// CARD STYLES
// ============================================================================

export const cardStyles = {
  base: {
    borderRadius: '12px',
    border: `1px solid ${colors.semantic.border}`,
    padding: '24px',
    backgroundColor: colors.neutral.white,
    boxShadow: shadows.md,
    transition: `all ${transitions.base}`,
  },
  hover: {
    boxShadow: shadows.lg,
    transform: 'translateY(-2px)',
  },
};

// ============================================================================
// BADGE STYLES (Guarantee Card)
// ============================================================================

export const guaranteeCardStyles = {
  borderLeft: `3px solid ${colors.accent.amber}`,
  paddingLeft: '20px',
};
