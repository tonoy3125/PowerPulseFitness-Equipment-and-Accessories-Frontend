const DashboardAddDiscount = () => {
  return (
    <div className="flex items-center justify-center mt-48 ">
      <div className="border w-full lg:w-1/2 p-2 semi-sm:p-4 rounded-md bg-[#FFFFFF]">
        <h5 className="font-poppins font-medium text-lg mb-3">Add Discount</h5>
        <div className="border p-4">
          <div className="mb-7">
            <h2 className="text-base font-normal text-[#1D1D1F] mb-2 font-poppins">
              Product SKU
            </h2>
            <input
              className="pt-3 pb-3 pl-3 w-full mx-auto border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-poppins   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
              type="text"
              id=""
              placeholder="Enter Product SKU"
            />
          </div>
          <div className="mb-7">
            <h2 className="text-base font-normal text-[#1D1D1F] mb-2 font-poppins">
              Product Percentage
            </h2>
            <input
              className="pt-3 pb-3 pl-3 w-full mx-auto border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-poppins   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
              type="text"
              id=""
              placeholder="Enter Product Percentage"
            />
          </div>
          <div className="mb-7">
            <h2 className="text-base font-normal text-[#1D1D1F] mb-2 font-poppins">
              Product Discount Duration
            </h2>
            <input
              className="pt-3 pb-3 pl-3 w-full mx-auto border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-poppins   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
              type="text"
              id=""
              placeholder="Enter Product Discount Duration"
            />
          </div>
          <div className="mb-7">
            <h2 className="text-base font-normal text-[#1D1D1F] mb-2 font-poppins">
              Product Discount Unit
            </h2>
            <select
              className="pt-3 pb-3 pl-3 w-full mx-auto border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-poppins focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
              id="productUnit"
            >
              <option value="">Select Unit</option>
              <option value="Minutes">Minutes</option>
              <option value="Hours">Hours</option>
              <option value="Days">Days</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAddDiscount;
