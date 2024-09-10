import ProductBanner from "./ProductBanner";
import "./Products.css";
import Drawer from "./Drawer";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import { useState } from "react";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Handle category selection
  const handleCategorySelect = (categories: string[]) => {
    setSelectedCategories(categories); // Update selected categories state
  };

  return (
    <div>
      <ProductBanner />
      <div className="container mx-auto mb-28">
        <div className="flex items-start gap-10 w-full">
          <LeftSideContent onCategorySelect={handleCategorySelect} />
          <RightSideContent selectedCategories={selectedCategories} />
        </div>
      </div>
      <Drawer onCategorySelect={handleCategorySelect} htmlFor="my-drawer-4" />
    </div>
  );
};

export default Products;
