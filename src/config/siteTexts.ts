/**
 * =====================================================================
 * PTENit SITE TEXTS & CONTENT CONFIGURATION (সাইট টেক্সট ও কন্টেন্ট)
 * =====================================================================
 * For easy editing in VS Code (Laravel-style Language/Config Pattern).
 * আপনি VS Code দিয়ে যে কোনো শিরোনাম, স্লোগান, নোটিশ বা টেক্সট এখানে সহজেই পরিবর্তন করতে পারবেন।
 */

export const SITE_TEXTS = {
  // ১. সাধারণ ও ব্র্যান্ড পরিচয় (Brand & Identity)
  brand: {
    name: 'PTENit',
    shortName: 'পিটেন আইটি',
    tagline: 'লার্নিং, মার্কেটপ্লেস ও ডিজিটাল সার্ভিসেস প্ল্যাটফর্ম',
    slogan: 'দক্ষতা অর্জন করুন, ফ্রিল্যান্সিংয়ে ক্যারিয়ার গড়ুন',
    established: '২০২১',
    copyright: `© ${new Date().getFullYear()} PTENit Limited. সর্বস্বত্ব সংরক্ষিত।`,
  },

  // ২. হেডার ও নেভিগেশন মেনু (Navigation Menu Labels)
  nav: {
    home: 'হোম',
    courses: 'কোর্সসমূহ',
    marketplace: 'মার্কেটপ্লেস',
    services: 'সার্ভিসেস',
    digitalProducts: 'ডিজিটাল প্রোডাক্ট',
    gallery: 'গ্যালারি',
    about: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    login: 'লগইন',
    signup: 'রেজিস্ট্রেশন',
    dashboard: 'ড্যাশবোর্ড',
    adminPanel: 'এডমিন প্যানেল',
    cart: 'কার্ট',
    searchPlaceholder: 'কোর্স, সার্ভিস বা প্রজেক্ট খুঁজুন...',
  },

  // ৩. হিরো সেকশন টেক্সট (Hero Section Texts)
  hero: {
    badge: '🚀 বাংলাদেশের আধুনিক লার্নিং ও মার্কেটপ্লেস ইকোসিস্টেম',
    titleLine1: 'দক্ষতা তৈরি করুন,',
    titleHighlight: 'প্রফেশনাল মার্কেটপ্লেসে',
    titleLine2: 'সরাসরি আয় শুরু করুন।',
    description: 'দেশ সেরা ইন্ডাস্ট্রি মেন্টরদের লাইভ ও প্রজেক্ট-ভিত্তিক ট্রেনিং, সরাসরি ক্লায়েন্ট প্রজেক্টে কাজ করার সুযোগ এবং ডিজিটাল প্রডাক্ট বাই-সেলের স্বয়ংসম্পূর্ণ প্ল্যাটফর্ম।',
    primaryCta: 'কোর্সসমূহ দেখুন',
    secondaryCta: 'মার্কেটপ্লেস গিগ খুঁজুন',
    stats: {
      studentsCount: '১৫,০০০+',
      studentsLabel: 'সফল শিক্ষার্থী',
      coursesCount: '৫০+',
      coursesLabel: 'প্রফেশনাল কোর্স',
      successRate: '৯৮%',
      successLabel: 'সফলতার হার',
      instructorsCount: '৪০+',
      instructorsLabel: 'দক্ষ মেন্টর ও স্পেশালিস্ট',
    }
  },

  // ৪. মার্কেটপ্লেস সেকশন টেক্সট (Marketplace Section Texts)
  marketplace: {
    title: 'PTENit ফ্রিল্যান্স মার্কেটপ্লেস',
    subtitle: 'নিরাপদ এসক্রো পেমেন্ট, সরাসরি ক্লায়েন্ট ডিল এবং প্রফেশনাল ফ্রিল্যান্সিং',
    orderGuarantee: '১০০% মানিব্যাক গ্যারান্টি ও ২৪/৭ লাইভ সাপোর্ট',
    tabs: {
      all: 'সকল সার্ভিস',
      webDev: 'ওয়েব ডেভেলপমেন্ট',
      graphics: 'গ্রাফিক্স ডিজাইন',
      marketing: 'ডিজিটাল মার্কেটিং',
      video: 'ভিডিও এডিটিং',
      app: 'অ্যাপ ডেভেলপমেন্ট',
    }
  },

  // ৫. যোগাযোগ ও অফিস সংক্রান্ত তথ্য (Contact & Location Info)
  contact: {
    officeTitle: 'প্রধান কার্যালয়',
    address: 'বাড়ি নং ১২, রোড নং ০৪, সেক্টর ০৩, উত্তরা, ঢাকা-১২৩০, বাংলাদেশ।',
    phonePrimary: '+880 1700-000000',
    phoneSecondary: '+880 1800-000000',
    emailSupport: 'support@ptenit.com',
    emailInfo: 'info@ptenit.com',
    emailAdmin: 'admin@ptenit.com',
    workingHours: 'শনিবার - বৃহস্পতিবার: সকাল ৯:০০ - রাত ৮:০০',
  },

  // ৬. ফুটার সেকশন টেক্সট (Footer Texts & Links)
  footer: {
    aboutText: 'PTENit বাংলাদেশের অন্যতম দ্রুত বর্ধনশীল আইটি লার্নিং, ফ্রিল্যান্স মার্কেটপ্লেস এবং ডিজিটাল সলিউশন প্ল্যাটফর্ম। তরুণদের দক্ষ করে গড়ে তোলাই আমাদের প্রধান অঙ্গীকার।',
    quickLinksTitle: 'প্রয়োজনীয় লিংক',
    categoriesTitle: 'জনপ্রিয় ক্যাটাগরি',
    legalTitle: 'নীতিমালা ও শর্তাবলী',
    terms: 'ব্যবহারের শর্তাবলী',
    privacy: 'গোপনীয়তা নীতিমালা',
    refund: 'রিফান্ড ও রিটার্ন পলিসি',
    faq: 'সাধারণ জিজ্ঞাসা (FAQ)',
  }
} as const;

export type SiteTextsType = typeof SITE_TEXTS;
