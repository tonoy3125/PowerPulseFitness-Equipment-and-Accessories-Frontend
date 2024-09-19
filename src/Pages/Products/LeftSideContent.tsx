import { useEffect, useState } from "react";
import PriceFilter from "./PriceFilter";
import "./Products.css";

const categories = [
  "Cardio",
  "Weightlifting Bars And Weights",
  "Strength Equipments",
  "Conditioning",
  "Body Weight And Gymnastics",
  "Straps, Wraps And Support",
  "Fitness Accessories",
  "Yoga And Pilates",
  "Mats And Flooring",
  "Cross Training",
  "Equipment Packages",
  "Clearance",
  "BARBELLS",
  "RACKS And CAGES",
  "BENCHES",
  "FLOORING",
  "New Arrival",
];

const LeftSideContent = ({
  onCategorySelect,
  onPriceRangeSelect,
  initialCategories,
  initialPriceRange,
}) => {
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialCategories);
  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [resetPriceRange, setResetPriceRange] = useState(false);

  useEffect(() => {
    setSelectedCategories(initialCategories);
    setPriceRange(initialPriceRange);
  }, [initialCategories, initialPriceRange]);

  const handleCategoryClick = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onCategorySelect(updatedCategories); // Notify parent component about category change
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    onPriceRangeSelect(range); // Notify parent component about price range change
  };

  const handleReset = () => {
    setResetPriceRange(true); // Trigger reset in PriceFilter
    setTimeout(() => setResetPriceRange(false), 0); // Reset the flag after clearing
  };

  return (
    <div className="hidden lg:block w-[350px]">
      <div className=" border-b-[1px] border-b-[#808080] ">
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
      <div className="border-b-[1px] border-b-[#808080]">
        <h3 className="text-base font-poppins mt-5 font-semibold text-[#333333] mb-8">
          Filter
        </h3>
        <p className="text-[15px] font-poppins font-normal text-[#33333] mb-8">
          15 Products
        </p>
      </div>
      <div className="border-b-[1px] border-b-[#808080]">
        <h3 className="text-base font-poppins mt-5 font-semibold text-[#333333] mb-8">
          Availability
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-poppins font-normal text-[#33333] mb-8">
            0 selected
          </p>
          <p className="text-[15px] font-poppins font-normal text-[#33333] mb-8 border-b-[1px] border-b-black">
            Reset
          </p>
        </div>
        <div className="checkbox-container mb-5">
          <label className="checkbox-label">
            <input type="checkbox" className="hidden-checkbox" />
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
            <input type="checkbox" className="hidden-checkbox" />
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
