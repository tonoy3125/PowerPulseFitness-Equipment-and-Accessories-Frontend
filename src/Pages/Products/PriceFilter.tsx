import { useEffect, useState } from "react";
import "./Products.css";

const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState(() => {
    const savedPriceRange = localStorage.getItem("priceRange");
    return savedPriceRange
      ? JSON.parse(savedPriceRange)
      : { min: 0, max: 5000 };
  });

  useEffect(() => {
    localStorage.setItem("priceRange", JSON.stringify(priceRange));
    updateTrackBackground(); // Update track background whenever priceRange changes
  }, [priceRange]);

  // Handle changes for the min value
  const handleMinChange = (e) => {
    const newMin = Math.min(e.target.value, priceRange.max - 1);
    setPriceRange({ ...priceRange, min: newMin });
  };

  // Handle changes for the max value
  const handleMaxChange = (e) => {
    const newMax = Math.max(e.target.value, priceRange.min + 1);
    setPriceRange({ ...priceRange, max: newMax });
  };

  // Update the background of the slider to show the selected range
  const updateTrackBackground = () => {
    const rangeInput = document.getElementById("priceRangeMin");
    const minPercentage =
      ((priceRange.min - rangeInput.min) / (rangeInput.max - rangeInput.min)) *
      100;
    const maxPercentage =
      ((priceRange.max - rangeInput.min) / (rangeInput.max - rangeInput.min)) *
      100;
    const track = document.querySelector(
      ".slider-container .custom-range-track-active"
    );
    track.style.left = `${minPercentage}%`;
    track.style.right = `${100 - maxPercentage}%`;
  };

  return (
    <div>
      <div className="slider-container">
        {/* Min thumb slider */}
        <input
          id="priceRangeMin"
          type="range"
          min="0"
          max="5000"
          value={priceRange.min}
          onChange={handleMinChange}
          className="custom-range slider-thumb thumb-min"
        />
        {/* Max thumb slider */}
        <input
          id="priceRangeMax"
          type="range"
          min="0"
          max="5000"
          value={priceRange.max}
          onChange={handleMaxChange}
          className="custom-range slider-thumb thumb-max"
        />
        {/* Track to show the selected range */}
        <div className="custom-range-track-active"></div>
      </div>

      {/* Price Input Fields */}
      <div className="flex justify-between gap-4 mb-5">
        <div>
          <span className="text-xs font-poppins font-normal text-[#333333]">
            From
          </span>
          <div className="flex items-center w-[100px] lg:w-[160px] border border-[#808080] rounded-md px-[10px] py-2">
            <span className="w-[20px] text-[#333333] font-poppins">$</span>
            <input
              className="w-[60px] lg:w-[120px] bg-[#f2f6f6] text-[#6F6F6F] font-poppins text-right"
              type="number"
              min="0"
              max="5000"
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
          <div className="flex items-center w-[100px] lg:w-[160px] border border-[#808080] rounded-md px-[10px] py-2">
            <span className="w-[20px] text-[#333333] font-poppins">$</span>
            <input
              className="w-[60px] lg:w-[120px] bg-[#f2f6f6] text-[#6F6F6F] font-poppins text-right"
              type="number"
              min="0"
              max="5000"
              value={priceRange.max}
              onChange={handleMaxChange}
              placeholder="5000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
