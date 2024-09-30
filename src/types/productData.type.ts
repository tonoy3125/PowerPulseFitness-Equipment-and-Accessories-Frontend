export type TProductData = {
  _id: string;
  name: string;
  price: number;
  sku: string;
  stockQuantity: number;
  description: string;
  images: string[];
  category: string;
  discountPrice?: number;
  discountPercentage?: number;
  discountStartTime?: Date;
  discountEndTime?: Date;
  discountDuration?: number;
  isDeleted: boolean;
};
