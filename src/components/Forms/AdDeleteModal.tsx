import React, { useState } from 'react';
import { useMarket } from '../../context/MarketContext';
import { Trash2, AlertTriangle, X, CheckCircle, HelpCircle } from 'lucide-react';

const REMOVAL_REASONS = [
  { id: 'sold_here', bn: 'প্রোডাক্টটি বিডি মার্কেটপ্লেসে সফলভাবে বিক্রি হয়ে গেছে (Sold on MarketBD.Net)', en: 'Item sold successfully on MarketBD.Net' },
  { id: 'sold_elsewhere', bn: 'অন্য কোনো দোকান, ফেসবুক বা সোশ্যাল মিডিয়ায় বিক্রি হয়েছে (Sold Elsewhere)', en: 'Item sold elsewhere (Facebook / Other Shop)' },
  { id: 'wrong_info', bn: 'বিজ্ঞাপনে ভুল তথ্য বা দাম দিয়েছিলাম, আবার নতুন করে পোস্ট করবো', en: 'Incorrect information or pricing in post' },
  { id: 'changed_mind', bn: 'আপাতত আর বিক্রি করতে ইচ্ছুক নই (Changed Mind)', en: 'Decided not to sell for now' },
  { id: 'too_many_offers', bn: 'ক্রেতারা অতিরিক্ত দরদাম করছিল বা স্প্যাম মেসেজ পাচ্ছিলাম', en: 'Recieved too many low-ball offers or spam' },
  { id: 'other', bn: 'অন্যান্য কারণ (Other Reasons)', en: 'Other reason' },
];

export const AdDeleteModal: React.FC = () => {
  const { language, adToDelete, closeDeleteModal, deleteProductWithReason } = useMarket();

  const [selectedReason, setSelectedReason] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!adToDelete) return null;

  const handleConfirmDelete = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedReason) {
      setErrorMsg(
        language === 'bn'
          ? '⚠️ অনুগ্রহ করে ড্রপডাউন থেকে বিজ্ঞাপনটি মুছে ফেলার মূল কারণটি সিলেক্ট করুন!'
          : '⚠️ Please select a removal reason from the dropdown list!'
      );
      return;
    }

    setErrorMsg('');
    deleteProductWithReason(adToDelete.id, selectedReason, customNote);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-5 transition-all text-slate-900 dark:text-slate-100">
        {/* Close Button */}
        <button
          onClick={closeDeleteModal}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-200 dark:border-red-800">
            <Trash2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
              {language === 'bn' ? 'বিজ্ঞাপন মুছে ফেলতে চান?' : 'Confirm Ad Removal'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5 truncate max-w-[280px]">
              "{adToDelete.title}"
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleConfirmDelete} className="space-y-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/80 rounded-xl text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {language === 'bn'
                ? 'আমাদের সার্ভিস উন্নত করতে বিজ্ঞাপন মুছে ফেলার সুনির্দিষ্ট কারণটি (Dropdown Text) নির্বাচন করা আবশ্যক।'
                : 'Selecting a reason from the dropdown is mandatory before removing your ad.'}
            </p>
          </div>

          {/* Mandatory Dropdown Select */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-1.5 flex items-center justify-between">
              <span>{language === 'bn' ? 'মুছে ফেলার প্রধান কারণ নির্বাচন করুন *' : 'Select Removal Reason *'}</span>
              <span className="text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-0.5 rounded font-bold">
                Mandatory
              </span>
            </label>

            <select
              value={selectedReason}
              onChange={e => {
                setSelectedReason(e.target.value);
                setErrorMsg('');
              }}
              className="w-full px-3.5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white font-bold border border-slate-300 dark:border-slate-700 focus:border-red-500 rounded-xl text-xs focus:outline-none transition-all cursor-pointer"
            >
              <option value="" disabled className="bg-slate-900 text-slate-400 font-medium">
                {language === 'bn' ? '-- ড্রপডাউন থেকে কারণ নির্বাচন করুন --' : '-- Select Reason From Dropdown --'}
              </option>
              {REMOVAL_REASONS.map(r => (
                <option
                  key={r.id}
                  value={language === 'bn' ? r.bn : r.en}
                  className="bg-slate-900 text-white font-semibold py-1.5"
                >
                  {language === 'bn' ? r.bn : r.en}
                </option>
              ))}
            </select>
          </div>

          {/* Optional Note */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {language === 'bn' ? 'অতিরিক্ত কোনো মন্তব্য/নোট থাকলে লিখুন (ঐচ্ছিক)' : 'Additional Notes / Comments (Optional)'}
            </label>
            <textarea
              rows={2}
              value={customNote}
              onChange={e => setCustomNote(e.target.value)}
              placeholder={language === 'bn' ? 'যেমন: কাস্টমার খুব দ্রুত এসে নিয়ে গেছেন...' : 'e.g. Buyer picked up within 2 hours...'}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-red-500 rounded-xl text-xs text-slate-900 dark:text-slate-100 focus:outline-none"
            />
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="p-3 bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-bold rounded-xl animate-shake">
              {errorMsg}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={closeDeleteModal}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition cursor-pointer"
            >
              {language === 'bn' ? 'বাতিল করুন' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all duration-200 hover:scale-105 cursor-pointer flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              <span>{language === 'bn' ? 'মুছে ফেলা নিশ্চিত করুন' : 'Confirm Delete'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
