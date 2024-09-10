import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import PriceFilter from "./PriceFilter";
import "./Products.css";
import { useState } from "react";

type DrawerType = {
  htmlFor: string;
  onCategorySelect?: (categories: string[]) => void;
};

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

const Drawer = ({ htmlFor, onCategorySelect }: DrawerType) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Query parameters
  const queryParams =
    selectedCategories.length > 0 ? { category: selectedCategories } : {};

  const { data: productData } = useGetAllProductsQuery(queryParams);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
    if (onCategorySelect) {
      onCategorySelect(
        selectedCategories.includes(category)
          ? selectedCategories.filter((c) => c !== category)
          : [...selectedCategories, category]
      );
    }
  };

  return (
    <div className="drawer drawer-end top-0 z-50 lg:hidden">
      {/* Sidebar Drawer */}
      <input id={htmlFor} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* You can put other content here if needed */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          aria-label="close sidebar"
        ></label>
        <ul className="p-4 w-72 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="border-b-2 border-b-[#808080]">
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
              <p className="text-[15px] font-poppins font-normal text-[#33333] mb-8 border-b-[1px] border-b-black">
                Reset
              </p>
            </div>
            <PriceFilter />
          </div>
          <div className="mt-8">
            <img
              className="rounded-lg"
              src="https://i.ibb.co.com/gFpqJrs/Red-Modern-Masculine-Fitness-Class-Discount-Instagram-Post.png"
              alt=""
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
