import ProductBanner from "./ProductBanner";
import "./Products.css";
import Drawer from "./Drawer";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import { useState } from "react";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: 0,
    max: 5000,
  });

  // Handle category selection
  const handleCategorySelect = (categories: string[]) => {
    setSelectedCategories(categories); // Update selected categories state
  };

  return (
    <div>
      <ProductBanner />
      <div className="container mx-auto mb-28">
        <div className="flex items-start gap-10 w-full">
          <LeftSideContent
            onPriceRangeSelect={setSelectedPriceRange}
            onCategorySelect={handleCategorySelect}
          />
          <RightSideContent
            selectedPriceRange={selectedPriceRange}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
      <Drawer onCategorySelect={handleCategorySelect} htmlFor="my-drawer-4" />
    </div>
  );
};

export default Products;
