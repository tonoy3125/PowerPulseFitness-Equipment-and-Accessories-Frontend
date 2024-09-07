import ProductBanner from "./ProductBanner";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <ProductBanner />

      <div className="container mx-auto mb-28">
        <div className="flex items-start gap-10 w-full">
          <div className="w-[450px]">
            <div className=" border-b-2 border-b-[#808080]">
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
                    <p className="checkbox-text">
                      Weightlifting Bars & Weights
                    </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
