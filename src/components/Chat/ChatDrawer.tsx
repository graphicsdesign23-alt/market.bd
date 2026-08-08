import React, { useState, useRef } from 'react';
import { useMarket } from '../../context/MarketContext';
import { getMarketBdTenure } from '../../utils/tenure';
import {
  Send,
  Image as ImageIcon,
  DollarSign,
  Phone,
  Check,
  CheckCheck,
  Mic,
  MapPin,
  X,
  Lock,
  Trash2,
  ShieldAlert,
  AlertOctagon,
  Filter,
  Clock,
  ArrowLeft
} from 'lucide-react';

export const ChatDrawer: React.FC = () => {
  const {
    language,
    chatThreads,
    activeChat,
    setActiveChat,
    sendMessage,
    setActiveTab,
    spamThreads,
    toggleSpamThread,
    goBack
  } = useMarket();

  const [messageInput, setMessageInput] = useState('');
  const [offerInput, setOfferInput] = useState('');
  const [showOfferBox, setShowOfferBox] = useState(false);
  const [filterTab, setFilterTab] = useState<'all' | 'unread' | 'read' | 'spam'>('all');
  
  // Image & Attachment state
  const [attachedImage, setAttachedImage] = useState<string>('');
  const chatFileInputRef = useRef<HTMLInputElement>(null);
  
  // Security PIN Code State
  const [isPinUnlocked, setIsPinUnlocked] = useState<boolean>(true);
  const [pinInput, setPinInput] = useState<string>('');
  const [showPinModal, setShowPinModal] = useState<boolean>(false);
  const [pinError, setPinError] = useState<string>('');

  const [deletedThreadIds, setDeletedThreadIds] = useState<string[]>([]);

  const handleUnlockPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '1234' || pinInput.length === 4) {
      setIsPinUnlocked(true);
      setShowPinModal(false);
      setPinError('');
      setPinInput('');
    } else {
      setPinError(language === 'bn' ? 'ভুল পিন কোড! সঠিক ৪ ডিজিটের পিন দিন (ডিফল্ট: 1234)' : 'Incorrect PIN code! (Default: 1234)');
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.result) {
          setAttachedImage(evt.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!messageInput.trim() && !attachedImage) || !activeChat) return;

    sendMessage(
      activeChat.id,
      messageInput.trim(),
      undefined,
      attachedImage || undefined
    );
    setMessageInput('');
    setAttachedImage('');
  };

  const handleSendVoiceNote = () => {
    if (!activeChat) return;
    sendMessage(
      activeChat.id,
      language === 'bn' ? '🎙️ [ভয়েস মেসেজ - ০:১৫]' : '🎙️ [Voice Message - 0:15]'
    );
  };

  const handleSendLocation = () => {
    if (!activeChat) return;
    sendMessage(
      activeChat.id,
      language === 'bn'
        ? '📍 [আমার লোকেশন শেয়ার করা হলো: ধানমন্ডি ২৭, ঢাকা]'
        : '📍 [Location shared: Dhanmondi 27, Dhaka]'
    );
  };

  const handleSendOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!offerInput || !activeChat) return;

    const amount = Number(offerInput);
    sendMessage(
      activeChat.id,
      `${language === 'bn' ? 'প্রাইস অফার:' : 'Price Offer:'} ৳${amount.toLocaleString()}`,
      amount
    );
    setOfferInput('');
    setShowOfferBox(false);
  };

  const handleDeleteThread = (threadId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(language === 'bn' ? 'আপনি কি এই চ্যাটটি থ্রেড তালিকা থেকে রিমুভ করতে চান?' : 'Remove this chat thread?')) {
      setDeletedThreadIds(prev => [...prev, threadId]);
      if (activeChat?.id === threadId) {
        setActiveChat(null);
      }
    }
  };

  // Filter threads
  const visibleThreads = chatThreads.filter(t => {
    if (deletedThreadIds.includes(t.id)) return false;
    const isSpam = spamThreads.includes(t.id);

    if (filterTab === 'spam') return isSpam;
    if (isSpam) return false;

    if (filterTab === 'unread') return t.unreadCount && t.unreadCount > 0;
    if (filterTab === 'read') return !t.unreadCount || t.unreadCount === 0;
    return true; // 'all'
  });

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Permanent Message Safety Banner */}
      <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 rounded-2xl flex items-center justify-between text-xs text-amber-900 dark:text-amber-200 shadow-2xs">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="font-semibold">
            {language === 'bn'
              ? 'সতর্কবার্তা: ক্রেতা-বিক্রেতার নিরাপত্তার স্বার্থে এই প্ল্যাটফর্মের সকল চ্যাট মেসেজ স্থায়ী (Permanent) ও অপরিবর্তনযোগ্য। প্রতারণা ও খারাপ আচরণের বিরুদ্ধে কড়া নজরদারি করা হয়।'
              : 'Safety Notice: For security and legal record, all chat messages on MarketBD.Net are permanent and unalterable.'}
          </p>
        </div>

        <button
          onClick={() => setShowPinModal(true)}
          className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-[11px] shrink-0 transition flex items-center gap-1 cursor-pointer"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? 'সিকিউরিটি পিন (PIN)' : 'Chat PIN Code'}</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 h-[75vh]">
        {/* Left Side: Threads List */}
        <div className={`border-r border-gray-200 dark:border-slate-800 flex flex-col bg-gray-50 dark:bg-slate-950 ${activeChat ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 bg-pink-700 text-white font-bold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-sm">
                <Lock className="w-4 h-4 text-pink-300" />
                <span>{language === 'bn' ? 'মেসেজ ও ইনবক্স' : 'Messages & Inbox'}</span>
              </span>
            </div>
            <span className="text-xs bg-pink-900 px-2 py-0.5 rounded-full font-extrabold">
              {visibleThreads.length}
            </span>
          </div>

          {/* Inbox Filter Tabs: All, Unread, Read, Spam */}
          <div className="p-2 bg-slate-200/80 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex items-center gap-1 overflow-x-auto text-[11px] font-bold">
            <button
              onClick={() => setFilterTab('all')}
              className={`px-2.5 py-1 rounded-lg transition shrink-0 cursor-pointer ${
                filterTab === 'all'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {language === 'bn' ? 'সব (All)' : 'All'}
            </button>

            <button
              onClick={() => setFilterTab('unread')}
              className={`px-2.5 py-1 rounded-lg transition shrink-0 cursor-pointer ${
                filterTab === 'unread'
                  ? 'bg-pink-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {language === 'bn' ? 'আনরিড (Unread)' : 'Unread'}
            </button>

            <button
              onClick={() => setFilterTab('read')}
              className={`px-2.5 py-1 rounded-lg transition shrink-0 cursor-pointer ${
                filterTab === 'read'
                  ? 'bg-pink-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {language === 'bn' ? 'রিড (Read)' : 'Read'}
            </button>

            <button
              onClick={() => setFilterTab('spam')}
              className={`px-2.5 py-1 rounded-lg transition shrink-0 cursor-pointer ${
                filterTab === 'spam'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {language === 'bn' ? 'স্পাম (Spam)' : 'Spam'}
            </button>
          </div>

          <div className="overflow-y-auto flex-1 divide-y divide-gray-100 dark:divide-slate-800">
            {visibleThreads.length > 0 ? (
              visibleThreads.map(thread => {
                const isActive = activeChat?.id === thread.id;
                const isSpam = spamThreads.includes(thread.id);
                return (
                  <div
                    key={thread.id}
                    onClick={() => {
                      if (!isPinUnlocked) {
                        setShowPinModal(true);
                      } else {
                        setActiveChat(thread);
                      }
                    }}
                    className={`p-3 cursor-pointer transition flex items-center gap-3 relative group ${
                      isActive ? 'bg-emerald-100/80 dark:bg-slate-800 border-l-4 border-emerald-600' : 'hover:bg-gray-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <img
                      src={thread.productImage}
                      alt=""
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-bold text-xs text-gray-900 dark:text-slate-100 truncate">
                          {thread.seller.name}
                        </h4>
                        <span className="text-[10px] text-gray-400 shrink-0">
                          {thread.lastMessageTime}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-slate-400 truncate mt-0.5">
                        {thread.productTitle}
                      </p>
                      <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 truncate mt-0.5">
                        {thread.lastMessage}
                      </p>
                    </div>

                    {/* Quick Thread Action Hover Menu (Spam & Delete) */}
                    <div className="hidden group-hover:flex items-center gap-1 shrink-0">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          toggleSpamThread(thread.id);
                        }}
                        className={`p-1 rounded text-[10px] ${
                          isSpam ? 'bg-red-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-red-500 hover:text-white'
                        }`}
                        title={isSpam ? 'Unmark Spam' : 'Mark Spam'}
                      >
                        <AlertOctagon className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={e => handleDeleteThread(thread.id, e)}
                        className="p-1 bg-slate-200 dark:bg-slate-800 hover:bg-red-600 text-slate-700 hover:text-white rounded transition text-[10px]"
                        title="Delete Thread"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-slate-400 italic">
                {language === 'bn' ? 'কোনো মেসেজ পাওয়া যায়নি' : 'No messages in this folder'}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Active Chat Panel */}
        <div className={`md:col-span-2 flex flex-col h-full bg-white dark:bg-slate-900 ${!activeChat ? 'hidden md:flex' : 'flex'}`}>
          {activeChat ? (
            <>
              {/* Product Info Bar at Top of Chat */}
              <div className="p-3 bg-gray-50 dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <button
                    onClick={() => setActiveChat(null)}
                    className="md:hidden p-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white rounded-xl text-slate-700 dark:text-slate-300 transition shrink-0 cursor-pointer"
                    title={language === 'bn' ? 'ইনবক্স তালিকা' : 'Back to Inbox'}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <img
                    src={activeChat.productImage}
                    alt=""
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs text-gray-900 dark:text-slate-100 truncate">
                      {activeChat.productTitle}
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-black text-emerald-700 dark:text-emerald-400">
                        ৳{activeChat.productPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-pink-900 dark:text-pink-200 bg-pink-100 dark:bg-pink-950/80 border border-pink-300 dark:border-pink-800 px-2 py-0.5 rounded-full font-extrabold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-pink-600 dark:text-pink-400" />
                        <span>{getMarketBdTenure(activeChat.seller.memberSince, language)}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setShowOfferBox(!showOfferBox)}
                    className="bg-yellow-400 hover:bg-yellow-300 text-emerald-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow transition cursor-pointer"
                  >
                    {language === 'bn' ? 'অফার পাঠান' : 'Send Offer'}
                  </button>
                  {!activeChat.seller.hidePhone && (
                    <a
                      href={`tel:${activeChat.seller.phone}`}
                      className="bg-pink-700 text-white p-2 rounded-xl hover:bg-pink-800 transition"
                      title={activeChat.seller.phone}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Offer Box Drawer */}
              {showOfferBox && (
                <form
                  onSubmit={handleSendOffer}
                  className="p-3 bg-amber-50 dark:bg-amber-950/80 border-b border-amber-200 dark:border-amber-800 flex items-center gap-2"
                >
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-200 shrink-0">
                    {language === 'bn' ? 'অফার প্রাইস ৳:' : 'Offer Price ৳:'}
                  </span>
                  <input
                    type="number"
                    value={offerInput}
                    onChange={e => setOfferInput(e.target.value)}
                    placeholder="e.g. 130000"
                    className="px-3 py-1.5 border border-amber-300 dark:border-amber-700 rounded-lg text-xs font-bold w-36 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-emerald-800 cursor-pointer"
                  >
                    {language === 'bn' ? 'কনফার্ম' : 'Send'}
                  </button>
                </form>
              )}

              {/* Messages History with Full Date & Time */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-emerald-50/20 dark:bg-slate-950/50">
                {activeChat.messages.map(msg => {
                  const isMe = msg.senderId === 'user-me';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-xs sm:max-w-md p-3 rounded-2xl text-xs shadow-xs ${
                          isMe
                            ? 'bg-emerald-700 text-white rounded-br-none'
                            : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-slate-100 rounded-bl-none'
                        }`}
                      >
                        {msg.isOffer && (
                          <div className="mb-1 pb-1 border-b border-white/20 font-bold text-yellow-300">
                            ⚡ Price Offer: ৳{msg.offerAmount?.toLocaleString()}
                          </div>
                        )}
                        {msg.image && (
                          <div className="mb-2 overflow-hidden rounded-xl border border-white/20 max-w-xs shadow-md">
                            <img
                              src={msg.image}
                              alt="Chat attachment"
                              className="w-full max-h-56 object-cover cursor-pointer hover:opacity-90 transition"
                              onClick={() => window.open(msg.image, '_blank')}
                            />
                          </div>
                        )}
                        <p className="leading-relaxed">{msg.text}</p>
                        
                        {/* Full Timestamp Date & Time */}
                        <div className={`text-[9px] mt-1.5 flex items-center justify-end gap-1 font-mono ${isMe ? 'text-emerald-200' : 'text-gray-400 dark:text-slate-400'}`}>
                          <span>28 Jul 2026, {msg.timestamp}</span>
                          {isMe && (
                            msg.status === 'seen' ? (
                              <span className="flex items-center text-pink-400 font-bold gap-0.5 bg-white/10 px-1 rounded-full border border-pink-400/30" title={language === 'bn' ? 'দেখা হয়েছে (Seen)' : 'Seen'}>
                                <CheckCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                                <span className="text-[8px] font-extrabold uppercase tracking-tight">{language === 'bn' ? 'সিন' : 'Seen'}</span>
                              </span>
                            ) : msg.status === 'delivered' ? (
                              <CheckCheck className="w-3.5 h-3.5 text-emerald-200" title={language === 'bn' ? 'পৌঁছেছে (Delivered)' : 'Delivered'} />
                            ) : (
                              <Check className="w-3.5 h-3.5 text-emerald-200/80" title={language === 'bn' ? 'পাঠানো হয়েছে (Sent)' : 'Sent'} />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Preset Quick Questions Chips for Buyers */}
              <div className="bg-slate-100 dark:bg-slate-950 p-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                  {[
                    { bn: '👋 পণ্যটি কি বিক্রি আছে?', en: '👋 Is it available?' },
                    { bn: '💰 দাম কিছুটা কম রাখা যাবে কি?', en: '💰 Is price negotiable?' },
                    { bn: '📍 আপনার লোকেশন কোথায়?', en: '📍 Where is your location?' },
                    { bn: '📦 মেমো ও অরিজিনাল বক্স আছে কি?', en: '📦 Memo & box included?' },
                    { bn: '🚚 কুরিয়ারে পাঠানো যাবে কি?', en: '🚚 Courier delivery available?' },
                    { bn: '🕒 কখন দেখা করা সম্ভব?', en: '🕒 When can we meet?' }
                  ].map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        if (activeChat) {
                          sendMessage(activeChat.id, language === 'bn' ? q.bn : q.en);
                        }
                      }}
                      className="px-3 py-1 bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-slate-800 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 text-[11px] font-bold rounded-full border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition shrink-0 cursor-pointer shadow-2xs"
                    >
                      {language === 'bn' ? q.bn : q.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form with Image & Media Attachment */}
              <div className="bg-white dark:bg-slate-900 border-t-2 border-emerald-500/80 shrink-0">
                {/* Image Preview Thumbnail if attached */}
                {attachedImage && (
                  <div className="p-2.5 bg-emerald-50 dark:bg-slate-800 border-b border-emerald-200 dark:border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={attachedImage}
                        alt="Preview"
                        className="w-12 h-12 object-cover rounded-xl border border-emerald-400 shadow-xs"
                      />
                      <div>
                        <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                          {language === 'bn' ? 'ছবি সংযুক্ত করা হয়েছে' : 'Image attached'}
                        </p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">
                          {language === 'bn' ? 'মেসেজের সাথে পাঠানো হবে' : 'Ready to send'}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAttachedImage('')}
                      className="p-1.5 text-red-500 hover:text-red-700 bg-white dark:bg-slate-900 rounded-full shadow-xs cursor-pointer"
                      title={language === 'bn' ? 'ছবি সরান' : 'Remove image'}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <form
                  onSubmit={handleSend}
                  className="p-3 flex items-center gap-2"
                >
                  <input
                    type="file"
                    ref={chatFileInputRef}
                    onChange={handleImageSelect}
                    accept="image/*"
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => chatFileInputRef.current?.click()}
                    className="p-2.5 text-slate-600 hover:text-emerald-600 bg-slate-100 dark:bg-slate-800 rounded-xl transition cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                    title={language === 'bn' ? 'ছবি ও গ্যালারি থেকে পাঠান' : 'Attach photo from gallery'}
                  >
                    <ImageIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </button>

                  <button
                    type="button"
                    onClick={handleSendVoiceNote}
                    className="p-2.5 text-slate-600 hover:text-emerald-600 bg-slate-100 dark:bg-slate-800 rounded-xl transition cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                    title={language === 'bn' ? 'ভয়েস বার্তা পাঠান' : 'Send voice note'}
                  >
                    <Mic className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </button>

                  <button
                    type="button"
                    onClick={handleSendLocation}
                    className="p-2.5 text-slate-600 hover:text-emerald-600 bg-slate-100 dark:bg-slate-800 rounded-xl transition cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                    title={language === 'bn' ? 'আমার লোকেশন পাঠান' : 'Send location'}
                  >
                    <MapPin className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </button>

                  <input
                    type="text"
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                    placeholder={
                      language === 'bn'
                        ? 'এখানে মেসেজ বা প্রশ্ন টাইপ করুন (ছবি বা ভয়েস পাঠাতে আইকনে চাপুন)...'
                        : 'Type unlimited messages or offers...'
                    }
                    className="flex-1 px-4 py-3 border-2 border-emerald-500 focus:border-emerald-600 bg-white dark:bg-slate-800 rounded-2xl text-xs text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
                  />

                  <button
                    type="submit"
                    disabled={!messageInput.trim() && !attachedImage}
                    className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold rounded-2xl transition shadow-md cursor-pointer flex items-center gap-1.5 shrink-0 text-xs"
                  >
                    <span>{language === 'bn' ? 'পাঠান' : 'Send'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-gray-400 dark:text-slate-500">
              <p className="text-sm">
                {language === 'bn'
                  ? 'চ্যাট শুরু করতে বামপাশের যেকোনো থ্রেড বেছে নিন'
                  : 'Select a conversation from the left to start chatting'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Security PIN Entry Modal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 w-full max-w-sm shadow-2xl border border-slate-200 dark:border-slate-800 relative">
            <button
              onClick={() => setShowPinModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 dark:bg-slate-800 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-5">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-base">
                {language === 'bn' ? 'সিকিউরিটি পিন (PIN) ভেরিফিকেশন' : 'Chat Security PIN'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {language === 'bn' ? 'ব্যক্তিগত গোপনীয়তার জন্য ৪ ডিজিটের পিন নম্বর দিন' : 'Enter 4-digit PIN code to unlock chat (Default: 1234)'}
              </p>
            </div>

            <form onSubmit={handleUnlockPin} className="space-y-4">
              <div>
                <input
                  type="password"
                  maxLength={4}
                  value={pinInput}
                  onChange={e => setPinInput(e.target.value)}
                  placeholder="••••"
                  className="w-full text-center text-2xl font-black tracking-widest py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600"
                  autoFocus
                />
                {pinError && (
                  <p className="text-[11px] text-red-600 font-bold mt-1.5 text-center">{pinError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition shadow-md cursor-pointer"
              >
                {language === 'bn' ? 'আনলক করুন' : 'Unlock Inbox'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
