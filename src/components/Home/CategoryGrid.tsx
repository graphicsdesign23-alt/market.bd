import React, { useState } from 'react';
import { useMarket } from '../../context/MarketContext';
import { CATEGORIES } from '../../data/bangladeshData';
import { getOptimizedImageUrl } from '../../utils/imageUtils';
import {
  Smartphone,
  Laptop,
  Car,
  Home as HomeIcon,
  Armchair,
  Shirt,
  BookOpen,
  Briefcase,
  Wrench,
  Dog,
  Tv,
  Hammer,
  Utensils,
  Sparkles,
  Baby,
  Sprout,
  Building2,
  Package,
  GraduationCap,
  Plane,
  Ticket,
  ChevronRight,
  Layers
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-4 h-4" />,
  Laptop: <Laptop className="w-4 h-4" />,
  Car: <Car className="w-4 h-4" />,
  Home: <HomeIcon className="w-4 h-4" />,
  Armchair: <Armchair className="w-4 h-4" />,
  Shirt: <Shirt className="w-4 h-4" />,
  BookOpen: <BookOpen className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
  Dog: <Dog className="w-4 h-4" />,
  Tv: <Tv className="w-4 h-4" />,
  Hammer: <Hammer className="w-4 h-4" />,
  Utensils: <Utensils className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Baby: <Baby className="w-4 h-4" />,
  Sprout: <Sprout className="w-4 h-4" />,
  Building2: <Building2 className="w-4 h-4" />,
  Package: <Package className="w-4 h-4" />,
  GraduationCap: <GraduationCap className="w-4 h-4" />,
  Plane: <Plane className="w-4 h-4" />,
  Ticket: <Ticket className="w-4 h-4" />,
};

export const CategoryGrid: React.FC = () => {
  const { language, setFilters, setActiveTab } = useMarket();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleCategoryClick = (catId: string, subCatId: string = '') => {
    setFilters(prev => ({ ...prev, category: catId, subCategory: subCatId, searchQuery: '' }));
    setActiveTab('search');
  };

  return (
    <div className="w-full relative">
      {/* Category Sidebar Title */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-pink-500/30">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-pink-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-black text-slate-900 dark:text-white leading-none">
              {language === 'bn' ? 'ক্যাটাগরি সমূহ' : 'Browse Categories'}
            </h2>
            <p className="text-[10px] text-pink-600 dark:text-pink-400 font-bold mt-0.5">
              {CATEGORIES.length} {language === 'bn' ? 'টি ক্যাটাগরি' : 'Categories'}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: '', subCategory: '' }));
            setActiveTab('search');
          }}
          className="text-[11px] font-black text-pink-600 dark:text-pink-400 hover:underline shrink-0 cursor-pointer"
        >
          {language === 'bn' ? 'সব →' : 'All →'}
        </button>
      </div>

      {/* Vertical Sidebar List - Top to Bottom */}
      <div className="flex flex-col gap-1.5 relative">
        {CATEGORIES.map(cat => {
          const icon = ICON_MAP[cat.icon] || <Smartphone className="w-4 h-4" />;
          const isHovered = hoveredCategory === cat.id;

          // Single Image
          const catSingleImage = cat.image || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=85';

          return (
            <div
              key={cat.id}
              onMouseEnter={() => setHoveredCategory(cat.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="relative"
            >
              {/* Category Card Item */}
              <div
                onClick={() => handleCategoryClick(cat.id)}
                className={`w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1.5 shadow-2xs hover:shadow-md hover:border-pink-500 transition-all duration-200 cursor-pointer flex items-center gap-2.5 relative group ${
                  isHovered ? 'bg-pink-50/80 dark:bg-slate-800/90 border-pink-500' : ''
                }`}
              >
                {/* Image Frame: Single image filling full frame, half size height */}
                <div className="relative h-12 w-16 sm:w-20 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={getOptimizedImageUrl(catSingleImage, 300)}
                    alt={cat.nameEn}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-105 group-hover:scale-110 transition duration-300 bg-slate-200 dark:bg-slate-800"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.retried) {
                        target.dataset.retried = 'true';
                        target.src = getOptimizedImageUrl('https://images.unsplash.com/photo-1523275335684-37898b6baf30', 300);
                      }
                    }}
                  />
                  {/* Icon Badge Overlay */}
                  <div className="absolute top-0.5 left-0.5 z-10 w-4 h-4 rounded bg-pink-600 text-white flex items-center justify-center text-[9px] shadow-2xs">
                    {icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0 pr-1">
                  <h3 className="font-black text-slate-900 dark:text-white text-xs leading-tight truncate group-hover:text-pink-600 dark:group-hover:text-pink-400 transition">
                    {language === 'bn' ? cat.nameBn : cat.nameEn}
                  </h3>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold block truncate">
                    {cat.count.toLocaleString()} {language === 'bn' ? 'টি বিজ্ঞাপন' : 'ads'}
                  </span>
                </div>

                {/* Right Arrow Icon */}
                <ChevronRight className="w-4 h-4 text-pink-600 dark:text-pink-400 group-hover:translate-x-0.5 transition shrink-0" />
              </div>

              {/* RIGHT SIDE SUB-CATEGORIES / SUB-MODELS POPUP FLYOUT */}
              {isHovered && cat.subcategories && cat.subcategories.length > 0 && (
                <div className="absolute z-50 left-full top-0 ml-2 w-64 sm:w-72 md:w-80 bg-white dark:bg-slate-900 border border-pink-500/40 dark:border-pink-500/30 rounded-2xl shadow-2xl p-3 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-pink-100 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="w-6 h-6 rounded bg-pink-600 text-white flex items-center justify-center text-xs shrink-0">
                        {icon}
                      </div>
                      <span className="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                        {language === 'bn' ? cat.nameBn : cat.nameEn}
                      </span>
                    </div>
                    <span className="text-[10px] bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 font-black px-2 py-0.5 rounded-full shrink-0">
                      {cat.subcategories.length} {language === 'bn' ? 'টি সাব-মোডেল' : 'Sub-models'}
                    </span>
                  </div>

                  <div className="max-h-64 overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-pink-400">
                    {cat.subcategories.map((sub, idx) => (
                      <button
                        key={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(cat.id, sub.id);
                        }}
                        className="w-full text-left px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-pink-600 hover:text-white transition flex items-center justify-between group/sub cursor-pointer"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span className="w-4 h-4 rounded-full bg-pink-100 dark:bg-slate-800 text-pink-700 dark:text-pink-300 group-hover/sub:bg-white group-hover/sub:text-pink-600 text-[9px] font-black flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="truncate">
                            {language === 'bn' ? sub.nameBn : sub.nameEn}
                          </span>
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/sub:text-white shrink-0" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="w-full mt-2 py-1.5 bg-pink-50 dark:bg-slate-800 hover:bg-pink-600 hover:text-white text-pink-700 dark:text-pink-300 font-black text-xs rounded-xl border border-pink-200 dark:border-pink-800 transition cursor-pointer text-center"
                  >
                    {language === 'bn' ? `সব দেখুন (${cat.nameBn})` : `Browse All in ${cat.nameEn}`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MobileCategoryGrid: React.FC = () => {
  const { language, setFilters, setActiveTab } = useMarket();

  const handleCategoryClick = (catId: string) => {
    setFilters(prev => ({ ...prev, category: catId, subCategory: '', searchQuery: '' }));
    setActiveTab('search');
  };

  return (
    <div className="w-full relative">
      {/* Category Section Header */}
      <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-pink-500/30">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-pink-600 text-white flex items-center justify-center font-black text-[10px] shadow-2xs">
            <Layers className="w-3 h-3" />
          </div>
          <div>
            <h2 className="text-[11px] font-black text-slate-900 dark:text-white leading-tight">
              {language === 'bn' ? 'ব্রাউজ ক্যাটাগরি' : 'Browse Categories'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: '', subCategory: '' }));
            setActiveTab('search');
          }}
          className="text-[9px] font-black text-pink-600 dark:text-pink-400 hover:underline shrink-0 cursor-pointer"
        >
          {language === 'bn' ? 'সবগুলো →' : 'All →'}
        </button>
      </div>

      {/* 3-Row Compact Grid Container (Bikroy.com Style horizontal scrollable 3-row grid box) */}
      <div className="grid grid-rows-3 grid-flow-col auto-cols-[88px] xs:auto-cols-[96px] sm:auto-cols-[110px] overflow-x-auto gap-1.5 pb-0.5 pt-0.5 scrollbar-thin snap-x scroll-smooth">
        {CATEGORIES.map(cat => {
          const icon = ICON_MAP[cat.icon] || <Smartphone className="w-3 h-3" />;
          const catSingleImage = cat.image || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80';

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="snap-start h-[46px] bg-slate-50 dark:bg-slate-800/80 border border-pink-500/50 dark:border-pink-500/40 hover:border-pink-600 rounded-lg p-1 shadow-2xs hover:shadow-xs transition-all duration-150 cursor-pointer flex items-center gap-1.5 text-left group active:scale-95 shrink-0"
            >
              {/* Category Thumbnail Image with Icon Badge */}
              <div className="relative h-8 w-8 rounded-md overflow-hidden border border-pink-400/70 shrink-0 bg-white dark:bg-slate-900">
                <img
                  src={getOptimizedImageUrl(catSingleImage, 150)}
                  alt={cat.nameEn}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-200"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.retried) {
                      target.dataset.retried = 'true';
                      target.src = getOptimizedImageUrl('https://images.unsplash.com/photo-1523275335684-37898b6baf30', 150);
                    }
                  }}
                />
                <div className="absolute top-0 left-0 w-3 h-3 rounded-br bg-pink-600 text-white flex items-center justify-center text-[7px] shadow-2xs">
                  {icon}
                </div>
              </div>

              {/* Text Info */}
              <div className="min-w-0 flex-1">
                <h3 className="font-extrabold text-[9.5px] text-slate-900 dark:text-slate-100 leading-tight truncate group-hover:text-pink-600 dark:group-hover:text-pink-400">
                  {language === 'bn' ? cat.nameBn : cat.nameEn}
                </h3>
                <span className="text-[8px] text-slate-500 dark:text-slate-400 font-bold block mt-0.5 truncate">
                  {cat.count.toLocaleString()} {language === 'bn' ? 'টি' : 'ads'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
