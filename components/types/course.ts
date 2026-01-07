export interface Course {
  id: string;
  category: "Development" | "Data Science" | "Design" | "Business";
  image?: string;
  title?: string;
  slug?: string;
  instructor?: string;
  rating?: number;
  reviews?: string;
  currentPrice?: string;
  originalPrice?: string;
  badgeText?: string;
  isVerified?: boolean;
}