import React, { useState, useEffect } from 'react';
import { useMarket } from '../../context/MarketContext';
import { getMarketBdTenure } from '../../utils/tenure';
import { storage } from '../../utils/storage';
import { BANGLADESH_DIVISIONS } from '../../data/bangladeshData';
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Trash2,
  Check,
  AlertTriangle,
  Lock,
  Edit2,
  ShieldCheck,
  LogOut,
  ArrowLeft,
  ArrowRight,
  Clock
} from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, logout, language, login } = useMarket();

  const [activeTab, setActiveTab] = useState<'profile' | 'edit' | 'delete'>('profile');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [division, setDivision] = useState('dhaka');
  const [district, setDistrict] = useState('dhaka_d');
  
  const [successMsg, setSuccessMsg] = useState('');
  const [confirmDeleteText, setConfirmDeleteText] = useState('');
  const [deleteError, setDeleteError] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setPhone(currentUser.phone || '');
      setEmail(currentUser.email || '');
      setDivision(currentUser.location?.division || 'dhaka');
      setDistrict(currentUser.location?.district || 'dhaka_d');
    }
  }, [currentUser, isOpen]);

  if (!isOpen || !currentUser) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg('');

    const updatedUser = {
      ...currentUser,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      location: { division, district }
    };

    // Update in Context and LocalStorage
    login(updatedUser);

    const existingUsersRaw = storage.getItem('marketbd_registered_users');
    if (existingUsersRaw) {
      try {
        const users = JSON.parse(existingUsersRaw);
        const idx = users.findIndex((u: any) => u.phone === currentUser.phone || u.email === currentUser.email);
        if (idx !== -1) {
          users[idx] = { ...users[idx], name, phone, email };
          storage.setItem('marketbd_registered_users', JSON.stringify(users));
        }
      } catch (e) {}
    }

    setSuccessMsg(language === 'bn' ? '✓ আপনার প্রোফাইল তথ্য সফলভাবে আপডেট হয়েছে!' : '✓ Profile updated successfully!');
    setTimeout(() => {
      setSuccessMsg('');
      setActiveTab('profile');
    }, 1500);
  };

  const handleDeleteAccount = () => {
    if (confirmDeleteText.trim().toLowerCase() !== 'delete') {
      setDeleteError(
        language === 'bn'
          ? '❌ অ্যাকাউন্ট ডিলিট নিশ্চিত করতে "DELETE" কথাটি লিখুন।'
          : '❌ Please type "DELETE" to confirm account deactivation.'
      );
      return;
    }

    // Remove user from storage registered users
    const existingUsersRaw = storage.getItem('marketbd_registered_users');
    if (existingUsersRaw) {
      try {
        const users = JSON.parse(existingUsersRaw);
        const filtered = users.filter((u: any) => u.phone !== currentUser.phone && u.email !== currentUser.email);
        storage.setItem('marketbd_registered_users', JSON.stringify(filtered));
      } catch (e) {}
    }

    logout();
    onClose();
    alert(
      language === 'bn'
        ? 'আপনার MarketBD.Net অ্যাকাউন্ট ও সমস্ত প্রোফাইল ডেটা ডিলিট করা হয়েছে।'
        : 'Your MarketBD.Net account and profile data have been deactivated.'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md overflow-hidden relative text-slate-900 dark:text-white">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-pink-600 text-white font-black text-lg flex items-center justify-center shadow-xs">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-sm font-black flex items-center gap-1.5">
                <span>{currentUser.name}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">{currentUser.phone}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800 p-1.5 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Subtabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs font-bold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-center transition cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'profile'
                ? 'border-pink-600 text-pink-600 dark:text-pink-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'প্রোফাইল' : 'Profile'}</span>
          </button>

          <button
            onClick={() => setActiveTab('edit')}
            className={`flex-1 py-3 text-center transition cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'edit'
                ? 'border-pink-600 text-pink-600 dark:text-pink-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'তথ্য পরিবর্তন' : 'Edit Profile'}</span>
          </button>

          <button
            onClick={() => setActiveTab('delete')}
            className={`flex-1 py-3 text-center transition cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'delete'
                ? 'border-red-600 text-red-600 dark:text-red-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'অ্যাকাউন্ট ডিলিট' : 'Deactivate'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5">
          {/* VIEW PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 font-bold">{language === 'bn' ? 'নাম:' : 'Full Name:'}</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">{currentUser.name}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 font-bold">{language === 'bn' ? 'মোবাইল নম্বর:' : 'Phone Number:'}</span>
                  <span className="font-mono font-extrabold text-pink-600 dark:text-pink-400">{currentUser.phone}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 font-bold">{language === 'bn' ? 'ইমেইল এড্রেস:' : 'Email Address:'}</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200">{currentUser.email || 'N/A'}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 font-bold">{language === 'bn' ? 'লোকেশন / বিভাগ:' : 'Location:'}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {currentUser.location?.district || 'Dhaka'}, {currentUser.location?.division || 'Dhaka'}
                  </span>
                </div>

                <div className="pt-1">
                  <div className="p-2.5 bg-pink-50 dark:bg-pink-950/80 rounded-xl border-2 border-pink-500 flex items-center justify-between text-xs font-bold text-pink-900 dark:text-pink-200">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-pink-600 dark:text-pink-400 shrink-0" />
                      <span>{language === 'bn' ? 'MarketBD.Net বয়স:' : 'MarketBD.Net History:'}</span>
                    </span>
                    <span className="text-pink-700 dark:text-pink-300 font-extrabold">
                      {getMarketBdTenure(currentUser.memberSince || '2023', language)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('edit')}
                  className="flex-1 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'তথ্য এডিট করুন' : 'Edit Information'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  className="py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-red-600 dark:text-red-400 font-bold rounded-xl text-xs transition flex items-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'লগআউট' : 'Logout'}</span>
                </button>
              </div>
            </div>
          )}

          {/* EDIT PROFILE TAB */}
          {activeTab === 'edit' && (
            <form onSubmit={handleSaveProfile} className="space-y-3">
              {successMsg && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold rounded-xl flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{successMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'bn' ? 'সম্পূর্ণ নাম' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-pink-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl text-xs font-bold focus:outline-none focus:border-pink-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'bn' ? 'মোবাইল নম্বর (ভেরিফাইড)' : 'Mobile Phone'} *
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-pink-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl text-xs font-mono font-bold focus:outline-none focus:border-pink-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-pink-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-pink-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'bn' ? 'বিভাগ' : 'Division'}
                  </label>
                  <select
                    value={division}
                    onChange={e => {
                      const newDivId = e.target.value;
                      setDivision(newDivId);
                      const divObj = BANGLADESH_DIVISIONS.find(d => d.id === newDivId || d.nameEn === newDivId);
                      if (divObj && divObj.districts.length > 0) {
                        setDistrict(divObj.districts[0].id);
                      }
                    }}
                    className="w-full px-3 py-2 border-2 border-pink-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-pink-600 cursor-pointer"
                  >
                    {BANGLADESH_DIVISIONS.map(d => (
                      <option key={d.id} value={d.id}>
                        {language === 'bn' ? d.nameBn : d.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'bn' ? 'জেলা' : 'District'}
                  </label>
                  <select
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-pink-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-pink-600 cursor-pointer"
                  >
                    {(BANGLADESH_DIVISIONS.find(d => d.id === division || d.nameEn === division)?.districts || []).map(dist => (
                      <option key={dist.id} value={dist.id}>
                        {language === 'bn' ? dist.nameBn : dist.nameEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs transition flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'পেছনে' : 'Back'}</span>
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs shadow-xs transition flex items-center gap-1 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'সেভ করুন' : 'Save Changes'}</span>
                </button>
              </div>
            </form>
          )}

          {/* DELETE / DEACTIVATE ACCOUNT TAB */}
          {activeTab === 'delete' && (
            <div className="space-y-3">
              <div className="p-3 bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800 rounded-xl text-xs text-red-700 dark:text-red-300 space-y-1">
                <div className="font-extrabold flex items-center gap-1.5 text-red-600 dark:text-red-400">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{language === 'bn' ? 'সতর্কবার্তা: অ্যাকাউন্ট স্থায়ীভাবে মুছে যাবে' : 'Warning: Permanent Deactivation'}</span>
                </div>
                <p className="leading-relaxed">
                  {language === 'bn'
                    ? 'প্রোফাইল মুছে ফেললে আপনার দেওয়া সকল সক্রিয় বিজ্ঞাপন, বুকমার্ক ও চ্যাট মেসেজ মুছে যাবে।'
                    : 'Deactivating your profile will remove all active posts, saved bookmarks, and messages.'}
                </p>
              </div>

              {deleteError && (
                <p className="text-xs font-bold text-red-600 dark:text-red-400">{deleteError}</p>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'bn' ? 'কনফার্ম করতে নিচে "DELETE" লিখুন:' : 'Type "DELETE" below to confirm:'}
                </label>
                <input
                  type="text"
                  value={confirmDeleteText}
                  onChange={e => {
                    setConfirmDeleteText(e.target.value);
                    setDeleteError('');
                  }}
                  placeholder="DELETE"
                  className="w-full px-3 py-2 border border-red-300 dark:border-red-800 bg-white dark:bg-slate-800 text-red-600 font-mono font-bold rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs transition flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'বাতিল' : 'Cancel'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl text-xs shadow-xs transition flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'অ্যাকাউন্ট মুছুন' : 'Confirm Deactivate'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
