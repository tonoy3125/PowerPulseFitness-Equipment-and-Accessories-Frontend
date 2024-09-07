import ProductBanner from "./ProductBanner";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <ProductBanner />

      <div className="container mx-auto">
        <div className="flex items-start gap-10 w-full">
          <div className="w-[450px]">
            <h3 className="text-base font-poppins font-semibold text-[#333333] mb-8">
              Categories
            </h3>
            <div className="checkbox-container">
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
                  <p className="checkbox-text">Cardio</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
