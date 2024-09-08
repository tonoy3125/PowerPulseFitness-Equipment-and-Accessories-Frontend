import "./Products.css";

const Drawer = ({ htmlFor }) => {
  return (
    <div className="drawer drawer-end top-0 z-50 lg:hidden">
      {/* Sidebar Drawer */}
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
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
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
