import { useEffect, useState } from "react";
import "./Products.css";

const PriceFilter = () => {
  // Initialize state with values from localStorage or default to {min: 0, max: 0}
  const [priceRange, setPriceRange] = useState(() => {
    const savedPriceRange = localStorage.getItem("priceRange");
    return savedPriceRange ? JSON.parse(savedPriceRange) : { min: 0, max: 0 };
  });

  // Update localStorage whenever priceRange changes
  useEffect(() => {
    localStorage.setItem("priceRange", JSON.stringify(priceRange));
  }, [priceRange]);

  const handleMinChange = (e) => {
    setPriceRange({ ...priceRange, min: e.target.value });
  };

  const handleMaxChange = (e) => {
    setPriceRange({ ...priceRange, max: e.target.value });
  };

  return (
    <div>
      {/* Filter design low to high */}
      <div>
        <div className="mb-4">
          <input
            id="priceRange"
            className="w-full mt-2 custom-range"
            type="range"
            min="0"
            max="5000"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex justify-between gap-4 mb-5">
        <div>
          <span className="text-xs font-poppins font-normal text-[#333333]">
            From
          </span>
          <div className="flex items-center w-[180px] border border-[#808080] rounded-md px-[10px] py-2">
            <span className="w-[20px] text-[#333333] font-poppins">$</span>
            <input
              className="w-[120px] bg-[#f2f6f6] text-[#6F6F6F] font-poppins text-right"
              type="number"
              min="0"
              value={priceRange.min}
              onChange={handleMinChange}
              placeholder="0000"
            />
          </div>
        </div>

        <div>
          <span className="text-xs font-poppins font-normal text-[#333333]">
            To
          </span>
          <div className="flex items-center w-[180px] border border-[#808080] rounded-md px-[10px] py-2">
            <span className="w-[20px] text-[#333333] font-poppins">$</span>
            <input
              className="w-[120px] bg-[#f2f6f6] text-[#6F6F6F] font-poppins text-right"
              type="number"
              min={priceRange.min}
              value={priceRange.max}
              onChange={handleMaxChange}
              placeholder="0000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
