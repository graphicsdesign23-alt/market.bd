import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Language, Location, FilterState, ChatThread, AppNotification, ChatMessage, AppReleaseInfo } from '../types';
import { INITIAL_PRODUCTS } from '../data/mockProducts';
import marketBdLogoImg from '../assets/images/market_bd_logo_1786102322044.jpg';
import { storage } from '../utils/storage';
import { checkAndExpireAds, renewExpiredAd } from '../utils/adExpiryEngine';

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  gender?: 'male' | 'female';
  isVerified?: boolean;
}

export interface ProductReaction {
  likes: number;
  dislikes: number;
  loves: number;
  userReaction?: 'like' | 'dislike' | 'love';
}

export interface SellerReview {
  id: string;
  sellerId: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  userName: string;
  userPhone: string;
  action: 'Viewed Ad' | 'Revealed Phone' | 'Started Chat' | 'Reported Ad';
  adTitle: string;
  adId: string;
  location?: string;
}

export interface SavedAlert {
  id: string;
  query: string;
  category?: string;
  createdAt: string;
}

export interface ChatReport {
  id: string;
  threadId: string;
  reportedUser: string;
  reason: string;
  timestamp: string;
}

export interface DailyAnalytics {
  date: string; // e.g., '2026-08-04'
  dateFormattedBn: string;
  dateFormattedEn: string;
  visitors: number;
  productViews: number;
  phoneReveals: number;
  chatsStarted: number;
}

interface MarketContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedLocation: Location;
  setSelectedLocation: (loc: Location) => void;
  products: Product[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  compareList: Product[];
  toggleCompare: (product: Product) => void;
  clearCompare: () => void;
  chatThreads: ChatThread[];
  activeChat: ChatThread | null;
  setActiveChat: (thread: ChatThread | null) => void;
  sendMessage: (threadId: string, text: string, offerAmount?: number, imageUrl?: string) => void;
  notifications: AppNotification[];
  markNotificationRead: (id: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  goBack: () => void;
  canGoBack: boolean;
  goForward: () => void;
  canGoForward: boolean;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  isLocationModalOpen: boolean;
  setIsLocationModalOpen: (open: boolean) => void;
  isAISearchOpen: boolean;
  setIsAISearchOpen: (open: boolean) => void;
  userRole: 'buyer' | 'seller' | 'admin';
  setUserRole: (role: 'buyer' | 'seller' | 'admin') => void;
  addNewAd: (adData: Partial<Product>) => Product;
  updateProductStatus: (id: string, status: 'active' | 'pending' | 'sold' | 'rejected', reason?: string) => void;
  updateExistingAd: (id: string, adData: Partial<Product>) => void;
  editingAd: Product | null;
  setEditingAd: (ad: Product | null) => void;
  openChatForProduct: (product: Product) => string;

  // Dark Mode
  isDarkMode: boolean;
  toggleDarkMode: () => void;

  // Customer Care Chat Modal
  isCustomerCareOpen: boolean;
  setIsCustomerCareOpen: (open: boolean) => void;
  openCustomerCare: () => void;

  // Ad Deletion Reason Modal
  adToDelete: Product | null;
  openDeleteModal: (product: Product) => void;
  closeDeleteModal: () => void;
  deleteProductWithReason: (productId: string, reason: string, customNote?: string) => void;

  // Auth State & Actions
  isLoggedIn: boolean;
  currentUser: UserProfile | null;
  isAuthModalOpen: boolean;
  authModalPurpose: 'post-ad' | 'general' | 'chat';
  login: (userData?: Partial<UserProfile>) => void;
  logout: () => void;
  openAuthModal: (purpose?: 'post-ad' | 'general' | 'chat') => void;
  closeAuthModal: () => void;
  handlePostAdClick: () => void;

  // Product Reactions
  reactions: Record<string, ProductReaction>;
  toggleReaction: (productId: string, type: 'like' | 'dislike' | 'love') => void;

  // Seller Follow & Reviews
  followedSellers: string[];
  toggleFollowSeller: (sellerId: string) => void;
  sellerReviews: SellerReview[];
  addSellerReview: (sellerId: string, rating: number, comment: string) => void;

  // Saved Search Alerts
  savedAlerts: SavedAlert[];
  addSavedAlert: (query: string, category?: string) => void;

  // Admin Logs & Chat Moderation
  activityLogs: ActivityLog[];
  logUserActivity: (action: 'Viewed Ad' | 'Revealed Phone' | 'Started Chat' | 'Reported Ad', adTitle: string, adId: string) => void;
  spamThreads: string[];
  toggleSpamThread: (threadId: string) => void;
  chatReports: ChatReport[];
  reportAbusiveChat: (threadId: string, reportedUser: string, reason: string) => void;

  // Live Traffic & Date-wise Analytics
  onlineUsersCount: number;
  dailyAnalytics: DailyAnalytics[];

  // Custom Logo & Watermark Options for Admin
  customLogoUrl: string;
  setCustomLogoUrl: (url: string) => void;
  watermarkText: string;
  setWatermarkText: (text: string) => void;
  watermarkOpacity: number;
  setWatermarkOpacity: (opacity: number) => void;
  isWatermarkEnabled: boolean;
  setIsWatermarkEnabled: (enabled: boolean) => void;

  // App Release & Auto Update State
  appRelease: AppReleaseInfo;
  updateAppRelease: (newRelease: AppReleaseInfo) => void;
  userInstalledVersion: string;
  applyAppUpdate: () => void;
  isUpdateDismissed: boolean;
  setIsUpdateDismissed: (dismissed: boolean) => void;

  // Auto Expiry & Renewal Actions
  renewAd: (productId: string) => void;
}

const defaultFilters: FilterState = {
  category: '',
  subCategory: '',
  division: '',
  district: '',
  thana: '',
  minPrice: '',
  maxPrice: '',
  condition: [],
  brand: [],
  isVerifiedOnly: false,
  isNegotiableOnly: false,
  isDeliveryOnly: false,
  adType: '',
  searchQuery: '',
  sortBy: 'latest'
};

const MarketContext = createContext<MarketContextType | undefined>(undefined);

export const MarketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedLocation, setSelectedLocationState] = useState<Location>(() => {
    try {
      const saved = storage.getItem('marketbd_selected_location');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading stored location:', e);
    }
    return {
      division: 'All Bangladesh',
      district: '',
      thana: ''
    };
  });

  const setSelectedLocation = (loc: Location) => {
    setSelectedLocationState(loc);
    try {
      storage.setItem('marketbd_selected_location', JSON.stringify(loc));
    } catch (e) {
      console.error('Error saving selected location:', e);
    }
  };

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = storage.getItem('marketbd_products_v4');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error('Error parsing stored products:', e);
      }
    }
    return INITIAL_PRODUCTS;
  });

  useEffect(() => {
    try {
      storage.setItem('marketbd_products_v4', JSON.stringify(products));
    } catch (e) {
      console.error('Error saving products:', e);
    }
  }, [products]);

  // Automated Ad Expiry Check (Cron Job Simulation)
  useEffect(() => {
    const { updatedProducts, expiredCount, newNotifications } = checkAndExpireAds(products);
    if (expiredCount > 0) {
      setProducts(updatedProducts);
      if (newNotifications.length > 0) {
        setNotifications(prev => [...newNotifications, ...prev]);
      }
    }
  }, []);

  const renewAd = (productId: string) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return renewExpiredAd(p);
      }
      return p;
    }));
  };
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [activeTab, setActiveTabState] = useState<string>('home');
  const [tabHistory, setTabHistory] = useState<string[]>(['home']);
  const [forwardHistory, setForwardHistory] = useState<string[]>([]);
  const [selectedProduct, setSelectedProductState] = useState<Product | null>(null);

  const setActiveTab = (tab: string) => {
    if (tab === 'home') {
      setTabHistory(['home']);
      setForwardHistory([]);
      setActiveTabState('home');
      setSelectedProductState(null);
      return;
    }
    setTabHistory(prev => {
      if (prev[prev.length - 1] === tab) return prev;
      return [...prev, tab];
    });
    setForwardHistory([]);
    setActiveTabState(tab);
  };

  const goBack = () => {
    if (selectedProduct) {
      setForwardHistory(prev => [...prev, `product:${selectedProduct.id}`]);
      setSelectedProductState(null);
      return;
    }
    if (tabHistory.length > 1) {
      const updated = [...tabHistory];
      const currentTab = updated.pop();
      if (currentTab) {
        setForwardHistory(prev => [...prev, currentTab]);
      }
      const prevTab = updated[updated.length - 1] || 'home';
      setTabHistory(updated);
      setActiveTabState(prevTab);
    } else {
      setActiveTabState('home');
    }
  };

  const goForward = () => {
    if (forwardHistory.length === 0) return;
    const updatedForward = [...forwardHistory];
    const nextItem = updatedForward.pop();
    setForwardHistory(updatedForward);

    if (nextItem) {
      if (nextItem.startsWith('product:')) {
        const prodId = nextItem.replace('product:', '');
        const targetProd = products.find(p => p.id === prodId);
        if (targetProd) {
          setSelectedProductState(targetProd);
        }
      } else {
        setTabHistory(prev => [...prev, nextItem]);
        setActiveTabState(nextItem);
      }
    }
  };

  const canGoBack = activeTab !== 'home' || selectedProduct !== null || tabHistory.length > 1;
  const canGoForward = forwardHistory.length > 0;

  // Product Reactions State
  const [reactions, setReactions] = useState<Record<string, ProductReaction>>({
    'prod-1': { likes: 24, dislikes: 1, loves: 18 },
    'prod-2': { likes: 12, dislikes: 0, loves: 9 },
    'prod-3': { likes: 45, dislikes: 2, loves: 32 }
  });

  const toggleReaction = (productId: string, type: 'like' | 'dislike' | 'love') => {
    setReactions(prev => {
      const current = prev[productId] || { likes: 10, dislikes: 0, loves: 5 };
      const userPrev = current.userReaction;

      if (userPrev === type) {
        return {
          ...prev,
          [productId]: {
            ...current,
            userReaction: undefined,
            likes: type === 'like' ? Math.max(0, current.likes - 1) : current.likes,
            dislikes: type === 'dislike' ? Math.max(0, current.dislikes - 1) : current.dislikes,
            loves: type === 'love' ? Math.max(0, current.loves - 1) : current.loves
          }
        };
      }

      let newLikes = current.likes;
      let newDislikes = current.dislikes;
      let newLoves = current.loves;

      if (userPrev === 'like') newLikes--;
      if (userPrev === 'dislike') newDislikes--;
      if (userPrev === 'love') newLoves--;

      if (type === 'like') newLikes++;
      if (type === 'dislike') newDislikes++;
      if (type === 'love') newLoves++;

      return {
        ...prev,
        [productId]: {
          likes: newLikes,
          dislikes: newDislikes,
          loves: newLoves,
          userReaction: type
        }
      };
    });
  };

  // Followed Sellers
  const [followedSellers, setFollowedSellers] = useState<string[]>(['user-me', 'user-seller-1']);

  const toggleFollowSeller = (sellerId: string) => {
    setFollowedSellers(prev =>
      prev.includes(sellerId) ? prev.filter(id => id !== sellerId) : [...prev, sellerId]
    );
  };

  // Seller Reviews
  const [sellerReviews, setSellerReviews] = useState<SellerReview[]>([
    {
      id: 'rev-1',
      sellerId: 'user-seller-1',
      reviewerName: 'Kamal Hossain',
      rating: 5,
      comment: 'খুবই ভালো সেলার, পন্যের কোয়ালিটি সেরা ছিল!',
      date: '28 Jul 2026'
    }
  ]);

  const addSellerReview = (sellerId: string, rating: number, comment: string) => {
    const newRev: SellerReview = {
      id: 'rev-' + Date.now(),
      sellerId,
      reviewerName: currentUser?.name || 'Verified Buyer',
      rating,
      comment,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };
    setSellerReviews(prev => [newRev, ...prev]);
  };

  // Saved Search Alerts
  const [savedAlerts, setSavedAlerts] = useState<SavedAlert[]>([
    { id: 'alert-1', query: 'iPhone 15 Pro', category: 'mobiles', createdAt: '28 Jul 2026' },
    { id: 'alert-2', query: 'Yamaha R15', category: 'vehicles', createdAt: '29 Jul 2026' }
  ]);

  const addSavedAlert = (query: string, category?: string) => {
    if (!query.trim()) return;
    const exists = savedAlerts.some(a => a.query.toLowerCase() === query.trim().toLowerCase());
    if (exists) return;

    const newAlert: SavedAlert = {
      id: 'alert-' + Date.now(),
      query: query.trim(),
      category,
      createdAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };
    setSavedAlerts(prev => [newAlert, ...prev]);
    setNotifications(prev => [
      {
        id: 'notif-' + Date.now(),
        title: 'Search Alert Set 🔔',
        message: `আপনার সার্চ করা "${query}" কিওয়ার্ডটি এলার্ট লিস্টে সেভ রাখা হয়েছে। এই রিলেটেড নতুন কোন বিজ্ঞাপন পোস্ট হলেই আপনাকে জানান দেয়া হবে!`,
        time: 'Just now',
        isRead: false,
        type: 'system'
      },
      ...prev
    ]);
  };

  // Activity Logs for Admin
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([
    {
      id: 'log-1',
      timestamp: '28 Jul 2026, 10:45 AM',
      userName: 'Kamal Hossain',
      userPhone: '01712-345678',
      action: 'Viewed Ad',
      adTitle: 'iPhone 15 Pro Max 256GB Dual SIM',
      adId: 'prod-1',
      location: 'Dhanmondi, Dhaka'
    },
    {
      id: 'log-2',
      timestamp: '28 Jul 2026, 11:02 AM',
      userName: 'Sabbir Ahmed',
      userPhone: '01899-112233',
      action: 'Revealed Phone',
      adTitle: 'Yamaha R15 V4 Dual ABS 2024',
      adId: 'prod-2',
      location: 'Gulshan, Dhaka'
    },
    {
      id: 'log-3',
      timestamp: '28 Jul 2026, 11:20 AM',
      userName: 'Mehedi Hasan',
      userPhone: '01911-887766',
      action: 'Started Chat',
      adTitle: 'MacBook Air M2 16GB 512GB',
      adId: 'prod-3',
      location: 'Uttara, Dhaka'
    }
  ]);

  const logUserActivity = (
    action: 'Viewed Ad' | 'Revealed Phone' | 'Started Chat' | 'Reported Ad',
    adTitle: string,
    adId: string
  ) => {
    const newLog: ActivityLog = {
      id: 'log-' + Date.now(),
      timestamp: new Date().toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      userName: currentUser?.name || 'Guest User',
      userPhone: currentUser?.phone || '01700-000000',
      action,
      adTitle,
      adId,
      location: selectedLocation.thana || selectedLocation.district || selectedLocation.division
    };
    setActivityLogs(prev => [newLog, ...prev]);

    // Automatically update date-wise analytics counters
    if (action === 'Viewed Ad') incrementDailyMetric('productViews');
    if (action === 'Revealed Phone') incrementDailyMetric('phoneReveals');
    if (action === 'Started Chat') incrementDailyMetric('chatsStarted');
  };

  // Live Online Users (Fluctuating realistically every few seconds)
  const [onlineUsersCount, setOnlineUsersCount] = useState<number>(28);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsersCount(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const updated = prev + delta;
        return updated < 14 ? 18 : updated > 52 ? 42 : updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Daily Date-Wise Traffic Analytics
  const getTodayISO = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const initialDailySeed: DailyAnalytics[] = [
    {
      date: getTodayISO(),
      dateFormattedBn: '০৪ আগস্ট ২০২৬',
      dateFormattedEn: '04 Aug 2026',
      visitors: 485,
      productViews: 1340,
      phoneReveals: 148,
      chatsStarted: 72
    },
    {
      date: '2026-08-03',
      dateFormattedBn: '০৩ আগস্ট ২০২৬',
      dateFormattedEn: '03 Aug 2026',
      visitors: 620,
      productViews: 1940,
      phoneReveals: 195,
      chatsStarted: 84
    },
    {
      date: '2026-08-02',
      dateFormattedBn: '০২ আগস্ট ২০২৬',
      dateFormattedEn: '02 Aug 2026',
      visitors: 590,
      productViews: 1810,
      phoneReveals: 178,
      chatsStarted: 79
    },
    {
      date: '2026-08-01',
      dateFormattedBn: '০১ আগস্ট ২০২৬',
      dateFormattedEn: '01 Aug 2026',
      visitors: 710,
      productViews: 2230,
      phoneReveals: 240,
      chatsStarted: 110
    },
    {
      date: '2026-07-31',
      dateFormattedBn: '৩১ জুলাই ২০২৬',
      dateFormattedEn: '31 Jul 2026',
      visitors: 640,
      productViews: 1980,
      phoneReveals: 185,
      chatsStarted: 92
    },
    {
      date: '2026-07-30',
      dateFormattedBn: '৩০ জুলাই ২০২৬',
      dateFormattedEn: '30 Jul 2026',
      visitors: 580,
      productViews: 1750,
      phoneReveals: 160,
      chatsStarted: 71
    },
    {
      date: '2026-07-29',
      dateFormattedBn: '২৯ জুলাই ২০২৬',
      dateFormattedEn: '29 Jul 2026',
      visitors: 510,
      productViews: 1620,
      phoneReveals: 145,
      chatsStarted: 63
    }
  ];

  const [dailyAnalytics, setDailyAnalytics] = useState<DailyAnalytics[]>(() => {
    const saved = storage.getItem('marketbd_daily_analytics');
    if (saved) {
      try {
        const parsed: DailyAnalytics[] = JSON.parse(saved);
        const today = getTodayISO();
        if (!parsed.some(d => d.date === today)) {
          return [
            {
              date: today,
              dateFormattedBn: '০৪ আগস্ট ২০২৬',
              dateFormattedEn: '04 Aug 2026',
              visitors: 1,
              productViews: 0,
              phoneReveals: 0,
              chatsStarted: 0
            },
            ...parsed
          ];
        } else {
          return parsed.map(d =>
            d.date === today ? { ...d, visitors: d.visitors + 1 } : d
          );
        }
      } catch (e) {
        return initialDailySeed;
      }
    }
    return initialDailySeed;
  });

  useEffect(() => {
    storage.setItem('marketbd_daily_analytics', JSON.stringify(dailyAnalytics));
  }, [dailyAnalytics]);

  const incrementDailyMetric = (type: 'productViews' | 'phoneReveals' | 'chatsStarted') => {
    const today = getTodayISO();
    setDailyAnalytics(prev =>
      prev.map(item => {
        if (item.date === today) {
          return { ...item, [type]: item[type] + 1 };
        }
        return item;
      })
    );
  };

  // Spam & Chat Moderation
  const [spamThreads, setSpamThreads] = useState<string[]>([]);
  const toggleSpamThread = (threadId: string) => {
    setSpamThreads(prev =>
      prev.includes(threadId) ? prev.filter(id => id !== threadId) : [...prev, threadId]
    );
  };

  const [chatReports, setChatReports] = useState<ChatReport[]>([]);
  const reportAbusiveChat = (threadId: string, reportedUser: string, reason: string) => {
    const report: ChatReport = {
      id: 'rep-' + Date.now(),
      threadId,
      reportedUser,
      reason,
      timestamp: new Date().toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };
    setChatReports(prev => [report, ...prev]);
    setNotifications(prev => [
      {
        id: 'notif-' + Date.now(),
        title: 'Report Received 🛡️',
        message: 'Your chat report has been submitted to Admin. We strictly penalize bad behavior.',
        time: 'Just now',
        isRead: false,
        type: 'system'
      },
      ...prev
    ]);
  };

  const setSelectedProduct = (product: Product | null) => {
    if (product) {
      const updatedViews = (product.views || 0) + 1;
      const updated = { ...product, views: updatedViews };
      setProducts(prev => prev.map(p => p.id === product.id ? updated : p));
      setSelectedProductState(updated);
      logUserActivity('Viewed Ad', product.title, product.id);
    } else {
      setSelectedProductState(null);
    }
  };
  const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(false);
  const [isAISearchOpen, setIsAISearchOpen] = useState<boolean>(false);

  // Custom Logo & Watermark Options for Admin
  const [customLogoUrl, setCustomLogoUrlState] = useState<string>(() => {
    const saved = storage.getItem('marketbd_custom_logo');
    if (saved && (saved.includes('1786102322044') || saved.includes('1785575550258') || saved.includes('1786037142712') || saved.includes('1785263882075'))) {
      storage.removeItem('marketbd_custom_logo');
      return marketBdLogoImg;
    }
    return saved || marketBdLogoImg;
  });

  const setCustomLogoUrl = (url: string) => {
    setCustomLogoUrlState(url);
    storage.setItem('marketbd_custom_logo', url);
  };

  const [watermarkText, setWatermarkTextState] = useState<string>(() => {
    return storage.getItem('marketbd_watermark_text') || 'MarketBD.Net';
  });

  const setWatermarkText = (text: string) => {
    setWatermarkTextState(text);
    storage.setItem('marketbd_watermark_text', text);
  };

  const [watermarkOpacity, setWatermarkOpacityState] = useState<number>(() => {
    const saved = storage.getItem('marketbd_watermark_opacity');
    return saved !== null ? parseFloat(saved) : 0.05;
  });

  const setWatermarkOpacity = (opacity: number) => {
    setWatermarkOpacityState(opacity);
    storage.setItem('marketbd_watermark_opacity', opacity.toString());
  };

  const [isWatermarkEnabled, setIsWatermarkEnabledState] = useState<boolean>(() => {
    return storage.getItem('marketbd_watermark_enabled') !== 'false';
  });

  const setIsWatermarkEnabled = (enabled: boolean) => {
    setIsWatermarkEnabledState(enabled);
    storage.setItem('marketbd_watermark_enabled', enabled ? 'true' : 'false');
  };
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = storage.getItem('marketbd_theme');
    return saved === 'dark';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('adminlogin') || hash.includes('adminlogin')) {
        setActiveTab('admin');
      }
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      storage.setItem('marketbd_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      storage.setItem('marketbd_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Customer Care State
  const [isCustomerCareOpen, setIsCustomerCareOpen] = useState<boolean>(false);
  const openCustomerCare = () => setIsCustomerCareOpen(true);

  // Ad Deletion Reason State
  const [adToDelete, setAdToDelete] = useState<Product | null>(null);

  const openDeleteModal = (product: Product) => {
    if (product.status === 'pending') {
      alert(
        language === 'bn'
          ? '⚠️ এডমিন এপ্রুভালের পূর্বে আন্ডার রিভিউ থাকা বিজ্ঞাপন রিমুভ করা সম্ভব নয়! এডমিন পোস্টটি অনুমোদন বা বাতিল করার পর সিদ্ধান্ত নেওয়া যাবে।'
          : '⚠️ You cannot delete this ad while it is under review. Please wait for admin approval!'
      );
      return;
    }
    setAdToDelete(product);
  };

  const closeDeleteModal = () => {
    setAdToDelete(null);
  };

  const deleteProductWithReason = (productId: string, reason: string, customNote?: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    setAdToDelete(null);

    // Send confirmation notification
    setNotifications(prev => [
      {
        id: 'notif-' + Date.now(),
        title: 'বিজ্ঞাপন মুছে ফেলা হয়েছে 🗑️',
        message: `আপনার বিজ্ঞাপনটি সাফল্যের সাথে রিমুভ করা হয়েছে। কারণ: ${reason}${customNote ? ` (${customNote})` : ''}`,
        time: 'Just now',
        isRead: false,
        type: 'system'
      },
      ...prev
    ]);
  };

  // App Release & Auto Update Management
  const defaultRelease: AppReleaseInfo = {
    version: '2.5.0',
    buildNumber: 250,
    releaseDate: '05 Aug 2026',
    titleBn: 'গুগল প্লে স্টোর সিকিউরিটি ও ফিচার আপডেট v2.5.0',
    titleEn: 'Google Play Store Security & Feature Update v2.5.0',
    notesBn: '• গুগল প্লে স্টোরে আফিসিয়াল নতুন ভার্সন অবমুক্ত করা হয়েছে।\n• এডমিন নিরাপত্তার জন্য ৬ ডিজিটের ওটিপি ভেরিফিকেশন সিস্টেম চালু।\n• সাইটে রোবট, হ্যাকার ও ফেইক বট প্রতিরোধে WAF সিকিউরিটি প্রোটোকল একটিভ।\n• অ্যান্ড্রয়েড ইউজারদের জন্য প্লে স্টোর থেকে বাধ্যতামূলক আপডেট প্রযোজ্য।',
    notesEn: '• Official new version released on Google Play Store.\n• 6-Digit OTP Verification added for Admin Login security.\n• Bot, scraper & hacker protection protocol active.\n• Mandatory update from Google Play Store for Android users.',
    isMandatory: true,
    apkDownloadUrl: 'https://ais-pre-3nedz4sxnvykxkjllzd6xr-303486853251.asia-southeast1.run.app/marketbd-release-v2.5.0.apk',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.marketbd.app',
    publishedAt: new Date().toISOString()
  };

  const [appRelease, setAppReleaseState] = useState<AppReleaseInfo>(() => {
    try {
      const saved = storage.getItem('marketbd_app_release');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading app release info', e);
    }
    return defaultRelease;
  });

  const [userInstalledVersion, setUserInstalledVersion] = useState<string>(() => {
    return storage.getItem('marketbd_installed_version') || '2.4.0';
  });

  const [isUpdateDismissed, setIsUpdateDismissed] = useState<boolean>(false);

  const updateAppRelease = (newRelease: AppReleaseInfo) => {
    setAppReleaseState(newRelease);
    setIsUpdateDismissed(false);
    try {
      storage.setItem('marketbd_app_release', JSON.stringify(newRelease));
    } catch (e) {
      console.error('Error saving app release info', e);
    }

    // Add global update notification for all users
    setNotifications(prev => [
      {
        id: 'notif-update-' + Date.now(),
        title: `🚀 নতুন অ্যাপ আপডেট অবমুক্ত হয়েছে: ${newRelease.version}`,
        message: newRelease.titleBn,
        time: 'Just now',
        isRead: false,
        type: 'system'
      },
      ...prev
    ]);
  };

  const applyAppUpdate = () => {
    setUserInstalledVersion(appRelease.version);
    try {
      storage.setItem('marketbd_installed_version', appRelease.version);
    } catch (e) {
      console.error('Error saving installed version', e);
    }
    setIsUpdateDismissed(true);
  };

  // Auth State with localStorage Session Persistence
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return storage.getItem('marketbd_is_logged_in') === 'true';
  });
  const [userRole, setUserRole] = useState<'buyer' | 'seller' | 'admin'>(() => {
    return (storage.getItem('marketbd_user_role') as any) || 'buyer';
  });
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const saved = storage.getItem('marketbd_auth_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalPurpose, setAuthModalPurpose] = useState<'post-ad' | 'general' | 'chat'>('general');

  const openAuthModal = (purpose: 'post-ad' | 'general' | 'chat' = 'general') => {
    setAuthModalPurpose(purpose);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = (userData?: Partial<UserProfile>) => {
    const role = userData?.role || 'seller';
    const profile: UserProfile = {
      id: userData?.id || 'user-' + Date.now(),
      name: userData?.name || (role === 'admin' ? 'MarketBD.Net Admin' : role === 'seller' ? 'তানভীর আহমেদ (Verified Seller)' : 'রহিম উদ্দিন'),
      phone: userData?.phone || '01712345678',
      email: userData?.email || 'official.marketbd@gmail.com',
      role: role,
      isVerified: true
    };
    setCurrentUser(profile);
    setIsLoggedIn(true);
    setUserRole(role);
    setIsAuthModalOpen(false);

    // Save persistent login session
    storage.setItem('marketbd_is_logged_in', 'true');
    storage.setItem('marketbd_user_role', role);
    storage.setItem('marketbd_auth_user', JSON.stringify(profile));

    // If purpose was post-ad, automatically go to post-ad tab
    if (authModalPurpose === 'post-ad') {
      setActiveTab('post-ad');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUserRole('buyer');

    // Clear persistent login session
    storage.removeItem('marketbd_is_logged_in');
    storage.removeItem('marketbd_user_role');
    storage.removeItem('marketbd_auth_user');

    if (activeTab === 'post-ad') {
      setActiveTab('home');
    }
  };

  const handlePostAdClick = () => {
    if (!isLoggedIn) {
      openAuthModal('post-ad');
    } else {
      setActiveTab('post-ad');
    }
  };

  // Initial Chat threads
  const [chatThreads, setChatThreads] = useState<ChatThread[]>(() => {
    if (INITIAL_PRODUCTS.length > 0 && INITIAL_PRODUCTS[0]?.seller) {
      return [
        {
          id: 'thread-1',
          productId: INITIAL_PRODUCTS[0].id,
          productTitle: INITIAL_PRODUCTS[0].title,
          productImage: INITIAL_PRODUCTS[0].images[0] || '',
          productPrice: INITIAL_PRODUCTS[0].price,
          seller: INITIAL_PRODUCTS[0].seller,
          buyerId: 'user-me',
          buyerName: 'CurrentUser',
          lastMessage: 'ভাই ১ লক্ষ ৩০ হাজার টাকায় দেওয়া যাবে কি?',
          lastMessageTime: '10 mins ago',
          unreadCount: 1,
          messages: [
            {
              id: 'msg-1',
              senderId: INITIAL_PRODUCTS[0].seller.id,
              receiverId: 'user-me',
              productId: INITIAL_PRODUCTS[0].id,
              text: 'আসসালামু আলাইকুম! ফোনটি ধানমন্ডিতে এসে দেখে নিতে পারবেন।',
              timestamp: '15 mins ago'
            },
            {
              id: 'msg-2',
              senderId: 'user-me',
              receiverId: INITIAL_PRODUCTS[0].seller.id,
              productId: INITIAL_PRODUCTS[0].id,
              text: 'ভাই ১ লক্ষ ৩০ হাজার টাকায় দেওয়া যাবে কি?',
              timestamp: '10 mins ago',
              isOffer: true,
              offerAmount: 130000,
              offerStatus: 'pending',
              status: 'seen'
            }
          ]
        }
      ];
    }
    return [];
  });

  const [activeChat, setActiveChat] = useState<ChatThread | null>(null);

  // Initial Notifications
  const [notifications, setNotifications] = useState<AppNotification[]>([
    {
      id: 'notif-1',
      title: 'নতুন অফার এসেছে! 🎉',
      message: 'স্যামসাং গ্যালাক্সি এস২৪ আল্ট্রা বিজ্ঞাপনে একজন ক্রেতা ৳১,৩০,০০০ অফার পাঠিয়েছেন।',
      time: '10 mins ago',
      isRead: false,
      type: 'offer'
    },
    {
      id: 'notif-2',
      title: 'বিজ্ঞাপন অনুমোদিত হয়েছে ✅',
      message: 'আপনার "Yamaha R15 V4" বিজ্ঞাপনটি সফলভাবে ভেরিফাইড এবং লাইভ হয়েছে।',
      time: '1 hour ago',
      isRead: false,
      type: 'approval'
    }
  ]);

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const toggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          alert(language === 'bn' ? 'সর্বোচ্চ ৪ টি প্রোডাক্ট তুলনা করতে পারবেন।' : 'You can compare up to 4 products at a time.');
          return prev;
        }
        return [...prev, product];
      }
    });
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const updateMessageStatus = (threadId: string, msgId: string, status: 'delivered' | 'seen') => {
    setChatThreads(prev =>
      prev.map(thread => {
        if (thread.id === threadId) {
          const updatedMsgs = thread.messages.map(m =>
            m.id === msgId ? { ...m, status } : m
          );
          const updated = { ...thread, messages: updatedMsgs };
          setActiveChat(curr => (curr && curr.id === threadId ? updated : curr));
          return updated;
        }
        return thread;
      })
    );
  };

  const sendMessage = (threadId: string, text: string, offerAmount?: number, imageUrl?: string) => {
    const msgId = 'msg-' + Date.now();
    const newMessage: ChatMessage = {
      id: msgId,
      senderId: 'user-me',
      receiverId: 'seller',
      productId: activeChat?.productId || '',
      text: text || (imageUrl ? '📷 [ছবি সংযুক্ত]' : ''),
      image: imageUrl,
      timestamp: 'Just now',
      isOffer: Boolean(offerAmount),
      offerAmount,
      offerStatus: offerAmount ? 'pending' : undefined,
      status: 'sent'
    };

    setChatThreads(prev =>
      prev.map(thread => {
        if (thread.id === threadId) {
          const updated = {
            ...thread,
            lastMessage: text,
            lastMessageTime: 'Just now',
            messages: [...thread.messages, newMessage]
          };
          if (activeChat && activeChat.id === threadId) {
            setActiveChat(updated);
          }
          return updated;
        }
        return thread;
      })
    );

    // 1. Delivered after 1.2s
    setTimeout(() => {
      updateMessageStatus(threadId, msgId, 'delivered');
    }, 1200);

    // 2. Seen (Pink tick) after 2.8s
    setTimeout(() => {
      updateMessageStatus(threadId, msgId, 'seen');
    }, 2800);

    // 3. Seller auto-reply after 3.2s
    setTimeout(() => {
      let replyText = '';
      const lower = text.toLowerCase();

      if (offerAmount) {
        replyText = `ধন্যবাদ! ৳${offerAmount.toLocaleString()} এর অফারটি পেয়েছি। বিষয়টি বিবেচনা করে আপনাকে ৫ মিনিটের মধ্যে জানাচ্ছি।`;
      } else if (lower.includes('লোকেশন') || lower.includes('ঠিকানা') || lower.includes('কোথায়') || lower.includes('location') || lower.includes('address')) {
        replyText = 'আমার লোকেশন: ধানমন্ডি / মিরপুর ১০, ঢাকা। আপনি আজ বা কাল সুবিধাজনক সময়ে এসে পণ্যটি সরাসরি দেখে নিতে পারেন।';
      } else if (lower.includes('দাম') || lower.includes('কম') || lower.includes('discount') || lower.includes('price') || lower.includes('সম্মান')) {
        replyText = 'ভাইয়া দাম কিছুটা অলরেডি রিজনেবল রাখা হয়েছে। তবে আপনি সরাসরি এসে দেখে পছন্দ করলে কিছুটা সম্মান করা যাবে ইনশাআল্লাহ।';
      } else if (lower.includes('কন্ডিশন') || lower.includes('মেমো') || lower.includes('বক্স') || lower.includes('ওয়ারেন্টি') || lower.includes('condition') || lower.includes('warranty')) {
        replyText = 'পণ্যটি একদম ফ্রেশ কন্ডিশনে আছে। সাথে অরিজিনাল ক্যাশ মেমো, বক্স এবং আনুষঙ্গিক এক্সেসরিজ পাবেন। কোনো ইন্টারনাল প্রবলেম নেই।';
      } else if (lower.includes('কুরিয়ার') || lower.includes('ডেলিভারি') || lower.includes('courier') || lower.includes('delivery')) {
        replyText = 'জ্বী, সুন্দরবন কুরিয়ার বা রেডএক্স এ ক্যাশ অন ডেলিভারিতে পাঠানো যাবে (শুধু কুরিয়ার চার্জ অগ্রিম প্রদেয়)।';
      } else if (lower.includes('ফোন') || lower.includes('নম্বর') || lower.includes('number') || lower.includes('phone') || lower.includes('কল')) {
        replyText = 'আমার মোবাইল নম্বর বিজ্ঞাপনে দেওয়া আছে। প্রয়োজন হলে সরাসরি কল করুন অথবা চ্যাটে ফ্রি টাইম জানান।';
      } else if (lower.includes('কখন') || lower.includes('আসব') || lower.includes('সময়') || lower.includes('time') || lower.includes('meet')) {
        replyText = 'আমি প্রতিদিন সকাল ১০টা থেকে রাত ৯টা পর্যন্ত লোকেশনে থাকি। আসার আগে কল বা মেসেজ দিলেই হবে।';
      } else {
        const defaultResponses = [
          'জ্বী অবশ্যই! আপনার কথা বুঝতে পেরেছি। পছন্দ হলে আপনি যে কোনো সময় দেখা করতে পারেন।',
          'ধন্যবাদ মেসেজ দেয়ার জন্য! আপনার আর কোনো বিশেষ প্রশ্ন থাকলে নির্দ্বিধায় জিজ্ঞাসা করুন।',
          'ঠিক আছে ভাইয়া, আমি লাইনে আছি। আপনার সুবিধামত সময়ে ফাইনাল সিদ্ধান্ত জানাতে পারেন।',
          'সব তথ্য তো জানিয়েছি। আপনি চাইলে আজই পণ্যটি এসে দেখে নিতে পারেন।'
        ];
        // Pick a dynamic response from array
        replyText = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      }

      const replyMsg: ChatMessage = {
        id: 'msg-reply-' + Date.now(),
        senderId: 'seller',
        receiverId: 'user-me',
        productId: activeChat?.productId || '',
        text: replyText,
        timestamp: 'Just now'
      };

      setChatThreads(prev =>
        prev.map(thread => {
          if (thread.id === threadId) {
            const updated = {
              ...thread,
              lastMessage: replyMsg.text,
              lastMessageTime: 'Just now',
              messages: [...thread.messages, replyMsg]
            };
            setActiveChat(curr => (curr && curr.id === threadId ? updated : curr));
            return updated;
          }
          return thread;
        })
      );
    }, 3200);
  };

  const openChatForProduct = (product: Product): string => {
    let thread = chatThreads.find(t => t.productId === product.id);
    if (!thread) {
      const initMsgId = 'msg-init-' + Date.now();
      const threadId = 'thread-' + Date.now();
      thread = {
        id: threadId,
        productId: product.id,
        productTitle: product.title,
        productImage: product.images[0] || '',
        productPrice: product.price,
        seller: product.seller,
        buyerId: 'user-me',
        buyerName: 'CurrentUser',
        lastMessage: 'আসসালামু আলাইকুম, এটি কি এখনো এভেইলএবল আছে?',
        lastMessageTime: 'Just now',
        unreadCount: 0,
        messages: [
          {
            id: initMsgId,
            senderId: 'user-me',
            receiverId: product.seller.id,
            productId: product.id,
            text: 'আসসালামু আলাইকুম, এটি কি এখনো এভেইলএবল আছে?',
            timestamp: 'Just now',
            status: 'sent'
          }
        ]
      };
      setChatThreads(prev => [thread!, ...prev]);

      // Trigger status updates for initial message
      setTimeout(() => updateMessageStatus(threadId, initMsgId, 'delivered'), 1200);
      setTimeout(() => updateMessageStatus(threadId, initMsgId, 'seen'), 2800);
    }
    setActiveChat(thread);
    setActiveTab('chat');
    return thread.id;
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const addNewAd = (adData: Partial<Product>): Product => {
    const newProduct: Product = {
      id: 'prod-' + Date.now(),
      title: adData.title || 'Untitled Ad',
      titleBn: adData.titleBn || adData.title,
      slug: (adData.title || 'ad').toLowerCase().replace(/\s+/g, '-'),
      category: adData.category || 'mobiles',
      subCategory: adData.subCategory || '',
      brand: adData.brand || '',
      model: adData.model || '',
      price: adData.price || 0,
      originalPrice: adData.originalPrice,
      isNegotiable: adData.isNegotiable ?? true,
      condition: adData.condition || 'used_good',
      images: adData.images && adData.images.length > 0 ? adData.images : [
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'
      ],
      description: adData.description || '',
      descriptionBn: adData.descriptionBn || adData.description,
      location: adData.location || { division: 'dhaka', district: 'dhaka_d', thana: 'dhanmondi' },
      seller: {
        id: 'user-me',
        name: 'My Store BD',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        phone: adData.seller?.phone || '01700-000000',
        email: 'official.marketbd@gmail.com',
        memberSince: '2026',
        location: adData.location || { division: 'dhaka', district: 'dhaka_d', thana: 'dhanmondi' },
        isVerified: true,
        rating: 5.0,
        totalReviews: 1,
        badge: 'Verified Merchant'
      },
      postedAt: new Date().toISOString(),
      views: 1,
      likes: 0,
      adType: adData.adType || 'regular',
      isDeliveryAvailable: adData.isDeliveryAvailable ?? true,
      warranty: adData.warranty || '',
      features: adData.features || [],
      paymentInfo: adData.paymentInfo,
      specifications: adData.specifications || {},
      status: 'pending' // Under Review status until approved by Admin
    };

    setProducts(prev => [newProduct, ...prev]);

    // Trigger Search Notifications for users who previously searched or set alert for matching query
    savedAlerts.forEach(alertItem => {
      const q = alertItem.query.toLowerCase();
      const t = (newProduct.title || '').toLowerCase();
      const d = (newProduct.description || '').toLowerCase();
      if (q && (t.includes(q) || d.includes(q) || alertItem.category === newProduct.category)) {
        setNotifications(prev => [
          {
            id: 'notif-alert-' + Date.now() + Math.floor(Math.random() * 1000),
            title: 'সার্চ নোটিফিকেশন এলার্ট 🔔',
            message: `আপনার পূর্বে সার্চ করা "${alertItem.query}" রিলেটেড নতুন একটি প্রোডাক্ট লিস্ট করা হয়েছে: "${newProduct.title}" (মূল্য: ৳${newProduct.price.toLocaleString()})`,
            time: 'Just now',
            isRead: false,
            type: 'system'
          },
          ...prev
        ]);
      }
    });

    // Send confirmation notification
    setNotifications(prev => [
      {
        id: 'notif-' + Date.now(),
        title: 'বিজ্ঞাপন পর্যালোচনায় রয়েছে (Under Review) ⏳',
        message: `আপনার "${newProduct.title}" টি জমা দেওয়া হয়েছে। এটি এডমিন অনুমোদনের (Approval) পর লাইভ হবে।`,
        time: 'Just now',
        isRead: false,
        type: 'approval'
      },
      ...prev
    ]);

    return newProduct;
  };

  const [editingAd, setEditingAd] = useState<Product | null>(null);

  const updateProductStatus = (id: string, status: 'active' | 'pending' | 'sold' | 'rejected', reason?: string) => {
    let targetTitle = '';
    setProducts(prev => {
      const updated = prev.map(p => {
        if (p.id === id) {
          targetTitle = p.title;
          return {
            ...p,
            status,
            postedAt: status === 'active' ? new Date().toISOString() : p.postedAt,
            rejectionReason: status === 'rejected' ? (reason || 'তথ্য পরিবর্তন/ইডিট প্রয়োজন') : undefined
          };
        }
        return p;
      });
      try {
        storage.setItem('marketbd_products_v4', JSON.stringify(updated));
      } catch (e) {
        console.error('Error persisting products on status update:', e);
      }
      return updated;
    });

    if (status === 'active') {
      setNotifications(prev => [
        {
          id: 'notif-' + Date.now(),
          title: language === 'bn' ? 'বিজ্ঞাপন এপ্রুভ ও লাইভ হয়েছে! 🎉' : 'Ad Approved & Live! 🎉',
          message: language === 'bn'
            ? `আপনার "${targetTitle}" বিজ্ঞাপনটি এডমিন কর্তৃক অনুমোদন করা হয়েছে এবং এখন প্ল্যাটফর্মে লাইভ রয়েছে।`
            : `Your ad "${targetTitle}" has been approved by Admin and is now live!`,
          time: 'Just now',
          isRead: false,
          type: 'approval'
        },
        ...prev
      ]);
    } else if (status === 'rejected') {
      setNotifications(prev => [
        {
          id: 'notif-' + Date.now(),
          title: language === 'bn' ? 'বিজ্ঞাপন পর্যালোচনায় প্রত্যাখ্যাত হয়েছে (ইডিট প্রয়োজন) ⚠️' : 'Ad Needs Editing / Rejected ⚠️',
          message: language === 'bn'
            ? `আপনার "${targetTitle}" বিজ্ঞাপনটি এপ্রুভ করা সম্ভব হয়নি। কারণ: ${reason || 'তথ্য সংশোধন প্রয়োজন'}। অনুগ্রহ করে 'আমার বিজ্ঞাপনসমূহ' থেকে তথ্য সংশোধন করে পুনরায় সাবমিট করুন।`
            : `Your ad "${targetTitle}" was rejected. Reason: ${reason || 'Edit required'}. Please edit and re-submit from 'My Listings'.`,
          time: 'Just now',
          isRead: false,
          type: 'system'
        },
        ...prev
      ]);
    }
  };

  const updateExistingAd = (id: string, adData: Partial<Product>) => {
    let updatedTitle = '';
    setProducts(prev =>
      prev.map(p => {
        if (p.id === id) {
          updatedTitle = adData.title || p.title;
          return {
            ...p,
            ...adData,
            status: 'pending',
            rejectionReason: undefined
          };
        }
        return p;
      })
    );

    setNotifications(prev => [
      {
        id: 'notif-' + Date.now(),
        title: language === 'bn' ? 'বিজ্ঞাপন ইডিট করা হয়েছে (আন্ডার রিভিউ) ⏳' : 'Ad Re-submitted for Review ⏳',
        message: language === 'bn'
          ? `আপনার "${updatedTitle}" বিজ্ঞাপনটি সফলভাবে আপডেট করে প্যানেলে জমা করা হয়েছে। এডমিন পর্যালোচনার পর এটি দ্রুত লাইভ করা হবে।`
          : `Your updated ad "${updatedTitle}" was re-submitted for Admin review.`,
        time: 'Just now',
        isRead: false,
        type: 'approval'
      },
      ...prev
    ]);

    setEditingAd(null);
  };

  return (
    <MarketContext.Provider
      value={{
        language,
        setLanguage,
        selectedLocation,
        setSelectedLocation,
        products,
        filters,
        setFilters,
        resetFilters,
        wishlist,
        toggleWishlist,
        compareList,
        toggleCompare,
        clearCompare,
        chatThreads,
        activeChat,
        setActiveChat,
        sendMessage,
        notifications,
        markNotificationRead,
        activeTab,
        setActiveTab,
        goBack,
        canGoBack,
        goForward,
        canGoForward,
        selectedProduct,
        setSelectedProduct,
        isLocationModalOpen,
        setIsLocationModalOpen,
        isAISearchOpen,
        setIsAISearchOpen,
        userRole,
        setUserRole,
        addNewAd,
        updateProductStatus,
        updateExistingAd,
        editingAd,
        setEditingAd,
        openChatForProduct,

        // Dark Mode
        isDarkMode,
        toggleDarkMode,

        // Customer Care
        isCustomerCareOpen,
        setIsCustomerCareOpen,
        openCustomerCare,

        // Delete Reason Modal
        adToDelete,
        openDeleteModal,
        closeDeleteModal,
        deleteProductWithReason,

        // Auth
        isLoggedIn,
        currentUser,
        isAuthModalOpen,
        authModalPurpose,
        login,
        logout,
        openAuthModal,
        closeAuthModal,
        handlePostAdClick,

        // Reactions
        reactions,
        toggleReaction,

        // Follow & Reviews
        followedSellers,
        toggleFollowSeller,
        sellerReviews,
        addSellerReview,

        // Saved Alerts
        savedAlerts,
        addSavedAlert,

        // Admin Activity & Chat Moderation
        activityLogs,
        logUserActivity,
        spamThreads,
        toggleSpamThread,
        chatReports,
        reportAbusiveChat,

        // Live Traffic & Date-wise Analytics
        onlineUsersCount,
        dailyAnalytics,

        // Custom Logo & Watermark Options for Admin
        customLogoUrl,
        setCustomLogoUrl,
        watermarkText,
        setWatermarkText,
        watermarkOpacity,
        setWatermarkOpacity,
        isWatermarkEnabled,
        setIsWatermarkEnabled,

        // App Release & Auto Update
        appRelease,
        updateAppRelease,
        userInstalledVersion,
        applyAppUpdate,
        isUpdateDismissed,
        setIsUpdateDismissed,

        // Auto Expiry & Renewal
        renewAd
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export const useMarket = () => {
  const context = useContext(MarketContext);
  if (!context) throw new Error('useMarket must be used within a MarketProvider');
  return context;
};
