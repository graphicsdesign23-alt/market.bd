export function formatPostedAt(postedAt: string, _language?: 'bn' | 'en'): string {
  if (!postedAt) return '';

  // Clean out any leftover legacy strings
  let cleaned = postedAt
    .replace(/\(Bikroy Live\)/gi, '')
    .replace(/Bikroy Live/gi, '')
    .trim();

  // Try parsing ISO or valid date
  const dateObj = new Date(cleaned);
  if (!isNaN(dateObj.getTime())) {
    const dayNum = dateObj.getDate();
    const yearNum = dateObj.getFullYear();
    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const monthsEn = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const dayStr = dayNum.toString().padStart(2, '0');
    const monthStr = monthsEn[dateObj.getMonth()];
    const hoursStr = hours.toString().padStart(2, '0');

    return `${dayStr} ${monthStr} ${yearNum}, ${hoursStr}:${minutes} ${ampm}`;
  }

  // Convert Bengali numerals or terms if present in raw string
  return cleaned
    .replace(/১০/g, '10')
    .replace(/২৫/g, '25')
    .replace(/৩৫/g, '35')
    .replace(/১/g, '1')
    .replace(/২/g, '2')
    .replace(/৩/g, '3')
    .replace(/৪/g, '4')
    .replace(/৫/g, '5')
    .replace(/৬/g, '6')
    .replace(/৭/g, '7')
    .replace(/৮/g, '8')
    .replace(/৯/g, '9')
    .replace(/০/g, '0')
    .replace(/মিনিট আগে/g, 'mins ago')
    .replace(/ঘণ্টা আগে/g, 'hours ago')
    .replace(/এইমাত্র/g, 'Just now')
    .replace(/জানুয়ারি/g, 'Jan')
    .replace(/ফেব্রুয়ারি/g, 'Feb')
    .replace(/মার্চ/g, 'Mar')
    .replace(/এপ্রিল/g, 'Apr')
    .replace(/মে/g, 'May')
    .replace(/জুন/g, 'Jun')
    .replace(/জুলাই/g, 'Jul')
    .replace(/আগস্ট/g, 'Aug')
    .replace(/সেপ্টেম্বর/g, 'Sep')
    .replace(/অক্টোবর/g, 'Oct')
    .replace(/নভেম্বর/g, 'Nov')
    .replace(/ডিসেম্বর/g, 'Dec');
}
