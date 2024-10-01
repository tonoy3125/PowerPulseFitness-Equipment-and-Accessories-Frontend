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
};

// Define a type for the images in state
export type TImageFile = {
  url: string;
  file: File;
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
