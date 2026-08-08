import React from 'react';
import { MarketProvider, useMarket } from './context/MarketContext';
import { Navbar } from './components/Navbar/Navbar';
import { LocationModal } from './components/Navbar/LocationModal';
import { AuthModal } from './components/Auth/AuthModal';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { ProductDetailModal } from './components/Product/ProductDetailModal';
import { CategoryForms } from './components/Forms/CategoryForms';
import { ChatDrawer } from './components/Chat/ChatDrawer';
import { CompareModal } from './components/Compare/CompareModal';
import { AISearchModal } from './components/AI/AISearchModal';
import { DashboardPage } from './pages/DashboardPage';
import { AdminPage } from './pages/AdminPage';
import { HelpPage } from './pages/HelpPage';
import { CustomerCareChat } from './components/Chat/CustomerCareChat';
import { AdDeleteModal } from './components/Forms/AdDeleteModal';
import { AppUpdateModal } from './components/AppUpdate/AppUpdateModal';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab, setActiveTab, selectedProduct, goBack, canGoBack, goForward, canGoForward, language } = useMarket();

  // Scroll to top of window whenever activeTab or selectedProduct changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeTab, selectedProduct?.id]);

  const getPageTitle = () => {
    if (selectedProduct) {
      return language === 'bn' ? 'পণ্যের বিবরণ' : 'Product Details';
    }
    switch (activeTab) {
      case 'search':
        return language === 'bn' ? 'বিজ্ঞাপন সমূহ' : 'Search Listings';
      case 'post-ad':
        return language === 'bn' ? 'বিজ্ঞাপন পোস্ট' : 'Post Ad';
      case 'chat':
        return language === 'bn' ? 'চ্যাট ও মেসেজ' : 'Messages';
      case 'compare':
        return language === 'bn' ? 'পণ্য তুলনা' : 'Compare Products';
      case 'dashboard':
        return language === 'bn' ? 'আমার অ্যাকাউন্ট' : 'My Dashboard';
      case 'admin':
        return language === 'bn' ? 'অ্যাডমিন প্যানেল' : 'Admin Panel';
      case 'help':
        return language === 'bn' ? 'সাহায্য কেন্দ্র' : 'Help Center';
      default:
        return language === 'bn' ? 'হোম' : 'Home';
    }
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'search':
        return <SearchPage />;
      case 'product-details':
        return <ProductDetailModal />;
      case 'post-ad':
        return <CategoryForms />;
      case 'chat':
        return <ChatDrawer />;
      case 'compare':
        return <CompareModal />;
      case 'dashboard':
        return <DashboardPage />;
      case 'admin':
        return <AdminPage />;
      case 'help':
        return <HelpPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors w-full max-w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-4 py-3 pb-20 md:pb-4">
        {/* Universal Sticky Top Navigation Bar for Back & Next */}
        {(canGoBack || canGoForward) && (
          <div className="mb-3 sticky top-1 z-30 flex items-center justify-between bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border-2 border-emerald-500 shadow-md transition-all">
            <div className="flex items-center gap-2">
              {canGoBack && (
                <button
                  onClick={goBack}
                  className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl transition shadow-sm cursor-pointer shrink-0"
                  title={language === 'bn' ? 'পেছনে যান (Back)' : 'Go Back'}
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                  <span>{language === 'bn' ? 'পেছনে যান (Back)' : 'Back'}</span>
                </button>
              )}

              {canGoForward && (
                <button
                  onClick={goForward}
                  className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl transition shadow-sm cursor-pointer shrink-0"
                  title={language === 'bn' ? 'সামনে যান (Next)' : 'Go Next'}
                >
                  <span>{language === 'bn' ? 'সামনে যান (Next)' : 'Next'}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                </button>
              )}
            </div>

            <div className="text-center px-2 truncate">
              <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                {getPageTitle()}
              </span>
            </div>

            <button
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-600 font-bold text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 transition cursor-pointer shrink-0"
            >
              <Home className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">{language === 'bn' ? 'হোমে যান' : 'Home'}</span>
            </button>
          </div>
        )}

        {renderActiveView()}
      </main>

      <Footer />

      {/* Global Modals & Support */}
      <LocationModal />
      <AISearchModal />
      <AuthModal />
      <CustomerCareChat />
      <AdDeleteModal />
      <AppUpdateModal />
    </div>
  );
};

export default function App() {
  return (
    <MarketProvider>
      <MainContent />
    </MarketProvider>
  );
}
