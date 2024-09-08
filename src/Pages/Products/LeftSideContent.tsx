import PriceFilter from "./PriceFilter";
import "./Products.css";
const LeftSideContent = () => {
  return (
    <div className="hidden lg:block w-[450px]">
      <div className=" border-b-[1px] border-b-[#808080] ">
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
    </div>
  );
};

export default LeftSideContent;
