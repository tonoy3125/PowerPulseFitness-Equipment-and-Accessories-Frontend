import { useEffect, useState } from "react";
import PriceFilter from "./PriceFilter";
import "./Products.css";
import { useLocation } from "react-router-dom";

const categories = [
  "Cardio",
  "Weightlifting Bars & Weights",
  "Strength Equipments",
  "Conditioning",
  "Body Weight & Gymnastics",
  "Straps, Wraps & Support",
  "Fitness Accessories",
  "Yoga & Pilates",
  "Mats & Flooring",
  "Cross Training",
  "Equipment Packages",
  "Clearance",
  "BARBELLS",
  "RACKS & CAGES",
  "BENCHES",
  "FLOORING",
  "New Arrival",
];

const LeftSideContent = ({
  onCategorySelect,
  onPriceRangeSelect,
  initialCategories,
  initialPriceRange,
  onStockAvailabilitySelect,
}) => {
  const location = useLocation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategories || []
  );
  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [resetPriceRange, setResetPriceRange] = useState(false);
  const [stockAvailability, setStockAvailability] = useState<string[]>([]);

  useEffect(() => {
    setSelectedCategories(initialCategories);
    setPriceRange(initialPriceRange);
  }, [initialCategories, initialPriceRange]);

  // Handle the default category from the location only on the first load.
  useEffect(() => {
    const selectedCategoryFromState = location.state?.selectedCategory;
    if (
      selectedCategoryFromState &&
      !initialCategories.includes(selectedCategoryFromState)
    ) {
      setSelectedCategories([selectedCategoryFromState]);
      onCategorySelect([selectedCategoryFromState]); // Pass the selected category to the parent
    }
  }, []); // Empty array ensures this effect runs only once on mount

  // Handle selecting and unselecting categories
  const handleCategoryClick = (category: string) => {
    const isSelected = selectedCategories.includes(category);
    const updatedCategories = isSelected
      ? selectedCategories.filter((c) => c !== category) // Remove if already selected
      : [...selectedCategories, category]; // Add if not selected

    setSelectedCategories(updatedCategories); // Update state
    onCategorySelect(updatedCategories); // Notify parent component
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    onPriceRangeSelect(range); // Notify parent component about price range change
  };

  const handleReset = () => {
    setResetPriceRange(true); // Trigger reset in PriceFilter
    setTimeout(() => setResetPriceRange(false), 0); // Reset the flag after clearing
  };

  const handleStockAvailabilityChange = (availability: string) => {
    const updatedAvailability = stockAvailability.includes(availability)
      ? stockAvailability.filter((a) => a !== availability)
      : [...stockAvailability, availability];

    setStockAvailability(updatedAvailability);
    onStockAvailabilitySelect(updatedAvailability); // Notify parent component
  };

  // Function to reset stock availability
  const handleResetStockAvailability = () => {
    setStockAvailability([]); // Reset stock availability to an empty array
    onStockAvailabilitySelect([]); // Notify parent component that filter is reset
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 5000 });
    setStockAvailability([]);
    setResetPriceRange(true); // Trigger price reset
    onCategorySelect([]);
    onPriceRangeSelect({ min: 0, max: 5000 }); // Notify parent
    onStockAvailabilitySelect([]);

    setTimeout(() => setResetPriceRange(false), 0); // Reset flag after clearing
  };

  // Calculate the number of selected availability options
  const selectedCount = stockAvailability.length;
  const activeFilters = [];

  if (priceRange.min > 0 || priceRange.max < 5000) {
    activeFilters.push({
      label: `$${priceRange.min} - $${priceRange.max}`,
      onRemove: () => handleReset(),
    });
  }

  if (selectedCategories.length > 0) {
    selectedCategories.forEach((category) => {
      activeFilters.push({
        label: category,
        onRemove: () => handleCategoryClick(category),
      });
    });
  }

  if (stockAvailability.length > 0) {
    stockAvailability.forEach((availability) => {
      activeFilters.push({
        label: availability,
        onRemove: () => handleStockAvailabilityChange(availability),
      });
    });
  }

  return (
    <div className="hidden lg:block w-[350px]">
      <div className=" border-b-[1px] border-b-[#808080] pb-2">
        <h3 className="text-base font-poppins font-semibold text-[#333333] mb-8">
          Categories
        </h3>
        {categories.map((category, index) => (
          <div className="checkbox-container mb-3" key={index}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="hidden-checkbox"
                checked={selectedCategories.includes(category)} // Handle multiple selection
                onChange={() => handleCategoryClick(category)} // Update on change
              />
              <div className="checkbox-content">
                <span className="checkbox-box">
                  <svg
                    className="checkmark"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="checkbox-text">{category}</p>
              </div>
              <p className="checkbox-count">(9)</p>
            </label>
          </div>
        ))}
      </div>
      {/* Show Active filter */}
      <div className="border-b-[1px] border-b-[#808080]">
        <h3 className="text-base font-poppins mt-5 font-semibold text-[#333333] mb-5">
          Filter
        </h3>
        {/* <p className="text-[15px] font-poppins font-normal text-[#33333] mb-8">
          15 Products
        </p> */}
        <div className="flex flex-wrap gap-2 mb-5">
          {activeFilters.length > 0 ? (
            <div className="active-filters-container">
              {activeFilters.map((filter, index) => (
                <div className="filter-button font-poppins" key={index}>
                  {filter.label}
                  <button onClick={filter.onRemove} className="remove-button">
                    ✖
                  </button>
                </div>
              ))}
              <button
                onClick={handleClearAll}
                className="clear-all-button font-poppins active-filters-container"
              >
                Clear All
              </button>
            </div>
          ) : (
            <p className="text-gray-500 font-poppins font-medium">
              No filters available
            </p>
          )}
        </div>
      </div>
      <div className="border-b-[1px] border-b-[#808080]">
        <h3 className="text-base font-poppins mt-5 font-semibold text-[#333333] mb-8">
          Availability
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-poppins font-normal text-[#33333] mb-8">
            {selectedCount} selected
          </p>
          <p
            onClick={handleResetStockAvailability}
            className="text-[15px] font-poppins font-normal text-[#33333] mb-8 border-b-[1px] border-b-black cursor-pointer"
          >
            Reset
          </p>
        </div>
        <div className="checkbox-container mb-5">
          <label className="checkbox-label">
            <input
              checked={stockAvailability.includes("In Stock")}
              onChange={() => handleStockAvailabilityChange("In Stock")}
              type="checkbox"
              className="hidden-checkbox"
            />
            <div className="checkbox-content">
              <span className="checkbox-box">
                <svg
                  className="checkmark"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="checkbox-text">In Stock</p>
            </div>
            <p className="checkbox-count">(15)</p>
          </label>
        </div>
        <div className="checkbox-container mb-5">
          <label className="checkbox-label">
            <input
              checked={stockAvailability.includes("Out of Stock")}
              onChange={() => handleStockAvailabilityChange("Out of Stock")}
              type="checkbox"
              className="hidden-checkbox"
            />
            <div className="checkbox-content">
              <span className="checkbox-box">
                <svg
                  className="checkmark"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="checkbox-text">Out Of Stock</p>
            </div>
            <p className="checkbox-count">(15)</p>
          </label>
        </div>
      </div>
      <div className="border-b-[1px] border-b-[#808080]">
        <h3 className="text-base font-poppins mt-5 font-semibold text-[#333333] mb-8">
          Availability
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-poppins font-normal text-[#33333] mb-8">
            The highest price is $589.00
          </p>
          <p
            onClick={handleReset}
            className="text-[15px] font-poppins font-normal text-[#33333] mb-8 border-b-[1px] border-b-black"
          >
            Reset
          </p>
        </div>
        <PriceFilter
          resetPriceRange={resetPriceRange}
          onPriceRangeChange={handlePriceRangeChange}
        />
      </div>
      <div className="mt-8">
        <img
          className="rounded-lg"
          src="https://i.ibb.co.com/gFpqJrs/Red-Modern-Masculine-Fitness-Class-Discount-Instagram-Post.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LeftSideContent;
