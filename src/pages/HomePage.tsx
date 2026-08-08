import React, { useState, useEffect } from 'react';
import { useMarket } from '../context/MarketContext';
import { CategoryGrid, MobileCategoryGrid } from '../components/Home/CategoryGrid';
import { FlashSale } from '../components/Home/FlashSale';
import { ProductCard } from '../components/Product/ProductCard';
import { SEOHelmet } from '../components/SEO/SEOHelmet';
import {
  Zap,
  LayoutGrid,
  Rows,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    language,
    products,
    setActiveTab,
    setFilters,
  } = useMarket();

  const [adViewMode, setAdViewMode] = useState<'grid' | 'list'>('grid');
  const [featuredOffset, setFeaturedOffset] = useState(0);

  // Filter Featured & Urgent Ads
  let featuredAds = products.filter(
    p => (p.adType === 'featured' || p.adType === 'urgent' || p.isFeatured || p.isUrgent) && (p.status === 'active' || !p.status)
  );
  if (featuredAds.length < 5) {
    const remainingActive = products.filter(
      p => (p.status === 'active' || !p.status) && !featuredAds.some(fa => fa.id === p.id)
    );
    featuredAds = [...featuredAds, ...remainingActive];
  }

  // Auto-rotate 5 Featured/Urgent items every 5 minutes if there are > 5 items
  useEffect(() => {
    if (featuredAds.length <= 5) return;
    const interval = setInterval(() => {
      setFeaturedOffset(prev => prev + 5);
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [featuredAds.length]);

  // Sliced rotated 5 items
  const getDisplayFeatured = () => {
    if (featuredAds.length <= 5) return featuredAds.slice(0, 5);
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(featuredAds[(featuredOffset + i) % featuredAds.length]);
    }
    return result;
  };

  const displayedFeatured = getDisplayFeatured();
  const latestProducts = products.filter(p => p.status === 'active' || !p.status);

  return (
    <div className="space-y-4 sm:space-y-6 pb-12">
      <SEOHelmet />

      {/* MOBILE / ANDROID APP VIEW: 3-Row Category Grid Box placed right below Navbar */}
      <div className="block lg:hidden bg-white dark:bg-slate-900 border-2 border-pink-500/70 dark:border-pink-500/60 rounded-xl p-2 sm:p-3 shadow-md">
        <MobileCategoryGrid />
      </div>

      {/* Main Container Layout - Unified for Computer, Tablet & Mobile */}
      <div className="flex flex-col lg:flex-row items-start gap-6">
        
        {/* LEFT SIDEBAR: Vertical Browse Categories (DESKTOP / LAPTOP ONLY) */}
        <aside className="hidden lg:block lg:w-80 xl:w-88 shrink-0 bg-white dark:bg-slate-900 border-2 border-pink-500/70 dark:border-pink-500/60 rounded-2xl p-3 sm:p-4 shadow-xl">
          <CategoryGrid />
        </aside>

        {/* RIGHT CONTENT: Flash Sale & Sellers' Posts (Promoted & Recent Listings) */}
        <main className="flex-1 w-full min-w-0 space-y-6">
          
          {/* 1. Flash Sale Banner (5 Items with 5-minute Auto Rotation) */}
          <FlashSale />

          {/* 2. Featured & Urgent Boosted Ads Section (5 Items with 5-minute Auto Rotation) */}
          <section className="bg-white dark:bg-slate-900 border-2 border-pink-500/70 dark:border-pink-500/60 rounded-2xl p-3.5 sm:p-5 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pink-100 dark:border-slate-800 pb-3">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-600 fill-red-600 animate-pulse shrink-0" />
                  <span>{language === 'bn' ? 'ফিচার্ড ও জরুরি বিজ্ঞাপন' : 'Featured & Urgent Ads'}</span>
                </h2>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                  {language === 'bn' ? 'বিশেষ বুস্টেড জরুরি বিজ্ঞাপন' : 'Top boosted listings with priority visibility'}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                {/* View Layout Toggle Bar */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-pink-300 dark:border-pink-800">
                  <button
                    onClick={() => setAdViewMode('grid')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer ${
                      adViewMode === 'grid'
                        ? 'bg-pink-600 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? 'গ্রিড' : 'Grid'}</span>
                  </button>
                  <button
                    onClick={() => setAdViewMode('list')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer ${
                      adViewMode === 'list'
                        ? 'bg-pink-600 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                    }`}
                    title="Up-Down / List View"
                  >
                    <Rows className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? 'উপরে-নিচে' : 'List'}</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setFilters(prev => ({ ...prev, adType: 'featured' }));
                    setActiveTab('search');
                  }}
                  className="text-xs font-black text-pink-600 dark:text-pink-400 hover:underline cursor-pointer shrink-0"
                >
                  {language === 'bn' ? 'সবগুলো →' : 'See all →'}
                </button>
              </div>
            </div>

            {/* Featured Ads Rendering: Exactly 5 items */}
            {displayedFeatured.length > 0 ? (
              <div
                className={
                  adViewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4'
                    : 'flex flex-col gap-3 sm:gap-4'
                }
              >
                {displayedFeatured.map(product => (
                  <ProductCard key={product.id} product={product} layoutMode={adViewMode} />
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 text-center py-4 font-bold">
                {language === 'bn' ? 'বর্তমানে কোন ফিচার্ড বিজ্ঞাপন নেই' : 'No featured ads currently available.'}
              </p>
            )}
          </section>

          {/* 3. Recent Listings / Running Ads Section */}
          <section className="bg-white dark:bg-slate-900 border-2 border-pink-500/70 dark:border-pink-500/60 rounded-2xl p-3.5 sm:p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-pink-100 dark:border-slate-800 pb-3">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{language === 'bn' ? 'রানিং ও রিসেন্ট বিজ্ঞাপন সমূহ' : 'Running & Recent Listings'}</span>
                </h2>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                  {language === 'bn' ? 'সারাদেশ থেকে বিক্রেতাদের সরাসরি রানিং বিজ্ঞাপন' : 'Fresh running ads posted across all 64 districts'}
                </p>
              </div>

              <button
                onClick={() => {
                  setFilters(prev => ({ ...prev, category: '', subCategory: '' }));
                  setActiveTab('search');
                }}
                className="text-xs font-black text-pink-600 dark:text-pink-400 hover:underline cursor-pointer shrink-0"
              >
                {language === 'bn' ? 'সকল বিজ্ঞাপন →' : 'Browse All →'}
              </button>
            </div>

            <div
              className={
                adViewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4'
                  : 'flex flex-col gap-3 sm:gap-4'
              }
            >
              {latestProducts.map(product => (
                <ProductCard key={product.id} product={product} layoutMode={adViewMode} />
              ))}
            </div>
          </section>

          {/* Trust Banner / Verified Marketplace */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border-2 border-pink-500/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-black shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-sm sm:text-base text-white">
                  {language === 'bn' ? 'ভেরিফাইড ও ১০০% নিরাপদ কেনাবেচা' : '100% Safe & Verified Deals'}
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  {language === 'bn'
                    ? 'সরাসরি চ্যাটে দামাদামি করুন এবং পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন।'
                    : 'Chat live with sellers, inspect products before payment, and shop securely.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('post-ad')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4 py-2 rounded-xl text-xs transition shrink-0 cursor-pointer shadow-md"
            >
              {language === 'bn' ? 'বিজ্ঞাপন দিন' : 'Post Free Ad'}
            </button>
          </div>

        </main>
      </div>
    </div>
  );
};
