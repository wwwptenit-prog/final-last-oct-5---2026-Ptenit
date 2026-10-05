/**
 * =====================================================================
 * PTENit SITE ASSETS & IMAGES CONFIGURATION (ছবি ও মিডিয়া অ্যাসেট)
 * =====================================================================
 * For easy editing in VS Code (Laravel-style Asset/Config Pattern).
 * আপনি VS Code দিয়ে যে কোনো ছবি, ব্যানার, লোগো বা আইকন লিঙ্ক এখানে পরিবর্তন করতে পারবেন।
 */

export const SITE_ASSETS = {
  // ১. প্রাতিষ্ঠানিক লোগো ও ফেভিকন (Logos & Favicon)
  branding: {
    logoUrl: '/assets/logo.png', // যদি থাকে, অন্যথায় নিচে ফলব্যাক
    logoDarkUrl: '/assets/logo-white.png',
    faviconUrl: '/favicon.ico',
    logoFallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">...</svg>`,
  },

  // ২. হিরো ও ব্যানার ইমেজ (Hero & Banner Images)
  banners: {
    heroIllustration: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    heroStudentBg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    marketplaceHero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    servicesHero: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    promotionalOffer: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  },

  // ৩. কোর্স ও ক্যাটাগরি থাম্বনেইল ডিফল্ট (Default Course & Category Thumbnails)
  courseThumbnails: {
    webDevelopment: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    graphicsDesign: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    digitalMarketing: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    pythonDjango: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    appDevelopment: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    cyberSecurity: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
  },

  // ৪. ইউজার ও মেন্টর ডিফল্ট অ্যাভাটার (Default Avatars)
  avatars: {
    studentDefault: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    instructorDefault: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    femaleStudentDefault: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    adminDefault: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },

  // ৫. পেমেন্ট মেথড আইকন ও ব্যাজ (Payment Logos)
  paymentLogos: {
    bkash: 'https://cdn.iconscout.com/icon/free/png-256/free-bkash-3384872-2822951.png',
    nagad: 'https://cdn.iconscout.com/icon/free/png-256/free-nagad-3384873-2822952.png',
    rocket: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png',
    sslcommerz: 'https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-01.png',
  },

  // ৬. সোশ্যাল মিডিয়া ও অ্যাপ স্টোর লিঙ্ক (Social & App Store)
  socialLinks: {
    facebook: 'https://facebook.com/ptenit',
    youtube: 'https://youtube.com/@ptenit',
    linkedin: 'https://linkedin.com/company/ptenit',
    whatsapp: 'https://wa.me/8801700000000',
    telegram: 'https://t.me/ptenit',
  }
} as const;

export type SiteAssetsType = typeof SITE_ASSETS;
