import { CiCircleList, CiGrid41 } from "react-icons/ci";
import ProductBanner from "./ProductBanner";
import "./Products.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";

const Products = () => {
  const [selectedOption, setSelectedOption] = useState("Featured");

  // Load the saved option from localStorage when the component mounts
  useEffect(() => {
    const savedOption = localStorage.getItem("selectedSortOption");
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);

  // Handle click and save the selected option to localStorage
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem("selectedSortOption", option);
  };

  return (
    <div>
      <ProductBanner />

      <div className="container mx-auto mb-28">
        <div className="flex items-start gap-10 w-full">
          <div className="w-[450px] border-b-2 border-b-[#808080] hidden lg:block">
            <h3 className="text-base font-poppins font-semibold text-[#333333] mb-8">
              Categories
            </h3>
            <div className="checkbox-container mb-3">
              <label className="checkbox-label ">
                <div>
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
                    <p className="checkbox-text">Cardio</p>
                  </div>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Weightlifting Bars & Weights</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Strength Equipments</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Conditioning</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Body Weight & Gymnastics</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Straps, Wraps & Support</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Fitness Accessories</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Yoga & Pilates</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Mats & Flooring</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Cross Training</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Equipment Packages</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">Clearance</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">BARBELLS</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">RACKS & CAGES</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">BENCHES</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
            <div className="checkbox-container mb-3">
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
                  <p className="checkbox-text">FLOORING</p>
                </div>
                <p className="checkbox-count">(9)</p>
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
                  <p className="checkbox-text">New Arrival</p>
                </div>
                <p className="checkbox-count">(9)</p>
              </label>
            </div>
          </div>
          <div className="">
            <h3 className="text-base font-poppins font-semibold text-[#333333] mb-8">
              Products (15)
            </h3>
            <img
              className="rounded-[10px]"
              src="https://i.ibb.co.com/CPGhC1d/collection-banner.webp"
              alt=""
            />

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-3">
                <CiGrid41 className="text-xl text-[#333333]" />
                <CiCircleList className="text-xl text-[#333333]" />
              </div>
              <div>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} className="flex items-center w-full">
                    <div className="flex items-center gap-5">
                      <span className="text-[15px] text-[#f87f96] font-normal font-poppins">
                        Sort by:
                      </span>
                      <div className="text-[15px] text-[#333333] font-normal font-poppins">
                        {selectedOption}
                      </div>
                    </div>
                    <div>
                      <MdOutlineKeyboardArrowDown className="text-lg" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  bg-[#FFFFFF]  z-[1] w-[245px] p-3 shadow-xl space-y-5"
                  >
                    <li onClick={() => handleOptionClick("Featured")}>
                      <a className="text-[#333333] text-[15px] font-poppins font-medium hover:text-[#f87f96] cursor-pointer ">
                        Featured
                      </a>
                    </li>
                    <li onClick={() => handleOptionClick("Best selling")}>
                      <a className="text-[#333333] text-[15px] font-poppins font-medium hover:text-[#f87f96] cursor-pointer ">
                        Best selling
                      </a>
                    </li>
                    <li
                      onClick={() => handleOptionClick("Alphabetically, A-Z")}
                    >
                      <a className="text-[#333333] text-[15px] font-poppins font-medium hover:text-[#f87f96] cursor-pointer ">
                        Alphabetically, A-Z
                      </a>
                    </li>
                    <li
                      onClick={() => handleOptionClick("Alphabetically, Z-A")}
                    >
                      <a className="text-[#333333] text-[15px] font-poppins font-medium hover:text-[#f87f96] cursor-pointer ">
                        Alphabetically, Z-A
                      </a>
                    </li>
                    <li onClick={() => handleOptionClick("Price, low to high")}>
                      <a className="text-[#333333] text-[15px] font-poppins font-medium hover:text-[#f87f96] cursor-pointer ">
                        Price, low to high
                      </a>
                    </li>
                    <li onClick={() => handleOptionClick("Price, high to low")}>
                      <a className="text-[#333333] text-[15px] font-poppins font-medium hover:text-[#f87f96] cursor-pointer ">
                        Price, high to low
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
