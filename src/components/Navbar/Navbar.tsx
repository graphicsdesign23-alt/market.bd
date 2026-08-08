import React, { useState } from 'react';
import { useMarket } from '../../context/MarketContext';
import { CATEGORIES } from '../../data/bangladeshData';
import { UserProfileModal } from '../Auth/UserProfileModal';
import { LiveClockWidget } from '../Common/LiveClockWidget';
import {
  MapPin,
  Search,
  PlusCircle,
  Heart,
  MessageSquare,
  Bell,
  Sparkles,
  GitCompare,
  User,
  Globe,
  Mic,
  Shield,
  LayoutDashboard,
  Moon,
  Sun,
  Headphones,
  Home,
  LogOut,
  Edit2,
  ArrowLeft
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const {
    language,
    setLanguage,
    selectedLocation,
    setIsLocationModalOpen,
    wishlist,
    compareList,
    chatThreads,
    notifications,
    activeTab,
    setActiveTab,
    goBack,
    canGoBack,
    setIsAISearchOpen,
    userRole,
    setUserRole,
    filters,
    setFilters,
    isLoggedIn,
    currentUser,
    openAuthModal,
    logout,
    login,
    handlePostAdClick,
    isDarkMode,
    toggleDarkMode,
    openCustomerCare,
    customLogoUrl
  } = useMarket();

  const [searchInput, setSearchInput] = useState('');

  const unreadChats = chatThreads.reduce((acc, t) => acc + t.unreadCount, 0);
  const unreadNotifs = notifications.filter(n => !n.isRead).length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(prev => ({
      ...prev,
      searchQuery: searchInput,
      category: '',
      subCategory: ''
    }));
    setActiveTab('search');
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      alert(language === 'bn' ? 'ভয়েস সার্চ মোড অন করা হয়েছে। কথা বলুন...' : 'Voice Search activated. Please speak...');
    } else {
      alert(language === 'bn' ? 'আপনার ব্রাউজারে ভয়েস ফিচার সাপোর্ট নেই।' : 'Voice search is not supported in this browser.');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#090f1e] dark:bg-slate-950 text-white border-b-2 border-pink-500/50 dark:border-pink-500/60 transition-colors shadow-2xl max-w-full overflow-hidden relative pt-[max(8px,env(safe-area-inset-top))]">
      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-2.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 sm:gap-3 relative z-20 w-full overflow-hidden">
        {/* Left Section: Logo & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full md:w-auto md:flex-1 max-w-3xl">
          {/* Logo */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center text-left group cursor-pointer shrink-0"
          >
            <img
              src={customLogoUrl || '/logo.jpg'}
              alt="MarketBD.Net Logo"
              className="h-10 sm:h-12 w-auto max-w-[170px] sm:max-w-[210px] object-contain shrink-0"
              onError={(e) => {
                e.currentTarget.src = '/logo.jpg';
              }}
            />
          </button>

          {/* Search Bar */}
          <div className="w-full sm:flex-1 max-w-lg flex items-center">
            <form
              onSubmit={handleSearchSubmit}
              className="w-full relative flex items-center"
            >
              <div className="relative w-full h-9 bg-slate-900 border border-slate-700 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 rounded-xl text-white transition px-2.5 flex items-center shadow-md overflow-hidden">
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                  placeholder={
                    language === 'bn'
                      ? 'কী খুঁজছেন? যেমন: iPhone 15, Flat...'
                      : 'Search e.g., iPhone 15, Flat...'
                  }
                  className="w-full h-full text-xs sm:text-sm focus:outline-none text-white placeholder-slate-400 font-medium bg-transparent"
                />

                {/* Voice & Search triggers */}
                <div className="flex items-center gap-1.5 shrink-0 ml-1">
                  <button
                    type="button"
                    onClick={handleVoiceSearch}
                    className="p-1 text-slate-300 hover:text-emerald-400 transition rounded-lg cursor-pointer"
                    title="Voice Search"
                  >
                    <Mic className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1 rounded-lg transition text-xs flex items-center gap-1 shrink-0 shadow-md cursor-pointer h-7"
                  >
                    {language === 'bn' ? 'খুঁজুন' : 'Search'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section: Header Tabs (In exact order: 1. Login, 2. Sell, 3. Dark Mode, 4. Bangla/English, 5. Support, 6. Wishlist, 7. Chat) */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-1.5 sm:gap-2 shrink-0 my-auto w-full md:w-auto">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 my-auto flex-wrap">
            {/* 1. Account / Login */}
            {isLoggedIn ? (
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
              >
                <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="max-w-[80px] sm:max-w-[110px] truncate">
                  {currentUser?.name || (userRole === 'admin' ? 'Admin' : (language === 'bn' ? 'অ্যাকাউন্ট' : 'Account'))}
                </span>
              </button>
            ) : (
              <button
                onClick={() => openAuthModal('general')}
                className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
              >
                <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{language === 'bn' ? 'লগইন' : 'Log In'}</span>
              </button>
            )}

            {/* 2. Sell Product Button */}
            <button
              onClick={handlePostAdClick}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
              title={language === 'bn' ? 'পণ্য বিক্রি করুন' : 'Sell Product'}
            >
              <PlusCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{language === 'bn' ? 'সেল' : 'Sell'}</span>
            </button>

            {/* 3. Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" /> : <Moon className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
              <span>{isDarkMode ? (language === 'bn' ? 'লাইট' : 'Light') : (language === 'bn' ? 'ডার্ক মোড' : 'Dark')}</span>
            </button>

            {/* 4. Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              <span className="text-amber-400">{language === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Support / Help Button */}
            <button
              onClick={openCustomerCare}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
              title={language === 'bn' ? 'হেল্প ও কাস্টমার কেয়ার' : 'Help & Support'}
            >
              <Headphones className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{language === 'bn' ? 'হেল্প' : 'Help'}</span>
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
              title="Saved Wishlist"
            >
              <Heart className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>{language === 'bn' ? 'পছন্দ' : 'Saved'}</span>
              {wishlist.length > 0 && (
                <span className="bg-pink-600 text-white font-bold text-[10px] px-1.5 py-0.2 rounded-full leading-none">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Chat */}
            <button
              onClick={() => setActiveTab('chat')}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
              title="Live Chat"
            >
              <MessageSquare className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{language === 'bn' ? 'চ্যাট' : 'Chat'}</span>
              {unreadChats > 0 && (
                <span className="bg-pink-600 text-white font-bold text-[10px] px-1.5 py-0.2 rounded-full leading-none">
                  {unreadChats}
                </span>
              )}
            </button>
          </div>

          {/* Running Clock Widget (Far Right) */}
          <div className="flex items-center my-auto shrink-0 ml-auto sm:ml-2">
            <LiveClockWidget />
          </div>
        </div>
      </div>

      {/* QUICK SUBBAR: 1. Home, 2. All Ads, 3. Location, 4. Ask AI */}
      <nav className="bg-slate-950/95 border-t border-slate-800/80 px-2 sm:px-4 py-1.5 relative z-20 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start sm:justify-between gap-2 text-xs font-bold">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {/* 1. Home */}
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center justify-center gap-1.5 px-3 h-9 rounded-xl transition cursor-pointer text-xs font-bold border shrink-0 active:scale-95 ${
                activeTab === 'home'
                  ? 'bg-slate-800 text-emerald-400 border-emerald-500'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <Home className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{language === 'bn' ? 'হোম' : 'Home'}</span>
            </button>

            {/* 2. All Ads */}
            <button
              onClick={() => {
                setFilters(prev => ({ ...prev, category: '' }));
                setActiveTab('search');
              }}
              className={`flex items-center justify-center gap-1.5 px-3 h-9 rounded-xl transition cursor-pointer text-xs font-bold border shrink-0 active:scale-95 ${
                activeTab === 'search' && !filters.category
                  ? 'bg-slate-800 text-emerald-400 border-emerald-500'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{language === 'bn' ? 'সব বিজ্ঞাপন' : 'All Ads'}</span>
            </button>

            {/* 3. Location Selector */}
            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer text-xs font-bold shrink-0 active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                {language === 'bn' ? 'লোকেশন:' : 'Location:'}{' '}
                <strong className="text-emerald-300 font-bold">
                  {selectedLocation.thana || selectedLocation.district || selectedLocation.division || (language === 'bn' ? 'সকল বাংলাদেশ' : 'All Bangladesh')}
                </strong>
              </span>
            </button>

            {/* 4. Ask AI */}
            <button
              onClick={() => setIsAISearchOpen(true)}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-700 rounded-xl font-bold transition cursor-pointer text-xs shrink-0 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse shrink-0" />
              <span>{language === 'bn' ? 'আস্ক এআই' : 'Ask AI'}</span>
            </button>
          </div>

          {/* Admin Panel Button */}
          {(userRole === 'admin' || currentUser?.role === 'admin') && (
            <button
              onClick={() => setActiveTab('admin')}
              className="flex items-center justify-center gap-1.5 px-3 h-9 bg-slate-900 hover:bg-slate-800 text-rose-300 border border-slate-700 rounded-xl text-xs font-bold shrink-0 transition cursor-pointer ml-auto active:scale-95"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-pink-400 shrink-0" />
              <span>{language === 'bn' ? 'এডমিন প্যানেল 👑' : 'Admin Panel 👑'}</span>
            </button>
          )}
        </div>
      </nav>

      {/* Fixed Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-1.5 px-4 flex items-center justify-between shadow-2xl md:hidden text-[10px] font-bold">
        {/* Home */}
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-0.5 cursor-pointer ${
            activeTab === 'home' ? 'text-emerald-600 dark:text-emerald-400 font-extrabold' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>{language === 'bn' ? 'হোম' : 'Home'}</span>
        </button>

        {/* All Ads */}
        <button
          onClick={() => {
            setFilters(prev => ({ ...prev, category: '' }));
            setActiveTab('search');
          }}
          className={`flex flex-col items-center gap-0.5 cursor-pointer ${
            activeTab === 'search' ? 'text-emerald-600 dark:text-emerald-400 font-extrabold' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>{language === 'bn' ? 'সব বিজ্ঞাপন' : 'All Ads'}</span>
        </button>

        {/* Sell / Post Ad (Center Highlighted Floating Emerald Circle) */}
        <button
          onClick={handlePostAdClick}
          className="flex flex-col items-center justify-center -mt-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-12 h-12 rounded-full shadow-lg border-2 border-white dark:border-slate-900 transition active:scale-95 cursor-pointer shrink-0"
          title="Post Free Ad"
        >
          <PlusCircle className="w-6 h-6" />
        </button>

        {/* Chat / Support */}
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex flex-col items-center gap-0.5 cursor-pointer relative ${
            activeTab === 'chat' ? 'text-emerald-600 dark:text-emerald-400 font-extrabold' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>{language === 'bn' ? 'চ্যাট' : 'Chat'}</span>
          {unreadChats > 0 && (
            <span className="absolute -top-1 right-0 bg-emerald-600 text-white font-bold text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {unreadChats}
            </span>
          )}
        </button>

        {/* Admin Panel (ONLY Visible if user is logged in as Admin) */}
        {(userRole === 'admin' || currentUser?.role === 'admin') && (
          <button
            onClick={() => {
              setActiveTab('admin');
            }}
            className={`flex flex-col items-center gap-0.5 cursor-pointer ${
              activeTab === 'admin' ? 'text-pink-500 font-extrabold' : 'text-slate-500 dark:text-slate-400 hover:text-pink-400'
            }`}
            title="Admin Panel"
          >
            <LayoutDashboard className="w-4 h-4 text-pink-500" />
            <span className="text-[9px] font-black text-pink-500">{language === 'bn' ? 'এডমিন' : 'Admin'}</span>
          </button>
        )}

        {/* Account / Profile Modal Trigger */}
        <button
          onClick={() => (isLoggedIn ? setIsProfileModalOpen(true) : openAuthModal('general'))}
          className={`flex flex-col items-center gap-0.5 cursor-pointer ${
            activeTab === 'dashboard' ? 'text-emerald-600 dark:text-emerald-400 font-extrabold' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <User className="w-4 h-4" />
          <span>{isLoggedIn ? (language === 'bn' ? 'প্রোফাইল' : 'Profile') : (language === 'bn' ? 'লগইন' : 'Login')}</span>
        </button>
      </div>

      {/* Global User Profile Edit & Deactivate Modal */}
      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </header>
  );
};
