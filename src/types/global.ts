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

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  sku: string;
  images: string[];
  shortDescription?: string;
  // discountPercentage: number;
  // discountPrice: number;
};

export type TProductCardProps = {
  product: TProduct;
};

export type TCategoryProduct = {
  _id: string;
  name: string;
  price: number;
  sku: string;
  images: string[];
  category: string;
  shortDescription?: string;
};

export type TCategoryProductCardProps = {
  product: TCategoryProduct;
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

export type TFeaturedProduct = {
  _id: string;
  name: string;
  price: number;
  images: string[];
  sku: string;
  discountPercentage: number;
  discountPrice: number;
};

export type TFeaturedProductCardProps = {
  product: TFeaturedProduct;
};

// My Cart page types
export type TMyCartProduct = {
  _id: string;
  name: string;
  sku: string;
  price: number;
  stockQuantity: number;
  images: string[];
};

export type TCartItem = {
  _id: string;
  productId: TMyCartProduct;
  quantity: number;
};

export type TQuantityItem = {
  id: string | number; // Adjust to the correct type of your product ID
  quantity: number;
};

export type MyCartTableProps = {
  item: TCartItem;
  quantities: TQuantityItem[];
  index: number;
  decrement: (product: TMyCartProduct) => void;
  increment: (product: TMyCartProduct) => void;
  setQuantity: (productId: string | number, quantity: number) => void;
  removeProduct: (product: TMyCartProduct) => void;
};
// Navbar sidebbar
export type TNavbarSidebarProps = {
  showSidebar: boolean;
  toggleSidebar: () => void;
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

export type TCartProduct = {
  _id: string;
  productId: {
    name: string;
    price: number;
  };
  quantity: number;
};

export type TProductWishlist = {
  _id: string;
  name: string;
  images: string;
  price: number;
};

export type TWishlistItem = {
  _id: string;
  productId: TProductWishlist;
};

export type TWishlistCardProps = {
  singleWishlist: TWishlistItem;
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
