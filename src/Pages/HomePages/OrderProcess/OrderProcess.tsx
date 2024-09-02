import { FaTruck } from "react-icons/fa";
import { FiCreditCard, FiHeadphones } from "react-icons/fi";
import { LuRefreshCcw } from "react-icons/lu";

const OrderProcess = () => {
  return (
    <div className="container mx-auto pt-28 pb-28">
      <div className="grid grid-cols-4 gap-7">
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Image */}
            <img
              className="w-[90px] h-[90px]"
              src="https://i.ibb.co/pjswxxH/pattern.webp"
              alt="Pattern"
            />
            {/* Icon overlay */}
            <FaTruck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
          </div>
          <div>
            <h4 className="font-poppins text-lg font-semibold">
              Speedy delivery
            </h4>
            <p className="font-poppins text-base font-normal text-[#808080]">
              Orders from all item
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Image */}
            <img
              className="w-[90px] h-[90px]"
              src="https://i.ibb.co/pjswxxH/pattern.webp"
              alt="Pattern"
            />
            {/* Icon overlay */}
            <LuRefreshCcw className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
          </div>
          <div>
            <h4 className="font-poppins text-lg font-semibold">Easy returns</h4>
            <p className="font-poppins text-base font-normal text-[#808080]">
              On all unused items
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Image */}
            <img
              className="w-[90px] h-[90px]"
              src="https://i.ibb.co/pjswxxH/pattern.webp"
              alt="Pattern"
            />
            {/* Icon overlay */}
            <FiHeadphones className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
          </div>
          <div>
            <h4 className="font-poppins text-lg font-semibold">
              Online support
            </h4>
            <p className="font-poppins text-base font-normal text-[#808080]">
              Always online 24/7
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Image */}
            <img
              className="w-[90px] h-[90px]"
              src="https://i.ibb.co/pjswxxH/pattern.webp"
              alt="Pattern"
            />
            {/* Icon overlay */}
            <FiCreditCard className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
          </div>
          <div>
            <h4 className="font-poppins text-lg font-semibold">
              Secure payment
            </h4>
            <p className="font-poppins text-base font-normal text-[#808080]">
              100% Secure payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
