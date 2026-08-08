import React, { useState } from 'react';
import { useMarket } from '../../context/MarketContext';
import { Smartphone, Sparkles, Send, CheckCircle2, ShieldCheck, Download, AlertTriangle, RefreshCw } from 'lucide-react';

export const AppUpdateAdminPanel: React.FC = () => {
  const { language, appRelease, updateAppRelease, userInstalledVersion } = useMarket();

  const [versionInput, setVersionInput] = useState(appRelease.version);
  const [titleBnInput, setTitleBnInput] = useState(appRelease.titleBn);
  const [titleEnInput, setTitleEnInput] = useState(appRelease.titleEn);
  const [notesBnInput, setNotesBnInput] = useState(appRelease.notesBn);
  const [notesEnInput, setNotesEnInput] = useState(appRelease.notesEn);
  const [isMandatoryInput, setIsMandatoryInput] = useState(appRelease.isMandatory);
  const [apkUrlInput, setApkUrlInput] = useState(appRelease.apkDownloadUrl);
  const [playStoreUrlInput, setPlayStoreUrlInput] = useState(appRelease.playStoreUrl || 'https://play.google.com/store/apps/details?id=com.marketbd.app');

  const [publishSuccess, setPublishSuccess] = useState(false);

  const handlePublishUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!versionInput.trim()) {
      alert(language === 'bn' ? 'অনুগ্রহ করে ভার্সন নম্বর প্রদান করুন।' : 'Please enter a version number.');
      return;
    }

    updateAppRelease({
      version: versionInput.trim(),
      buildNumber: Math.floor(Date.now() / 1000),
      releaseDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      titleBn: titleBnInput.trim(),
      titleEn: titleEnInput.trim(),
      notesBn: notesBnInput.trim(),
      notesEn: notesEnInput.trim(),
      isMandatory: isMandatoryInput,
      apkDownloadUrl: apkUrlInput.trim(),
      playStoreUrl: playStoreUrlInput.trim(),
      publishedAt: new Date().toISOString()
    });

    setPublishSuccess(true);
    setTimeout(() => setPublishSuccess(false), 4000);
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 rounded-3xl border-2 border-indigo-500/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shrink-0">
            <Smartphone className="w-7 h-7 animate-bounce" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <span>{language === 'bn' ? '📱 অ্যান্ডয়েড অ্যাপস ও ওয়েব অটো-আপডেট ম্যানেজার' : '📱 App Update & Release Notes Manager'}</span>
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-400/40 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                LIVE
              </span>
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              {language === 'bn'
                ? 'নতুন আপডেট বা ফিচারের লিখিত বিবরণ প্রকাশ করুন যা সকল অ্যান্ড্রয়েড অ্যাপস ও ওয়েব ইউজারদের স্ক্রিনে দেখাবে।'
                : 'Publish app release notes and updates to trigger auto-update notifications on all client devices.'}
            </p>
          </div>
        </div>

        <div className="bg-slate-800/90 border border-indigo-400/30 px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-3">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">{language === 'bn' ? 'লাইভ ভার্সন' : 'Live Version'}</span>
            <span className="text-emerald-400 text-sm font-black">{appRelease.version}</span>
          </div>
          <div className="h-6 w-px bg-slate-700" />
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">{language === 'bn' ? 'ইনস্টলড ক্লায়েন্ট' : 'Installed Client'}</span>
            <span className="text-amber-400 text-sm font-black">{userInstalledVersion}</span>
          </div>
        </div>
      </div>

      {publishSuccess && (
        <div className="p-4 bg-emerald-500/10 border-2 border-emerald-500 text-emerald-700 dark:text-emerald-300 rounded-2xl flex items-center gap-3 font-bold text-xs sm:text-sm animate-in zoom-in-95">
          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
          <span>
            {language === 'bn'
              ? '🎉 নতুন অ্যাপ আপডেট ও লিখিত রিলিজ নোটস সফলভাবে অবমুক্ত করা হয়েছে! সকল ইউজারদের কাছে নোটিফিকেশন পৌছে গেছে।'
              : '🎉 App update & release notes published successfully! All users have received the update alert.'}
          </span>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handlePublishUpdate} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Version & Settings */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl space-y-4 shadow-md">
          <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 border-b pb-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>{language === 'bn' ? '১. ভার্সন ও ডিরেক্টরি সেটিংস' : '1. Version & Link Config'}</span>
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {language === 'bn' ? 'নতুন ভার্সন নম্বর (e.g. v2.6.0)' : 'New Version Number'}
            </label>
            <input
              type="text"
              value={versionInput}
              onChange={e => setVersionInput(e.target.value)}
              placeholder="v2.6.0"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {language === 'bn' ? 'আপডেট শিরোনাম (বাংলা)' : 'Update Title (Bengali)'}
            </label>
            <input
              type="text"
              value={titleBnInput}
              onChange={e => setTitleBnInput(e.target.value)}
              placeholder="নতুন সিকিউরিটি আপডেট ও ফিচার v2.6.0"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {language === 'bn' ? 'আপডেট শিরোনাম (English)' : 'Update Title (English)'}
            </label>
            <input
              type="text"
              value={titleEnInput}
              onChange={e => setTitleEnInput(e.target.value)}
              placeholder="Security & Feature Update v2.6.0"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {language === 'bn' ? 'অ্যান্ড্রয়েড APK ডাউনলোড লিংক' : 'Android APK Download URL'}
            </label>
            <input
              type="url"
              value={apkUrlInput}
              onChange={e => setApkUrlInput(e.target.value)}
              placeholder="https://example.com/marketbd-v2.6.0.apk"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {language === 'bn' ? 'গুগল প্লে স্টোর অ্যাপ লিংক (Google Play Store URL)' : 'Google Play Store App URL'}
            </label>
            <input
              type="url"
              value={playStoreUrlInput}
              onChange={e => setPlayStoreUrlInput(e.target.value)}
              placeholder="https://play.google.com/store/apps/details?id=com.marketbd.app"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <input
              type="checkbox"
              id="mandatoryToggle"
              checked={isMandatoryInput}
              onChange={e => setIsMandatoryInput(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
            />
            <label htmlFor="mandatoryToggle" className="text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
              {language === 'bn' ? 'বাধ্যতামূলক আপডেট (Mandatory Update - পপআপ স্কিপ করা যাবে না)' : 'Mandatory Update (Force Update)'}
            </label>
          </div>
        </div>

        {/* Right Column: Written Release Notes (লিখিত রূপ) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl space-y-4 shadow-md flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 border-b pb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{language === 'bn' ? '২. লিখিত আপডেট বিবরণ (Release Notes & Changelog)' : '2. Written Release Notes'}</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'bn' ? 'লিখিত বিবরণ (বাংলা - পয়েন্ট আকারে লিখুন)' : 'Written Notes (Bengali)'}
              </label>
              <textarea
                value={notesBnInput}
                onChange={e => setNotesBnInput(e.target.value)}
                rows={5}
                placeholder="• ওটিপি সিকিউরিটি যুক্ত করা হয়েছে...&#10;• গতি বৃদ্ধি করা হয়েছে..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs leading-relaxed focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'bn' ? 'লিখিত বিবরণ (English)' : 'Written Notes (English)'}
              </label>
              <textarea
                value={notesEnInput}
                onChange={e => setNotesEnInput(e.target.value)}
                rows={4}
                placeholder="• Added OTP authentication...&#10;• Bug fixes..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs leading-relaxed focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-sm rounded-2xl transition shadow-lg cursor-pointer flex items-center justify-center gap-2 active:scale-95 mt-4"
          >
            <Send className="w-4 h-4" />
            <span>{language === 'bn' ? '🚀 নতুন আপডেট ও রিলিজ নোটস প্রকাশ করুন' : 'Publish App Update & Release Notes'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
