export type Language = 'bn' | 'en';

export interface Location {
  division: string;
  district?: string;
  thana?: string;
}

export type AdType = 'regular' | 'featured' | 'urgent' | 'top_ad';

export type Condition = 'brand_new' | 'used_like_new' | 'used_good' | 'refurbished';

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  hidePhone?: boolean;
  email: string;
  memberSince: string;
  location: Location;
  isVerified: boolean;
  rating: number;
  totalReviews: number;
  badge?: 'Gold Seller' | 'Platinum Seller' | 'Verified Merchant' | 'Top Rated' | 'Verified Employer';
  responseRate?: string;
  responseTime?: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface QuestionAnswer {
  id: string;
  question: string;
  askedBy: string;
  askedDate: string;
  answer?: string;
  answeredDate?: string;
}

export interface Product {
  id: string;
  title: string;
  titleBn?: string;
  slug: string;
  category: string; // e.g. 'mobiles', 'electronics', 'vehicles', 'property', 'living', 'fashion', 'books', 'jobs', 'services'
  subCategory?: string;
  brand?: string;
  model?: string;
  price: number;
  originalPrice?: number;
  isNegotiable: boolean;
  condition: Condition;
  images: string[];
  description: string;
  descriptionBn?: string;
  location: Location;
  seller: Seller;
  postedAt: string;
  views: number;
  likes: number;
  adType: AdType;
  isDeliveryAvailable: boolean;
  warranty?: string;
  features?: string[];
  paymentInfo?: {
    method: 'bkash' | 'nagad';
    senderNumber: string;
    trxId: string;
    amount: number;
  };
  specifications: Record<string, string>;
  status: 'active' | 'pending' | 'sold' | 'rejected' | 'expired';
  expiryDate?: string;
  rejectionReason?: string;
  reviews?: Review[];
  questions?: QuestionAnswer[];
}

export interface Category {
  id: string;
  nameEn: string;
  nameBn: string;
  icon: string; // lucide icon name
  image?: string; // photo/picture URL for category visual
  count: number;
  subcategories: { id: string; nameEn: string; nameBn: string }[];
  popularBrands?: string[];
}

export interface AppReleaseInfo {
  version: string;
  buildNumber: number;
  releaseDate: string;
  titleBn: string;
  titleEn: string;
  notesBn: string;
  notesEn: string;
  isMandatory: boolean;
  apkDownloadUrl: string;
  playStoreUrl?: string;
  publishedAt: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  productId: string;
  text: string;
  timestamp: string;
  isOffer?: boolean;
  offerAmount?: number;
  offerStatus?: 'pending' | 'accepted' | 'declined';
  image?: string;
  status?: 'sent' | 'delivered' | 'seen';
}

export interface ChatThread {
  id: string;
  productId: string;
  productTitle: string;
  productImage: string;
  productPrice: number;
  seller: Seller;
  buyerId: string;
  buyerName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: ChatMessage[];
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type: 'message' | 'offer' | 'approval' | 'promotion' | 'system';
  link?: string;
}

export interface FilterState {
  category: string;
  subCategory: string;
  division: string;
  district: string;
  thana: string;
  minPrice: number | '';
  maxPrice: number | '';
  condition: string[];
  brand: string[];
  isVerifiedOnly: boolean;
  isNegotiableOnly: boolean;
  isDeliveryOnly: boolean;
  adType: string;
  searchQuery: string;
  sortBy: 'latest' | 'price_low' | 'price_high' | 'popular';
}
