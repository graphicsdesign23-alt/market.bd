import React, { useState, useEffect } from 'react';
import { useMarket } from '../../context/MarketContext';
import { Clock } from 'lucide-react';

export const LiveClockWidget: React.FC = () => {
  const { language } = useMarket();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getDateTimeComponents = () => {
    const bnDays = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const bnMonths = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    const toBnNums = (str: string | number) =>
      String(str).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);

    const dayIdx = now.getDay();
    const dateNum = now.getDate();
    const monthIdx = now.getMonth();
    const yearNum = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    if (language === 'bn') {
      const dayNameBn = bnDays[dayIdx];
      const dayDateBn = toBnNums(dateNum);
      const monthNameBn = bnMonths[monthIdx];
      const yearBn = toBnNums(yearNum);

      const hoursBn = toBnNums(String(hours).padStart(2, '0'));
      const minBn = toBnNums(String(minutes).padStart(2, '0'));
      const secBn = toBnNums(String(seconds).padStart(2, '0'));

      return {
        dateStr: `${dayNameBn}, ${dayDateBn} ${monthNameBn} ${yearBn}`,
        timeStr: `${hoursBn}:${minBn}:${secBn} ${ampm}`
      };
    } else {
      const daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      const dayNameEn = daysEn[dayIdx];
      const monthNameEn = monthsEn[monthIdx];

      const hoursStr = String(hours).padStart(2, '0');
      const minStr = String(minutes).padStart(2, '0');
      const secStr = String(seconds).padStart(2, '0');

      return {
        dateStr: `${dayNameEn}, ${dateNum} ${monthNameEn} ${yearNum}`,
        timeStr: `${hoursStr}:${minStr}:${secStr} ${ampm}`
      };
    }
  };

  const { dateStr, timeStr } = getDateTimeComponents();

  return (
    <div className="bg-slate-900 border border-slate-700 hover:border-slate-600 text-emerald-300 px-3 h-9 rounded-xl font-mono shadow-md flex items-center gap-1.5 sm:gap-2 shrink-0 select-none my-auto">
      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse shrink-0" />
      <div className="flex flex-col text-left leading-none justify-center gap-0.5">
        {/* Line 1: Date */}
        <span className="text-[9px] sm:text-[10px] font-bold text-emerald-300 tracking-tight whitespace-nowrap">
          {dateStr}
        </span>
        {/* Line 2: Time */}
        <span className="text-xs sm:text-sm font-black text-emerald-400 tracking-wider whitespace-nowrap">
          {timeStr}
        </span>
      </div>
    </div>
  );
};


