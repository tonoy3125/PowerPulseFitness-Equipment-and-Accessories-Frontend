import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import RightSideUpperContent from "./RightSideUpperContent";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import ProductCardOptional from "./ProductCardOptional";

const RightSideContent = ({ selectedCategories, selectedPriceRange }) => {
  const [sortOption, setSortOption] = useState(() => {
    // Load the saved sort option from localStorage, default to "Featured"
    return localStorage.getItem("selectedSortOption") || "Featured";
  });
  // Load the grid/list view state from localStorage on page load
  const [isGridView, setIsGridView] = useState(() => {
    const savedView = localStorage.getItem("isGridView");
    return savedView ? JSON.parse(savedView) : true; // Default to grid view if nothing is saved
  });

  const queryParams: any = {};

  // Handle categories
  if (selectedCategories.length > 0) {
    queryParams.category = selectedCategories;
  }

  // Handle price range
  if (selectedPriceRange) {
    queryParams.minPrice = selectedPriceRange.min;
    queryParams.maxPrice = selectedPriceRange.max;
  }

  // Add sorting
  if (sortOption === "Price, low to high") {
    queryParams.sort = "price_low_to_high";
  } else if (sortOption === "Price, high to low") {
    queryParams.sort = "price_high_to_low";
  }

  const { data: productData } = useGetAllProductsQuery(queryParams);

  // Save the grid/list view state whenever it changes
  useEffect(() => {
    localStorage.setItem("isGridView", JSON.stringify(isGridView));
  }, [isGridView]);

  useEffect(() => {
    // Save the selected sort option to localStorage whenever it changes
    localStorage.setItem("selectedSortOption", sortOption);
  }, [sortOption]);

  // Clear the grid/list view state when the component is unmounted (navigating away)
  useEffect(() => {
    return () => {
      localStorage.removeItem("isGridView");
      localStorage.removeItem("selectedSortOption");
    };
  }, []);
  return (
    <div className="">
      <RightSideUpperContent
        setSortOption={setSortOption}
        isGridView={isGridView}
        setIsGridView={setIsGridView}
      />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {isGridView
          ? productData?.data?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          : productData?.data?.map((product) => (
              <ProductCardOptional key={product._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default RightSideContent;
