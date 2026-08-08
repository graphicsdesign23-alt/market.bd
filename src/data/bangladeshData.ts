import { Category } from '../types';

import catHouseImg from '../assets/images/cat_house_isolated_1785510865762.jpg';
import catScooterImg from '../assets/images/cat_scooter_isolated_1785510882941.jpg';
import catMobileImg from '../assets/images/cat_mobile_isolated_1785510896303.jpg';
import catLaptopImg from '../assets/images/cat_laptop_isolated_1785510910798.jpg';
import catSofaImg from '../assets/images/cat_sofa_isolated_1785510923610.jpg';
import catSneakerImg from '../assets/images/cat_sneaker_isolated_1785510934540.jpg';
import catTvImg from '../assets/images/cat_tv_isolated_1785510949732.jpg';
import catPerfumeImg from '../assets/images/cat_perfume_isolated_1785510963843.jpg';
import catTeddyImg from '../assets/images/cat_teddy_isolated_1785510975065.jpg';
import catBooksImg from '../assets/images/cat_books_isolated_1785510988963.jpg';
import catCatImg from '../assets/images/cat_cat_isolated_1785511000333.jpg';
import catPlantImg from '../assets/images/cat_plant_isolated_1785511014721.jpg';
import catDrillImg from '../assets/images/cat_drill_isolated_1785511025652.jpg';
import catToolboxImg from '../assets/images/cat_toolbox_isolated_1785511040837.jpg';
import catBriefcaseImg from '../assets/images/cat_briefcase_isolated_1785511054136.jpg';
import catGiftImg from '../assets/images/cat_gift_isolated_1785511065334.jpg';

export interface DivisionData {
  id: string;
  nameEn: string;
  nameBn: string;
  districts: {
    id: string;
    nameEn: string;
    nameBn: string;
    thanas: { id: string; nameEn: string; nameBn: string }[];
  }[];
}

export const BANGLADESH_DIVISIONS: DivisionData[] = [
  {
    id: 'dhaka',
    nameEn: 'Dhaka',
    nameBn: 'ঢাকা',
    districts: [
      {
        id: 'dhaka_d',
        nameEn: 'Dhaka',
        nameBn: 'ঢাকা',
        thanas: [
          { id: 'mirpur', nameEn: 'Mirpur', nameBn: 'মিরপুর' },
          { id: 'dhanmondi', nameEn: 'Dhanmondi', nameBn: 'ধানমন্ডি' },
          { id: 'gulshan', nameEn: 'Gulshan', nameBn: 'গুলশান' },
          { id: 'banani', nameEn: 'Banani', nameBn: 'বনানী' },
          { id: 'uttara', nameEn: 'Uttara', nameBn: 'উত্তরা' },
          { id: 'mohammadpur', nameEn: 'Mohammadpur', nameBn: 'মোহাম্মদপুর' },
          { id: 'badda', nameEn: 'Badda', nameBn: 'বাড্ডা' },
          { id: 'savar', nameEn: 'Savar', nameBn: 'সাভার' },
          { id: 'dhamrai', nameEn: 'Dhamrai', nameBn: 'ধামরাই' },
          { id: 'keraniganj', nameEn: 'Keraniganj', nameBn: 'কেরানীগঞ্জ' },
          { id: 'tejgaon', nameEn: 'Tejgaon', nameBn: 'তেজগাঁও' },
          { id: 'motijheel', nameEn: 'Motijheel', nameBn: 'মতিঝিল' },
          { id: 'ramna', nameEn: 'Ramna', nameBn: 'রমনা' },
          { id: 'jatrabari', nameEn: 'Jatrabari', nameBn: 'যাত্রাবাড়ী' },
          { id: 'khilgaon', nameEn: 'Khilgaon', nameBn: 'খিলগাঁও' },
          { id: 'lalbagh', nameEn: 'Lalbagh', nameBn: 'লালবাগ' },
          { id: 'hazaribagh', nameEn: 'Hazaribagh', nameBn: 'হাজারীবাগ' },
          { id: 'cantonment', nameEn: 'Cantonment', nameBn: 'ক্যান্টনমেন্ট' },
          { id: 'demra', nameEn: 'Demra', nameBn: 'ডেমরা' },
          { id: 'kafrul', nameEn: 'Kafrul', nameBn: 'কাফরুল' },
          { id: 'shahbagh', nameEn: 'Shahbagh', nameBn: 'শাহবাগ' },
          { id: 'kamrangirchar', nameEn: 'Kamrangirchar', nameBn: 'কামরাঙ্গীরচর' },
          { id: 'sutrapur', nameEn: 'Sutrapur', nameBn: 'সূত্রাপুর' },
          { id: 'wari', nameEn: 'Wari', nameBn: 'ওয়ারী' },
          { id: 'pallabi', nameEn: 'Pallabi', nameBn: 'পল্লবী' },
          { id: 'turag', nameEn: 'Turag', nameBn: 'তুরাগ' },
          { id: 'dakshinkhan', nameEn: 'Dakshinkhan', nameBn: 'দক্ষিণখান' },
          { id: 'uttarkhan', nameEn: 'Uttarkhan', nameBn: 'উত্তরখান' },
          { id: 'dohar', nameEn: 'Dohar', nameBn: 'দোহার' },
          { id: 'nawabganj_d', nameEn: 'Nawabganj', nameBn: 'নবাবগঞ্জ' },
        ],
      },
      {
        id: 'gazipur_d',
        nameEn: 'Gazipur',
        nameBn: 'গাজীপুর',
        thanas: [
          { id: 'gazipur_s', nameEn: 'Gazipur Sadar', nameBn: 'গাজীপুর সদর' },
          { id: 'tongi', nameEn: 'Tongi', nameBn: 'টঙ্গী' },
          { id: 'kaliakair', nameEn: 'Kaliakair', nameBn: 'কালিয়াকৈর' },
          { id: 'sreepur_g', nameEn: 'Sreepur', nameBn: 'শ্রীপুর' },
          { id: 'kapasia', nameEn: 'Kapasia', nameBn: 'কাপাসিয়া' },
          { id: 'kaliganj_g', nameEn: 'Kaliganj', nameBn: 'কালীগঞ্জ' },
        ],
      },
      {
        id: 'narayanganj_d',
        nameEn: 'Narayanganj',
        nameBn: 'নারায়ণগঞ্জ',
        thanas: [
          { id: 'narayanganj_s', nameEn: 'Narayanganj Sadar', nameBn: 'নারায়ণগঞ্জ সদর' },
          { id: 'siddhirganj', nameEn: 'Siddhirganj', nameBn: 'সিদ্ধিরগঞ্জ' },
          { id: 'fatullah', nameEn: 'Fatullah', nameBn: 'ফতুল্লা' },
          { id: 'araihazar', nameEn: 'Araihazar', nameBn: 'আড়াইহাজার' },
          { id: 'bandar_n', nameEn: 'Bandar', nameBn: 'বন্দর' },
          { id: 'rupganj', nameEn: 'Rupganj', nameBn: 'রূপগঞ্জ' },
          { id: 'sonargaon', nameEn: 'Sonargaon', nameBn: 'সোনারগাঁ' },
        ],
      },
      {
        id: 'tangail_d',
        nameEn: 'Tangail',
        nameBn: 'টাঙ্গাইল',
        thanas: [
          { id: 'tangail_s', nameEn: 'Tangail Sadar', nameBn: 'টাঙ্গাইল সদর' },
          { id: 'gopalpur_t', nameEn: 'Gopalpur', nameBn: 'গোপালপুর' },
          { id: 'basail', nameEn: 'Basail', nameBn: 'বাসাইল' },
          { id: 'bhuapur', nameEn: 'Bhuapur', nameBn: 'ভূঞাপুর' },
          { id: 'delduar', nameEn: 'Delduar', nameBn: 'দেলদুয়ার' },
          { id: 'ghatail', nameEn: 'Ghatail', nameBn: 'ঘাটাইল' },
          { id: 'kalihati', nameEn: 'Kalihati', nameBn: 'কালিহাতী' },
          { id: 'madhupur', nameEn: 'Madhupur', nameBn: 'মধুপুর' },
          { id: 'mirzapur', nameEn: 'Mirzapur', nameBn: 'মির্জাপুর' },
          { id: 'nagarpur', nameEn: 'Nagarpur', nameBn: 'নাগরপুর' },
          { id: 'sakhipur', nameEn: 'Sakhipur', nameBn: 'সখিপুর' },
          { id: 'dhanbari', nameEn: 'Dhanbari', nameBn: 'ধনবাড়ী' },
        ],
      },
      {
        id: 'faridpur_d',
        nameEn: 'Faridpur',
        nameBn: 'ফরিদপুর',
        thanas: [
          { id: 'faridpur_s', nameEn: 'Faridpur Sadar', nameBn: 'ফরিদপুর সদর' },
          { id: 'alfadanga', nameEn: 'Alfadanga', nameBn: 'আলফাডাঙা' },
          { id: 'bhanga', nameEn: 'Bhanga', nameBn: 'ভাঙ্গা' },
          { id: 'boalmari', nameEn: 'Boalmari', nameBn: 'বোয়ালমারী' },
          { id: 'charbhadrasan', nameEn: 'Charbhadrasan', nameBn: 'চরভদ্রাসন' },
          { id: 'sadarpur', nameEn: 'Sadarpur', nameBn: 'সদরপুর' },
          { id: 'nagarkanda', nameEn: 'Nagarkanda', nameBn: 'নগরকান্দা' },
          { id: 'madhukhali', nameEn: 'Madhukhali', nameBn: 'মধুখালী' },
          { id: 'saltha', nameEn: 'Saltha', nameBn: 'সালথা' },
        ],
      },
      {
        id: 'manikganj_d',
        nameEn: 'Manikganj',
        nameBn: 'মানিকগঞ্জ',
        thanas: [
          { id: 'manikganj_s', nameEn: 'Manikganj Sadar', nameBn: 'মানিকগঞ্জ সদর' },
          { id: 'singair', nameEn: 'Singair', nameBn: 'সিঙ্গাইর' },
          { id: 'ghior', nameEn: 'Ghior', nameBn: 'ঘিওর' },
          { id: 'daulatpur_m', nameEn: 'Daulatpur', nameBn: 'দৌলতপুর' },
          { id: 'saturia', nameEn: 'Saturia', nameBn: 'সাটুরিয়া' },
          { id: 'harirampur', nameEn: 'Harirampur', nameBn: 'হরিরামপুর' },
          { id: 'shivalaya', nameEn: 'Shivalaya', nameBn: 'শিবালয়' },
        ],
      },
      {
        id: 'munshiganj_d',
        nameEn: 'Munshiganj',
        nameBn: 'মুন্সীগঞ্জ',
        thanas: [
          { id: 'munshiganj_s', nameEn: 'Munshiganj Sadar', nameBn: 'মুন্সীগঞ্জ সদর' },
          { id: 'tongibari', nameEn: 'Tongibari', nameBn: 'টঙ্গীবাড়ী' },
          { id: 'sreenagar', nameEn: 'Sreenagar', nameBn: 'শ্রীনগর' },
          { id: 'louhajang', nameEn: 'Louhajang', nameBn: 'লৌহজং' },
          { id: 'gazaria', nameEn: 'Gazaria', nameBn: 'গজারিয়া' },
          { id: 'sirajdikhan', nameEn: 'Sirajdikhan', nameBn: 'সিরাজদিখান' },
        ],
      },
      {
        id: 'narsingdi_d',
        nameEn: 'Narsingdi',
        nameBn: 'নরসিংদী',
        thanas: [
          { id: 'narsingdi_s', nameEn: 'Narsingdi Sadar', nameBn: 'নরসিংদী সদর' },
          { id: 'belabo', nameEn: 'Belabo', nameBn: 'বেলাবো' },
          { id: 'monohardi', nameEn: 'Monohardi', nameBn: 'মনোহরদী' },
          { id: 'palash', nameEn: 'Palash', nameBn: 'পলাশ' },
          { id: 'raipura', nameEn: 'Raipura', nameBn: 'রায়পুরা' },
          { id: 'shibpur', nameEn: 'Shibpur', nameBn: 'শিবপুর' },
        ],
      },
      {
        id: 'rajbari_d',
        nameEn: 'Rajbari',
        nameBn: 'রাজবাড়ী',
        thanas: [
          { id: 'rajbari_s', nameEn: 'Rajbari Sadar', nameBn: 'রাজবাড়ী সদর' },
          { id: 'goalanda', nameEn: 'Goalanda', nameBn: 'গোয়ালন্দ' },
          { id: 'pangsha', nameEn: 'Pangsha', nameBn: 'পাংশা' },
          { id: 'baliakandi', nameEn: 'Baliakandi', nameBn: 'বালিয়াকান্দি' },
          { id: 'kalukhali', nameEn: 'Kalukhali', nameBn: 'কালুখালী' },
        ],
      },
      {
        id: 'shariatpur_d',
        nameEn: 'Shariatpur',
        nameBn: 'শরীয়তপুর',
        thanas: [
          { id: 'shariatpur_s', nameEn: 'Shariatpur Sadar', nameBn: 'শরীয়তপুর সদর' },
          { id: 'naria', nameEn: 'Naria', nameBn: 'নড়িয়া' },
          { id: 'zajira', nameEn: 'Zajira', nameBn: 'জাজিরা' },
          { id: 'gosairhat', nameEn: 'Gosairhat', nameBn: 'গোসাইরহাট' },
          { id: 'bhedarganj', nameEn: 'Bhedarganj', nameBn: 'ভেদরগঞ্জ' },
          { id: 'damudya', nameEn: 'Damudya', nameBn: 'ডামুড্যা' },
        ],
      },
      {
        id: 'madaripur_d',
        nameEn: 'Madaripur',
        nameBn: 'মাদারীপুর',
        thanas: [
          { id: 'madaripur_s', nameEn: 'Madaripur Sadar', nameBn: 'মাদারীপুর সদর' },
          { id: 'shibchar', nameEn: 'Shibchar', nameBn: 'শিবচর' },
          { id: 'kalkini', nameEn: 'Kalkini', nameBn: 'কালকিনি' },
          { id: 'rajoir', nameEn: 'Rajoir', nameBn: 'রাজৈর' },
          { id: 'dasar', nameEn: 'Dasar', nameBn: 'ডাসার' },
        ],
      },
      {
        id: 'gopalganj_d',
        nameEn: 'Gopalganj',
        nameBn: 'গোপালগঞ্জ',
        thanas: [
          { id: 'gopalganj_s', nameEn: 'Gopalganj Sadar', nameBn: 'গোপালগঞ্জ সদর' },
          { id: 'kotalipara', nameEn: 'Kotalipara', nameBn: 'কোটালীপাড়া' },
          { id: 'kashiani', nameEn: 'Kashiani', nameBn: 'কাশিয়ানী' },
          { id: 'muksudpur', nameEn: 'Muksudpur', nameBn: 'মুকসুদপুর' },
          { id: 'tungipara', nameEn: 'Tungipara', nameBn: 'টুঙ্গিপাড়া' },
        ],
      },
      {
        id: 'kishoreganj_d',
        nameEn: 'Kishoreganj',
        nameBn: 'কিশোরগঞ্জ',
        thanas: [
          { id: 'kishoreganj_s', nameEn: 'Kishoreganj Sadar', nameBn: 'কিশোরগঞ্জ সদর' },
          { id: 'bhairab', nameEn: 'Bhairab', nameBn: 'ভৈরব' },
          { id: 'bajitpur', nameEn: 'Bajitpur', nameBn: 'বাজিতপুর' },
          { id: 'hossainpur', nameEn: 'Hossainpur', nameBn: 'হোসেনপুর' },
          { id: 'itna', nameEn: 'Itna', nameBn: 'ইটনা' },
          { id: 'karimganj', nameEn: 'Karimganj', nameBn: 'করিমগঞ্জ' },
          { id: 'katiadi', nameEn: 'Katiadi', nameBn: 'কটিয়াদী' },
          { id: 'kuliarchar', nameEn: 'Kuliarchar', nameBn: 'কুলিয়ারচর' },
          { id: 'mithamain', nameEn: 'Mithamain', nameBn: 'মিঠামইন' },
          { id: 'nikli', nameEn: 'Nikli', nameBn: 'নিকলী' },
          { id: 'pakundia', nameEn: 'Pakundia', nameBn: 'পাঙ্কুন্দিয়া' },
          { id: 'tarail', nameEn: 'Tarail', nameBn: 'তাড়াইল' },
          { id: 'ashtagram', nameEn: 'Ashtagram', nameBn: 'অষ্টগ্রাম' },
        ],
      },
    ],
  },
  {
    id: 'chattogram',
    nameEn: 'Chattogram',
    nameBn: 'চট্টগ্রাম',
    districts: [
      {
        id: 'chattogram_d',
        nameEn: 'Chattogram',
        nameBn: 'চট্টগ্রাম',
        thanas: [
          { id: 'agrabad', nameEn: 'Agrabad', nameBn: 'অগ্রাবাদ' },
          { id: 'gec', nameEn: 'GEC Circle', nameBn: 'জিইসি' },
          { id: 'halishahar', nameEn: 'Halishahar', nameBn: 'হালিশহর' },
          { id: 'panchlaish', nameEn: 'Panchlaish', nameBn: 'পাঁচলাইশ' },
          { id: 'kotwali_c', nameEn: 'Kotwali', nameBn: 'কোতোয়ালী' },
          { id: 'pahartali', nameEn: 'Pahartali', nameBn: 'পাহাড়তলী' },
          { id: 'khulshi', nameEn: 'Khulshi', nameBn: 'খুলশী' },
          { id: 'chawkbazar', nameEn: 'Chawkbazar', nameBn: 'চকবাজার' },
          { id: 'patenga', nameEn: 'Patenga', nameBn: 'পতেঙ্গা' },
          { id: 'hathazari', nameEn: 'Hathazari', nameBn: 'হাটহাজারী' },
          { id: 'sitakunda', nameEn: 'Sitakunda', nameBn: 'সীতাকুণ্ড' },
          { id: 'mirsarai', nameEn: 'Mirsarai', nameBn: 'মিরসরাই' },
          { id: 'patiya', nameEn: 'Patiya', nameBn: 'পটিয়া' },
          { id: 'raozan', nameEn: 'Raozan', nameBn: 'রাউজান' },
          { id: 'rangunia', nameEn: 'Rangunia', nameBn: 'রাঙ্গুনিয়া' },
          { id: 'anwara', nameEn: 'Anwara', nameBn: 'আনোয়ারা' },
          { id: 'boalkhali', nameEn: 'Boalkhali', nameBn: 'বোয়ালখালী' },
          { id: 'banshkhali', nameEn: 'Banshkhali', nameBn: 'বাঁশখালী' },
          { id: 'chandanaish', nameEn: 'Chandanaish', nameBn: 'চন্দনাইশ' },
          { id: 'fatikchhari', nameEn: 'Fatikchhari', nameBn: 'ফটিকছড়ি' },
          { id: 'lohagara_c', nameEn: 'Lohagara', nameBn: 'লোহাগাড়া' },
          { id: 'sandwip', nameEn: 'Sandwip', nameBn: 'সন্দ্বীপ' },
        ],
      },
      {
        id: 'coxsbazar_d',
        nameEn: 'Cox\'s Bazar',
        nameBn: 'কক্সবাজার',
        thanas: [
          { id: 'coxs_s', nameEn: 'Cox\'s Bazar Sadar', nameBn: 'কক্সবাজার সদর' },
          { id: 'teknaf', nameEn: 'Teknaf', nameBn: 'টেকনাফ' },
          { id: 'ukhiya', nameEn: 'Ukhiya', nameBn: 'উখিয়া' },
          { id: 'chakaria', nameEn: 'Chakaria', nameBn: 'চকোরিয়া' },
          { id: 'ramu', nameEn: 'Ramu', nameBn: 'রামু' },
          { id: 'maheshkhali', nameEn: 'Maheshkhali', nameBn: 'মহেশখালী' },
          { id: 'kutubdia', nameEn: 'Kutubdia', nameBn: 'কুতুবদিয়া' },
          { id: 'pekua', nameEn: 'Pekua', nameBn: 'পেকুয়া' },
        ],
      },
      {
        id: 'cumilla_d',
        nameEn: 'Cumilla',
        nameBn: 'কুমিল্লা',
        thanas: [
          { id: 'cumilla_s', nameEn: 'Cumilla Sadar', nameBn: 'কুমিল্লা সদর' },
          { id: 'cumilla_s_d', nameEn: 'Cumilla Sadar Dakshin', nameBn: 'কুমিল্লা সদর দক্ষিণ' },
          { id: 'daudkandi', nameEn: 'Daudkandi', nameBn: 'দাউদকান্দি' },
          { id: 'chandina', nameEn: 'Chandina', nameBn: 'চান্দিনা' },
          { id: 'barura', nameEn: 'Barura', nameBn: 'বরুড়া' },
          { id: 'burichang', nameEn: 'Burichang', nameBn: 'বুড়িচং' },
          { id: 'brahmanpara', nameEn: 'Brahmanpara', nameBn: 'ব্রাহ্মণপাড়া' },
          { id: 'chauddagram', nameEn: 'Chauddagram', nameBn: 'চৌদ্দগ্রাম' },
          { id: 'debidwar', nameEn: 'Debidwar', nameBn: 'দেবিদ্বার' },
          { id: 'homna', nameEn: 'Homna', nameBn: 'হোমনা' },
          { id: 'laksam', nameEn: 'Laksam', nameBn: 'লাকসাম' },
          { id: 'monohargonj', nameEn: 'Monohargonj', nameBn: 'মনোহরগঞ্জ' },
          { id: 'meghna', nameEn: 'Meghna', nameBn: 'মেঘনা' },
          { id: 'muradnagar', nameEn: 'Muradnagar', nameBn: 'মুরাদনগর' },
          { id: 'nangalkot', nameEn: 'Nangalkot', nameBn: 'নাঙ্গলকোট' },
          { id: 'titas', nameEn: 'Titas', nameBn: 'তিতাস' },
        ],
      },
      {
        id: 'feni_d',
        nameEn: 'Feni',
        nameBn: 'ফেনী',
        thanas: [
          { id: 'feni_s', nameEn: 'Feni Sadar', nameBn: 'ফেনী সদর' },
          { id: 'daganbhuiyan', nameEn: 'Daganbhuiyan', nameBn: 'দাগনভূঞা' },
          { id: 'chhagalnaiya', nameEn: 'Chhagalnaiya', nameBn: 'ছাগলনাইয়া' },
          { id: 'parshuram', nameEn: 'Parshuram', nameBn: 'পরশুরাম' },
          { id: 'fulgazi', nameEn: 'Fulgazi', nameBn: 'ফুলগাজী' },
          { id: 'sonagazi', nameEn: 'Sonagazi', nameBn: 'সোনাগাজী' },
        ],
      },
      {
        id: 'brahmanbaria_d',
        nameEn: 'Brahmanbaria',
        nameBn: 'ব্রাহ্মণবাড়িয়া',
        thanas: [
          { id: 'brahmanbaria_s', nameEn: 'Brahmanbaria Sadar', nameBn: 'ব্রাহ্মণবাড়িয়া সদর' },
          { id: 'ashuganj', nameEn: 'Ashuganj', nameBn: 'আশুগঞ্জ' },
          { id: 'akhaura', nameEn: 'Akhaura', nameBn: 'আখাউড়া' },
          { id: 'bancharampur', nameEn: 'Bancharampur', nameBn: 'বাঞ্ছারামপুর' },
          { id: 'bijoynagar', nameEn: 'Bijoynagar', nameBn: 'বিজয়নগর' },
          { id: 'kasba', nameEn: 'Kasba', nameBn: 'কসবা' },
          { id: 'nabinagar', nameEn: 'Nabinagar', nameBn: 'নবীনগর' },
          { id: 'nasirnagar', nameEn: 'Nasirnagar', nameBn: 'নাসিরনগর' },
          { id: 'sarail', nameEn: 'Sarail', nameBn: 'সরাইল' },
        ],
      },
      {
        id: 'noakhali_d',
        nameEn: 'Noakhali',
        nameBn: 'নোয়াখালী',
        thanas: [
          { id: 'noakhali_s', nameEn: 'Noakhali Sadar', nameBn: 'নোয়াখালী সদর' },
          { id: 'begumganj', nameEn: 'Begumganj', nameBn: 'বেগমগঞ্জ' },
          { id: 'chatkhil', nameEn: 'Chatkhil', nameBn: 'চাটখিল' },
          { id: 'companiganj_n', nameEn: 'Companiganj', nameBn: 'কোম্পানীগঞ্জ' },
          { id: 'hatiya', nameEn: 'Hatiya', nameBn: 'হাতিয়া' },
          { id: 'senbagh', nameEn: 'Senbagh', nameBn: 'সেনবাগ' },
          { id: 'subarnachar', nameEn: 'Subarnachar', nameBn: 'সুবর্ণচর' },
          { id: 'kabirhat', nameEn: 'Kabirhat', nameBn: 'কবীরহাট' },
          { id: 'sonaimuri', nameEn: 'Sonaimuri', nameBn: 'সোনাইমুড়ী' },
        ],
      },
      {
        id: 'lakshmipur_d',
        nameEn: 'Lakshmipur',
        nameBn: 'লক্ষ্মীপুর',
        thanas: [
          { id: 'lakshmipur_s', nameEn: 'Lakshmipur Sadar', nameBn: 'লক্ষ্মীপুর সদর' },
          { id: 'raipur', nameEn: 'Raipur', nameBn: 'রায়পুর' },
          { id: 'ramganj', nameEn: 'Ramganj', nameBn: 'রামগঞ্জ' },
          { id: 'ramgati', nameEn: 'Ramgati', nameBn: 'রামগতি' },
          { id: 'kamalnagar', nameEn: 'Kamalnagar', nameBn: 'কমলনগর' },
        ],
      },
      {
        id: 'chandpur_d',
        nameEn: 'Chandpur',
        nameBn: 'চাঁদপুর',
        thanas: [
          { id: 'chandpur_s', nameEn: 'Chandpur Sadar', nameBn: 'চাঁদপুর সদর' },
          { id: 'faridganj', nameEn: 'Faridganj', nameBn: 'ফরিদগঞ্জ' },
          { id: 'haimchar', nameEn: 'Haimchar', nameBn: 'হাইমচর' },
          { id: 'haziganj', nameEn: 'Haziganj', nameBn: 'হাজীগঞ্জ' },
          { id: 'kachua', nameEn: 'Kachua', nameBn: 'কচুয়া' },
          { id: 'matlab_d', nameEn: 'Matlab Dakshin', nameBn: 'মতলব দক্ষিণ' },
          { id: 'matlab_u', nameEn: 'Matlab Uttar', nameBn: 'মতলব উত্তর' },
          { id: 'shahrasti', nameEn: 'Shahrasti', nameBn: 'শাহরাস্তি' },
        ],
      },
      {
        id: 'rangamati_d',
        nameEn: 'Rangamati',
        nameBn: 'রাঙ্গামাটি',
        thanas: [
          { id: 'rangamati_s', nameEn: 'Rangamati Sadar', nameBn: 'রাঙ্গামাটি সদর' },
          { id: 'kaptai', nameEn: 'Kaptai', nameBn: 'কাপ্তাই' },
          { id: 'kawkhali_r', nameEn: 'Kawkhali', nameBn: 'কাউখালী' },
          { id: 'baghaichhari', nameEn: 'Baghaichhari', nameBn: 'বাঘাইছড়ি' },
          { id: 'barkal', nameEn: 'Barkal', nameBn: 'বরকল' },
          { id: 'langadu', nameEn: 'Langadu', nameBn: 'লংগদু' },
          { id: 'rajasthali', nameEn: 'Rajasthali', nameBn: 'রাজস্থলী' },
          { id: 'belaichhari', nameEn: 'Belaichhari', nameBn: 'বিলাইছড়ি' },
          { id: 'juraichhari', nameEn: 'Juraichhari', nameBn: 'জুরাছড়ি' },
          { id: 'naniarchar', nameEn: 'Naniarchar', nameBn: 'নানিয়ারচর' },
        ],
      },
      {
        id: 'khagrachhari_d',
        nameEn: 'Khagrachhari',
        nameBn: 'খাগড়াছড়ি',
        thanas: [
          { id: 'khagrachhari_s', nameEn: 'Khagrachhari Sadar', nameBn: 'খাগড়াছড়ি সদর' },
          { id: 'dighinala', nameEn: 'Dighinala', nameBn: 'দীঘিনালা' },
          { id: 'panchhari', nameEn: 'Panchhari', nameBn: 'পানছড়ি' },
          { id: 'mahalchhari', nameEn: 'Mahalchhari', nameBn: 'মহালছড়ি' },
          { id: 'matiranga', nameEn: 'Matiranga', nameBn: 'মাটিরাঙ্গা' },
          { id: 'manikchhari', nameEn: 'Manikchhari', nameBn: 'মানিকছড়ি' },
          { id: 'ramgarh', nameEn: 'Ramgarh', nameBn: 'রামগড়' },
          { id: 'guimara', nameEn: 'Guimara', nameBn: 'গুইমারা' },
          { id: 'laxmichhari', nameEn: 'Laxmichhari', nameBn: 'লক্ষ্মীছড়ি' },
        ],
      },
      {
        id: 'bandarban_d',
        nameEn: 'Bandarban',
        nameBn: 'বান্দরবান',
        thanas: [
          { id: 'bandarban_s', nameEn: 'Bandarban Sadar', nameBn: 'বান্দরবান সদর' },
          { id: 'thanchi', nameEn: 'Thanchi', nameBn: 'থানচি' },
          { id: 'ruma', nameEn: 'Ruma', nameBn: 'রুমা' },
          { id: 'lama', nameEn: 'Lama', nameBn: 'লামা' },
          { id: 'alikadam', nameEn: 'Alikadam', nameBn: 'আলীকদম' },
          { id: 'naikhongchhari', nameEn: 'Naikhongchhari', nameBn: 'নাইক্ষ্যংছড়ি' },
          { id: 'rowangchhari', nameEn: 'Rowangchhari', nameBn: 'রোয়াংছড়ি' },
        ],
      },
    ],
  },
  {
    id: 'rajshahi',
    nameEn: 'Rajshahi',
    nameBn: 'রাজশাহী',
    districts: [
      {
        id: 'rajshahi_d',
        nameEn: 'Rajshahi',
        nameBn: 'রাজশাহী',
        thanas: [
          { id: 'boalia', nameEn: 'Boalia', nameBn: 'বোয়ালিয়া' },
          { id: 'rajpara', nameEn: 'Rajpara', nameBn: 'রাজপাড়া' },
          { id: 'motihar', nameEn: 'Motihar', nameBn: 'মতিহার' },
          { id: 'shahmakhdum', nameEn: 'Shah Makhdum', nameBn: 'শাহ মখদুম' },
          { id: 'chandrima', nameEn: 'Chandrima', nameBn: 'চন্দ্রিমা' },
          { id: 'katakhali', nameEn: 'Katakhali', nameBn: 'কাটাখালী' },
          { id: 'paba', nameEn: 'Paba', nameBn: 'পবা' },
          { id: 'godagari', nameEn: 'Godagari', nameBn: 'গোদাগাড়ী' },
          { id: 'tanore', nameEn: 'Tanore', nameBn: 'তানোর' },
          { id: 'mohanpur', nameEn: 'Mohanpur', nameBn: 'মোহনপুর' },
          { id: 'bagha', nameEn: 'Bagha', nameBn: 'বাঘা' },
          { id: 'charghat', nameEn: 'Charghat', nameBn: 'চারঘাট' },
          { id: 'durgapur_r', nameEn: 'Durgapur', nameBn: 'দুর্গাপুর' },
          { id: 'puthia', nameEn: 'Puthia', nameBn: 'পুঠিয়া' },
          { id: 'bagmara', nameEn: 'Bagmara', nameBn: 'বাগমারা' },
        ],
      },
      {
        id: 'bogra_d',
        nameEn: 'Bogra',
        nameBn: 'বগুড়া',
        thanas: [
          { id: 'bogra_s', nameEn: 'Bogra Sadar', nameBn: 'বগুড়া সদর' },
          { id: 'sherpur_b', nameEn: 'Sherpur', nameBn: 'শেরপুর' },
          { id: 'dhunat', nameEn: 'Dhunat', nameBn: 'ধুনট' },
          { id: 'gabtali', nameEn: 'Gabtali', nameBn: 'গাবতলী' },
          { id: 'kahaloo', nameEn: 'Kahaloo', nameBn: 'কাহালু' },
          { id: 'nandigram', nameEn: 'Nandigram', nameBn: 'নন্দীগ্রাম' },
          { id: 'adamdighi', nameEn: 'Adamdighi', nameBn: 'আদমদীঘি' },
          { id: 'dupchanchia', nameEn: 'Dupchanchia', nameBn: 'দুপচাঁচিয়া' },
          { id: 'shibganj_b', nameEn: 'Shibganj', nameBn: 'শিবগঞ্জ' },
          { id: 'sonatola', nameEn: 'Sonatola', nameBn: 'সোনাতলা' },
          { id: 'sariakandi', nameEn: 'Sariakandi', nameBn: 'সারিয়াকান্দি' },
          { id: 'shahjahanpur', nameEn: 'Shahjahanpur', nameBn: 'শাহজাহানপুর' },
        ],
      },
      {
        id: 'pabna_d',
        nameEn: 'Pabna',
        nameBn: 'পাবনা',
        thanas: [
          { id: 'pabna_s', nameEn: 'Pabna Sadar', nameBn: 'পাবনা সদর' },
          { id: 'ishwardi', nameEn: 'Ishwardi', nameBn: 'ঈশ্বরদী' },
          { id: 'santhia', nameEn: 'Santhia', nameBn: 'সাঁথিয়া' },
          { id: 'sujanagar', nameEn: 'Sujanagar', nameBn: 'সুজানগর' },
          { id: 'bera', nameEn: 'Bera', nameBn: 'বেড়া' },
          { id: 'bhangoora', nameEn: 'Bhangoora', nameBn: 'ভাঙ্গুড়া' },
          { id: 'chatmohar', nameEn: 'Chatmohar', nameBn: 'চাটমোহর' },
          { id: 'faridpur_p', nameEn: 'Faridpur', nameBn: 'ফরিদপুর' },
          { id: 'atgharia', nameEn: 'Atgharia', nameBn: 'আটঘরিয়া' },
        ],
      },
      {
        id: 'sirajganj_d',
        nameEn: 'Sirajganj',
        nameBn: 'সিরাজগঞ্জ',
        thanas: [
          { id: 'sirajganj_s', nameEn: 'Sirajganj Sadar', nameBn: 'সিরাজগঞ্জ সদর' },
          { id: 'belkuchi', nameEn: 'Belkuchi', nameBn: 'বেলকুচি' },
          { id: 'chauhali', nameEn: 'Chauhali', nameBn: 'চৌহালী' },
          { id: 'kamarkhanda', nameEn: 'Kamarkhanda', nameBn: 'কামারখন্দ' },
          { id: 'kazipur', nameEn: 'Kazipur', nameBn: 'কাজীপুর' },
          { id: 'rayganj', nameEn: 'Rayganj', nameBn: 'রায়গঞ্জ' },
          { id: 'shahjadpur', nameEn: 'Shahjadpur', nameBn: 'শাহজাদপুর' },
          { id: 'tarash', nameEn: 'Tarash', nameBn: 'তাড়াশ' },
          { id: 'ullahpara', nameEn: 'Ullahpara', nameBn: 'উল্লাপাড়া' },
        ],
      },
      {
        id: 'natore_d',
        nameEn: 'Natore',
        nameBn: 'নাটোর',
        thanas: [
          { id: 'natore_s', nameEn: 'Natore Sadar', nameBn: 'নাটোর সদর' },
          { id: 'bagatipara', nameEn: 'Bagatipara', nameBn: 'বাগাতিপাড়া' },
          { id: 'baraigram', nameEn: 'Baraigram', nameBn: 'বড়াইগ্রাম' },
          { id: 'gurudaspur', nameEn: 'Gurudaspur', nameBn: 'গুরুদাসপুর' },
          { id: 'lalpur', nameEn: 'Lalpur', nameBn: 'লালপুর' },
          { id: 'singra', nameEn: 'Singra', nameBn: 'সিংড়া' },
          { id: 'naldanga', nameEn: 'Naldanga', nameBn: 'নলডাঙ্গা' },
        ],
      },
      {
        id: 'naogaon_d',
        nameEn: 'Naogaon',
        nameBn: 'নওগাঁ',
        thanas: [
          { id: 'naogaon_s', nameEn: 'Naogaon Sadar', nameBn: 'নওগাঁ সদর' },
          { id: 'atrai', nameEn: 'Atrai', nameBn: 'আত্রাই' },
          { id: 'badalgachhi', nameEn: 'Badalgachhi', nameBn: 'বদলগাছী' },
          { id: 'dhamoirhat', nameEn: 'Dhamoirhat', nameBn: 'ধামইরহাট' },
          { id: 'manda', nameEn: 'Manda', nameBn: 'মান্দা' },
          { id: 'niamatpur', nameEn: 'Niamatpur', nameBn: 'নিয়ামতপুর' },
          { id: 'patnitala', nameEn: 'Patnitala', nameBn: 'পত্নীতলা' },
          { id: 'porsha', nameEn: 'Porsha', nameBn: 'পোরশা' },
          { id: 'raninagar', nameEn: 'Raninagar', nameBn: 'রানীনগর' },
          { id: 'sapahar', nameEn: 'Sapahar', nameBn: 'সাপাহার' },
          { id: 'mohadevpur', nameEn: 'Mohadevpur', nameBn: 'মহাদেবপুর' },
        ],
      },
      {
        id: 'joypurhat_d',
        nameEn: 'Joypurhat',
        nameBn: 'জয়পুরহাট',
        thanas: [
          { id: 'joypurhat_s', nameEn: 'Joypurhat Sadar', nameBn: 'জয়পুরহাট সদর' },
          { id: 'akkelpur', nameEn: 'Akkelpur', nameBn: 'আক্কেলপুর' },
          { id: 'kalai', nameEn: 'Kalai', nameBn: 'কালাই' },
          { id: 'khetlal', nameEn: 'Khetlal', nameBn: 'খেতলাল' },
          { id: 'panchbibi', nameEn: 'Panchbibi', nameBn: 'পাঁচবিবি' },
        ],
      },
      {
        id: 'chapainawabganj_d',
        nameEn: 'Chapainawabganj',
        nameBn: 'চাঁপাইনবাবগঞ্জ',
        thanas: [
          { id: 'chapainawabganj_s', nameEn: 'Chapainawabganj Sadar', nameBn: 'চাঁপাইনবাবগঞ্জ সদর' },
          { id: 'shibganj_c', nameEn: 'Shibganj', nameBn: 'শিবগঞ্জ' },
          { id: 'bholahat', nameEn: 'Bholahat', nameBn: 'ভোলাহাট' },
          { id: 'gomastapur', nameEn: 'Gomastapur', nameBn: 'গোমস্তাপুর' },
          { id: 'nachole', nameEn: 'Nachole', nameBn: 'নাচোল' },
        ],
      },
    ],
  },
  {
    id: 'sylhet',
    nameEn: 'Sylhet',
    nameBn: 'সিলেট',
    districts: [
      {
        id: 'sylhet_d',
        nameEn: 'Sylhet',
        nameBn: 'সিলেট',
        thanas: [
          { id: 'zindabazar', nameEn: 'Zindabazar', nameBn: 'জিন্দাবাজার' },
          { id: 'amberkhana', nameEn: 'Amberkhana', nameBn: 'আম্বরখানা' },
          { id: 'shahjalal', nameEn: 'Shahjalal Upashahar', nameBn: 'শাহজালাল উপশহর' },
          { id: 'sylhet_s', nameEn: 'Sylhet Sadar', nameBn: 'সিলেট সদর' },
          { id: 'beanibazar', nameEn: 'Beanibazar', nameBn: 'বিয়ানীবাজার' },
          { id: 'bishwanath', nameEn: 'Bishwanath', nameBn: 'বিশ্বনাথ' },
          { id: 'companiganj_s', nameEn: 'Companiganj', nameBn: 'কোম্পানীগঞ্জ' },
          { id: 'fenchuganj', nameEn: 'Fenchuganj', nameBn: 'ফেঞ্চুগঞ্জ' },
          { id: 'golapganj', nameEn: 'Golapganj', nameBn: 'গোলাপগঞ্জ' },
          { id: 'gowainghat', nameEn: 'Gowainghat', nameBn: 'গোয়াইনঘাট' },
          { id: 'jaintiapur', nameEn: 'Jaintiapur', nameBn: 'জৈন্তাপুর' },
          { id: 'kanaighat', nameEn: 'Kanaighat', nameBn: 'কানাইঘাট' },
          { id: 'zakiganj', nameEn: 'Zakiganj', nameBn: 'জকিগঞ্জ' },
          { id: 'south_surma', nameEn: 'South Surma', nameBn: 'দক্ষিণ সুরমা' },
          { id: 'osmani_nagar', nameEn: 'Osmani Nagar', nameBn: 'ওসমানী নগর' },
        ],
      },
      {
        id: 'moulvibazar_d',
        nameEn: 'Moulvibazar',
        nameBn: 'মৌলভীবাজার',
        thanas: [
          { id: 'moulvibazar_s', nameEn: 'Moulvibazar Sadar', nameBn: 'মৌলভীবাজার সদর' },
          { id: 'sreemangal', nameEn: 'Sreemangal', nameBn: 'শ্রীমঙ্গল' },
          { id: 'kulaura', nameEn: 'Kulaura', nameBn: 'কুলাউড়া' },
          { id: 'barlekha', nameEn: 'Barlekha', nameBn: 'বড়লেখা' },
          { id: 'kamalganj', nameEn: 'Kamalganj', nameBn: 'কমলগঞ্জ' },
          { id: 'rajnagar', nameEn: 'Rajnagar', nameBn: 'রাজনগর' },
          { id: 'juri', nameEn: 'Juri', nameBn: 'জুড়ী' },
        ],
      },
      {
        id: 'habiganj_d',
        nameEn: 'Habiganj',
        nameBn: 'হবিগঞ্জ',
        thanas: [
          { id: 'habiganj_s', nameEn: 'Habiganj Sadar', nameBn: 'হবিগঞ্জ সদর' },
          { id: 'bahubal', nameEn: 'Bahubal', nameBn: 'বাহুবল' },
          { id: 'ajmiriganj', nameEn: 'Ajmiriganj', nameBn: 'আজমিরীগঞ্জ' },
          { id: 'baniyachong', nameEn: 'Baniyachong', nameBn: 'বানিয়াচং' },
          { id: 'chunarughat', nameEn: 'Chunarughat', nameBn: 'চুনারুঘাট' },
          { id: 'lakhai', nameEn: 'Lakhai', nameBn: 'লাখাই' },
          { id: 'madhabpur', nameEn: 'Madhabpur', nameBn: 'মাধবপুর' },
          { id: 'nabiganj', nameEn: 'Nabiganj', nameBn: 'নবীগঞ্জ' },
          { id: 'sayestaganj', nameEn: 'Sayestaganj', nameBn: 'শায়স্তাগঞ্জ' },
        ],
      },
      {
        id: 'sunamganj_d',
        nameEn: 'Sunamganj',
        nameBn: 'সুনামগঞ্জ',
        thanas: [
          { id: 'sunamganj_s', nameEn: 'Sunamganj Sadar', nameBn: 'সুনামগঞ্জ সদর' },
          { id: 'chhatak', nameEn: 'Chhatak', nameBn: 'ছাতক' },
          { id: 'jagannathpur', nameEn: 'Jagannathpur', nameBn: 'জগন্নাথপুর' },
          { id: 'derai', nameEn: 'Derai', nameBn: 'দিরাই' },
          { id: 'dharamapasha', nameEn: 'Dharamapasha', nameBn: 'ধর্মপাশা' },
          { id: 'dowarabazar', nameEn: 'Dowarabazar', nameBn: 'দোয়ারাবাজার' },
          { id: 'bishwamvarpur', nameEn: 'Bishwamvarpur', nameBn: 'বিশ্বম্ভরপুর' },
          { id: 'jamalganj', nameEn: 'Jamalganj', nameBn: 'জামালগঞ্জ' },
          { id: 'sullah', nameEn: 'Sullah', nameBn: 'শাল্লা' },
          { id: 'tahirpur', nameEn: 'Tahirpur', nameBn: 'তাহিরপুর' },
          { id: 'shantiganj', nameEn: 'Shantiganj', nameBn: 'শান্তিগঞ্জ' },
          { id: 'madhyanagar', nameEn: 'Madhyanagar', nameBn: 'মধ্যনগর' },
        ],
      },
    ],
  },
  {
    id: 'khulna',
    nameEn: 'Khulna',
    nameBn: 'খুলনা',
    districts: [
      {
        id: 'khulna_d',
        nameEn: 'Khulna',
        nameBn: 'খুলনা',
        thanas: [
          { id: 'sonadanga', nameEn: 'Sonadanga', nameBn: 'সোনাডাঙ্গা' },
          { id: 'khalishpur', nameEn: 'Khalishpur', nameBn: 'খালিাশপুর' },
          { id: 'khulna_s', nameEn: 'Khulna Sadar', nameBn: 'খুলনা সদর' },
          { id: 'daulatpur_k', nameEn: 'Daulatpur', nameBn: 'দৌলতপুর' },
          { id: 'khanjahanali', nameEn: 'Khan Jahan Ali', nameBn: 'খান জাহান আলী' },
          { id: 'batiaghata', nameEn: 'Batiaghata', nameBn: 'বটিয়াঘাটা' },
          { id: 'dacope', nameEn: 'Dacope', nameBn: 'দাকোপ' },
          { id: 'dumuria', nameEn: 'Dumuria', nameBn: 'ডুমুরিয়া' },
          { id: 'dighalia', nameEn: 'Dighalia', nameBn: 'দিঘলিয়া' },
          { id: 'koyra', nameEn: 'Koyra', nameBn: 'কয়রা' },
          { id: 'paikgachha', nameEn: 'Paikgachha', nameBn: 'পাইকগাছা' },
          { id: 'phultala', nameEn: 'Phultala', nameBn: 'ফুলতলা' },
          { id: 'rupsha', nameEn: 'Rupsha', nameBn: 'রূপসা' },
          { id: 'terokhada', nameEn: 'Terokhada', nameBn: 'তেরখাদা' },
        ],
      },
      {
        id: 'jashore_d',
        nameEn: 'Jashore',
        nameBn: 'যশোর',
        thanas: [
          { id: 'jashore_s', nameEn: 'Jashore Sadar', nameBn: 'যশোর সদর' },
          { id: 'abhaynagar', nameEn: 'Abhaynagar', nameBn: 'অভয়নগর' },
          { id: 'bagherpara', nameEn: 'Bagherpara', nameBn: 'বাঘারপাড়া' },
          { id: 'chaugachha', nameEn: 'Chaugachha', nameBn: 'চৌগাছা' },
          { id: 'jhikargachha', nameEn: 'Jhikargachha', nameBn: 'ঝিকরগাছা' },
          { id: 'keshabpur', nameEn: 'Keshabpur', nameBn: 'কেশবপুর' },
          { id: 'manirampur', nameEn: 'Manirampur', nameBn: 'মণিরামপুর' },
          { id: 'sharsha', nameEn: 'Sharsha', nameBn: 'শার্শা' },
        ],
      },
      {
        id: 'satkhira_d',
        nameEn: 'Satkhira',
        nameBn: 'সাতক্ষীরা',
        thanas: [
          { id: 'satkhira_s', nameEn: 'Satkhira Sadar', nameBn: 'সাতক্ষীরা সদর' },
          { id: 'assasuni', nameEn: 'Assasuni', nameBn: 'আশাশুনি' },
          { id: 'debhata', nameEn: 'Debhata', nameBn: 'দেবহাটা' },
          { id: 'kalaroa', nameEn: 'Kalaroa', nameBn: 'কলারোয়া' },
          { id: 'kaliganj_s', nameEn: 'Kaliganj', nameBn: 'কালীগঞ্জ' },
          { id: 'shyamnagar', nameEn: 'Shyamnagar', nameBn: 'শ্যামনগর' },
          { id: 'tala', nameEn: 'Tala', nameBn: 'তালা' },
        ],
      },
      {
        id: 'bagerhat_d',
        nameEn: 'Bagerhat',
        nameBn: 'বাগেরহাট',
        thanas: [
          { id: 'bagerhat_s', nameEn: 'Bagerhat Sadar', nameBn: 'বাগেরহাট সদর' },
          { id: 'mongla', nameEn: 'Mongla', nameBn: 'মোংলা' },
          { id: 'rampal', nameEn: 'Rampal', nameBn: 'রামপাল' },
          { id: 'chitalmari', nameEn: 'Chitalmari', nameBn: 'চিতলমারী' },
          { id: 'fakirhat', nameEn: 'Fakirhat', nameBn: 'ফকিরহাট' },
          { id: 'kachua_b', nameEn: 'Kachua', nameBn: 'কচুয়া' },
          { id: 'mollahat', nameEn: 'Mollahat', nameBn: 'মোল্লাহাট' },
          { id: 'morrelganj', nameEn: 'Morrelganj', nameBn: 'মোরেলগঞ্জ' },
          { id: 'sarankhola', nameEn: 'Sarankhola', nameBn: 'শরণখোলা' },
        ],
      },
      {
        id: 'kushtia_d',
        nameEn: 'Kushtia',
        nameBn: 'কুষ্টিয়া',
        thanas: [
          { id: 'kushtia_s', nameEn: 'Kushtia Sadar', nameBn: 'কুষ্টিয়া সদর' },
          { id: 'bheramara', nameEn: 'Bheramara', nameBn: 'ভেড়ামারা' },
          { id: 'daulatpur_ku', nameEn: 'Daulatpur', nameBn: 'দৌলতপুর' },
          { id: 'khoksa', nameEn: 'Khoksa', nameBn: 'খোকসা' },
          { id: 'kumarkhali', nameEn: 'Kumarkhali', nameBn: 'কুমারখালী' },
          { id: 'mirpur_k', nameEn: 'Mirpur', nameBn: 'মিরপুর' },
        ],
      },
      {
        id: 'jhenaidah_d',
        nameEn: 'Jhenaidah',
        nameBn: 'ঝিনাইদহ',
        thanas: [
          { id: 'jhenaidah_s', nameEn: 'Jhenaidah Sadar', nameBn: 'ঝিনাইদহ সদর' },
          { id: 'harinakunda', nameEn: 'Harinakunda', nameBn: 'হরিণাকুণ্ডু' },
          { id: 'kaliganj_jh', nameEn: 'Kaliganj', nameBn: 'কালীগঞ্জ' },
          { id: 'kotchandpur', nameEn: 'Kotchandpur', nameBn: 'কোটচাঁদপুর' },
          { id: 'maheshpur_j', nameEn: 'Maheshpur', nameBn: 'মহেশপুর' },
          { id: 'shailkupa', nameEn: 'Shailkupa', nameBn: 'শৈলকুপা' },
        ],
      },
      {
        id: 'magura_d',
        nameEn: 'Magura',
        nameBn: 'মাগুরা',
        thanas: [
          { id: 'magura_s', nameEn: 'Magura Sadar', nameBn: 'মাগুরা সদর' },
          { id: 'mohammadpur_m', nameEn: 'Mohammadpur', nameBn: 'মোহাম্মদপুর' },
          { id: 'shalikha', nameEn: 'Shalikha', nameBn: 'শালিখা' },
          { id: 'sreepur_m', nameEn: 'Sreepur', nameBn: 'শ্রীপুর' },
        ],
      },
      {
        id: 'meherpur_d',
        nameEn: 'Meherpur',
        nameBn: 'মেহেরপুর',
        thanas: [
          { id: 'meherpur_s', nameEn: 'Meherpur Sadar', nameBn: 'মেহেরপুর সদর' },
          { id: 'gangni', nameEn: 'Gangni', nameBn: 'গাংনী' },
          { id: 'mujibnagar', nameEn: 'Mujibnagar', nameBn: 'মুজিবনগর' },
        ],
      },
      {
        id: 'narail_d',
        nameEn: 'Narail',
        nameBn: 'নড়াইল',
        thanas: [
          { id: 'narail_s', nameEn: 'Narail Sadar', nameBn: 'নড়াইল সদর' },
          { id: 'kalia', nameEn: 'Kalia', nameBn: 'কালিয়া' },
          { id: 'lohagara_n', nameEn: 'Lohagara', nameBn: 'লোহাগাড়া' },
        ],
      },
      {
        id: 'chuadanga_d',
        nameEn: 'Chuadanga',
        nameBn: 'চুয়াডাঙ্গা',
        thanas: [
          { id: 'chuadanga_s', nameEn: 'Chuadanga Sadar', nameBn: 'চুয়াডাঙ্গা সদর' },
          { id: 'alamdanga', nameEn: 'Alamdanga', nameBn: 'আলমডাঙ্গা' },
          { id: 'damurhuda', nameEn: 'Damurhuda', nameBn: 'দামুড়হুদা' },
          { id: 'jibannagar', nameEn: 'Jibannagar', nameBn: 'জীবননগর' },
        ],
      },
    ],
  },
  {
    id: 'barishal',
    nameEn: 'Barishal',
    nameBn: 'বরিশাল',
    districts: [
      {
        id: 'barishal_d',
        nameEn: 'Barishal',
        nameBn: 'বরিশাল',
        thanas: [
          { id: 'barishal_s', nameEn: 'Barishal Sadar', nameBn: 'বরিশাল সদর' },
          { id: 'agailjhara', nameEn: 'Agailjhara', nameBn: 'আগৈলঝাড়া' },
          { id: 'babuganj', nameEn: 'Babuganj', nameBn: 'বাবুগঞ্জ' },
          { id: 'bakerganj', nameEn: 'Bakerganj', nameBn: 'বাকেরগঞ্জ' },
          { id: 'banaripara', nameEn: 'Banaripara', nameBn: 'বানারীপাড়া' },
          { id: 'gaurnadi', nameEn: 'Gaurnadi', nameBn: 'গৌরনদী' },
          { id: 'hizla', nameEn: 'Hizla', nameBn: 'হিজলা' },
          { id: 'mehendiganj', nameEn: 'Mehendiganj', nameBn: 'মেহেন্দিগঞ্জ' },
          { id: 'muladi', nameEn: 'Muladi', nameBn: 'মুলাদী' },
          { id: 'wazirpur', nameEn: 'Wazirpur', nameBn: 'উজিরপুর' },
        ],
      },
      {
        id: 'bhola_d',
        nameEn: 'Bhola',
        nameBn: 'ভোলা',
        thanas: [
          { id: 'bhola_s', nameEn: 'Bhola Sadar', nameBn: 'ভোলা সদর' },
          { id: 'burhanuddin', nameEn: 'Burhanuddin', nameBn: 'বোরহানউদ্দিন' },
          { id: 'charfasson', nameEn: 'Char Fasson', nameBn: 'চরফ্যাশন' },
          { id: 'daulatkhan', nameEn: 'Daulatkhan', nameBn: 'দৌলতখান' },
          { id: 'lalmohan', nameEn: 'Lalmohan', nameBn: 'লালমোহন' },
          { id: 'manpura', nameEn: 'Manpura', nameBn: 'মনপুরা' },
          { id: 'tazumuddin', nameEn: 'Tazumuddin', nameBn: 'তজুমদ্দিন' },
        ],
      },
      {
        id: 'patuakhali_d',
        nameEn: 'Patuakhali',
        nameBn: 'পটুয়াখালী',
        thanas: [
          { id: 'patuakhali_s', nameEn: 'Patuakhali Sadar', nameBn: 'পটুয়াখালী সদর' },
          { id: 'bauphal', nameEn: 'Bauphal', nameBn: 'বাউফল' },
          { id: 'dashmina', nameEn: 'Dashmina', nameBn: 'দশমিনা' },
          { id: 'galachipa', nameEn: 'Galachipa', nameBn: 'গলাচিপা' },
          { id: 'kalapara', nameEn: 'Kalapara', nameBn: 'কলাপাড়া' },
          { id: 'mirzaganj', nameEn: 'Mirzaganj', nameBn: 'মির্জাগঞ্জ' },
          { id: 'rangabali', nameEn: 'Rangabali', nameBn: 'রাঙ্গাবালী' },
          { id: 'dumki', nameEn: 'Dumki', nameBn: 'দুমকী' },
        ],
      },
      {
        id: 'pirojpur_d',
        nameEn: 'Pirojpur',
        nameBn: 'পিরোজপুর',
        thanas: [
          { id: 'pirojpur_s', nameEn: 'Pirojpur Sadar', nameBn: 'পিরোজপুর সদর' },
          { id: 'bhandaria', nameEn: 'Bhandaria', nameBn: 'ভাণ্ডারিয়া' },
          { id: 'mathbaria', nameEn: 'Mathbaria', nameBn: 'মঠবাড়িয়া' },
          { id: 'nazirpur', nameEn: 'Nazirpur', nameBn: 'নাজিরপুর' },
          { id: 'nesarabad', nameEn: 'Nesarabad (Swarupkati)', nameBn: 'নেছারাবাদ (স্বরূপকাঠি)' },
          { id: 'kawkhali_p', nameEn: 'Kawkhali', nameBn: 'কাউখালী' },
          { id: 'indurkani', nameEn: 'Indurkani', nameBn: 'ইন্দুরকানী' },
        ],
      },
      {
        id: 'barguna_d',
        nameEn: 'Barguna',
        nameBn: 'বরগুনা',
        thanas: [
          { id: 'barguna_s', nameEn: 'Barguna Sadar', nameBn: 'বরগুনা সদর' },
          { id: 'amtali', nameEn: 'Amtali', nameBn: 'আমতলী' },
          { id: 'bamna', nameEn: 'Bamna', nameBn: 'বামনা' },
          { id: 'betagi', nameEn: 'Betagi', nameBn: 'বেতাগী' },
          { id: 'patharghata', nameEn: 'Patharghata', nameBn: 'পাথরঘাটা' },
          { id: 'taltali', nameEn: 'Taltali', nameBn: 'তালতলী' },
        ],
      },
      {
        id: 'jhalokati_d',
        nameEn: 'Jhalokati',
        nameBn: 'ঝালকাঠি',
        thanas: [
          { id: 'jhalokati_s', nameEn: 'Jhalokati Sadar', nameBn: 'ঝালকাঠি সদর' },
          { id: 'kathalia', nameEn: 'Kathalia', nameBn: 'কাঠালিয়া' },
          { id: 'nalchhiti', nameEn: 'Nalchhiti', nameBn: 'নলছিটি' },
          { id: 'rajapur_j', nameEn: 'Rajapur', nameBn: 'রাজাপুর' },
        ],
      },
    ],
  },
  {
    id: 'rangpur',
    nameEn: 'Rangpur',
    nameBn: 'রংপুর',
    districts: [
      {
        id: 'rangpur_d',
        nameEn: 'Rangpur',
        nameBn: 'রংপুর',
        thanas: [
          { id: 'rangpur_s', nameEn: 'Rangpur Sadar', nameBn: 'রংপুর সদর' },
          { id: 'badarganj', nameEn: 'Badarganj', nameBn: 'বদরগঞ্জ' },
          { id: 'gangachara', nameEn: 'Gangachara', nameBn: 'গংগাচড়া' },
          { id: 'kaunia', nameEn: 'Kaunia', nameBn: 'কাউনিয়া' },
          { id: 'mithapukur', nameEn: 'Mithapukur', nameBn: 'মিঠাপুকুর' },
          { id: 'pirgachha', nameEn: 'Pirgachha', nameBn: 'পীরগাছা' },
          { id: 'pirganj_r', nameEn: 'Pirganj', nameBn: 'পীরগঞ্জ' },
          { id: 'taraganj', nameEn: 'Taraganj', nameBn: 'তারাগঞ্জ' },
        ],
      },
      {
        id: 'dinajpur_d',
        nameEn: 'Dinajpur',
        nameBn: 'দিনাজপুর',
        thanas: [
          { id: 'dinajpur_s', nameEn: 'Dinajpur Sadar', nameBn: 'দিনাজপুর সদর' },
          { id: 'birampur', nameEn: 'Birampur', nameBn: 'বিরামপুর' },
          { id: 'birganj', nameEn: 'Birganj', nameBn: 'বীরগঞ্জ' },
          { id: 'biral', nameEn: 'Biral', nameBn: 'বিরল' },
          { id: 'bochaganj', nameEn: 'Bochaganj', nameBn: 'বোচাগঞ্জ' },
          { id: 'chirirbandar', nameEn: 'Chirirbandar', nameBn: 'চিরিরবন্দর' },
          { id: 'phulbari_d', nameEn: 'Phulbari', nameBn: 'ফুলবাড়ী' },
          { id: 'ghoraghat', nameEn: 'Ghoraghat', nameBn: 'ঘোড়াঘাট' },
          { id: 'hakimpur', nameEn: 'Hakimpur', nameBn: 'হাকিমপুর' },
          { id: 'kaharole', nameEn: 'Kaharole', nameBn: 'কাহারোল' },
          { id: 'khansama', nameEn: 'Khansama', nameBn: 'খানসামা' },
          { id: 'nawabganj_di', nameEn: 'Nawabganj', nameBn: 'নবাবগঞ্জ' },
          { id: 'parbatipur', nameEn: 'Parbatipur', nameBn: 'পার্বতীপুর' },
        ],
      },
      {
        id: 'gaibandha_d',
        nameEn: 'Gaibandha',
        nameBn: 'গাইবান্ধা',
        thanas: [
          { id: 'gaibandha_s', nameEn: 'Gaibandha Sadar', nameBn: 'গাইবান্ধা সদর' },
          { id: 'fulchhari', nameEn: 'Fulchhari', nameBn: 'ফুলছড়ি' },
          { id: 'gobindaganj', nameEn: 'Gobindaganj', nameBn: 'গোবিন্দগঞ্জ' },
          { id: 'palashbari', nameEn: 'Palashbari', nameBn: 'পলাশবাড়ী' },
          { id: 'sadullapur', nameEn: 'Sadullapur', nameBn: 'সাদুল্লাপুর' },
          { id: 'sughatta', nameEn: 'Sughatta', nameBn: 'শাঘাটা' },
          { id: 'sundarganj', nameEn: 'Sundarganj', nameBn: 'সুন্দরগঞ্জ' },
        ],
      },
      {
        id: 'kurigram_d',
        nameEn: 'Kurigram',
        nameBn: 'কুড়িগ্রাম',
        thanas: [
          { id: 'kurigram_s', nameEn: 'Kurigram Sadar', nameBn: 'কুড়িগ্রাম সদর' },
          { id: 'bhurungamari', nameEn: 'Bhurungamari', nameBn: 'ভুরুঙ্গামারী' },
          { id: 'charrajibpur', nameEn: 'Char Rajibpur', nameBn: 'চর রাজিবপুর' },
          { id: 'chilmari', nameEn: 'Chilmari', nameBn: 'চিলমারী' },
          { id: 'phulbari_k', nameEn: 'Phulbari', nameBn: 'ফুলবাড়ী' },
          { id: 'nageshwari', nameEn: 'Nageshwari', nameBn: 'নাগেশ্বরী' },
          { id: 'rajarhat', nameEn: 'Rajarhat', nameBn: 'রাজারহাট' },
          { id: 'raomari', nameEn: 'Raomari', nameBn: 'রৌমারী' },
          { id: 'ulipur', nameEn: 'Ulipur', nameBn: 'উলিপুর' },
        ],
      },
      {
        id: 'nilphamari_d',
        nameEn: 'Nilphamari',
        nameBn: 'নীলফামারী',
        thanas: [
          { id: 'nilphamari_s', nameEn: 'Nilphamari Sadar', nameBn: 'নীলফামারী সদর' },
          { id: 'saidpur', nameEn: 'Saidpur', nameBn: 'সৈয়দপুর' },
          { id: 'dimla', nameEn: 'Dimla', nameBn: 'ডিমলা' },
          { id: 'domar', nameEn: 'Domar', nameBn: 'ডোমার' },
          { id: 'jaldhaka', nameEn: 'Jaldhaka', nameBn: 'জলঢাকা' },
          { id: 'kishoreganj_n', nameEn: 'Kishoreganj', nameBn: 'কিশোরগঞ্জ' },
        ],
      },
      {
        id: 'panchagarh_d',
        nameEn: 'Panchagarh',
        nameBn: 'পঞ্চগড়',
        thanas: [
          { id: 'panchagarh_s', nameEn: 'Panchagarh Sadar', nameBn: 'পঞ্চগড় সদর' },
          { id: 'atwari', nameEn: 'Atwari', nameBn: 'আটোয়ারী' },
          { id: 'boda', nameEn: 'Boda', nameBn: 'বোদা' },
          { id: 'debiganj', nameEn: 'Debiganj', nameBn: 'দেবীগঞ্জ' },
          { id: 'tetulia', nameEn: 'Tetulia', nameBn: 'তেঁতুলিয়া' },
        ],
      },
      {
        id: 'thakurgaon_d',
        nameEn: 'Thakurgaon',
        nameBn: 'ঠাকুরগাঁও',
        thanas: [
          { id: 'thakurgaon_s', nameEn: 'Thakurgaon Sadar', nameBn: 'ঠাকুরগাঁও সদর' },
          { id: 'baliadangi', nameEn: 'Baliadangi', nameBn: 'বালিয়াডাঙ্গী' },
          { id: 'haripur', nameEn: 'Haripur', nameBn: 'হরিপুর' },
          { id: 'pirganj_t', nameEn: 'Pirganj', nameBn: 'পীরগঞ্জ' },
          { id: 'ranisankail', nameEn: 'Ranisankail', nameBn: 'রাণীশংকৈল' },
        ],
      },
      {
        id: 'lalmonirhat_d',
        nameEn: 'Lalmonirhat',
        nameBn: 'লালমনিরহাট',
        thanas: [
          { id: 'lalmonirhat_s', nameEn: 'Lalmonirhat Sadar', nameBn: 'লালমনিরহাট সদর' },
          { id: 'aditmari', nameEn: 'Aditmari', nameBn: 'আদিতমারী' },
          { id: 'hatibandha', nameEn: 'Hatibandha', nameBn: 'হাতীবান্ধা' },
          { id: 'kaliganj_l', nameEn: 'Kaliganj', nameBn: 'কালীগঞ্জ' },
          { id: 'patgram', nameEn: 'Patgram', nameBn: 'পাটগ্রাম' },
        ],
      },
    ],
  },
  {
    id: 'mymensingh',
    nameEn: 'Mymensingh',
    nameBn: 'ময়মনসিংহ',
    districts: [
      {
        id: 'mymensingh_d',
        nameEn: 'Mymensingh',
        nameBn: 'ময়মনসিংহ',
        thanas: [
          { id: 'mymensingh_s', nameEn: 'Mymensingh Sadar', nameBn: 'ময়মনসিংহ সদর' },
          { id: 'bhaluka', nameEn: 'Bhaluka', nameBn: 'ভালুকা' },
          { id: 'trishal', nameEn: 'Trishal', nameBn: 'ত্রিশাল' },
          { id: 'muktagachha', nameEn: 'Muktagachha', nameBn: 'মুক্তাগাছা' },
          { id: 'gafargaon', nameEn: 'Gafargaon', nameBn: 'গফরগাঁও' },
          { id: 'gouripur', nameEn: 'Gouripur', nameBn: 'গৌরীপুর' },
          { id: 'haluaghat', nameEn: 'Haluaghat', nameBn: 'হালুয়াঘাট' },
          { id: 'ishwarganj', nameEn: 'Ishwarganj', nameBn: 'ঈশ্বরগঞ্জ' },
          { id: 'dhobaura', nameEn: 'Dhobaura', nameBn: 'ধোবাউড়া' },
          { id: 'nandail', nameEn: 'Nandail', nameBn: 'নান্দাইল' },
          { id: 'phulpur', nameEn: 'Phulpur', nameBn: 'ফুলপুর' },
          { id: 'tarakanda', nameEn: 'TaraKanda', nameBn: 'তারাকান্দা' },
        ],
      },
      {
        id: 'jamalpur_d',
        nameEn: 'Jamalpur',
        nameBn: 'জামালপুর',
        thanas: [
          { id: 'jamalpur_s', nameEn: 'Jamalpur Sadar', nameBn: 'জামালপুর সদর' },
          { id: 'bakshiganj', nameEn: 'Bakshiganj', nameBn: 'বকশীগঞ্জ' },
          { id: 'dewanganj', nameEn: 'Dewanganj', nameBn: 'দেওয়ানগঞ্জ' },
          { id: 'isampur', nameEn: 'Isampur', nameBn: 'ইসলামপুর' },
          { id: 'madarganj', nameEn: 'Madarganj', nameBn: 'মাদারগঞ্জ' },
          { id: 'melandaha', nameEn: 'Melandaha', nameBn: 'মেলান্দহ' },
          { id: 'sarishabari', nameEn: 'Sarishabari', nameBn: 'সরিষাবাড়ী' },
        ],
      },
      {
        id: 'netrokona_d',
        nameEn: 'Netrokona',
        nameBn: 'নেত্রকোণা',
        thanas: [
          { id: 'netrokona_s', nameEn: 'Netrokona Sadar', nameBn: 'নেত্রকোণা সদর' },
          { id: 'atpara', nameEn: 'Atpara', nameBn: 'আটপাড়া' },
          { id: 'barhatta', nameEn: 'Barhatta', nameBn: 'বারহাট্টা' },
          { id: 'durgapur_n', nameEn: 'Durgapur', nameBn: 'দুর্গাপুর' },
          { id: 'kalmakanda', nameEn: 'Kalmakanda', nameBn: 'কলমাকান্দা' },
          { id: 'kendua', nameEn: 'Kendua', nameBn: 'কেন্দুয়া' },
          { id: 'madan', nameEn: 'Madan', nameBn: 'মদন' },
          { id: 'mohanganj', nameEn: 'Mohanganj', nameBn: 'মোহনগঞ্জ' },
          { id: 'purbadhala', nameEn: 'Purbadhala', nameBn: 'পূর্বধলা' },
          { id: 'khaliajuri', nameEn: 'Khaliajuri', nameBn: 'খালিয়াজুরী' },
        ],
      },
      {
        id: 'sherpur_d',
        nameEn: 'Sherpur',
        nameBn: 'শেরপুর',
        thanas: [
          { id: 'sherpur_s', nameEn: 'Sherpur Sadar', nameBn: 'শেরপুর সদর' },
          { id: 'jhenaigati', nameEn: 'Jhenaigati', nameBn: 'ঝিনাইগাতী' },
          { id: 'nakla', nameEn: 'Nakla', nameBn: 'নকলা' },
          { id: 'nalitabari', nameEn: 'Nalitabari', nameBn: 'নালিতাবাড়ী' },
          { id: 'sreebardi', nameEn: 'Sreebardi', nameBn: 'শ্রীবরদী' },
        ],
      },
    ],
  },
];

export const CATEGORIES: Category[] = [
  {
    id: 'mobiles',
    nameEn: 'Mobile & Gadgets',
    nameBn: 'মোবাইল ও গ্যাজেট',
    icon: 'Smartphone',
    image: catMobileImg,
    count: 14250,
    popularBrands: ['Apple', 'Samsung', 'Xiaomi', 'Realme', 'Vivo', 'Oppo', 'OnePlus', 'Google Pixel'],
    subcategories: [
      { id: 'smartphones', nameEn: 'Smartphones', nameBn: 'স্মার্টফোন' },
      { id: 'feature_phones', nameEn: 'Feature Phones', nameBn: 'বাটন ফোন' },
      { id: 'tablets', nameEn: 'Tablets', nameBn: 'ট্যাবলেট' },
      { id: 'smart_watches', nameEn: 'Smart Watches', nameBn: 'স্মার্ট ঘড়ি' },
      { id: 'earbuds', nameEn: 'Earbuds', nameBn: 'ইয়ারবাড' },
      { id: 'headphones', nameEn: 'Headphones', nameBn: 'হেডফোন' },
      { id: 'chargers', nameEn: 'Chargers', nameBn: 'চার্জার' },
      { id: 'power_banks', nameEn: 'Power Banks', nameBn: 'পাওয়ার ব্যাংক' },
      { id: 'mobile_cases', nameEn: 'Mobile Cases', nameBn: 'মোবাইল কভার' },
      { id: 'screen_protectors', nameEn: 'Screen Protectors', nameBn: 'স্ক্রিন প্রটেক্টর' },
      { id: 'mobile_parts', nameEn: 'Mobile Parts', nameBn: 'মোবাইল যন্ত্রাংশ' },
      { id: 'other_mobile_acc', nameEn: 'Other Accessories', nameBn: 'অন্যান্য অ্যাক্সেসরিজ' },
    ],
  },
  {
    id: 'computers',
    nameEn: 'Computers & IT',
    nameBn: 'কম্পিউটার ও আইটি',
    icon: 'Laptop',
    image: catLaptopImg,
    count: 9830,
    popularBrands: ['HP', 'Dell', 'Lenovo', 'Asus', 'Apple MacBook', 'Acer', 'MSI', 'Gigabyte'],
    subcategories: [
      { id: 'laptops', nameEn: 'Laptops', nameBn: 'ল্যাপটপ' },
      { id: 'desktop_computers', nameEn: 'Desktop Computers', nameBn: 'ডেস্কটপ' },
      { id: 'monitors', nameEn: 'Monitors', nameBn: 'মনিটর' },
      { id: 'printers', nameEn: 'Printers', nameBn: 'প্রিন্টার' },
      { id: 'keyboards', nameEn: 'Keyboards', nameBn: 'কীবোর্ড' },
      { id: 'mouse', nameEn: 'Mouse', nameBn: 'মাউস' },
      { id: 'ssd', nameEn: 'SSD', nameBn: 'এসএসডি' },
      { id: 'ram', nameEn: 'RAM', nameBn: 'র্যাম' },
      { id: 'hard_drives', nameEn: 'Hard Drives', nameBn: 'হার্ডডিস্ক' },
      { id: 'routers', nameEn: 'Routers', nameBn: 'রাউটার' },
      { id: 'networking', nameEn: 'Networking', nameBn: 'নেটওয়ার্কিং' },
      { id: 'software', nameEn: 'Software', nameBn: 'সফটওয়্যার' },
      { id: 'computer_acc', nameEn: 'Computer Accessories', nameBn: 'কম্পিউটার অ্যাক্সেসরিজ' },
      { id: 'other_it', nameEn: 'Other IT Products', nameBn: 'অন্যান্য আইটি পণ্য' },
    ],
  },
  {
    id: 'electronics',
    nameEn: 'Electronics',
    nameBn: 'ইলেকট্রনিক্স',
    icon: 'Tv',
    image: catTvImg,
    count: 8740,
    popularBrands: ['Sony', 'Samsung', 'LG', 'Walton', 'Singer', 'Vision', 'Haier', 'Gree'],
    subcategories: [
      { id: 'televisions', nameEn: 'Televisions', nameBn: 'টিভি' },
      { id: 'refrigerators', nameEn: 'Refrigerators', nameBn: 'ফ্রিজ' },
      { id: 'air_conditioners', nameEn: 'Air Conditioners', nameBn: 'এসি' },
      { id: 'washing_machines', nameEn: 'Washing Machines', nameBn: 'ওয়াশিং মেশিন' },
      { id: 'cameras', nameEn: 'Cameras', nameBn: 'ক্যামেরা' },
      { id: 'cctv', nameEn: 'CCTV', nameBn: 'সিসিটিভি' },
      { id: 'speakers', nameEn: 'Speakers', nameBn: 'স্পিকার' },
      { id: 'projectors', nameEn: 'Projectors', nameBn: 'প্রজেক্টর' },
      { id: 'generators', nameEn: 'Generators', nameBn: 'জেনারেটর' },
      { id: 'home_appliances', nameEn: 'Home Appliances', nameBn: 'গৃহস্থালী যন্ত্রপাতি' },
      { id: 'other_electronics', nameEn: 'Other Electronics', nameBn: 'অন্যান্য ইলেকট্রনিক্স' },
    ],
  },
  {
    id: 'vehicles',
    nameEn: 'Vehicles',
    nameBn: 'যানবাহন',
    icon: 'Car',
    image: catScooterImg,
    count: 7620,
    popularBrands: ['Toyota', 'Yamaha', 'Honda', 'Suzuki', 'TVS', 'Bajaj', 'Nissan', 'Hyundai'],
    subcategories: [
      { id: 'cars', nameEn: 'Cars', nameBn: 'গাড়ি' },
      { id: 'motorcycles', nameEn: 'Motorcycles', nameBn: 'মোটরসাইকেল' },
      { id: 'bicycles', nameEn: 'Bicycles', nameBn: 'সাইকেল' },
      { id: 'microbuses', nameEn: 'Microbuses', nameBn: 'মাইক্রোবাস' },
      { id: 'buses', nameEn: 'Buses', nameBn: 'বাস' },
      { id: 'trucks', nameEn: 'Trucks', nameBn: 'ট্রাক' },
      { id: 'auto_rickshaws', nameEn: 'Auto Rickshaws', nameBn: 'অটোরিকশা' },
      { id: 'boats', nameEn: 'Boats', nameBn: 'নৌযান' },
      { id: 'spare_parts', nameEn: 'Spare Parts', nameBn: 'যন্ত্রাংশ' },
      { id: 'tyres_wheels', nameEn: 'Tyres & Wheels', nameBn: 'টায়ার ও চাকা' },
      { id: 'vehicle_acc', nameEn: 'Vehicle Accessories', nameBn: 'গাড়ির অ্যাক্সেসরিজ' },
      { id: 'other_vehicles', nameEn: 'Other Vehicles', nameBn: 'অন্যান্য যানবাহন' },
    ],
  },
  {
    id: 'property',
    nameEn: 'Property',
    nameBn: 'জমি ও বাসস্থান',
    icon: 'Home',
    image: catHouseImg,
    count: 5120,
    subcategories: [
      { id: 'apartments_sale', nameEn: 'Apartments for Sale', nameBn: 'ফ্ল্যাট বিক্রয়' },
      { id: 'apartments_rent', nameEn: 'Apartments for Rent', nameBn: 'ফ্ল্যাট ভাড়া' },
      { id: 'houses', nameEn: 'Houses', nameBn: 'বাড়ি' },
      { id: 'land', nameEn: 'Land', nameBn: 'জমি' },
      { id: 'commercial', nameEn: 'Commercial Property', nameBn: 'বাণিজ্যিক সম্পত্তি' },
      { id: 'office_space', nameEn: 'Office Space', nameBn: 'অফিস' },
      { id: 'shops', nameEn: 'Shops', nameBn: 'দোকান' },
      { id: 'room_rent', nameEn: 'Room Rent', nameBn: 'রুম ভাড়া' },
      { id: 'garages', nameEn: 'Garages', nameBn: 'গ্যারেজ' },
      { id: 'other_property', nameEn: 'Other Property', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'home_furniture',
    nameEn: 'Home & Furniture',
    nameBn: 'ঘর ও আসবাব',
    icon: 'Armchair',
    image: catSofaImg,
    count: 4210,
    subcategories: [
      { id: 'sofas', nameEn: 'Sofas', nameBn: 'সোফা' },
      { id: 'beds', nameEn: 'Beds', nameBn: 'খাট' },
      { id: 'wardrobes', nameEn: 'Wardrobes', nameBn: 'আলমারি' },
      { id: 'dining_tables', nameEn: 'Dining Tables', nameBn: 'ডাইনিং টেবিল' },
      { id: 'chairs', nameEn: 'Chairs', nameBn: 'চেয়ার' },
      { id: 'office_furniture', nameEn: 'Office Furniture', nameBn: 'অফিস ফার্নিচার' },
      { id: 'kitchen_items', nameEn: 'Kitchen Items', nameBn: 'রান্নাঘরের সামগ্রী' },
      { id: 'home_decor', nameEn: 'Home Decor', nameBn: 'হোম ডেকোর' },
      { id: 'lighting', nameEn: 'Lighting', nameBn: 'লাইটিং' },
      { id: 'storage', nameEn: 'Storage', nameBn: 'স্টোরেজ' },
      { id: 'other_furniture', nameEn: 'Other Furniture', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'fashion',
    nameEn: 'Fashion',
    nameBn: 'ফ্যাশন',
    icon: 'Shirt',
    image: catSneakerImg,
    count: 8340,
    subcategories: [
      { id: 'mens_clothing', nameEn: "Men's Clothing", nameBn: 'পুরুষদের পোশাক' },
      { id: 'womens_clothing', nameEn: "Women's Clothing", nameBn: 'নারীদের পোশাক' },
      { id: 'kids_clothing', nameEn: "Kids' Clothing", nameBn: 'শিশুদের পোশাক' },
      { id: 'shoes', nameEn: 'Shoes', nameBn: 'জুতা' },
      { id: 'bags', nameEn: 'Bags', nameBn: 'ব্যাগ' },
      { id: 'watches', nameEn: 'Watches', nameBn: 'ঘড়ি' },
      { id: 'jewellery', nameEn: 'Jewellery', nameBn: 'গয়না' },
      { id: 'sunglasses', nameEn: 'Sunglasses', nameBn: 'সানগ্লাস' },
      { id: 'traditional_wear', nameEn: 'Traditional Wear', nameBn: 'ঐতিহ্যবাহী পোশাক' },
      { id: 'fashion_acc', nameEn: 'Fashion Accessories', nameBn: 'ফ্যাশন অ্যাক্সেসরিজ' },
    ],
  },
  {
    id: 'health_beauty',
    nameEn: 'Health & Beauty',
    nameBn: 'স্বাস্থ্য ও সৌন্দর্য',
    icon: 'Sparkles',
    image: catPerfumeImg,
    count: 5120,
    subcategories: [
      { id: 'makeup', nameEn: 'Makeup', nameBn: 'মেকআপ' },
      { id: 'skin_care', nameEn: 'Skin Care', nameBn: 'ত্বকের যত্ন' },
      { id: 'hair_care', nameEn: 'Hair Care', nameBn: 'চুলের যত্ন' },
      { id: 'perfumes', nameEn: 'Perfumes', nameBn: 'পারফিউম' },
      { id: 'grooming', nameEn: 'Grooming', nameBn: 'গ্রুমিং' },
      { id: 'beauty_devices', nameEn: 'Beauty Devices', nameBn: 'বিউটি ডিভাইস' },
      { id: 'personal_care', nameEn: 'Personal Care', nameBn: 'ব্যক্তিগত যত্ন' },
      { id: 'health_products', nameEn: 'Health Products', nameBn: 'স্বাস্থ্য পণ্য' },
      { id: 'other_beauty', nameEn: 'Other Beauty Products', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'baby_kids',
    nameEn: 'Baby & Kids',
    nameBn: 'শিশু সামগ্রী',
    icon: 'Baby',
    image: catTeddyImg,
    count: 3910,
    subcategories: [
      { id: 'baby_clothing', nameEn: 'Baby Clothing', nameBn: 'শিশুর পোশাক' },
      { id: 'toys', nameEn: 'Toys', nameBn: 'খেলনা' },
      { id: 'strollers', nameEn: 'Strollers', nameBn: 'স্ট্রলার' },
      { id: 'baby_care', nameEn: 'Baby Care', nameBn: 'শিশুর যত্ন' },
      { id: 'school_supplies', nameEn: 'School Supplies', nameBn: 'স্কুল সামগ্রী' },
      { id: 'baby_furniture', nameEn: 'Baby Furniture', nameBn: 'শিশুর আসবাব' },
      { id: 'feeding_items', nameEn: 'Feeding Items', nameBn: 'খাওয়ানোর সামগ্রী' },
      { id: 'other_baby', nameEn: 'Other Baby Items', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'books_sports',
    nameEn: 'Books & Sports',
    nameBn: 'বই ও খেলাধুলা',
    icon: 'BookOpen',
    image: catBooksImg,
    count: 6510,
    subcategories: [
      { id: 'books', nameEn: 'Books', nameBn: 'বই' },
      { id: 'magazines', nameEn: 'Magazines', nameBn: 'ম্যাগাজিন' },
      { id: 'sports_equipment', nameEn: 'Sports Equipment', nameBn: 'খেলার সরঞ্জাম' },
      { id: 'gym_equipment', nameEn: 'Gym Equipment', nameBn: 'জিম সরঞ্জাম' },
      { id: 'musical_instruments', nameEn: 'Musical Instruments', nameBn: 'বাদ্যযন্ত্র' },
      { id: 'gaming', nameEn: 'Gaming', nameBn: 'গেমিং' },
      { id: 'collectibles', nameEn: 'Collectibles', nameBn: 'সংগ্রহযোগ্য জিনিস' },
      { id: 'other_leisure', nameEn: 'Other Leisure Items', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'animal_pets',
    nameEn: 'Animals & Pets',
    nameBn: 'পশুপাখি',
    icon: 'Dog',
    image: catCatImg,
    count: 4920,
    subcategories: [
      { id: 'cattle', nameEn: 'Cattle', nameBn: 'গরু' },
      { id: 'goats', nameEn: 'Goats', nameBn: 'ছাগল' },
      { id: 'sheep', nameEn: 'Sheep', nameBn: 'ভেড়া' },
      { id: 'poultry', nameEn: 'Poultry', nameBn: 'হাঁস-মুরগি' },
      { id: 'fish', nameEn: 'Fish', nameBn: 'মাছ' },
      { id: 'cats', nameEn: 'Cats', nameBn: 'বিড়াল' },
      { id: 'dogs', nameEn: 'Dogs', nameBn: 'কুকুর' },
      { id: 'birds', nameEn: 'Birds', nameBn: 'পাখি' },
      { id: 'pet_food', nameEn: 'Pet Food', nameBn: 'পোষা প্রাণীর খাবার' },
      { id: 'pet_accessories', nameEn: 'Pet Accessories', nameBn: 'পোষা প্রাণীর সামগ্রী' },
    ],
  },
  {
    id: 'agriculture',
    nameEn: 'Agriculture',
    nameBn: 'কৃষি',
    icon: 'Sprout',
    image: catPlantImg,
    count: 3280,
    subcategories: [
      { id: 'seeds', nameEn: 'Seeds', nameBn: 'বীজ' },
      { id: 'fertilizers', nameEn: 'Fertilizers', nameBn: 'সার' },
      { id: 'pesticides', nameEn: 'Pesticides', nameBn: 'কীটনাশক' },
      { id: 'farm_machinery', nameEn: 'Farm Machinery', nameBn: 'কৃষিযন্ত্র' },
      { id: 'irrigation_equipment', nameEn: 'Irrigation Equipment', nameBn: 'সেচ সরঞ্জাম' },
      { id: 'crops', nameEn: 'Crops', nameBn: 'ফসল' },
      { id: 'livestock', nameEn: 'Livestock', nameBn: 'গবাদি পশু' },
      { id: 'animal_feed', nameEn: 'Animal Feed', nameBn: 'পশুখাদ্য' },
      { id: 'other_agriculture', nameEn: 'Other Agriculture Items', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'business_equipment',
    nameEn: 'Business Equipment',
    nameBn: 'ব্যবসার সরঞ্জাম',
    icon: 'Building2',
    image: catToolboxImg,
    count: 2750,
    subcategories: [
      { id: 'office_equipment', nameEn: 'Office Equipment', nameBn: 'অফিস সরঞ্জাম' },
      { id: 'shop_equipment', nameEn: 'Shop Equipment', nameBn: 'দোকানের সরঞ্জাম' },
      { id: 'restaurant_equipment', nameEn: 'Restaurant Equipment', nameBn: 'রেস্টুরেন্ট সরঞ্জাম' },
      { id: 'industrial_machines', nameEn: 'Industrial Machines', nameBn: 'শিল্প যন্ত্র' },
      { id: 'medical_equipment', nameEn: 'Medical Equipment', nameBn: 'মেডিকেল যন্ত্র' },
      { id: 'packaging_equipment', nameEn: 'Packaging Equipment', nameBn: 'প্যাকেজিং সরঞ্জাম' },
      { id: 'generators', nameEn: 'Generators', nameBn: 'জেনারেটর' },
      { id: 'power_tools', nameEn: 'Power Tools', nameBn: 'পাওয়ার টুলস' },
      { id: 'other_business', nameEn: 'Other Business Equipment', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'services',
    nameEn: 'Services',
    nameBn: 'সেবা',
    icon: 'Wrench',
    image: catDrillImg,
    count: 3450,
    subcategories: [
      { id: 'home_repair', nameEn: 'Home Repair', nameBn: 'বাড়ি মেরামত' },
      { id: 'electrical_services', nameEn: 'Electrical Services', nameBn: 'ইলেকট্রিক্যাল সেবা' },
      { id: 'plumbing', nameEn: 'Plumbing', nameBn: 'প্লাম্বিং' },
      { id: 'cleaning_services', nameEn: 'Cleaning Services', nameBn: 'পরিষ্কার-পরিচ্ছন্নতা' },
      { id: 'computer_repair', nameEn: 'Computer Repair', nameBn: 'কম্পিউটার সার্ভিস' },
      { id: 'graphic_design', nameEn: 'Graphic Design', nameBn: 'গ্রাফিক ডিজাইন' },
      { id: 'website_development', nameEn: 'Website Development', nameBn: 'ওয়েবসাইট ডেভেলপমেন্ট' },
      { id: 'app_development', nameEn: 'App Development', nameBn: 'অ্যাপ ডেভেলপমেন্ট' },
      { id: 'delivery_services', nameEn: 'Delivery Services', nameBn: 'ডেলিভারি সেবা' },
      { id: 'photography', nameEn: 'Photography', nameBn: 'ফটোগ্রাফি' },
      { id: 'event_services', nameEn: 'Event Services', nameBn: 'ইভেন্ট সেবা' },
      { id: 'other_services', nameEn: 'Other Services', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'jobs',
    nameEn: 'Jobs',
    nameBn: 'চাকরি',
    icon: 'Briefcase',
    image: catBriefcaseImg,
    count: 2890,
    subcategories: [
      { id: 'it_jobs', nameEn: 'IT Jobs', nameBn: 'আইটি' },
      { id: 'marketing_jobs', nameEn: 'Marketing Jobs', nameBn: 'মার্কেটিং' },
      { id: 'sales_jobs', nameEn: 'Sales Jobs', nameBn: 'সেলস' },
      { id: 'office_jobs', nameEn: 'Office Jobs', nameBn: 'অফিস' },
      { id: 'driver_jobs', nameEn: 'Driver Jobs', nameBn: 'ড্রাইভার' },
      { id: 'garments_jobs', nameEn: 'Garments Jobs', nameBn: 'গার্মেন্টস' },
      { id: 'teaching_jobs', nameEn: 'Teaching Jobs', nameBn: 'শিক্ষকতা' },
      { id: 'healthcare_jobs', nameEn: 'Healthcare Jobs', nameBn: 'স্বাস্থ্যসেবা' },
      { id: 'part_time_jobs', nameEn: 'Part-time Jobs', nameBn: 'পার্ট-টাইম' },
      { id: 'full_time_jobs', nameEn: 'Full-time Jobs', nameBn: 'ফুল-টাইম' },
      { id: 'remote_jobs', nameEn: 'Remote Jobs', nameBn: 'রিমোট' },
      { id: 'other_jobs', nameEn: 'Other Jobs', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'others',
    nameEn: 'Others',
    nameBn: 'অন্যান্য',
    icon: 'Package',
    image: catGiftImg,
    count: 1420,
    subcategories: [
      { id: 'gift_items', nameEn: 'Gift Items', nameBn: 'উপহার' },
      { id: 'antiques', nameEn: 'Antiques', nameBn: 'পুরাতন জিনিস' },
      { id: 'free_items', nameEn: 'Free Items', nameBn: 'ফ্রি আইটেম' },
      { id: 'lost_found', nameEn: 'Lost & Found', nameBn: 'হারানো ও পাওয়া' },
      { id: 'auctions', nameEn: 'Auctions', nameBn: 'নিলাম' },
      { id: 'miscellaneous', nameEn: 'Miscellaneous', nameBn: 'বিবিধ' },
    ],
  },
  {
    id: 'education_courses',
    nameEn: 'Education & Courses',
    nameBn: 'শিক্ষা ও কোর্স',
    icon: 'GraduationCap',
    image: catBooksImg,
    count: 4150,
    subcategories: [
      { id: 'school_admission', nameEn: 'School Admission', nameBn: 'স্কুল ভর্তি' },
      { id: 'college_admission', nameEn: 'College Admission', nameBn: 'কলেজ ভর্তি' },
      { id: 'university_admission', nameEn: 'University Admission', nameBn: 'বিশ্ববিদ্যালয় ভর্তি' },
      { id: 'coaching_centers', nameEn: 'Coaching Centers', nameBn: 'কোচিং সেন্টার' },
      { id: 'online_courses', nameEn: 'Online Courses', nameBn: 'অনলাইন কোর্স' },
      { id: 'computer_training', nameEn: 'Computer Training', nameBn: 'কম্পিউটার প্রশিক্ষণ' },
      { id: 'graphic_design_courses', nameEn: 'Graphic Design Courses', nameBn: 'গ্রাফিক ডিজাইন' },
      { id: 'web_dev_courses', nameEn: 'Web Development Courses', nameBn: 'ওয়েব ডেভেলপমেন্ট' },
      { id: 'digital_marketing', nameEn: 'Digital Marketing', nameBn: 'ডিজিটাল মার্কেটিং' },
      { id: 'language_learning', nameEn: 'Language Learning', nameBn: 'ভাষা শিক্ষা' },
      { id: 'ielts_pte', nameEn: 'IELTS & PTE', nameBn: 'আইইএলটিএস ও পিটিই' },
      { id: 'job_prep', nameEn: 'Job Preparation', nameBn: 'চাকরি প্রস্তুতি' },
      { id: 'private_tutors', nameEn: 'Private Tutors', nameBn: 'প্রাইভেট টিউটর' },
      { id: 'religious_education', nameEn: 'Religious Education', nameBn: 'ধর্মীয় শিক্ষা' },
      { id: 'other_courses', nameEn: 'Other Courses', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'travel_tours',
    nameEn: 'Travel & Tours',
    nameBn: 'ভ্রমণ ও ট্যুর',
    icon: 'Plane',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
    count: 3680,
    subcategories: [
      { id: 'domestic_tours', nameEn: 'Domestic Tours', nameBn: 'দেশীয় ভ্রমণ' },
      { id: 'international_tours', nameEn: 'International Tours', nameBn: 'বিদেশ ভ্রমণ' },
      { id: 'hotel_booking', nameEn: 'Hotel Booking', nameBn: 'হোটেল বুকিং' },
      { id: 'resort_booking', nameEn: 'Resort Booking', nameBn: 'রিসোর্ট বুকিং' },
      { id: 'flight_tickets', nameEn: 'Flight Tickets', nameBn: 'বিমান টিকেট' },
      { id: 'bus_tickets', nameEn: 'Bus Tickets', nameBn: 'বাস টিকেট' },
      { id: 'train_tickets', nameEn: 'Train Tickets', nameBn: 'ট্রেন টিকেট' },
      { id: 'visa_services', nameEn: 'Visa Services', nameBn: 'ভিসা সেবা' },
      { id: 'hajj_umrah', nameEn: 'Hajj & Umrah', nameBn: 'হজ ও ওমরাহ' },
      { id: 'car_rental', nameEn: 'Car Rental', nameBn: 'গাড়ি ভাড়া' },
      { id: 'tour_guides', nameEn: 'Tour Guides', nameBn: 'ট্যুর গাইড' },
      { id: 'travel_bags', nameEn: 'Travel Bags', nameBn: 'ভ্রমণ ব্যাগ' },
      { id: 'camping_gear', nameEn: 'Camping Gear', nameBn: 'ক্যাম্পিং সামগ্রী' },
      { id: 'other_travel', nameEn: 'Other Travel Services', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'food_restaurants',
    nameEn: 'Food & Restaurants',
    nameBn: 'খাবার ও রেস্টুরেন্ট',
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    count: 6180,
    subcategories: [
      { id: 'restaurants', nameEn: 'Restaurants', nameBn: 'রেস্টুরেন্ট' },
      { id: 'fast_food', nameEn: 'Fast Food', nameBn: 'ফাস্ট ফুড' },
      { id: 'homemade_food', nameEn: 'Homemade Food', nameBn: 'ঘরোয়া খাবার' },
      { id: 'cakes_bakery', nameEn: 'Cakes & Bakery', nameBn: 'কেক ও বেকারি' },
      { id: 'sweets', nameEn: 'Sweets', nameBn: 'মিষ্টি' },
      { id: 'catering_services', nameEn: 'Catering Services', nameBn: 'ক্যাটারিং' },
      { id: 'biryani', nameEn: 'Biryani', nameBn: 'বিরিয়ানি' },
      { id: 'pizza', nameEn: 'Pizza', nameBn: 'পিজ্জা' },
      { id: 'burgers', nameEn: 'Burgers', nameBn: 'বার্গার' },
      { id: 'tea_coffee', nameEn: 'Tea & Coffee', nameBn: 'চা ও কফি' },
      { id: 'fruits_vegetables', nameEn: 'Fruits & Vegetables', nameBn: 'ফল ও সবজি' },
      { id: 'organic_food', nameEn: 'Organic Food', nameBn: 'অর্গানিক খাবার' },
      { id: 'beverages', nameEn: 'Beverages', nameBn: 'পানীয়' },
      { id: 'other_food', nameEn: 'Other Food Items', nameBn: 'অন্যান্য' },
    ],
  },
  {
    id: 'events_tickets',
    nameEn: 'Events & Tickets',
    nameBn: 'ইভেন্ট ও টিকেট',
    icon: 'Ticket',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    count: 2310,
    subcategories: [
      { id: 'concert_tickets', nameEn: 'Concert Tickets', nameBn: 'কনসার্ট টিকেট' },
      { id: 'sports_tickets', nameEn: 'Sports Tickets', nameBn: 'খেলার টিকেট' },
      { id: 'movie_tickets', nameEn: 'Movie Tickets', nameBn: 'সিনেমা টিকেট' },
      { id: 'seminars', nameEn: 'Seminars', nameBn: 'সেমিনার' },
      { id: 'workshops', nameEn: 'Workshops', nameBn: 'ওয়ার্কশপ' },
      { id: 'wedding_services', nameEn: 'Wedding Services', nameBn: 'বিয়ের সেবা' },
      { id: 'birthday_events', nameEn: 'Birthday Events', nameBn: 'জন্মদিন অনুষ্ঠান' },
    ],
  },
];

export const CONDITION_OPTIONS = [
  { value: 'brand_new', labelEn: 'Brand New', labelBn: 'একদম নতুন' },
  { value: 'used_like_new', labelEn: 'Used - Like New', labelBn: 'ব্যবহৃত - নতুনের মত' },
  { value: 'used_good', labelEn: 'Used - Good', labelBn: 'ব্যবহৃত - ভালো অবস্থা' },
  { value: 'refurbished', labelEn: 'Refurbished', labelBn: 'রিফার্বিশড' },
];

export interface BrandModels {
  brandEn: string;
  brandBn: string;
  models: { en: string; bn: string }[];
}

export const CATEGORY_BRANDS_MODELS: Record<string, BrandModels[]> = {
  mobiles: [
    {
      brandEn: 'Apple',
      brandBn: 'অ্যাপল (Apple)',
      models: [
        { en: 'iPhone 16 Pro Max', bn: 'আইফোন ১৬ প্রো ম্যাক্স' },
        { en: 'iPhone 16 Pro', bn: 'আইফোন ১৬ প্রো' },
        { en: 'iPhone 16 Plus', bn: 'আইফোন ১৬ প্লাস' },
        { en: 'iPhone 16', bn: 'আইফোন ১৬' },
        { en: 'iPhone 15 Pro Max', bn: 'আইফোন ১৫ প্রো ম্যাক্স' },
        { en: 'iPhone 15 Pro', bn: 'আইফোন ১৫ প্রো' },
        { en: 'iPhone 15 Plus', bn: 'আইফোন ১৫ প্লাস' },
        { en: 'iPhone 15', bn: 'আইফোন ১৫' },
        { en: 'iPhone 14 Pro Max', bn: 'আইফোন ১৪ প্রো ম্যাক্স' },
        { en: 'iPhone 14 Pro', bn: 'আইফোন ১৪ প্রো' },
        { en: 'iPhone 14 Plus', bn: 'আইফোন ১৪ প্লাস' },
        { en: 'iPhone 14', bn: 'আইফোন ১৪' },
        { en: 'iPhone 13 Pro Max', bn: 'আইফোন ১৩ প্রো ম্যাক্স' },
        { en: 'iPhone 13 Pro', bn: 'আইফোন ১৩ প্রো' },
        { en: 'iPhone 13', bn: 'আইফোন ১৩' },
        { en: 'iPhone 13 mini', bn: 'আইফোন ১৩ মিনি' },
        { en: 'iPhone 12 Pro Max', bn: 'আইফোন ১২ প্রো ম্যাক্স' },
        { en: 'iPhone 12 Pro', bn: 'আইফোন ১২ প্রো' },
        { en: 'iPhone 12', bn: 'আইফোন ১২' },
        { en: 'iPhone 11 Pro Max', bn: 'আইফোন ১১ প্রো ম্যাক্স' },
        { en: 'iPhone 11', bn: 'আইফোন ১১' },
        { en: 'iPhone SE (2022 / 3rd Gen)', bn: 'আইফোন এসই (২০২২)' },
        { en: 'iPhone SE (2020 / 2nd Gen)', bn: 'আইফোন এসই (২০২০)' },
        { en: 'iPhone XR / XS Max / XS', bn: 'আইফোন এক্সআর / এক্সএস' },
        { en: 'iPhone X / 8 Plus / 8', bn: 'আইফোন এক্স / ৮' },
      ]
    },
    {
      brandEn: 'Samsung',
      brandBn: 'স্যামসাং (Samsung)',
      models: [
        { en: 'Galaxy S25 Ultra 5G', bn: 'গ্যালাক্সি এস২৫ আল্ট্রা ৫জি' },
        { en: 'Galaxy S25+ 5G', bn: 'গ্যালাক্সি এস২৫ প্লাস ৫জি' },
        { en: 'Galaxy S25 5G', bn: 'গ্যালাক্সি এস২৫ ৫জি' },
        { en: 'Galaxy S24 Ultra 5G', bn: 'গ্যালাক্সি এস২৪ আল্ট্রা ৫জি' },
        { en: 'Galaxy S24+ 5G', bn: 'গ্যালাক্সি এস২৪ প্লাস ৫জি' },
        { en: 'Galaxy S24 5G', bn: 'গ্যালাক্সি এস২৪ ৫জি' },
        { en: 'Galaxy S23 Ultra 5G', bn: 'গ্যালাক্সি এস২৩ আল্ট্রা' },
        { en: 'Galaxy S23+ 5G / S23', bn: 'গ্যালাক্সি এস২৩' },
        { en: 'Galaxy S23 FE 5G', bn: 'গ্যালাক্সি এস২৩ এফই' },
        { en: 'Galaxy S22 Ultra 5G', bn: 'গ্যালাক্সি এস২২ আল্ট্রা' },
        { en: 'Galaxy S21 FE 5G / S21 Ultra', bn: 'গ্যালাক্সি এস২১' },
        { en: 'Galaxy Z Fold 6 / Z Flip 6', bn: 'গ্যালাক্সি জেড ফোল্ড ৬ / ফ্লিপ ৬' },
        { en: 'Galaxy Z Fold 5 / Z Flip 5', bn: 'গ্যালাক্সি জেড ফোল্ড ৫ / ফ্লিপ ৫' },
        { en: 'Galaxy A56 5G', bn: 'গ্যালাক্সি এ৫৬ ৫জি' },
        { en: 'Galaxy A36 5G', bn: 'গ্যালাক্সি এ৩৬ ৫জি' },
        { en: 'Galaxy A55 5G', bn: 'গ্যালাক্সি এ৫৫ ৫জি' },
        { en: 'Galaxy A35 5G', bn: 'গ্যালাক্সি এ৩৫ ৫জি' },
        { en: 'Galaxy A25 5G', bn: 'গ্যালাক্সি এ২৫ ৫জি' },
        { en: 'Galaxy A15 5G / 4G', bn: 'গ্যালাক্সি এ১৫' },
        { en: 'Galaxy A05 / A05s / A06', bn: 'গ্যালাক্সি এ০৫এস / এ০৬' },
        { en: 'Galaxy M55 5G / M34 5G', bn: 'গ্যালাক্সি এম৫৫ / এম৩৪' },
        { en: 'Galaxy M15 5G / M14 5G', bn: 'গ্যালাক্সি এম১৫ / এম১৪' },
        { en: 'Galaxy F54 5G / F34 5G', bn: 'গ্যালাক্সি এফ৫৪' },
        { en: 'Galaxy Note 20 Ultra 5G', bn: 'গ্যালাক্সি নোট ২০ আল্ট্রা' },
      ]
    },
    {
      brandEn: 'Xiaomi',
      brandBn: 'শাওমি (Xiaomi)',
      models: [
        { en: 'Xiaomi 14 Ultra 5G', bn: 'শাওমি ১৪ আল্ট্রা ৫জি' },
        { en: 'Xiaomi 14 Pro 5G', bn: 'শাওমি ১৪ প্রো' },
        { en: 'Xiaomi 14 5G', bn: 'শাওমি ১৪' },
        { en: 'Xiaomi 13T Pro 5G', bn: 'শাওমি ১৩টি প্রো' },
        { en: 'Xiaomi 13T 5G', bn: 'শাওমি ১৩টি' },
        { en: 'Xiaomi 13 Pro / 13 Ultra', bn: 'শাওমি ১৩ প্রো / আল্ট্রা' },
        { en: 'Xiaomi 12 Pro / 12X', bn: 'শাওমি ১২ প্রো' },
        { en: 'Xiaomi Mi 11 Ultra / 11T Pro', bn: 'শাওমি ১১টি প্রো' },
        { en: 'Xiaomi Civi 4 Pro / Civi 3', bn: 'শাওমি সিভি ৪' },
        { en: 'Xiaomi Mix Fold 3 / Fold 2', bn: 'শাওমি মিক্স ফোল্ড' },
      ]
    },
    {
      brandEn: 'Redmi',
      brandBn: 'রেডমি (Redmi)',
      models: [
        { en: 'Redmi Note 13 Pro+ 5G', bn: 'রেডমি নোট ১৩ প্রো প্লাস' },
        { en: 'Redmi Note 13 Pro 5G', bn: 'রেডমি নোট ১৩ প্রো ৫জি' },
        { en: 'Redmi Note 13 Pro 4G', bn: 'রেডমি নোট ১৩ প্রো ৪জি' },
        { en: 'Redmi Note 13 5G / 4G', bn: 'রেডমি নোট ১৩' },
        { en: 'Redmi Note 12 Pro+ 5G', bn: 'রেডমি নোট ১২ প্রো প্লাস' },
        { en: 'Redmi Note 12 Pro 5G', bn: 'রেডমি নোট ১২ প্রো' },
        { en: 'Redmi Note 12 / 12S', bn: 'রেডমি নোট ১২' },
        { en: 'Redmi Note 11 Pro+ / 11 Pro', bn: 'রেডমি নোট ১১ প্রো' },
        { en: 'Redmi Note 11 / 11S', bn: 'রেডমি নোট ১১' },
        { en: 'Redmi 13 / 13C 5G / 13C', bn: 'রেডমি ১৩সি / ১৩' },
        { en: 'Redmi 12 / 12C', bn: 'রেডমি ১২' },
        { en: 'Redmi A3 / A3x / A2+', bn: 'রেডমি এ৩ / এ২' },
        { en: 'Redmi K70 Ultra / K60 Ultra', bn: 'রেডমি কে৭০ আল্ট্রা' },
      ]
    },
    {
      brandEn: 'POCO',
      brandBn: 'পোকো (POCO)',
      models: [
        { en: 'Poco F6 Pro 5G', bn: 'পোকো এফ৬ প্রো ৫জি' },
        { en: 'Poco F6 5G', bn: 'পোকো এফ৬ ৫জি' },
        { en: 'Poco X6 Pro 5G', bn: 'পোকো এক্স৬ প্রো ৫জি' },
        { en: 'Poco X6 5G', bn: 'পোকো এক্স৬ ৫জি' },
        { en: 'Poco M6 Pro 4G / M6 5G', bn: 'পোকো এম৬ প্রো' },
        { en: 'Poco F5 Pro / F5 5G', bn: 'পোকো এফ৫' },
        { en: 'Poco X5 Pro 5G / X5 5G', bn: 'পোকো এক্স৫' },
        { en: 'Poco M5 / M5s', bn: 'পোকো এম৫' },
        { en: 'Poco C65 / C55 / C51', bn: 'পোকো সি৬৫ / সি৫৫' },
        { en: 'Poco F4 GT / F4 5G', bn: 'পোকো এফ৪ জিটি' },
      ]
    },
    {
      brandEn: 'Realme',
      brandBn: 'রিয়েলমি (Realme)',
      models: [
        { en: 'Realme GT 6 5G / GT 6T', bn: 'রিয়েলমি জিটি ৬ ৫জি' },
        { en: 'Realme GT Neo 6 / Neo 5', bn: 'রিয়েলমি জিটি নিও ৬' },
        { en: 'Realme 12 Pro+ 5G', bn: 'রিয়েলমি ১২ প্রো প্লাস' },
        { en: 'Realme 12 Pro 5G', bn: 'রিয়েলমি ১২ প্রো' },
        { en: 'Realme 12+ 5G / 12 5G', bn: 'রিয়েলমি ১২ প্লাস' },
        { en: 'Realme 12x 5G / 12 Lite', bn: 'রিয়েলমি ১২এক্স' },
        { en: 'Realme 11 Pro+ 5G / 11 Pro', bn: 'রিয়েলমি ১১ প্রো' },
        { en: 'Realme 11 5G / 11x 5G', bn: 'রিয়েলমি ১১' },
        { en: 'Realme C67 4G / C65 5G', bn: 'রিয়েলমি সি৬৭ / সি৬৫' },
        { en: 'Realme C55 / C53 / C51', bn: 'রিয়েলমি সি৫৫ / সি৫৩' },
        { en: 'Realme C33 / C30 / C31', bn: 'রিয়েলমি সি৩৩' },
        { en: 'Realme Narzo 70 Pro 5G / 60x', bn: 'রিয়েলমি নারজো ৭০' },
        { en: 'Realme Narzo N55 / N53', bn: 'রিয়েলমি নারজো এন৫৫' },
      ]
    },
    {
      brandEn: 'Vivo',
      brandBn: 'ভিভো (Vivo)',
      models: [
        { en: 'Vivo V40 Pro 5G', bn: 'ভিভো ভি৪০ প্রো ৫জি' },
        { en: 'Vivo V40 5G', bn: 'ভিভো ভি৪০ ৫জি' },
        { en: 'Vivo V40e 5G', bn: 'ভিভো ভি৪০ই ৫জি' },
        { en: 'Vivo V30 Pro 5G', bn: 'ভিভো ভি৩০ প্রো ৫জি' },
        { en: 'Vivo V30 5G', bn: 'ভিভো ভি৩০ ৫জি' },
        { en: 'Vivo V30e 5G', bn: 'ভিভো ভি৩০ই ৫জি' },
        { en: 'Vivo V29 5G / V29e 5G', bn: 'ভিভো ভি২৯' },
        { en: 'Vivo V27 5G / V27e', bn: 'ভিভো ভি২৭' },
        { en: 'Vivo V25 Pro / V25e', bn: 'ভিভো ভি২৫' },
        { en: 'Vivo Y200 Pro 5G / Y200', bn: 'ভিভো ওয়াই২০০' },
        { en: 'Vivo Y100 5G / Y56 5G', bn: 'ভিভো ওয়াই১০০' },
        { en: 'Vivo Y36 5G / Y36 4G', bn: 'ভিভো ওয়াই৩৬' },
        { en: 'Vivo Y28 5G / Y27 5G', bn: 'ভিভো ওয়াই২৮' },
        { en: 'Vivo Y18 / Y18t / Y03', bn: 'ভিভো ওয়াই১৮ / ওয়াই০৩' },
        { en: 'Vivo Y17s / Y16 / Y21', bn: 'ভিভো ওয়াই১৭এস' },
        { en: 'Vivo X100 Pro 5G / X100', bn: 'ভিভো এক্স১০০ প্রো' },
        { en: 'Vivo X90 Pro / X80 Pro', bn: 'ভিভো এক্স৯০' },
        { en: 'iQOO 12 5G / Neo 9 Pro', bn: 'আইকু ১২ / নিও ৯' },
        { en: 'iQOO Z9 5G / Z7 Pro 5G', bn: 'আইকু জেড৯ / জেড৭' },
      ]
    },
    {
      brandEn: 'OPPO',
      brandBn: 'অপ্পো (OPPO)',
      models: [
        { en: 'Oppo Reno 12 Pro 5G', bn: 'অপ্পো রেনো ১২ প্রো' },
        { en: 'Oppo Reno 12 5G / 12 F', bn: 'অপ্পো রেনো ১২' },
        { en: 'Oppo Reno 11 Pro 5G / 11 5G', bn: 'অপ্পো রেনো ১১' },
        { en: 'Oppo Reno 10 Pro+ / 10 5G', bn: 'অপ্পো রেনো ১০' },
        { en: 'Oppo A98 5G / A79 5G', bn: 'অপ্পো এ৯৮ / এ৭৯' },
        { en: 'Oppo A78 4G / A58 4G', bn: 'অপ্পো এ৭৮ / এ৫৮' },
        { en: 'Oppo A38 / A18 / A17', bn: 'অপ্পো এ৩৮ / এ১৮' },
        { en: 'Oppo A60 / A3 Pro', bn: 'অপ্পো এ৬০ / এ৩' },
        { en: 'Oppo Find X7 Ultra / X6 Pro', bn: 'অপ্পো ফাইন্ড এক্স৭' },
        { en: 'Oppo Find N3 Flip / Fold', bn: 'অপ্পো ফাইন্ড এন৩' },
      ]
    },
    {
      brandEn: 'OnePlus',
      brandBn: 'ওয়ানপ্লাস (OnePlus)',
      models: [
        { en: 'OnePlus 12 5G', bn: 'ওয়ানপ্লাস ১২' },
        { en: 'OnePlus 12R 5G', bn: 'ওয়ানপ্লাস ১২আর' },
        { en: 'OnePlus 11 5G / 11R', bn: 'ওয়ানপ্লাস ১১' },
        { en: 'OnePlus Nord 4 5G', bn: 'ওয়ানপ্লাস নার্ড ৪' },
        { en: 'OnePlus Nord 3 5G', bn: 'ওয়ানপ্লাস নার্ড ৩' },
        { en: 'OnePlus Nord CE 4 5G', bn: 'ওয়ানপ্লাস নার্ড সিই ৪' },
        { en: 'OnePlus Nord CE 3 Lite 5G', bn: 'ওয়ানপ্লাস নার্ড সিই ৩ লাইট' },
        { en: 'OnePlus Nord CE 2 Lite 5G', bn: 'ওয়ানপ্লাস নার্ড সিই ২ লাইট' },
        { en: 'OnePlus 10 Pro / 10T 5G', bn: 'ওয়ানপ্লাস ১০ প্রো' },
        { en: 'OnePlus 9 Pro / 9RT 5G', bn: 'ওয়ানপ্লাস ৯ প্রো' },
        { en: 'OnePlus Open Foldable', bn: 'ওয়ানপ্লাস ওপেন ফোল্ড' },
      ]
    },
    {
      brandEn: 'Google Pixel',
      brandBn: 'গুগল পিক্সেল (Google Pixel)',
      models: [
        { en: 'Pixel 9 Pro XL 5G', bn: 'পিক্সেল ৯ প্রো এক্সএল' },
        { en: 'Pixel 9 Pro 5G', bn: 'পিক্সেল ৯ প্রো' },
        { en: 'Pixel 9 5G', bn: 'পিক্সেল ৯' },
        { en: 'Pixel 8a 5G', bn: 'পিক্সেল ৮এ' },
        { en: 'Pixel 8 Pro 5G', bn: 'পিক্সেল ৮ প্রো' },
        { en: 'Pixel 8 5G', bn: 'পিক্সেল ৮' },
        { en: 'Pixel 7a 5G', bn: 'পিক্সেল ৭এ' },
        { en: 'Pixel 7 Pro 5G', bn: 'পিক্সেল ৭ প্রো' },
        { en: 'Pixel 7 5G', bn: 'পিক্সেল ৭' },
        { en: 'Pixel 6a 5G', bn: 'পিক্সেল ৬এ' },
        { en: 'Pixel 6 Pro / 6 5G', bn: 'পিক্সেল ৬ প্রো' },
        { en: 'Pixel 5a / 5 / 4a 5G', bn: 'পিক্সেল ৫এ / ৪এ' },
        { en: 'Pixel Fold 5G', bn: 'পিক্সেল ফোল্ড' },
      ]
    },
    {
      brandEn: 'Huawei',
      brandBn: 'হুয়াওয়ে (Huawei)',
      models: [
        { en: 'Huawei Pura 70 Ultra', bn: 'হুয়াওয়ে পিউরা ৭০ আল্ট্রা' },
        { en: 'Huawei Pura 70 Pro / Pura 70', bn: 'হুয়াওয়ে পিউরা ৭০' },
        { en: 'Huawei Mate 60 Pro+ / Mate 60', bn: 'হুয়াওয়ে মেট ৬০ প্রো' },
        { en: 'Huawei P60 Pro / P50 Pro', bn: 'হুয়াওয়ে পি৬০ প্রো' },
        { en: 'Huawei Nova 12i / Nova 11i', bn: 'হুয়াওয়ে নোভা ১২' },
        { en: 'Huawei Nova 10 SE / 9 SE', bn: 'হুয়াওয়ে নোভা ১০' },
        { en: 'Huawei Y9a / Y7a / Y6p', bn: 'হুয়াওয়ে ওয়াই৯এ' },
        { en: 'Huawei Mate X3 / Pocket 2', bn: 'হুয়াওয়ে মেট এক্স৩' },
      ]
    },
    {
      brandEn: 'Honor',
      brandBn: 'অনার (Honor)',
      models: [
        { en: 'Honor 200 Pro 5G', bn: 'অনার ২০০ প্রো ৫জি' },
        { en: 'Honor 200 5G / 200 Lite', bn: 'অনার ২০০ ৫জি' },
        { en: 'Honor X9b 5G', bn: 'অনার এক্স৯বি ৫জি' },
        { en: 'Honor X8b / X7b 5G', bn: 'অনার এক্স৮বি / এক্স৭বি' },
        { en: 'Honor Magic 6 Pro 5G', bn: 'অনার ম্যাজিক ৬ প্রো' },
        { en: 'Honor Magic 5 Pro / Magic V2', bn: 'অনার ম্যাজিক ৫ প্রো' },
        { en: 'Honor 90 5G / 90 Lite 5G', bn: 'অনার ৯০ ৫জি' },
        { en: 'Honor X6a / X5 Plus', bn: 'অনার এক্স৬এ' },
      ]
    },
    {
      brandEn: 'Motorola',
      brandBn: 'মটোরোলা (Motorola)',
      models: [
        { en: 'Moto Edge 50 Pro 5G', bn: 'মটো এজ ৫০ প্রো ৫জি' },
        { en: 'Moto Edge 50 Fusion 5G', bn: 'মটো এজ ৫০ ফিউশন' },
        { en: 'Moto Edge 50 Ultra 5G', bn: 'মটো এজ ৫০ আল্ট্রা' },
        { en: 'Moto G84 5G', bn: 'মটো জি৮৪ ৫জি' },
        { en: 'Moto G54 5G / G34 5G', bn: 'মটো জি৫৪ / জি৩৪' },
        { en: 'Moto G24 Power / G04s', bn: 'মটো জি২৪ পাওয়ার' },
        { en: 'Moto Razr 50 Ultra / Razr 40', bn: 'মটো রেজর ৫০' },
        { en: 'Moto Edge 40 Neo / Edge 40', bn: 'মটো এজ ৪০ নিও' },
      ]
    },
    {
      brandEn: 'Nokia',
      brandBn: 'নোকিয়া (Nokia)',
      models: [
        { en: 'Nokia G42 5G', bn: 'নোকিয়া জি৪২ ৫জি' },
        { en: 'Nokia G22 / G21', bn: 'নোকিয়া জি২২' },
        { en: 'Nokia C32 / C22 / C12', bn: 'নোকিয়া সি৩২' },
        { en: 'Nokia X30 5G / XR21', bn: 'নোকিয়া এক্স৩০' },
        { en: 'Nokia 3310 4G (Feature Phone)', bn: 'নোকিয়া ৩৩১০ ৪জি' },
        { en: 'Nokia 8210 4G / 5710 XA', bn: 'নোকিয়া ৮২১০ ৪জি' },
        { en: 'Nokia 105 / 110 4G (Button Phone)', bn: 'নোকিয়া ১০৫ / ১১০' },
        { en: 'Nokia 225 4G / 215 4G', bn: 'নোকিয়া ২২৫ ৪জি' },
      ]
    },
    {
      brandEn: 'Tecno',
      brandBn: 'টেকনো (Tecno)',
      models: [
        { en: 'Tecno Camon 30 Pro 5G', bn: 'টেকনো কেমন ৩০ প্রো ৫জি' },
        { en: 'Tecno Camon 30 / Camon 30 Premier', bn: 'টেকনো কেমন ৩০' },
        { en: 'Tecno Spark 20 Pro+ 4G', bn: 'টেকনো স্পার্ক ২০ প্রো প্লাস' },
        { en: 'Tecno Spark 20 Pro / Spark 20', bn: 'টেকনো স্পার্ক ২০' },
        { en: 'Tecno Spark 20c / Spark Go 2024', bn: 'টেকনো স্পার্ক গো' },
        { en: 'Tecno Pova 6 Pro 5G', bn: 'টেকনো পোভা ৬ প্রো' },
        { en: 'Tecno Pova 5 Pro 5G / Pova 5', bn: 'টেকনো পোভা ৫' },
        { en: 'Tecno Phantom V Flip / Fold', bn: 'টেকনো ফ্যান্টম ভি' },
        { en: 'Tecno Pop 8 / Pop 7', bn: 'টেকনো পপ ৮' },
      ]
    },
    {
      brandEn: 'Infinix',
      brandBn: 'ইনফিনিক্স (Infinix)',
      models: [
        { en: 'Infinix GT 20 Pro 5G', bn: 'ইনফিনিক্স জিটি ২০ প্রো ৫জি' },
        { en: 'Infinix Note 40 Pro+ 5G', bn: 'ইনফিনিক্স নোট ৪০ প্রো প্লাস' },
        { en: 'Infinix Note 40 Pro 5G / 4G', bn: 'ইনফিনিক্স নোট ৪০ প্রো' },
        { en: 'Infinix Note 40 / Note 30 Pro', bn: 'ইনফিনিক্স নোট ৪০ / ৩০' },
        { en: 'Infinix Hot 40 Pro / Hot 40i', bn: 'ইনফিনিক্স হট ৪০ প্রো' },
        { en: 'Infinix Hot 30 / Hot 30i', bn: 'ইনফিনিক্স হট ৩০' },
        { en: 'Infinix Zero 30 5G / Zero Ultra', bn: 'ইনফিনিক্স জিরো ৩০' },
        { en: 'Infinix Smart 8 Pro / Smart 8', bn: 'ইনফিনিক্স স্মার্ট ৮' },
        { en: 'Infinix Smart 7 / Smart 6', bn: 'ইনফিনিক্স স্মার্ট ৭' },
      ]
    },
    {
      brandEn: 'itel',
      brandBn: 'আইটেল (itel)',
      models: [
        { en: 'itel S24 / S23+ (Curved AMOLED)', bn: 'আইটেল এস২৪ / এস২৩+' },
        { en: 'itel S23 4G', bn: 'আইটেল এস২৩' },
        { en: 'itel P55+ / P55 5G / P55 T', bn: 'আইটেল পি৫৫+' },
        { en: 'itel A70 / A50 / A05s', bn: 'আইটেল এ৭০ / এ৫০' },
        { en: 'itel A04 / Vision 3 Plus', bn: 'আইটেল এ০৪' },
        { en: 'itel Power 550 (Button Phone)', bn: 'আইটেল পাওয়ার ৫৫০' },
        { en: 'itel Magic 2 4G / Magic 3', bn: 'আইটেল ম্যাজিক ২' },
        { en: 'itel it2163 / it5081 (Feature Phone)', bn: 'আইটেল আইটি২১৬৩' },
      ]
    },
    {
      brandEn: 'Nothing',
      brandBn: 'নাথিং (Nothing)',
      models: [
        { en: 'Nothing Phone (2a) Plus 5G', bn: 'নাথিং ফোন ২এ প্লাস' },
        { en: 'Nothing Phone (2a) 5G', bn: 'নাথিং ফোন ২এ ৫জি' },
        { en: 'Nothing Phone (2) 5G', bn: 'নাথিং ফোন ২ ৫জি' },
        { en: 'Nothing Phone (1) 5G', bn: 'নাথিং ফোন ১ ৫জি' },
        { en: 'CMF Phone 1 5G (by Nothing)', bn: 'সিএমএফ ফোন ১ ৫জি' },
      ]
    },
    {
      brandEn: 'Asus',
      brandBn: 'আসুস (Asus)',
      models: [
        { en: 'ROG Phone 8 Pro 5G', bn: 'আরজি ফোন ৮ প্রো' },
        { en: 'ROG Phone 8 5G', bn: 'আরজি ফোন ৮' },
        { en: 'ROG Phone 7 Ultimate / 7', bn: 'আরজি ফোন ৭' },
        { en: 'ROG Phone 6D / 6 Pro', bn: 'আরজি ফোন ৬' },
        { en: 'Zenfone 11 Ultra 5G', bn: 'জেনফোন ১১ আল্ট্রা' },
        { en: 'Zenfone 10 5G / Zenfone 9', bn: 'জেনফোন ১০' },
      ]
    },
    {
      brandEn: 'Sony',
      brandBn: 'সোনি (Sony)',
      models: [
        { en: 'Xperia 1 VI 5G', bn: 'এক্সপেরিয়া ১ VI ৫জি' },
        { en: 'Xperia 1 V 5G / 1 IV', bn: 'এক্সপেরিয়া ১ V' },
        { en: 'Xperia 5 V 5G / 5 IV', bn: 'এক্সপেরিয়া ৫ V' },
        { en: 'Xperia 10 VI 5G / 10 V', bn: 'এক্সপেরিয়া ১০ VI' },
        { en: 'Xperia Pro-I / Pro', bn: 'এক্সপেরিয়া প্রো-আই' },
      ]
    },
    {
      brandEn: 'Lenovo',
      brandBn: 'লেনোভো (Lenovo)',
      models: [
        { en: 'Lenovo Legion Y70 5G', bn: 'লেনোভো লিজিয়ন ওয়াই৭০' },
        { en: 'Lenovo Legion Duel 2 / Duel', bn: 'লেনোভো লিজিয়ন ডুয়েল' },
        { en: 'Lenovo K14 Plus / K13 Note', bn: 'লেনোভো কে১৪ প্লাস' },
        { en: 'Lenovo Tab P12 Pro / Tab M10', bn: 'লেনোভো ট্যাব' },
      ]
    },
    {
      brandEn: 'ZTE',
      brandBn: 'জেডটিই (ZTE)',
      models: [
        { en: 'ZTE Nubia Z60 Ultra 5G', bn: 'জেডটিই নুবিয়া জেড৬০' },
        { en: 'ZTE Nubia Red Magic 9 Pro 5G', bn: 'জেডটিই রেড ম্যাজিক ৯' },
        { en: 'ZTE Nubia Red Magic 8S Pro', bn: 'জেডটিই রেড ম্যাজিক ৮' },
        { en: 'ZTE Blade V50 Smart / V40', bn: 'জেডটিই ব্লেড ভি৫০' },
        { en: 'ZTE Axon 50 Ultra / Axon 40', bn: 'জেডটিই অ্যাক্সন ৫০' },
      ]
    },
    {
      brandEn: 'Meizu',
      brandBn: 'মেইজু (Meizu)',
      models: [
        { en: 'Meizu 21 Pro 5G', bn: 'মেইজু ২১ প্রো ৫জি' },
        { en: 'Meizu 21 5G / 21 Note', bn: 'মেইজু ২১ ৫জি' },
        { en: 'Meizu 20 Pro / 20 Classic', bn: 'মেইজু ২০ প্রো' },
        { en: 'Meizu 18 Pro / 18s', bn: 'মেইজু ১৮ প্রো' },
      ]
    },
    {
      brandEn: 'TCL',
      brandBn: 'টিসিএল (TCL)',
      models: [
        { en: 'TCL 50 SE / 50 5G', bn: 'টিসিএল ৫০ এসই' },
        { en: 'TCL 40 NXT PAPER 5G', bn: 'টিসিএল ৪০ নেক্সট পেপার' },
        { en: 'TCL 30 XE 5G / 30 V 5G', bn: 'টিসিএল ৩০ এক্সই' },
        { en: 'TCL 20 Pro 5G / 20 SE', bn: 'টিসিএল ২০ প্রো' },
      ]
    },
    {
      brandEn: 'Sharp',
      brandBn: 'শার্প (Sharp)',
      models: [
        { en: 'Sharp Aquos R8 Pro / R8', bn: 'শার্প অ্যাকুওস আর৮' },
        { en: 'Sharp Aquos Sense 8 / Sense 7', bn: 'শার্প অ্যাকুওস সেন্স ৮' },
        { en: 'Sharp Aquos Wish 3 / Wish 2', bn: 'শার্প অ্যাকুওস উইশ ৩' },
        { en: 'Sharp Aquos Zero 6 5G', bn: 'শার্প অ্যাকুওস জিরো ৬' },
      ]
    },
    {
      brandEn: 'Lava',
      brandBn: 'লাভা (Lava)',
      models: [
        { en: 'Lava Agni 2 5G / Agni 5G', bn: 'লাভা অগ্নি ২ ৫জি' },
        { en: 'Lava Blaze Curve 5G / Blaze 2', bn: 'লাভা ব্লেজ কার্ভ' },
        { en: 'Lava Yuva 3 Pro / Yuva 2', bn: 'লাভা ইউভা ৩' },
        { en: 'Lava Hero 600 (Feature Phone)', bn: 'লাভা হিরো ৬০০' },
        { en: 'Lava Captain N1 (Button Phone)', bn: 'লাভা ক্যাপ্টেন এন১' },
      ]
    },
    {
      brandEn: 'Micromax',
      brandBn: 'মাইক্রোম্যাক্স (Micromax)',
      models: [
        { en: 'Micromax In Note 2 4G', bn: 'মাইক্রোম্যাক্স ইন নোট ২' },
        { en: 'Micromax In 2b / In 1b', bn: 'মাইক্রোম্যাক্স ইন ২বি' },
        { en: 'Micromax In Note 1', bn: 'মাইক্রোম্যাক্স ইন নোট ১' },
        { en: 'Micromax Joy X805 (Feature Phone)', bn: 'মাইক্রোম্যাক্স জয়' },
      ]
    },
    {
      brandEn: 'Symphony',
      brandBn: 'সিম্ফনি (Symphony)',
      models: [
        { en: 'Symphony Z70 / Z60 Plus', bn: 'সিম্ফনি জেড৭০ / জেড৬০' },
        { en: 'Symphony Z47 / Z42 / Z33', bn: 'সিম্ফনি জেড৪৭' },
        { en: 'Symphony Innova 30 / Innova 20', bn: 'সিম্ফনি ইনোভা ৩০' },
        { en: 'Symphony Helio 80 / Helio 50', bn: 'সিম্ফনি হেলিও ৮০' },
        { en: 'Symphony ATOM 4 / ATOM 3', bn: 'সিম্ফনি এটম ৪' },
        { en: 'Symphony B80 / B65 (Feature Phone)', bn: 'সিম্ফনি বি৮০' },
        { en: 'Symphony L250 / L140 (Button Phone)', bn: 'সিম্ফনি এল২৫০' },
      ]
    },
    {
      brandEn: 'Walton',
      brandBn: 'ওয়ালটন (Walton)',
      models: [
        { en: 'Walton Primo S8 Pro / S8', bn: 'ওয়ালটন প্রিমো এস৮ প্রো' },
        { en: 'Walton Orbit Y21 / Y20', bn: 'ওয়ালটন অরবিট ওয়াই২১' },
        { en: 'Walton Nexus N1 / N2', bn: 'ওয়ালটন নেক্সাস এন১' },
        { en: 'Walton Xanon X20 5G', bn: 'ওয়ালটন জ্যানন এক্স২০' },
        { en: 'Walton Olvio L28 (Button Phone)', bn: 'ওয়ালটন অলভিও এল২৮' },
        { en: 'Walton Olvio MM23 (Feature Phone)', bn: 'ওয়ালটন অলভিও এমএম২৩' },
      ]
    },
    {
      brandEn: 'Blackview',
      brandBn: 'ব্ল্যাকভিউ (Blackview)',
      models: [
        { en: 'Blackview BV9300 Pro Rugged', bn: 'ব্ল্যাকভিউ বিভি৯৩০০' },
        { en: 'Blackview BL8000 5G Rugged', bn: 'ব্ল্যাকভিউ বিএল৮০০০' },
        { en: 'Blackview Shark 8 / Shark 7', bn: 'ব্ল্যাকভিউ শার্ক ৮' },
        { en: 'Blackview A96 / A85', bn: 'ব্ল্যাকভিউ এ৯৬' },
      ]
    },
    {
      brandEn: 'Ulefone',
      brandBn: 'ইউলিফোন (Ulefone)',
      models: [
        { en: 'Ulefone Armor 26 Ultra 5G', bn: 'ইউলিফোন আর্মার ২৬' },
        { en: 'Ulefone Armor 24 (Mega Battery)', bn: 'ইউলিফোন আর্মার ২৪' },
        { en: 'Ulefone Power Armor 18T 5G', bn: 'ইউলিফোন পাওয়ার আর্মার ১৮টি' },
        { en: 'Ulefone Note 17 Pro / Note 16 Pro', bn: 'ইউলিফোন নোট ১৭ প্রো' },
      ]
    },
    {
      brandEn: 'Doogee',
      brandBn: 'ডুজি (Doogee)',
      models: [
        { en: 'Doogee V30 Pro 5G Rugged', bn: 'ডুজি ভি৩০ প্রো' },
        { en: 'Doogee S110 / S100 Pro', bn: 'ডুজি এস১১০' },
        { en: 'Doogee N50 Pro / N50', bn: 'ডুজি এন৫০ প্রো' },
        { en: 'Doogee Blade 10 Ultra', bn: 'ডুজি ব্লেড ১০' },
      ]
    },
    {
      brandEn: 'Cubot',
      brandBn: 'কিউবট (Cubot)',
      models: [
        { en: 'Cubot KingKong 9 Rugged', bn: 'কিউবট কিংকং ৯' },
        { en: 'Cubot X70 12GB RAM', bn: 'কিউবট এক্স৭০' },
        { en: 'Cubot Note 50 / Note 40', bn: 'কিউবট নোট ৫০' },
        { en: 'Cubot Pocket 3 Mini Phone', bn: 'কিউবট পকেট ৩' },
      ]
    },
    {
      brandEn: 'Oukitel',
      brandBn: 'আউকিটেল (Oukitel)',
      models: [
        { en: 'Oukitel WP30 Pro 5G Rugged', bn: 'আউকিটেল ডাব্লিউপি৩০' },
        { en: 'Oukitel WP28 / WP21', bn: 'আউকিটেল ডাব্লিউপি২৮' },
        { en: 'Oukitel C36 / C35', bn: 'আউকিটেল সি৩৬' },
        { en: 'Oukitel K16 Mini Leather Phone', bn: 'আউকিটেল কে১৬' },
      ]
    },
    {
      brandEn: 'BLU',
      brandBn: 'বিএলইউ (BLU)',
      models: [
        { en: 'BLU Bold N3 5G', bn: 'বিএলইউ বোল্ড এন৩' },
        { en: 'BLU G93 / G91 Pro', bn: 'বিএলইউ জি৯৩' },
        { en: 'BLU Studio Mini / Studio 7', bn: 'বিএলইউ স্টুডিও' },
        { en: 'BLU Tank II (Feature Phone)', bn: 'বিএলইউ ট্যাঙ্ক II' },
      ]
    },
    {
      brandEn: 'Fairphone',
      brandBn: 'ফেয়ারফোন (Fairphone)',
      models: [
        { en: 'Fairphone 5 5G (Modular)', bn: 'ফেয়ারফোন ৫ ৫জি' },
        { en: 'Fairphone 4 5G (Modular)', bn: 'ফেয়ারফোন ৪ ৫জি' },
        { en: 'Fairphone 3+ / Fairphone 3', bn: 'ফেয়ারফোন ৩+' },
      ]
    },
    {
      brandEn: 'Cat',
      brandBn: 'ক্যাট (Cat)',
      models: [
        { en: 'Cat S62 Pro Thermal Camera', bn: 'ক্যাট এস৬২ প্রো' },
        { en: 'Cat S42 H+ Antimicrobial', bn: 'ক্যাট এস৪২ এইচ+' },
        { en: 'Cat S22 Flip Android Rugged', bn: 'ক্যাট এস২২ ফ্লিপ' },
        { en: 'Cat B40 Heavy Duty (Button)', bn: 'ক্যাট বি৪০' },
      ]
    },
    {
      brandEn: 'Vertu',
      brandBn: 'ভার্টু (Vertu)',
      models: [
        { en: 'Vertu Metavertu 2 Web3 5G', bn: 'ভার্টু মেটাভার্টু ২' },
        { en: 'Vertu Signature Touch Luxury', bn: 'ভার্টু সিগনেচার টাচ' },
        { en: 'Vertu Aster P Leather Gold', bn: 'ভার্টু অ্যাস্টার পি' },
        { en: 'Vertu iVERTU 5G Luxury', bn: 'ভার্টু আইভার্টু ৫জি' },
      ]
    },
    {
      brandEn: 'Others',
      brandBn: 'অন্যান্য (Others)',
      models: [
        { en: 'Other Smartphone (অন্যান্য স্মার্টফোন)', bn: 'অন্যান্য স্মার্টফোন' },
        { en: 'Other Button / Feature Phone', bn: 'অন্যান্য বাটন / ফিচার ফোন' },
        { en: 'Custom Model / Unlisted Model', bn: 'কাস্টম মডেল' },
      ]
    }
  ],
  electronics: [
    {
      brandEn: 'Apple (MacBook / Mac / iPad / Display)',
      brandBn: 'অ্যাপল (MacBook / Mac / iPad)',
      models: [
        { en: 'MacBook Pro 16" M3 Max / M3 Pro', bn: 'ম্যাকবুক প্রো ১৬ ইঞ্চি এম৩ ম্যাক্স / এম৩ প্রো' },
        { en: 'MacBook Pro 14" M3 Pro / M3', bn: 'ম্যাকবুক প্রো ১৪ ইঞ্চি এম৩ প্রো / এম৩' },
        { en: 'MacBook Air 15" M3 / M2', bn: 'ম্যাকবুক এয়ার ১৫ ইঞ্চি এম৩ / এম২' },
        { en: 'MacBook Air 13" M3 / M2 / M1', bn: 'ম্যাকবুক এয়ার ১৩ ইঞ্চি এম৩ / এম২ / এম১' },
        { en: 'iMac 24" M3 / Mac mini M2 / M2 Pro', bn: 'আইম্যাক ২৪ ইঞ্চি এম৩ / ম্যাক মিনি এম২' },
        { en: 'Mac Studio M2 Max / M2 Ultra / Mac Pro', bn: 'ম্যাক স্টুডিও / ম্যাক প্রো' },
        { en: 'iPad Pro 13" M4 / iPad Pro 11" M4', bn: 'আইপ্যাড প্রো এম৪ (১৩" / ১১")' },
        { en: 'iPad Air 13" M2 / iPad Air 11" M2', bn: 'আইপ্যাড এয়ার এম২' },
        { en: 'Apple Studio Display 27" / Pro Display XDR', bn: 'অ্যাপল স্টুডিও ডিসপ্লে / প্রো ডিসপ্লে' },
      ]
    },
    {
      brandEn: 'HP (Laptops, Desktops, Workstations & Printers)',
      brandBn: 'এইচপি (HP Laptops, Desktops & Printers)',
      models: [
        { en: 'HP Spectre x360 14 / 16 (Core Ultra Touch)', bn: 'এইচপি স্পেক্টার এক্স৩৬০ (১৪/১৬ ইঞ্চি)' },
        { en: 'HP Envy x360 14 / 15.6 / Envy 16', bn: 'এইচপি এনভি এক্স৩৬০' },
        { en: 'HP Omen 17 / Omen 16 / Omen Transcend Gaming', bn: 'এইচপি ওমেন গেমার ল্যাপটপ' },
        { en: 'HP Victus 16 / Victus 15 Gaming', bn: 'এইচপি ভিক্টাস গেমার ল্যাপটপ' },
        { en: 'HP Pavilion 15 / Pavilion Plus 14 / Aero 13', bn: 'এইচপি প্যাভিলিয়ন ও অ্যারো' },
        { en: 'HP ProBook 450 G10 / 440 G10 / G9 Business', bn: 'এইচপি প্রোবুক ব্যবসায়িক ল্যাপটপ' },
        { en: 'HP EliteBook 840 G10 / 830 G10 / Dragonfly G4', bn: 'এইচপি এলিটবুক ও ড্রাগনফ্লাই' },
        { en: 'HP Laptop 15s / 14s (Budget Series)', bn: 'এইচপি ১৫এস / ১৪এস বাজেট সিরিজ' },
        { en: 'HP ZBook Studio G10 / Fury Workstation', bn: 'এইচপি জেডবুক ওয়ার্কস্টেশন' },
        { en: 'HP LaserJet Pro M404dn / M126a / M227fdw Printer', bn: 'এইচপি লেজারজেট প্রিন্টার' },
        { en: 'HP Smart Tank 580 / DeskJet Ink Advantage', bn: 'এইচপি স্মার্ট ট্যাংক কালি প্রিন্টার' },
        { en: 'HP Omen 27" 165Hz / ProDisplay Monitor', bn: 'এইচপি ওমেন ও এলিট মনিটর' },
      ]
    },
    {
      brandEn: 'Dell (Laptops, Desktops, Alienware & Displays)',
      brandBn: 'ডেল (Dell Laptops, Desktops & Monitors)',
      models: [
        { en: 'Dell XPS 16 / XPS 14 / XPS 13 Plus (2024)', bn: 'ডেল এক্সপিএস ১৬ / ১৪ / ১৩' },
        { en: 'Dell Alienware m18 R2 / m16 R2 / x16 Gaming', bn: 'ডেল অ্যালিয়েনওয়্যার ফ্ল্যাগশিপ গেইমার' },
        { en: 'Dell G15 5530 / G16 7630 Gaming Laptop', bn: 'ডেল জি১৫ / জি১৬ গেইমিং' },
        { en: 'Dell Inspiron 16 / 15 (5000 & 3000 Series)', bn: 'ডেল ইন্সপিরন' },
        { en: 'Dell Latitude 5440 / 7440 / 3440 Business', bn: 'ডেল ল্যাটিটিউড প্রফেশনাল' },
        { en: 'Dell Precision 5680 / 3581 Mobile Workstation', bn: 'ডেল প্রিসিশন ওয়ার্কস্টেশন' },
        { en: 'Dell Vostro 3520 / 3420 Office Laptop', bn: 'ডেল ভোস্ট্রো' },
        { en: 'Dell OptiPlex 7010 / All-in-One Desktop', bn: 'ডেল অপটিপ্লেক্স ডেস্কটপ' },
        { en: 'Dell UltraSharp U2723QE 4K / Curved Gaming Monitor', bn: 'ডেল আল্ট্রাশার্প ৪কে মনিটর' },
      ]
    },
    {
      brandEn: 'Lenovo (ThinkPad, Legion, Yoga, IdeaPad)',
      brandBn: 'লেনোভো (Lenovo ThinkPad, Legion, Yoga)',
      models: [
        { en: 'Lenovo ThinkPad X1 Carbon Gen 11 / X1 Yoga', bn: 'লেনোভো থিংকপ্যাড এক্স১ কার্বন' },
        { en: 'Lenovo ThinkPad T14 Gen 4 / E14 / L14 Business', bn: 'লেনোভো থিংকপ্যাড টি১৪ / ই১৪' },
        { en: 'Lenovo ThinkPad P16 Gen 2 / P1 Workstation', bn: 'লেনোভো থিংকপ্যাড পি১৬ ওয়ার্কস্টেশন' },
        { en: 'Lenovo Legion Pro 7i / Pro 5i / Slim 7i Gaming', bn: 'লেনোভো লিজিয়ন প্রো গেইমিং' },
        { en: 'Lenovo LOQ 15 / 16 RTX 4060 Gaming Laptop', bn: 'লেনোভো এলওকিউ গেইমিং' },
        { en: 'Lenovo Yoga Slim 7i / Yoga 9i Dual Screen', bn: 'লেনোভো ইয়োগা ফ্লিপ ও স্লিম' },
        { en: 'Lenovo IdeaPad Slim 5 / Slim 3 / Flex 5', bn: 'লেনোভো আইডিয়া প্যাড স্লিম' },
        { en: 'Lenovo ThinkCentre M70q Tiny Desktop PC', bn: 'লেনোভো থিংকসেন্টার মিনি পিসি' },
      ]
    },
    {
      brandEn: 'ASUS (ROG, TUF, ZenBook, Vivobook, PC Parts)',
      brandBn: 'আসুস (ASUS ROG, TUF, ZenBook, Vivobook)',
      models: [
        { en: 'ASUS ROG Strix SCAR 18 / SCAR 16 / G16 Gaming', bn: 'আসুস আরওজি স্ট্রিক্স স্কার গেইমিং' },
        { en: 'ASUS ROG Zephyrus G16 / G14 / Duo 16', bn: 'আসুস আরওজি জেফাইরাস' },
        { en: 'ASUS TUF Gaming F15 / A15 / A16 Advantage', bn: 'আসুস টাফ গেইমিং ল্যাপটপ' },
        { en: 'ASUS Zenbook 14 OLED / Zenbook Duo Dual Screen', bn: 'আসুস জেনবুক ও জেনবুক ডুও' },
        { en: 'ASUS Vivobook 15 / Vivobook Pro 16 OLED / Go 14', bn: 'আসুস ভিভোবুক ও ভিভোবুক প্রো' },
        { en: 'ASUS ExpertBook B9 / B5 Enterprise Laptop', bn: 'আসুস এক্সপার্টবুক ব্যবসায়িক' },
        { en: 'ASUS ROG Ally Handheld Z1 Extreme Console', bn: 'আসুস আরওজি আলাই হ্যান্ডহেল্ড' },
        { en: 'ASUS ROG Strix GeForce RTX 4090 / 4080 Super GPU', bn: 'আসুস আরওজি স্ট্রিক্স আরটিএক্স গ্রাফিক্স কার্ড' },
        { en: 'ASUS ROG Strix / TUF Gaming Z790 / B760 Motherboard', bn: 'আসুস আরওজি / টাফ মাদারবোর্ড' },
        { en: 'ASUS ROG Swift OLED 240Hz / TUF Gaming Monitor', bn: 'আসুস সুইফট ও টাফ গেইমিং মনিটর' },
      ]
    },
    {
      brandEn: 'Acer (Predator, Nitro, Swift, Aspire)',
      brandBn: 'এসার (Acer Predator, Nitro, Swift, Aspire)',
      models: [
        { en: 'Acer Predator Helios 18 / Helios 16 / Neo 16', bn: 'এসার প্রিডেটর হেলিয়োস গেইমিং' },
        { en: 'Acer Nitro 16 / Nitro V 15 / Nitro 5 Gaming', bn: 'এসার নাইট্রো ১৬ / ১৫ গেইমিং' },
        { en: 'Acer Swift Go 14 / Swift Edge 16 OLED / Swift X', bn: 'এসার সুইফট গো ও সুইফট এজ' },
        { en: 'Acer Aspire 5 / Aspire 3 / Aspire Vero Eco', bn: 'এসার এস্পায়ার ৫ / ৩' },
        { en: 'Acer TravelMate P4 / Spin 5 Touch', bn: 'এসার ট্রাভেলমেট ও স্পিন' },
        { en: 'Acer Predator XB273 / Nitro 180Hz Monitor', bn: 'এসার নাইট্রো ও প্রিডেটর মনিটর' },
      ]
    },
    {
      brandEn: 'MSI (Gaming Laptops, GPUs, Motherboards, Monitors)',
      brandBn: 'এমএসআই (MSI Gaming Laptops & PC Parts)',
      models: [
        { en: 'MSI Titan 18 HX / Raider GE78 HX Gaming', bn: 'এমএসআই টাইটান ও রাইডার ফ্ল্যাগশিপ' },
        { en: 'MSI Stealth 16 Studio / Vector GP68 HX', bn: 'এমএসআই স্টিলথ ও ভেক্টর' },
        { en: 'MSI Katana 17 / Katana 15 / Thin GF63 Gaming', bn: 'এমএসআই কাটানা ও থিন গেইমিং' },
        { en: 'MSI Modern 15 / Prestige 16 AI Studio', bn: 'এমএসআই মডার্ন ও প্রেস্টিজ' },
        { en: 'MSI GeForce RTX 4080 Super / 4070 Ti Gaming X GPU', bn: 'এমএসআই গেমিং এক্স গ্রাফিক্স কার্ড' },
        { en: 'MSI MAG Z790 Tomahawk / B650 Mortar Motherboard', bn: 'এমএসআই টমাহক মাদারবোর্ড' },
        { en: 'MSI Optix G274QF / MAG 2K 170Hz Gaming Monitor', bn: 'এমএসআই অপটিক্স গেইমিং মনিটর' },
      ]
    },
    {
      brandEn: 'Samsung (Laptops, Odyssey Monitors, NVMe SSDs, RAM)',
      brandBn: 'স্যামসাং (Samsung Odyssey Monitors, SSDs & RAM)',
      models: [
        { en: 'Samsung Galaxy Book4 Ultra / Pro / 360', bn: 'স্যামসাং গ্যালাক্সি বুক৪ আল্ট্রা / প্রো' },
        { en: 'Samsung Galaxy Book3 Pro / Odyssey Gaming', bn: 'স্যামসাং গ্যালাক্সি বুক৩' },
        { en: 'Samsung Odyssey OLED G9 49" / G8 34" Curved', bn: 'স্যামসাং ওডিসি ওএলইডি কার্ভড মনিটর' },
        { en: 'Samsung Odyssey G7 / G5 165Hz Gaming Monitor', bn: 'স্যামসাং ওডিসি জি৭ / জি৫' },
        { en: 'Samsung ViewFinity S8 4K / Smart Monitor M8', bn: 'স্যামসাং ৪কে ভিউফিনিটি ও স্মার্ট মনিটর' },
        { en: 'Samsung 990 PRO 1TB / 2TB / 4TB NVMe M.2 SSD', bn: 'স্যামসাং ৯৯০ প্রো এনভিএমই এসএসডি' },
        { en: 'Samsung 980 PRO / T7 Shield Portable SSD', bn: 'স্যামসাং ৯৮০ প্রো ও টি৭ পোর্টেবল' },
        { en: 'Samsung DDR5 16GB / 32GB Desktop RAM', bn: 'স্যামসাং ডিডিআর৫ র‍্যাম' },
      ]
    },
    {
      brandEn: 'Intel (Processors, ARC Graphics, NUC)',
      brandBn: 'ইনটেল (Intel Core CPUs, ARC GPU & NUC)',
      models: [
        { en: 'Intel Core i9 14900KS / 14900K / 13900K Processor', bn: 'ইনটেল কোর আই৯ প্রসেসর' },
        { en: 'Intel Core i7 14700K / 13700K / 12700K Processor', bn: 'ইনটেল কোর আই৭ প্রসেসর' },
        { en: 'Intel Core i5 14600K / 13400F / 12400F Processor', bn: 'ইনটেল কোর আই৫ প্রসেসর' },
        { en: 'Intel Core Ultra 9 185H / Ultra 7 155H AI CPU', bn: 'ইনটেল কোর আল্ট্রা এআই প্রসেসর' },
        { en: 'Intel Core i3 14100F / 13100 Budget Processor', bn: 'ইনটেল কোর আই৩ প্রসেসর' },
        { en: 'Intel Arc A770 16GB / Arc A750 Desktop Graphics', bn: 'ইনটেল আর্কা ডেস্কটপ গ্রাফিক্স কার্ড' },
        { en: 'Intel NUC 13 Pro / Extreme Kit Mini PC', bn: 'ইনটেল নক মিনি পিসি' },
      ]
    },
    {
      brandEn: 'AMD (Ryzen CPUs, Radeon GPUs, Threadripper)',
      brandBn: 'এএমডি (AMD Ryzen CPUs & Radeon GPUs)',
      models: [
        { en: 'AMD Ryzen 9 7950X3D / 7950X / 7900X Processor', bn: 'এএমডি রাইজেন ৯ প্রসেসর' },
        { en: 'AMD Ryzen 7 7800X3D / 5700X3D Gaming CPU', bn: 'এএমডি রাইজেন ৭ গেইমিং প্রসেসর' },
        { en: 'AMD Ryzen 5 7600X / 5600G / 5500 Processor', bn: 'এএমডি রাইজেন ৫ প্রসেসর' },
        { en: 'AMD Radeon RX 7900 XTX 24GB / 7900 XT GPU', bn: 'এএমডি রেডিয়ন আরএক্স ৭৯০০ এক্সটিএক্স' },
        { en: 'AMD Radeon RX 7800 XT 16GB / 7700 XT GPU', bn: 'এএমডি রেডিয়ন আরএক্স ৭৮০০ এক্সটি' },
        { en: 'AMD Radeon RX 6700 XT / RX 6600 8GB Graphics', bn: 'এএমডি রেডিয়ন আরএক্স ৬৬০০ / ৬৭০০' },
        { en: 'AMD Threadripper PRO 7995WX Workstation CPU', bn: 'এএমডি থ্রেডরিপার প্রো প্রসেসর' },
      ]
    },
    {
      brandEn: 'NVIDIA (GeForce RTX GPUs, Studio & Enterprise)',
      brandBn: 'এনভিডিয়া (NVIDIA GeForce RTX GPUs)',
      models: [
        { en: 'NVIDIA GeForce RTX 4090 24GB Founder Edition', bn: 'এনভিডিয়া আরটিএক্স ৪০৯০ ২৪জিবি' },
        { en: 'NVIDIA GeForce RTX 4080 Super 16GB GPU', bn: 'এনভিডিয়া আরটিএক্স ৪০৮০ সুপার' },
        { en: 'NVIDIA GeForce RTX 4070 Ti Super / 4070 Super', bn: 'এনভিডিয়া আরটিএক্স ৪০৭০ টিআই সুপার' },
        { en: 'NVIDIA GeForce RTX 4060 Ti 16GB / 8GB GPU', bn: 'এনভিডিয়া আরটিএক্স ৪০৬০ টিআই' },
        { en: 'NVIDIA GeForce RTX 4060 8GB / RTX 3060 12GB', bn: 'এনভিডিয়া আরটিএক্স ৪০৬০ / ৩০৬০' },
        { en: 'NVIDIA RTX 6000 Ada / RTX 4000 Ada Generation', bn: 'এনভিডিয়া ওয়ার্কস্টেশন আরটিএক্স' },
      ]
    },
    {
      brandEn: 'Gigabyte & AORUS (Laptops, GPUs, Motherboards, Monitors)',
      brandBn: 'গিগাবাইট ও অরাস (Gigabyte & AORUS)',
      models: [
        { en: 'AORUS 17X / 15X Gaming Laptop', bn: 'অরাস গেইমিং ল্যাপটপ' },
        { en: 'Gigabyte G5 KF / AORUS 16X Gaming', bn: 'গিগাবাইট জি৫ গেইমিং' },
        { en: 'Gigabyte GeForce RTX 4080 Super Gaming OC GPU', bn: 'গিগাবাইট আরটিএক্স গ্রাফিক্স কার্ড' },
        { en: 'Gigabyte GeForce RTX 4070 Super Windforce', bn: 'গিগাবাইট উইন্ডফোর্স গ্রাফিক্স' },
        { en: 'Gigabyte Z790 AORUS Master / B760 Gaming X Motherboard', bn: 'গিগাবাইট অরাস মাদারবোর্ড' },
        { en: 'Gigabyte M27Q 170Hz / AORUS FO32U2P OLED Monitor', bn: 'গিগাবাইট ও অরাস মনিটর' },
      ]
    },
    {
      brandEn: 'Razer (Gaming Laptops, Mice, Keyboards, Audio)',
      brandBn: 'রেজার (Razer Gaming Laptops & Peripherals)',
      models: [
        { en: 'Razer Blade 18 / Blade 16 / Blade 14 Gaming Laptop', bn: 'রেজার ব্লেড গেইমিং ল্যাপটপ' },
        { en: 'Razer DeathAdder V3 Pro / Viper V3 Pro Mouse', bn: 'রেজার ডেথএডার ও ভাইপার মাউস' },
        { en: 'Razer Basilisk V3 Pro / Orochi V2 Wireless', bn: 'রেজার ব্যাসিলিস্ক মাউস' },
        { en: 'Razer Huntsman V3 Pro / BlackWidow V4 Pro Keyboard', bn: 'রেজার হান্টসম্যান ও ব্ল্যাকউইডো কীবোর্ড' },
        { en: 'Razer BlackShark V2 Pro / Barracuda Pro Headset', bn: 'রেজার ব্ল্যাকশার্ক হেডসেট' },
        { en: 'Razer Seiren V3 Chroma / Kiyo Pro Ultra Webcam', bn: 'রেজার সাইরেন মাইক্রোফোন ও ওয়েবক্যাম' },
      ]
    },
    {
      brandEn: 'Corsair & Elgato (RAM, PSU, Liquid Cooling, Streaming)',
      brandBn: 'কোরসেয়ার ও এলগাটো (Corsair RAM, PSU & Elgato)',
      models: [
        { en: 'Corsair Vengeance RGB DDR5 32GB / 64GB 6000MHz', bn: 'কোরসেয়ার ভেঞ্জেন্স ডিডিআর৫ র‍্যাম' },
        { en: 'Corsair Dominator Titanium DDR5 RAM', bn: 'কোরসেয়ার ডমিনেটর টাইটানিয়াম র‍্যাম' },
        { en: 'Corsair RM1000x / RM850x / RM750x Gold PSU', bn: 'কোরসেয়ার পাওয়ার সাপ্লাই (PSU)' },
        { en: 'Corsair iCUE H150i Elite LCD 360mm Cooler', bn: 'কোরসেয়ার লিকুইড সিপিইউ কুলার' },
        { en: 'Corsair MP600 PRO LPX 2TB M.2 NVMe SSD', bn: 'কোরসেয়ার এনভিএমই এসএসডি' },
        { en: 'Elgato Stream Deck MK.2 / Wave 3 USB Microphone', bn: 'এলগাটো স্ট্রিম ডেক ও মাইক্রোফোন' },
      ]
    },
    {
      brandEn: 'Zotac, Sapphire, ASRock, XFX & PowerColor (GPUs & Motherboards)',
      brandBn: 'জোটেক, স্যাফায়ার, অ্যাসরক, এক্সএফএক্স (GPUs & Boards)',
      models: [
        { en: 'Zotac Gaming GeForce RTX 4080 Super AMP Extreme', bn: 'জোটেক আরটিএক্স ৪০৮০ সুপার' },
        { en: 'Zotac GeForce RTX 4070 Ti Super Trinity / Twin Edge', bn: 'জোটেক আরটিএক্স ৪০৭০ টিআই' },
        { en: 'Sapphire NITRO+ AMD Radeon RX 7900 XTX 24GB', bn: 'স্যাফায়ার নাইট্রো প্লাস আরএক্স ৭৯০০' },
        { en: 'Sapphire PULSE AMD Radeon RX 7800 XT 16GB', bn: 'স্যাফায়ার পালস আরএক্স ৭৮০০' },
        { en: 'ASRock Z790 Taichi / B650 Steel Legend Motherboard', bn: 'অ্যাসরক তাইচি ও স্টিল লিজেন্ড বোর্ড' },
        { en: 'XFX Speedster MERC 310 Radeon RX 7900 XT GPU', bn: 'এক্সএফএক্স স্পিডস্টার গ্রাফিক্স' },
        { en: 'PowerColor Red Devil Radeon RX 7800 XT GPU', bn: 'পাওয়ারকালার রেড ডেভিল গ্রাফিক্স' },
      ]
    },
    {
      brandEn: 'Logitech & Logitech G (Mice, Keyboards, Webcams)',
      brandBn: 'লজিটেক (Logitech Mice, Keyboards & Webcams)',
      models: [
        { en: 'Logitech MX Master 3S / MX Anywhere 3S Mouse', bn: 'লজিটেক এমএক্স মাস্টার ৩এস মাউস' },
        { en: 'Logitech MX Keys S / Craft Wireless Keyboard', bn: 'লজিটেক এমএক্স কী-স কীবোর্ড' },
        { en: 'Logitech G Pro X Superlight 2 Wireless Gaming Mouse', bn: 'লজিটেক জি প্রো এক্স সুপারলাইট ২ মাউস' },
        { en: 'Logitech G502 X PLUS Wireless / G305 LIGHTSPEED', bn: 'লজিটেক জি৫০২ এক্স মাউস' },
        { en: 'Logitech G915 TKL Wireless / G213 Prodigy Keyboard', bn: 'লজিটেক জি৯১৫ কীবোর্ড' },
        { en: 'Logitech C922 Pro Stream / Brio 4K / C920 HD Webcam', bn: 'লজিটেক ব্রিও ৪কে ও সি৯২২ ওয়েবক্যাম' },
        { en: 'Logitech G733 LIGHTSPEED / G435 Wireless Headset', bn: 'লজিটেক জি৭৩৩ ও জি৪৩৫ হেডসেট' },
      ]
    },
    {
      brandEn: 'Western Digital (WD), SanDisk & Seagate (Storage)',
      brandBn: 'ওয়েস্টার্ন ডিজিটাল (WD), সানডিস্ক ও সিগেট (Storage)',
      models: [
        { en: 'WD Black SN850X 1TB / 2TB NVMe M.2 SSD', bn: 'ডব্লিউডি ব্ল্যাক এসএন৮৫০এক্স এনভিএমই' },
        { en: 'WD Black SN770 1TB NVMe SSD', bn: 'ডব্লিউডি ব্ল্যাক এসএন৭৭০ এসএসডি' },
        { en: 'WD Blue 1TB / 2TB 3.5" 7200RPM Hard Drive', bn: 'ডব্লিউডি ব্লু ১টিবি/২টিবি হার্ডডিস্ক' },
        { en: 'WD My Passport 1TB / 2TB / 4TB Portable External Drive', bn: 'ডব্লিউডি মাই পাসপোর্ট এক্সটার্নাল ড্রাইভ' },
        { en: 'Seagate Barracuda 2TB / 4TB Desktop HDD', bn: 'সিগেট বারাকুডা পিসি হার্ডডিস্ক' },
        { en: 'Seagate IronWolf 8TB NAS Internal Hard Drive', bn: 'সিগেট আয়রনউলফ ন্যাস হার্ডডিস্ক' },
        { en: 'SanDisk Extreme PRO Portable SSD 1TB / 2TB', bn: 'সানডিস্ক এক্সট্রিম প্রো পোর্টেবল এসএসডি' },
      ]
    },
    {
      brandEn: 'Kingston, ADATA (XPG) & TeamGroup (RAM & SSD)',
      brandBn: 'কিংস্টন, এডিটা এক্সপিজি ও টিমগ্রুপ (RAM & SSD)',
      models: [
        { en: 'Kingston FURY Beast DDR5 16GB / 32GB 6000MHz RAM', bn: 'কিংস্টন ফিউরি বিস্ট ডিডিআর৫ র‍্যাম' },
        { en: 'Kingston FURY Renegade DDR4 / DDR5 RGB RAM', bn: 'কিংস্টন ফিউরি রেনেগেড আরজিবি' },
        { en: 'Kingston NV2 1TB / KC3000 2TB M.2 NVMe SSD', bn: 'কিংস্টন এনভি২ ও কেসি৩০০০ এনভিএমই' },
        { en: 'ADATA XPG SPECTRIX D50 DDR4 / Lancer RGB DDR5', bn: 'এডিটা এক্সপিজি ল্যান্সার আরজিবি র‍্যাম' },
        { en: 'ADATA XPG GAMMIX S70 Blade 1TB / 2TB SSD', bn: 'এডিটা এক্সপিজি গ্যামিক্স এস৭০ এসএসডি' },
        { en: 'TeamGroup T-Force Delta RGB DDR5 / DDR4 RAM', bn: 'টিমগ্রুপ টি-ফোর্স ডেল্টা আরজিবি র‍্যাম' },
        { en: 'Transcend JetFlash 128GB USB 3.2 Flash Drive', bn: 'ট্রানসেন্ড ১২৮জিবি পেনড্রাইভ' },
      ]
    },
    {
      brandEn: 'TP-Link, Netgear, D-Link & Mercusys (Networking)',
      brandBn: 'টিপি-লিংক, নেটগিয়ার, ডি-লিংক (Networking)',
      models: [
        { en: 'TP-Link Archer AX72 / AX55 WiFi 6 Router', bn: 'টিপি-লিংক আর্চার ওয়াইফাই ৬ রাউটার' },
        { en: 'TP-Link Archer C6 / C80 AC1200 Dual-Band Router', bn: 'টিপি-লিংক আর্চার সি৬ ডাবল ব্যান্ড' },
        { en: 'TP-Link Deco X50 / X20 Mesh WiFi 6 System', bn: 'টিপি-লিংক ডেকো মেশ ওয়াইফাই' },
        { en: 'TP-Link Tapo C210 / C200 WiFi Security Camera', bn: 'টিপি-লিংক টাপো সিসিটিভি ক্যামেরা' },
        { en: 'Netgear Nighthawk AX12 / Orbi WiFi 6 Mesh System', bn: 'নেটগিয়ার নাইটহক ওয়াইফাই ৬' },
        { en: 'Mercusys AC12G / D-Link DIR-842 Dual Band Router', bn: 'মারকুসিস ও ডি-লিংক ডাবল ব্যান্ড রাউটার' },
      ]
    },
    {
      brandEn: 'Epson, Canon & Brother (Printers & Scanners)',
      brandBn: 'এপসন, কেনন ও ব্রাদার (Printers)',
      models: [
        { en: 'Epson EcoTank L3250 WiFi InkTank All-in-One', bn: 'এপসন ইকোট্যাংক এল৩২৫০ ওয়াইফাই প্রিন্টার' },
        { en: 'Epson EcoTank L3210 / L8050 6-Color Photo Printer', bn: 'এপসন ইকোট্যাংক এল৩২১০ ফটো প্রিন্টার' },
        { en: 'Canon PIXMA G3010 / G2010 High Volume Ink Tank', bn: 'কেনন পিক্সমা জি৩০১০ কালি প্রিন্টার' },
        { en: 'Canon imageCLASS LBP6030w Wireless Laser Printer', bn: 'কেনন এলবিপি৬০৩০ডব্লিউ লেজার প্রিন্টার' },
        { en: 'Brother DCP-T520W Auto Duplex Ink Tank Printer', bn: 'ব্রাদার ডিসিপি-টি৫২০ডব্লিউ প্রিন্টার' },
        { en: 'Brother HL-L2320D Monochrome Laser Printer', bn: 'ব্রাদার লেজার প্রিন্টার' },
      ]
    },
    {
      brandEn: 'LG, BenQ, ViewSonic & AOC (Monitors & Displays)',
      brandBn: 'এলজি, বেনকিউ, ভিউসনিক ও এওসি (Monitors)',
      models: [
        { en: 'LG UltraGear 27GP850-B 180Hz QHD Nano IPS', bn: 'এলজি আল্ট্রাগিয়ার ১৮০হার্টজ মনিটর' },
        { en: 'LG UltraGear 32GN650 165Hz QHD Monitor', bn: 'এলজি আল্ট্রাগিয়ার ৩২ ইঞ্চি মনিটর' },
        { en: 'LG UltraFine 27UN880 4K Ergonomic Monitor', bn: 'এলজি আল্ট্রাফাইন ৪কে মনিটর' },
        { en: 'BenQ ZOWIE XL2546K 240Hz Esports Gaming Monitor', bn: 'বেনকিউ জুই ২৪০হার্টজ গেইমিং মনিটর' },
        { en: 'ViewSonic VX2479-HD-PRO 165Hz IPS Monitor', bn: 'ভিউসনিক ১৬৫হার্টজ আইপিএস মনিটর' },
        { en: 'AOC 24G2 / C27G2 Curved 165Hz Gaming Monitor', bn: 'এওসি ২৪জি২ / সি২৭জি২ মনিটর' },
      ]
    },
    {
      brandEn: 'DeepCool, Cooler Master, Lian Li & Thermaltake (Cooling & Cases)',
      brandBn: 'ডিপকুল, কুলার মাস্টার, লিয়ান লি (Cooling & Cases)',
      models: [
        { en: 'DeepCool AK620 Digital / AG400 CPU Air Cooler', bn: 'ডিপকুল একে৬২০ ডিজিটাল এয়ার কুলার' },
        { en: 'DeepCool LS720 SE 360mm ARGB Liquid Cooler', bn: 'ডিপকুল ৩৬০মিমি লিকুইড কুলার' },
        { en: 'DeepCool PK650D / PM750D 80+ Gold Power Supply', bn: 'ডিপকুল পাওয়ার সাপ্লাই' },
        { en: 'Cooler Master Hyper 212 Halo / MasterLiquid 360', bn: 'কুলার মাস্টার হাইপার ২১২' },
        { en: 'Lian Li O11 Dynamic EVO / LANCOOL 216 Case', bn: 'লিয়ান লি ও১১ ডায়নামিক কেসিং' },
        { en: 'Thermaltake Toughpower GF1 850W Gold PSU', bn: 'থার্মালটেক ৮৫০ওয়াট পাওয়ার সাপ্লাই' },
      ]
    },
    {
      brandEn: 'APC, CyberPower & MaxGreen (UPS & Power Backup)',
      brandBn: 'এপিসি, সাইবারপাওয়ার ও ম্যাক্সগ্রিন (UPS Backup)',
      models: [
        { en: 'APC Easy UPS BVX650I-MS 650VA / 1200VA', bn: 'এপিসি ৬৫০ভিএ / ১২০০ভিএ ইউপিএস' },
        { en: 'APC Smart-UPS 1500VA LCD Line Interactive', bn: 'এপিসি স্মার্ট ইউপিএস ১৫০০ভিএ' },
        { en: 'CyberPower UT1500E 1500VA / Value 1000E UPS', bn: 'সাইবারপাওয়ার ইউপিএস' },
        { en: 'MaxGreen 650VA / 1200VA Offline UPS', bn: 'ম্যাক্সগ্রিন ৬৫০ভিএ ইউপিএস' },
      ]
    },
    {
      brandEn: 'Custom Desktop PC & Complete Setup',
      brandBn: 'কাস্টম ডেস্কটপ পিসি ও ফুল সেটআপ',
      models: [
        { en: 'Custom Gaming PC (Core i9 / Ryzen 9 + RTX 4080)', bn: 'কাস্টম গেইমিং পিসি (আই৯/রাইজেন ৯)' },
        { en: 'Core i5 13th / 12th Gen Office Setup PC', bn: 'অফিস পিসি সম্পূর্ণ সেটআপ (আই৫)' },
        { en: 'Ryzen 5 5600G Budget Editing PC Setup', bn: 'বাজেট ভিডিও এডিটিং পিসি সেটআপ' },
        { en: 'High-End 3D Animation Workstation PC', bn: 'হাই-এন্ড ৩ডি এনিমেশন ও রেন্ডারিং পিসি' },
        { en: 'Complete Student / Home Desktop Set', bn: 'স্টুডেন্ট ও হোম ইউজ ডেস্কটপ পিসি' },
      ]
    },
    {
      brandEn: 'Others (অন্যান্য কম্পিউটার ও আইটি পণ্য)',
      brandBn: 'অন্যান্য (Others)',
      models: [
        { en: 'Other Laptop / Notebook Model', bn: 'অন্যান্য ল্যাপটপ মডেল' },
        { en: 'Other PC Component / Accessory', bn: 'অন্যান্য কম্পিউটার যন্ত্রাংশ' },
        { en: 'Custom Model / Unlisted Item', bn: 'কাস্টম / অন্যান্য মডেল' },
      ]
    }
  ],
  vehicles: [
    {
      brandEn: 'Yamaha',
      brandBn: 'ইয়ামাহা (Yamaha)',
      models: [
        { en: 'Yamaha R15 V4 Racing Blue ABS', bn: 'ইয়ামাহা আর ১৫ ভি৪ রেসিং ব্লু' },
        { en: 'Yamaha R15M Carbon Edition', bn: 'ইয়ামাহা আর ১৫এম' },
        { en: 'Yamaha R15 V3 Dual ABS', bn: 'ইয়ামাহা আর ১৫ ভি৩' },
        { en: 'Yamaha FZ-S V4 Deluxe ABS', bn: 'ইয়ামাহা এফজেড-এস ভি৪' },
        { en: 'Yamaha FZ-S V3 Vintage / FI', bn: 'ইয়ামাহা এফজেড-এস ভি৩' },
        { en: 'Yamaha MT-15 V2 Dual ABS', bn: 'ইয়ামাহা এমটি-১৫ ভি২' },
        { en: 'Yamaha Fazer V2 Dual Disc', bn: 'ইয়ামাহা ফেজার ভি২' },
        { en: 'Yamaha Saluto 125 UB', bn: 'ইয়ামাহা স্যালুটো ১২৫' },
        { en: 'Yamaha RayZR 125 FI Hybrid Scooter', bn: 'ইয়ামাহা রে-জেডআর স্কুটি' },
        { en: 'Yamaha Aerox 155 Maxi Scooter', bn: 'ইয়ামাহা এয়ারক্স ১৫৫' },
      ]
    },
    {
      brandEn: 'Honda',
      brandBn: 'হোন্ডা (Honda)',
      models: [
        { en: 'Honda CBR 150R Tricolor ABS', bn: 'হোন্ডা সিবিআর ১৫০আর' },
        { en: 'Honda CB Hornet 160R ABS', bn: 'হোন্ডা হর্নেট ১৬০আর' },
        { en: 'Honda XBlade 160 ABS', bn: 'হোন্ডা এক্সব্লেড ১৬০' },
        { en: 'Honda Shine 125 SP', bn: 'হোন্ডা শাইন ১২৫' },
        { en: 'Honda Livo 110 Disc', bn: 'হোন্ডা লিভো ১১০' },
        { en: 'Honda Dio 110 / Activa 6G Scooter', bn: 'হোন্ডা ডিও স্কুটি' },
      ]
    },
    {
      brandEn: 'Suzuki',
      brandBn: 'সুজুকি (Suzuki)',
      models: [
        { en: 'Suzuki Gixxer SF 155 FI ABS', bn: 'সুজুকি জিক্সার এসএফ' },
        { en: 'Suzuki Gixxer Monotone 155', bn: 'সুজুকি জিক্সার ১৫৫' },
        { en: 'Suzuki Gixxer 250 SF Dual ABS', bn: 'সুজুকি জিক্সার ২৫০' },
        { en: 'Suzuki Intruder 150 FI ABS', bn: 'সুজুকি ইনট্রুডার' },
        { en: 'Suzuki Hayate EP 110', bn: 'সুজুকি হায়াতে' },
        { en: 'Suzuki Access 125 / Burgman Scooter', bn: 'সুজুকি বার্গম্যান স্কুটি' },
      ]
    },
    {
      brandEn: 'Bajaj',
      brandBn: 'বাজাজ (Bajaj)',
      models: [
        { en: 'Bajaj Pulsar N160 Dual ABS', bn: 'বাজাজ পালসার এন১৬০' },
        { en: 'Bajaj Pulsar N250 Dual Channel', bn: 'বাজাজ পালসার এন২৫০' },
        { en: 'Bajaj Pulsar 150 SD / Twin Disc', bn: 'বাজাজ পালসার ১৫০' },
        { en: 'Bajaj Pulsar NS160 FI ABS', bn: 'বাজাজ পালসার এনএস১৬০' },
        { en: 'Bajaj Discover 125 Disc', bn: 'বাজাজ ডিসকভার ১২৫' },
        { en: 'Bajaj Platina 110 H-Gear', bn: 'বাজাজ প্লাটিনা ১১০' },
        { en: 'Bajaj Avenger 160 Street', bn: 'বাজাজ অ্যাভেঞ্জার ১৬০' },
      ]
    },
    {
      brandEn: 'TVS & Hero & Royal Enfield',
      brandBn: 'টিভিএস, হিরো ও রয়্যাল এনফিল্ড (TVS / Hero / Royal Enfield)',
      models: [
        { en: 'TVS Apache RTR 160 4V Special Edition', bn: 'টিভিএস অ্যাপাচি ১৬০ ৪ভি' },
        { en: 'TVS Apache RTR 160 2V', bn: 'টিভিএস অ্যাপাচি ২ভি' },
        { en: 'TVS Raider 125 SmartXonnect', bn: 'টিভিএস রাইডার ১২৫' },
        { en: 'TVS Ntorq 125 Race Edition Scooter', bn: 'টিভিএস এনটর্ক স্কুটি' },
        { en: 'Hero Thriller 160R FI ABS', bn: 'হিরো থ্রিলার ১৬০আর' },
        { en: 'Hero Glamour 125 / Splendor+ Xtec', bn: 'হিরো গ্ল্যামার / স্প্লেন্ডার' },
        { en: 'Royal Enfield Hunter 350 / Classic 350', bn: 'রয়্যাল এনফিল্ড ৩৫০' },
      ]
    },
    {
      brandEn: 'Toyota & Honda Cars',
      brandBn: 'টোয়োটা ও হোন্ডা কার (Toyota & Honda Cars)',
      models: [
        { en: 'Toyota Premio F Superior (2018-2022)', bn: 'টোয়োটা প্রিমো এফ' },
        { en: 'Toyota Allion A15 / A18', bn: 'টোয়োটা এলিয়ন' },
        { en: 'Toyota Axio X / G Hybrid', bn: 'টোয়োটা এক্সিও হাইব্রিড' },
        { en: 'Toyota Corolla Cross Hybrid SUV', bn: 'টোয়োটা করোলা ক্রস' },
        { en: 'Toyota Harrier Z Leather Package Hybrid', bn: 'টোয়োটা হ্যারিয়ার' },
        { en: 'Toyota Land Cruiser Prado TX-L', bn: 'টোয়োটা ল্যান্ড ক্রুজার প্রাডো' },
        { en: 'Toyota Aqua / Vitz Hatchback', bn: 'টোয়োটা অ্যাকুয়া / ভিটস' },
        { en: 'Toyota Noah / Esquire MPV', bn: 'টোয়োটা নোয়া / এসকোয়ার' },
        { en: 'Toyota Hiace Super GL Microbus', bn: 'টোয়োটা হাইএস মাইক্রোবাস' },
        { en: 'Honda Vezel e:HEV RS / Grace EX', bn: 'হোন্ডা ভেজেল / গ্রেস' },
        { en: 'Nissan X-Trail Hybrid SUV / Dayz', bn: 'নিসান এক্স-ট্রেইল' },
        { en: 'Mitsubishi Outlander PHEV / Pajero', bn: 'মিটসুবিশি আউটল্যান্ডার / পাজোরো' },
      ]
    }
  ],
  property: [
    {
      brandEn: 'Apartment / Flat',
      brandBn: 'অ্যাপার্টমেন্ট / ফ্ল্যাট',
      models: [
        { en: '3 Bed, 3 Bath (1250-1450 Sqft)', bn: '৩ বেড, ৩ বাথ, ১২৫০-১৪৫০ স্কয়ার ফিট' },
        { en: '3 Bed, 4 Bath (1500-1850 Sqft)', bn: '৩ বেড, ৪ বাথ, ১৫০০-১৮৫০ স্কয়ার ফিট' },
        { en: '4 Bed, 4 Bath (2000-2800 Sqft)', bn: '৪ বেড, ৪ বাথ, ২০০০-২৮০০ স্কয়ার ফিট' },
        { en: '2 Bed, 2 Bath (800-1050 Sqft)', bn: '২ বেড, ২ বাথ, ৮০০-১০৫০ স্কয়ার ফিট' },
        { en: 'Luxury Duplex Penthouse (3500+ Sqft)', bn: 'লক্সারি ডুপ্লেক্স পেন্টহাউস' },
        { en: 'Studio Apartment (500-750 Sqft)', bn: 'স্টুডিও অ্যাপার্টমেন্ট' },
      ]
    },
    {
      brandEn: 'Plot / Land',
      brandBn: 'প্লট / জমি',
      models: [
        { en: '3 Katha Residential Plot', bn: '৩ কাঠা আবাসিক প্লট' },
        { en: '5 Katha Corner Plot', bn: '৫ কাঠা কর্নার প্লট' },
        { en: '10 Katha Commercial Land', bn: '১০ কাঠা বাণিজ্যিক জমি' },
        { en: '1 Bigha Industrial Land', bn: '১ বিঘা ইন্ডাস্ট্রিয়াল জমি' },
        { en: 'Rajuk Approved Purbachal Plot', bn: 'রাজউক অনুমোদিত পূর্বাচল প্লট' },
      ]
    },
    {
      brandEn: 'Commercial Space',
      brandBn: 'বাণিজ্যিক স্পেস ও দোকান',
      models: [
        { en: '1200 Sqft Ready Office Space', bn: '১২০০ স্কয়ারফিট অফিস স্পেস' },
        { en: 'Prime Ground Floor Shop / Showroom', bn: 'গ্রাউন্ড ফ্লোর দোকান / শোরুম' },
        { en: 'Warehouse / Godown Space (5000+ Sqft)', bn: 'ওয়ারহাউস / গুদাম স্পেস' },
      ]
    }
  ],
  home_appliances: [
    {
      brandEn: 'Walton',
      brandBn: 'ওয়ালটন (Walton)',
      models: [
        { en: 'Walton Inverter Refrigerator (252L - 563L)', bn: 'ওয়ালটন ইনভার্টার ফ্রিজ' },
        { en: 'Walton Split AC (1.5 Ton / 2 Ton Inverter)', bn: 'ওয়ালটন স্প্লিট এসি' },
        { en: 'Walton Front / Top Load Washing Machine', bn: 'ওয়ালটন ওয়াশিং মেশিন' },
        { en: 'Walton Convection Microwave Oven', bn: 'ওয়ালটন ওভেন' },
        { en: 'Walton Blender, Juicer & Food Processor', bn: 'ওয়ালটন ব্লেন্ডার ও ফুড প্রসেসর' },
      ]
    },
    {
      brandEn: 'Singer & Haier',
      brandBn: 'সিঙ্গার ও হায়ার (Singer & Haier)',
      models: [
        { en: 'Singer Non-Frost Refrigerator 300L', bn: 'সিঙ্গার নন-ফ্রস্ট ফ্রিজ' },
        { en: 'Singer Inverter Air Conditioner 1.5T', bn: 'সিঙ্গার ইনভার্টার এসি' },
        { en: 'Haier Direct Cool / Inverter AC 2T', bn: 'হায়ার এসি ও রেফ্রিজারেটর' },
        { en: 'Haier Fully Automatic Front Load Washer', bn: 'হায়ার ওয়াশিং মেশিন' },
      ]
    },
    {
      brandEn: 'LG & Samsung',
      brandBn: 'এলজি ও স্যামসাং (LG & Samsung)',
      models: [
        { en: 'LG Smart Inverter Refrigerator 450L', bn: 'এলজি স্মার্ট ইনভার্টার ফ্রিজ' },
        { en: 'LG InstaView Door-in-Door Refrigerator', bn: 'এলজি ইন্সটাভিউ ফ্রিজ' },
        { en: 'Samsung Digital Inverter Convertible Fridge', bn: 'স্যামসাং ইনভার্টার ফ্রিজ' },
        { en: 'Samsung French Door Refrigerator', bn: 'স্যামসাং ফ্রেঞ্চ ডোর ফ্রিজ' },
        { en: 'Samsung EcoBubble Front Load Washer', bn: 'স্যামসাং ইকো বাবল ওয়াশিং মেশিন' },
        { en: 'LG Dual Inverter Split AC 1.5T', bn: 'এলজি ডুয়াল ইনভার্টার এসি' },
      ]
    },
    {
      brandEn: 'Vision & Gree & Butterfly',
      brandBn: 'ভিশন, গ্রী ও বাটারফ্লাই (Vision / Gree / Butterfly)',
      models: [
        { en: 'Vision Glass Door Refrigerator', bn: 'ভিশন গ্লাস ডোর ফ্রিজ' },
        { en: 'Vision 1.5 Ton 3D Inverter AC', bn: 'ভিশন ৩ডি ইনভার্টার এসি' },
        { en: 'Gree Fairy Inverter AC 1.5T / 2T', bn: 'গ্রী ফেয়ারি ইনভার্টার এসি' },
        { en: 'EcoPlus / Butterfly Refrigerator & Oven', bn: 'বাটারফ্লাই ও ইকো প্লাস' },
        { en: 'Whirlpool Double Door Refrigerator', bn: 'হোয়ার্লপুল ফ্রিজ' },
      ]
    }
  ],
  books: [
    {
      brandEn: 'Popular Publishers & Authors (Rokomari)',
      brandBn: 'জনপ্রিয় প্রকাশনী ও লেখক (রকমারি)',
      models: [
        { en: 'BCS & Govt Job Guide Set (Gyan Kosh)', bn: 'বিসিএস ও সরকারি চাকরি গাইড সেট' },
        { en: 'NCTB Academic Textbooks & Lecture Guides', bn: 'এনসিটিবি পাঠ্যবই ও লেকচার গাইড' },
        { en: 'Humayun Ahmed Novel Collection Set', bn: 'হুমায়ূন আহমেদ উপন্যাস সমগ্র' },
        { en: 'Muhammad Zafar Iqbal Sci-Fi Collection', bn: 'মুহম্মদ জাফর ইকবাল সায়েন্স ফিকশন' },
        { en: 'Jhankar Mahbub / Ayman Sadiq Motivation', bn: 'মোটিভেশনাল ও স্কিল ডেভেলপমেন্ট বই' },
        { en: 'Tafseer Ibn Kathir & Sahih Bukhari Set', bn: 'তাফসীর ইবনে কাছীর ও বোখারী শরীফ' },
        { en: 'English Spoken & IELTS Exam Preparation', bn: 'আইইএলটিএস ও স্পোকেন ইংলিশ বই' },
      ]
    }
  ],
  animal_pets: [
    {
      brandEn: 'Pets & Birds Breed',
      brandBn: 'পোষা প্রাণী ও পাখির জাত',
      models: [
        { en: 'Persian Doll-Face Kitten (Vaccinated)', bn: 'পার্সিয়ান ডল ফেস বিড়াল ছানা' },
        { en: 'British Shorthair / Siamese Cat', bn: 'ব্রিটিশ শর্টহেয়ার বিড়াল' },
        { en: 'Cockatiel & Bajregar Parrot Pair with Cage', bn: 'ককটেল ও বাজরিগার পাখি জোড়া' },
        { en: 'German Shepherd / Beagle Puppy', bn: 'জার্মান শেফার্ড / বিগল পপি' },
        { en: 'Aquarium Goldfish, Fighter & Discus Fish', bn: 'রঙিন অ্যাকোয়ারিয়াম মাছ' },
        { en: 'Farm Cattle & Goats (গরু ও ছাগল)', bn: 'খামার গরু ও ছাগল' },
      ]
    }
  ],
  food_grocery: [
    {
      brandEn: 'Radhuni & Square Food (রাঁধুনী ও স্কয়ার ফুড)',
      brandBn: 'রাঁধুনী ও স্কয়ার ফুড (Radhuni / Chashi / Square)',
      models: [
        { en: 'Radhuni Pure Spices & Ready Mix Powder', bn: 'রাঁধুনী খাঁটি গুঁড়া মসলা ও রেডি মিক্স' },
        { en: 'Chashi Premium Chinigura Aromatic Rice 5kg', bn: 'চাষী চিনিগুঁড়া সুগন্ধি চাল' },
        { en: 'Radhuni Pure Mustard Oil & Soybean Oil', bn: 'রাঁধুনী খাঁটি সরিষার তেল ও সয়াবিন তেল' },
        { en: 'Ruchi Chanachur & Pickles (আচার ও চানাচুর)', bn: 'রুচি চানাচুর ও মিক্সড সুস্বাদু আচার' }
      ]
    },
    {
      brandEn: 'PRAN Foods (প্রাণ ফুড প্রোডাক্টস)',
      brandBn: 'প্রাণ ফুড (PRAN Foods & Beverages)',
      models: [
        { en: 'PRAN Frooto Juice & Mango Drink Carton', bn: 'প্রাণ ফ্রুটো জুস ও ড্রিংকস কার্টন' },
        { en: 'PRAN Frozen Paratha, Samosa & Nuggets', bn: 'প্রাণ ফ্রোজেন পরোটা, সিঙ্গার ও নুগেটস' },
        { en: 'PRAN Toast Biscuits, Dry Cake & Cookies', bn: 'প্রাণ টোস্ট বিস্কুট ও কুকিজ' },
        { en: 'PRAN Tomato Sauce & Jam-Jelly Combo', bn: 'প্রাণ টমেটো সস ও ম্যাংগো জ্যাম-জেলি' }
      ]
    },
    {
      brandEn: 'Kazi Farms Kitchen (কাজী ফার্মস কিচেন)',
      brandBn: 'কাজী ফার্মস কিচেন (Kazi Farms Kitchen)',
      models: [
        { en: 'Frozen Chicken Nuggets, Sausage & Meatball', bn: 'চিকেন নুগেটস, সসেজ ও মিটবল' },
        { en: 'Crispy Fried Chicken Wings & Drumsticks', bn: 'ফ্রোজেন ফ্রাইড চিকেন উইংস' },
        { en: 'Chicken Spring Roll & Samosa Pack', bn: 'চিকেন স্প্রিং রোল ও সুস্বাদু সমোসা' }
      ]
    },
    {
      brandEn: 'Nestlé & Maggi (নেসলে ও ম্যাগি)',
      brandBn: 'নেসলে ও ম্যাগি (Nestlé / Maggi / Nescafé)',
      models: [
        { en: 'Maggi 2-Minute Noodles Family Pack', bn: 'ম্যাগি ২-মিনিট নুডলস ফ্যামিলি প্যাক' },
        { en: 'Nescafé Classic Instant Coffee Jar', bn: 'নেসক্যাফে ক্লাসিক ইনস্ট্যান্ট কফি' },
        { en: 'Nestlé Lactogen & Cerelac Baby Food', bn: 'নেসলে ল্যাকটোজেন ও সেরেল্যাক' },
        { en: 'Maggi Seasoning Cube & Coconut Milk Powder', bn: 'ম্যাগি স্বাদমেট ও কোকোনাট মিল্ক পাউডার' }
      ]
    },
    {
      brandEn: 'CP Food Bangladesh (সিপি ফুড)',
      brandBn: 'সিপি ফুড (CP Bangladesh Fast Food)',
      models: [
        { en: 'CP Chicken Frankfurters & Sausage', bn: 'সিপি চিকেন ফ্রাঙ্কফার্টার সসেজ' },
        { en: 'CP Mexican Fried Chicken & Burger Patty', bn: 'সিপি মেক্সিকান ফ্রাইড চিকেন ও বার্গার প্যাটি' },
        { en: 'CP Egg & Chicken Momos Box', bn: 'সিপি স্পেশাল এগ ও চিকেন মোমো' }
      ]
    },
    {
      brandEn: 'ACI Pure & Fresh & Teer (এসিআই, ফ্রেশ ও তীর)',
      brandBn: 'এসিআই পিওর, ফ্রেশ ও তীর (ACI / Fresh / Teer)',
      models: [
        { en: 'Teer & Fresh Fortified Soybean Oil 5 Liter', bn: 'তীর ও ফ্রেশ ফোর্টিফাইড সয়াবিন তেল ৫ লিটার' },
        { en: 'ACI Pure Salt & Premium Atta / Maida / Suji', bn: 'এসিআই পিওর লবণ, আটা, ময়দা ও সুজি' },
        { en: 'Fresh Mineral Drinking Water Jar & Bottles', bn: 'ফ্রেশ ড্রিংকিং মিনারেল ওয়াটার জ্যার' }
      ]
    },
    {
      brandEn: 'Aarong Dairy & Well Food & Sweets',
      brandBn: 'আড়ং ডেইরি, ওয়েলফুড ও মিষ্টি শপ',
      models: [
        { en: 'Aarong Pure Ghee & Fresh Liquid Milk Pack', bn: 'আড়ং খাঁটি গাওয়া ঘি ও লিকুইড মিল্ক' },
        { en: 'Well Food Traditional Sweetmeat & Pastry Box', bn: 'ওয়েলফুড স্পেশাল চমচম, রসগোল্লা ও কেক' },
        { en: 'Tastti Treat / CFC Custom Birthday Cake', bn: 'কাস্টম বার্থডে কেক ও পেস্ট্রি' }
      ]
    },
    {
      brandEn: 'Popular Restaurant & Fast Food Chains',
      brandBn: 'রেস্টুরেন্ট, ফাস্টফুড ও কাচ্চি বিরিয়ানি',
      models: [
        { en: "Sultan's Dine / Kacchi Bhai Special Kacchi", bn: "সুলতানস ডাইন / কাচ্চি ভাই বাসমতি কাচ্চি" },
        { en: 'KFC / Pizza Hut / Dominoes Combo Box', bn: 'কেএফসি ফ্রাইড চিকেন ও পিৎজা হাট মেগা প্যাক' },
        { en: 'Secret Recipe / Chillis Gourmet Pasta & Burger', bn: 'সিক্রেট রেসিপি ও চিলিস পাস্টা-বার্গার' },
        { en: 'Old Dhaka Traditional Tehari & Biryani Catering', bn: 'পুরান ঢাকার ঐতিহ্যবাহী তেহারী ও বিরিয়ানি' }
      ]
    },
    {
      brandEn: 'Organic Farm & Homemade Catering',
      brandBn: 'হোমমেড কিচেন, অর্গানিক ফার্ম ও ক্যাটারিং',
      models: [
        { en: 'Sundarban Pure Mustard Honey & Ghee Combo', bn: 'সুন্দরবনের খাঁটি মধু ও গাওয়া ঘি' },
        { en: 'Cold-Pressed Ghani Mustard Oil & Organic Rice', bn: 'ঘানি ভাঙা খাঁটি সরিষার তেল ও চাল' },
        { en: 'Daily Office / Home Lunch Catering Meal Box', bn: 'হোমমেড খাবার ও ডেইলি লাঞ্চ বক্স' },
        { en: 'Seasonal Rajshahi Himsagar / Haribhanga Mango', bn: 'রাজশাহীর তাজা হিমসাগর ও হাড়িভাঙ্গা আম' }
      ]
    }
  ],
  repair_construction: [
    {
      brandEn: 'Professional Building & Electrical Works',
      brandBn: 'বিল্ডিং ও ইলেকট্রিক্যাল সেবা',
      models: [
        { en: 'Plumbing & Water Pipe Installation', bn: 'প্লাম্বিং ও পাইপ ফিটিং কাজ' },
        { en: 'Electrical Wiring & DB Box Setup', bn: 'ইলেকট্রিক ওয়ারিং ও ফিটিং' },
        { en: 'Tiles Fitting & Sanitary Works', bn: 'টাইলস ও স্যানিটারি মিস্ত্রি' },
        { en: 'Painting, Waterproofing & Polish', bn: 'রং, পলিশ ও ওয়াটারপ্রুফিং' },
        { en: 'Interior Woodwork & Ceiling', bn: 'ইন্টেরিয়র ও ফলস সিলিং' },
      ]
    }
  ],
  fashion: [
    {
      brandEn: 'Aarong & Yellow & Sailor',
      brandBn: 'আড়ং, ইয়েলো ও সেইলর (Aarong / Yellow / Sailor)',
      models: [
        { en: 'Panjabi & Pajama Set (Cotton / Silk)', bn: 'পাঞ্জাবি ও পায়জামা সেট' },
        { en: 'Saree & Lehenga Collection (Jamdani / Silk)', bn: 'জামদানি ও কাতান শাড়ি' },
        { en: 'Mens Casual & Formal Shirt', bn: 'পুরুষদের শার্ট ও টি-শার্ট' },
        { en: 'Womens Salwar Kameez & Kurti', bn: 'লেডিজ সালোয়ার কামিজ ও কুর্তি' },
      ]
    },
    {
      brandEn: 'Bata & Apex & Lotto',
      brandBn: 'বাটা, এপেক্স ও লোটো (Bata / Apex / Lotto)',
      models: [
        { en: 'Leather Formal Shoes (Men)', bn: 'জেনুইন লেদার ফরমাল জুতা' },
        { en: 'Sneakers & Running Sports Shoes', bn: 'স্নিকার্স ও স্পোর্টস শু' },
        { en: 'Womens Heel & Casual Sandals', bn: 'লেডিজ হিল ও স্যান্ডেল' },
      ]
    }
  ],
  furniture: [
    {
      brandEn: 'Hatil (হাতিলে)',
      brandBn: 'Hatil (হাতিলে)',
      models: [
        { en: 'Hatil Premium Fabric & Leather Sofa Set (3+1+1)', bn: 'হাতিলে প্রিমিয়াম ফ্যাব্রিক ও লেদার সোফা সেট' },
        { en: 'Hatil Chittagong Teak King Size Bed', bn: 'হাতিলে সেগুন কাঠের কিং সাইজ বেড' },
        { en: 'Hatil Smart Space Saving Dining Table Set', bn: 'হাতিলে স্মার্ট স্পেস সেভিং ডাইনিং টেবিল' },
        { en: 'Hatil Wooden Wardrobe & Closet Almirah', bn: 'হাতিলে উডেন ওয়ারড্রোব ও আলমারি' },
        { en: 'Hatil Executive Office Chair & Reading Desk', bn: 'হাতিলে এক্সিকিউটিভ অফিস চেয়ার ও টেবিল' },
      ]
    },
    {
      brandEn: 'Otobi (অটোবি)',
      brandBn: 'Otobi (অটোবি)',
      models: [
        { en: 'Otobi L-Shape Fabric Modular Sofa', bn: 'অটোবি এল-শেপ মডুলার সোফা' },
        { en: 'Otobi Queen Size Wooden Bed Frame', bn: 'অটোবি কুয়েন সাইজ কাঠের বেড ফ্রেম' },
        { en: 'Otobi Melamine Board Almirah & Cabinet', bn: 'অটোবি মেলামাইন বোর্ড আলমারি ও কেবিনেট' },
        { en: 'Otobi Computer Desk & Revolving Chair', bn: 'অটোবি কম্পিউটার ডেস্ক ও রিভলভিং চেয়ার' },
      ]
    },
    {
      brandEn: 'Partex Furniture (পারটেক্স)',
      brandBn: 'Partex Furniture (পারটেক্স)',
      models: [
        { en: 'Partex Laminated Board Bedroom Set', bn: 'পারটেক্স লেমিনেটেড বোর্ড বেডরুম সেট' },
        { en: 'Partex 6-Seater Glass Top Dining Table', bn: 'পারটেক্স ৬-সিটার গ্লাস টপ ডাইনিং টেবিল' },
        { en: 'Partex Office Workstation & Book Shelf', bn: 'পারটেক্স অফিস ওয়ার্কস্টেশন ও বুক শেলফ' },
        { en: 'Partex TV Cabinet & Shoe Rack', bn: 'পারটেক্স টিভি কেবিনেট ও শু র্যাক' },
      ]
    },
    {
      brandEn: 'Regal Furniture (রিগাল)',
      brandBn: 'Regal Furniture (রিগাল)',
      models: [
        { en: 'Regal Metal Bed & Folding Cot', bn: 'রিগাল মেটাল বেড ও ফোল্ডিং খাট' },
        { en: 'Regal Wooden Sofa Bed & Cushion Set', bn: 'রিগাল উডেন সোফা বেড ও কুশন সেট' },
        { en: 'Regal Plastic Cabinet & Storage Organizer', bn: 'রিগাল প্লাস্টিক কেবিনেট ও স্টোরেজ' },
        { en: 'Regal Study Table & Student Chair', bn: 'রিগাল স্টাডি টেবিল ও রিডিং চেয়ার' },
      ]
    },
    {
      brandEn: 'Nadia Furniture (নাদিয়া)',
      brandBn: 'Nadia Furniture (নাদিয়া)',
      models: [
        { en: 'Nadia Teak Wood Bedroom Package Set', bn: 'নাদিয়া সেগুন কাঠ বেডরুম প্যাকেজ সেট' },
        { en: 'Nadia Classic Dressing Table & Mirror', bn: 'নাদিয়া ক্লাসিক ড্রেসিং টেবিল ও মিরর' },
        { en: 'Nadia Royal Carved Sofa & Center Table', bn: 'নাদিয়া রয়্যাল কার্ভড সোফা ও টি-টেবিল' },
      ]
    },
    {
      brandEn: 'Navana Furniture (নভানা)',
      brandBn: 'Navana Furniture (নভানা)',
      models: [
        { en: 'Navana Ergonomic Office Revolving Chair', bn: 'নভানা এরগোনোমিক অফিস রিভলভিং চেয়ার' },
        { en: 'Navana Executive Director Desk Table', bn: 'নভানা এক্সিকিউটিভ ডিরেক্টর ডেস্ক' },
        { en: 'Navana Modern Living Room Sofa Set', bn: 'নভানা মডার্ন লিভিং রুম সোফা সেট' },
      ]
    },
    {
      brandEn: 'Akhter Furniture (আখতার)',
      brandBn: 'Akhter Furniture (আখতার)',
      models: [
        { en: 'Akhter Royal Chittagong Teak King Bed', bn: 'আখতার রয়্যাল সেগুন কাঠের কিং বেড' },
        { en: 'Akhter Premium Carved Leather Sofa Set', bn: 'আখতার প্রিমিয়াম খোদাই করা লেদার সোফা' },
        { en: 'Akhter Marble Top 8 Seater Dining Table', bn: 'আখতার মার্বেল টপ ৮ সিটার ডাইনিং টেবিল' },
      ]
    },
    {
      brandEn: 'Brothers Furniture (ব্রাদার্স)',
      brandBn: 'Brothers Furniture (ব্রাদার্স)',
      models: [
        { en: 'Brothers Craft Wood Sofa & Divan Set', bn: 'ব্রাদার্স ক্রাফট উড সোফা ও দিভান সেট' },
        { en: 'Brothers 4-Door Solid Wood Almirah', bn: 'ব্রাদার্স ৪-ডোর সলিড উড আলমারি' },
        { en: 'Brothers Wooden Rocking Chair', bn: 'ব্রাদার্স কাঠের রকিং চেয়ার (দোলনা চেয়ার)' },
      ]
    },
    {
      brandEn: 'RFL Plastics & Furniture (আরএফএল)',
      brandBn: 'RFL Plastics & Furniture (আরএফএল)',
      models: [
        { en: 'RFL Wardrobe Double & Single Drawer', bn: 'আরএফএল ওয়ারড্রোব ডাবল ও সিঙ্গেল' },
        { en: 'RFL Plastic Premium Chair & Table Set', bn: 'আরএফএল প্লাস্টিক প্রিমিয়াম চেয়ার ও টেবিল' },
        { en: 'RFL Easy Chair & Baby Rocker Chair', bn: 'আরএফএল ইজি চেয়ার ও রকার চেয়ার' },
        { en: 'RFL Multipurpose Storage Rack & Shelf', bn: 'আরএফএল মাল্টিপারপাস স্টোরেজ ড্রয়ার' },
      ]
    },
    {
      brandEn: 'Handmade / Chittagong Teak (হাতে তৈরি সেগুন কাঠ)',
      brandBn: 'Handmade / Chittagong Teak (হাতে তৈরি সেগুন কাঠ)',
      models: [
        { en: 'Chittagong Teak Wood Semi-Box King Bed', bn: 'চিটাগাং সেগুন কাঠের সেমি-বক্স কিং খাট' },
        { en: 'Solid Teak Wood 4-Door Wardrobe', bn: 'সলিড সেগুন কাঠের ৪-ডোর ওয়ারড্রোব' },
        { en: 'Hand Carved Royal Teak Divan Bench', bn: 'হাতে খোদাই করা সেগুন কাঠের দিভান' },
        { en: 'Traditional Wooden Dressing Table & Mirror', bn: 'ট্রেডিশনাল উডেন ড্রেসিং টেবিল ও আয়না' },
      ]
    }
  ],
  education: [
    {
      brandEn: 'Coaching & Home Tuition & Online Course',
      brandBn: 'কোচিং, হোম টিউশন ও অনলাইন কোর্স',
      models: [
        { en: 'Class 9-10 / HSC Science Home Tutor', bn: 'নবম-দশম / এইচএসসি সায়েন্স টিউটর' },
        { en: 'IELTS Preparation & Spoken English Batch', bn: 'আইইএলটিএস ও স্পোকেন ইংলিশ ব্যাচ' },
        { en: 'Web Development & Graphics Design Mentorship', bn: 'ওয়েব ডেভেলপমেন্ট ও গ্রাফিক্স কোর্স' },
        { en: 'Admission Coaching (BUET / Medical / Varsity)', bn: 'বুয়েট/মেডিকেল অ্যাডমিশন কোচিং' },
      ]
    }
  ],
  jobs: [
    {
      brandEn: 'Full-Time & Part-Time Job Openings',
      brandBn: 'ফুল-টাইম ও পার্ট-টাইম চাকরি',
      models: [
        { en: 'Sales & Marketing Executive', bn: 'সেলস ও মার্কেটিং এক্সিকিউটিভ' },
        { en: 'Accountant & Managerial Role', bn: 'একাউন্টস ও ম্যানেজারিয়াল পদ' },
        { en: 'Customer Support / Telecaller Representative', bn: 'কাস্টমার সাপোর্ট ও কল সেন্টার' },
        { en: 'Software Developer & Graphic Designer', bn: 'সফটওয়্যার ডেভেলপার ও গ্রাফিক ডিজাইনার' },
        { en: 'Rider & Delivery Man / Driver', bn: 'রাইডার, ডেলিভারিম্যান ও ড্রাইভার' },
      ]
    }
  ],
  services: [
    {
      brandEn: 'Home, Event & AC Repair Services',
      brandBn: 'হোম সার্ভিস, ইভেন্ট ও এসি রিপেয়ার',
      models: [
        { en: 'AC Servicing, Gas Refill & Installation', bn: 'এসি ওয়াশ, গ্যাস রিফিল ও ইনস্টলেশন' },
        { en: 'House Shifting & Truck / Pickup Rental', bn: 'বাসা পরিবর্তন ও ট্রাক/পিকআপ ভাড়া' },
        { en: 'Photography, Cinematography & Event Stage', bn: 'ফটোগ্রাফি ও ইভেন্ট ডেকোরেশন' },
        { en: 'Computer / Laptop Hardware & Software Repair', bn: 'কম্পিউটার ও ল্যাপটপ মেরামত' },
      ]
    }
  ],
  baby_kids: [
    {
      brandEn: 'Chicco (চিকো)',
      brandBn: 'Chicco (চিকো)',
      models: [
        { en: 'Adjustable Baby Stroller & Travel Pram', bn: 'অ্যাডজাস্টেবল বেবি স্টোলার ও প্রাম' },
        { en: 'Safety Convertible Car Seat', bn: 'সেফটি কনভার্টিবল কার সিট' },
        { en: 'Chicco Feeding Bottle & Sterilizer', bn: 'ফিডিং বোটল ও স্টেরিলাইজার' },
        { en: 'Baby Natural Care Lotion & Wash', bn: 'বেবি স্কিন কেয়ার লোশন ও ওয়াশ' },
      ]
    },
    {
      brandEn: 'Fisher-Price (ফিশার প্রাইস)',
      brandBn: 'Fisher-Price (ফিশার প্রাইস)',
      models: [
        { en: 'Musical Activity Gym & Play Mat', bn: 'মিউজিক্যাল এক্টিভিটি জিম ও প্লে ম্যাট' },
        { en: 'Baby Learning Walker & Rocker', bn: 'বেবি লার্নিং ওয়াকার ও রকার' },
        { en: 'Infant-to-Toddler Rocker Bouncer', bn: 'ইনফ্যান্ট টু টডলার রকার বাউন্সার' },
        { en: 'Interactive Educational Toys & Puzzles', bn: 'এডুকেশনাল মিউজিক্যাল টয় সেট' },
      ]
    },
    {
      brandEn: 'Johnson & Johnson (জনসন অ্যান্ড জনসন)',
      brandBn: 'Johnson & Johnson (জনসন অ্যান্ড জনসন)',
      models: [
        { en: 'Baby Care Complete Gift Box Set', bn: 'বেবি কেয়ার গিফট বক্স সেট' },
        { en: 'Baby Powder, Oil & Gentle Shampoo', bn: 'বেবি পাউডার, ওয়েল ও শ্যাম্পু' },
        { en: 'No More Tears Gentle Bath & Wash', bn: 'নো মোর টিয়ার্স বেবি বাথ ওয়াশ' },
        { en: 'Pure Water Baby Wipes Pack', bn: 'বেবি পিওর ওয়াটার ওয়াইপস প্যাক' },
      ]
    },
    {
      brandEn: 'Pampers / Huggies / MamyPoko',
      brandBn: 'প্যাম্পার্স / হ্যাভিস / মামিপোকো',
      models: [
        { en: 'Active Baby Tape Diaper (S/M/L/XL)', bn: 'এক্টিভ বেবি টেপ ডায়াপার (S/M/L/XL)' },
        { en: 'Pant Diaper Mega Pack', bn: 'প্যান্ট ডায়াপার মেগা প্যাক' },
        { en: 'Sensitive Skin Wipes & Changing Mat', bn: 'সেনসিটিভ স্কিন ওয়াইপস ও চেঞ্জিং ম্যাট' },
      ]
    },
    {
      brandEn: 'Mee Mee & Mothercare',
      brandBn: 'মি মি ও মাদারকেয়ার',
      models: [
        { en: 'Compact Folding Pram & Stroller', bn: 'কম্প্যাক্ট ফোল্ডিং প্রাম ও স্টোলার' },
        { en: 'Ergonomic 3-in-1 Baby Carrier', bn: '৩-ইন-১ বেবি ক্যারিয়ার ব্যাগ' },
        { en: 'Steam Sterilizer & Bottle Warmer', bn: 'স্টিম স্টেরিলাইজার ও বোটল ওয়ার্মার' },
        { en: 'Multi-functional Baby High Chair', bn: 'মাল্টি-ফাংশনাল বেবি হাই চেয়ার' },
      ]
    },
    {
      brandEn: 'Lego & Barbie & Educational Toys',
      brandBn: 'লেগো, বার্বি ও শিক্ষণীয় খেলনা',
      models: [
        { en: 'Lego DUPLO Big Building Bricks Set', bn: 'লেগো ডুপ্লো পাজেল ও ব্রিকস সেট' },
        { en: 'Barbie Fashion Doll Playset', bn: 'বার্বি ফ্যাশন ডল প্লেসেট' },
        { en: 'Kids Electric Ride-On Car / Bike', bn: 'বাচ্চাদের রিচার্জেবল ইলেকট্রিক বাইক/কার' },
      ]
    },
    {
      brandEn: 'Local Handcraft & Cotton (সুতি পোশাক ও দোলনা)',
      brandBn: 'লোকাল হ্যান্ডক্রাফট ও সুতি পোশাক (Handicraft & Cotton)',
      models: [
        { en: 'Pure Cotton Baba Suit & Frock Set', bn: 'পিওর কটন বাবা স্যুট ও ফ্রক সেট' },
        { en: 'Wooden Baby Cot Bed & Cradle (দোলনা)', bn: 'কাঠের বেবি খাট ও দোলনা' },
        { en: 'Embroidered Baby Blanket & Nakshi Kantha', bn: 'নকশী কাঁথা ও কম্বল সেট' },
      ]
    }
  ]
};

// Category Aliases mapping so every category ID finds its corresponding models
CATEGORY_BRANDS_MODELS['computers'] = CATEGORY_BRANDS_MODELS['electronics'];
CATEGORY_BRANDS_MODELS['home_furniture'] = CATEGORY_BRANDS_MODELS['furniture'];
CATEGORY_BRANDS_MODELS['living'] = CATEGORY_BRANDS_MODELS['furniture'];
CATEGORY_BRANDS_MODELS['health_beauty'] = CATEGORY_BRANDS_MODELS['fashion'];
CATEGORY_BRANDS_MODELS['books_sports'] = CATEGORY_BRANDS_MODELS['books'];
CATEGORY_BRANDS_MODELS['pets'] = CATEGORY_BRANDS_MODELS['animal_pets'];
CATEGORY_BRANDS_MODELS['food'] = CATEGORY_BRANDS_MODELS['food_grocery'];
CATEGORY_BRANDS_MODELS['food_restaurants'] = CATEGORY_BRANDS_MODELS['food_grocery'];
CATEGORY_BRANDS_MODELS['construction'] = CATEGORY_BRANDS_MODELS['repair_construction'];
CATEGORY_BRANDS_MODELS['business_equipment'] = CATEGORY_BRANDS_MODELS['electronics'];
CATEGORY_BRANDS_MODELS['agriculture'] = CATEGORY_BRANDS_MODELS['animal_pets'];
CATEGORY_BRANDS_MODELS['others'] = CATEGORY_BRANDS_MODELS['services'];
CATEGORY_BRANDS_MODELS['education_courses'] = CATEGORY_BRANDS_MODELS['education'];
CATEGORY_BRANDS_MODELS['travel_tours'] = CATEGORY_BRANDS_MODELS['services'];
CATEGORY_BRANDS_MODELS['events_tickets'] = CATEGORY_BRANDS_MODELS['services'];

