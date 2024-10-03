import { SortOption } from "@/Pages/Products/Product.constant";
import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TMetaData = {
  page: number;
  totalPage: number;
};

export type TPriceRange = {
  min: number;
  max: number;
};

export type TRightSideContentProps = {
  selectedCategories: string[];
  selectedPriceRange?: TPriceRange;
  selectedStockAvailability?: string[];
};

export type TLeftSideContentProps = {
  onCategorySelect: (categories: string[]) => void;
  onPriceRangeSelect: (range: TPriceRange) => void;
  initialCategories?: string[];
  initialPriceRange: TPriceRange;
  onStockAvailabilitySelect: (availability: string[]) => void;
};

export type TPriceFilterProps = {
  onPriceRangeChange?: (range: TPriceRange) => void;
  resetPriceRange?: boolean;
};

export type TRightSideUpperContentProps = {
  setSortOption: (option: SortOption) => void;
  isGridView: boolean;
  setIsGridView: (view: boolean) => void;
  setSearchTerm: (term: string) => void;
};

export type TQueryParams = {
  page: number;
  limit: number;
  searchTerm?: string;
  stockAvailability?: string[];
  category?: string[];
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
};

export type TCategory =
  | "Cardio"
  | "Weightlifting Bars & Weights"
  | "Strength Equipments"
  | "Conditioning"
  | "Body Weight & Gymnastics"
  | "Straps Wraps & Support"
  | "Fitness Accessories"
  | "Yoga & Pilates"
  | "Mats & Flooring"
  | "Cross Training"
  | "Equipment Packages"
  | "Clearance"
  | "BARBELLS"
  | "RACKS & CAGES"
  | "BENCHES"
  | "FLOORING"
  | "New Arrival";

export type TDiscountDurationUnit = "Minutes" | "Hours" | "Days";

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  sku: string;
  images: string[];
  shortDescription?: string;
};

export type TProductCardProps = {
  product: TProduct;
};

export type TProductData = {
  _id: string;
  name: string;
  price: number;
  sku: string;
  stockQuantity: number;
  shortDescription: string;
  longDescription: string;
  images: string[];
  category: TCategory;
  stockAvailability?: string;
  discountPrice?: number | undefined;
  discountPercentage?: number;
  discountStartTime?: Date;
  discountEndTime?: Date;
  discountDuration?: number;
  discountDurationUnit?: TDiscountDurationUnit;
  advertise?: boolean;
  isDeleted: boolean;
};

export type TProductDataProps = {
  product: TProductData;
};

export type TAccordionDemoProps = {
  longDescription: string;
  name: string;
};

export type TEyeModalProps = {
  images: string[];
  name: string;
  price: number;
  sku: string;
  modalId: string;
  id: string;
};

// Define an interface for the user
export type TUser = {
  email: string;
  role: string;
  iat: number; // Issued at time (Unix timestamp)
  exp: number; // Expiration time (Unix timestamp)
};

// Define an interface for the payload
export type TUserPayload = {
  user: TUser;
  id: string;
};

// Define a type for the images in state
export type TImageFile = {
  url: string;
  file: File;
};

export type TDrawerType = {
  htmlFor: string;
  onCategorySelect: (categories: string[]) => void;
  onPriceRangeSelect: (range: TPriceRange) => void;
  initialCategories: string[];
  initialPriceRange: TPriceRange;
  onStockAvailabilitySelect: (availability: string[]) => void;
};

// export type TShippingRates = {
//   Bangladesh: {
//     Dhaka: number;
//     Chattogram: number;
//     Khulna: number;
//     Barishal: number;
//     Rajshahi: number;
//     Sylhet: number;
//     Rangpur: number;
//     Mymensingh: number;
//   };
//   India: {
//     AndhraPradesh: number;
//     ArunachalPradesh: number;
//     Assam: number;
//     Bihar: number;
//     Chhattisgarh: number;
//     Goa: number;
//     Gujarat: number;
//     Haryana: number;
//     HimachalPradesh: number;
//     Jharkhand: number;
//     Karnataka: number;
//     Kerala: number;
//     MadhyaPradesh: number;
//     Maharashtra: number;
//     Manipur: number;
//     Meghalaya: number;
//     Mizoram: number;
//     Nagaland: number;
//     Odisha: number;
//     Punjab: number;
//     Rajasthan: number;
//     Sikkim: number;
//     TamilNadu: number;
//     Telangana: number;
//     Tripura: number;
//     UttarPradesh: number;
//     Uttarakhand: number;
//     WestBengal: number;
//   };
// };
