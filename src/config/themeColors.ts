/**
 * =====================================================================
 * PTENit THEME COLORS CONFIGURATION (কালার ও থিম কনফিগারেশন)
 * =====================================================================
 * For easy editing in VS Code (Laravel-style Config Pattern).
 * আপনি VS Code দিয়ে খুব সহজে এখান থেকেই সকল ব্র্যান্ড কালার পরিবর্তন করতে পারবেন।
 */

export const THEME_COLORS = {
  // ১. প্রাতিষ্ঠানিক প্রধান ব্র্যান্ড কালার (Primary Brand Colors)
  primary: {
    base: '#006A4E',        // অফিসিয়াল বাংলাদেশ গ্রীন / পিটেন আইটি সিগনেচার গ্রীন
    hover: '#00523d',       // বাটন হোভার কালার
    light: '#e6f3ef',       // হালকা ব্যাকগ্রাউন্ড
    border: '#a3d9ca',      // বর্ডার কালার
    gradientFrom: '#006A4E',
    gradientTo: '#004d38',
  },

  // ২. অ্যাকসেন্ট ও হাইলাইট কালার (Accent & Glow Colors)
  accent: {
    blue: '#38BDF8',        // স্কাই ব্লু হাইলাইট
    indigo: '#6366F1',      // ইন্ডিগো গ্রেডিয়েন্ট
    amber: '#F59E0B',       // রেটিং ও স্টার কালার
    emerald: '#10B981',     // সাকসেস বা সম্পন্ন স্ট্যাটাস
    rose: '#F43F5E',        // ডিসকাউন্ট বা সতর্কতা
    purple: '#8B5CF6',      // স্পেশালিস্ট ও মার্কেটপ্লেস ব্যাজ
  },

  // ৩. ডার্ক মোড কালার প্যালেট (Dark Mode Palette)
  dark: {
    bg: '#0F172A',          // স্লট ৯০০ ডার্ক ব্যাকগ্রাউন্ড
    card: '#1E293B',        // স্লট ৮০০ কার্ড ব্যাকগ্রাউন্ড
    cardHover: '#334155',   // স্লট ৭০০ কার্ড হোভার
    border: '#334155',      // ডার্ক বর্ডার
    textPrimary: '#F8FAFC', // সাদা প্রধান টেক্সট
    textMuted: '#94A3B8',   // হালকা ছাই টেক্সট
  },

  // ৪. লাইট মোড কালার প্যালেট (Light Mode Palette)
  light: {
    bg: '#F8FAFC',          // অফ হোয়াইট ব্যাকগ্রাউন্ড
    card: '#FFFFFF',        // খাঁটি সাদা কার্ড
    cardHover: '#F1F5F9',   // কার্ড হোভার
    border: '#E2E8F0',      // হালকা বর্ডার
    textPrimary: '#0F172A', // গাঢ় প্রধান টেক্সট
    textMuted: '#64748B',   // হালকা টেক্সট
  },

  // ৫. স্ট্যাটাস ব্যাজ কালার (Status Badge Colors)
  status: {
    success: {
      bg: 'bg-emerald-500/15',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500/30',
    },
    warning: {
      bg: 'bg-amber-500/15',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500/30',
    },
    danger: {
      bg: 'bg-rose-500/15',
      text: 'text-rose-600 dark:text-rose-400',
      border: 'border-rose-500/30',
    },
    info: {
      bg: 'bg-blue-500/15',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-500/30',
    },
  },

  // ৬. পেমেন্ট গেটওয়ে ব্র্যান্ড কালার (Payment Gateway Colors)
  payments: {
    bkash: '#E2136E',
    nagad: '#F7941D',
    rocket: '#8C3494',
    upay: '#0072BC',
    bank: '#006A4E',
  }
} as const;

export type ThemeColorsType = typeof THEME_COLORS;
