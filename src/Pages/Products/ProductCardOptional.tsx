import EyeModal from "@/components/Modal/EyeModal";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const ProductCardOptional = ({ product }) => {
  const { name, price, sku, stockQuantity, description, images, category } =
    product;

  const modalId = `modal_${sku}`;

  const openModal = () => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal(); // Use showModal() to open the modal
    }
  };

  return (
    <div className="w-full cursor-pointer">
      <div className="flex flex-col gap-8 items-center bg-white hover:border hover:shadow-xl hover:border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full p-3">
        <img
          className=" object-cover w-full rounded-lg h-80  md:w-80  md:rounded-lg border"
          src={images}
          alt={name}
        />
        <div className="pt-6 pb-5">
          <h1 className="font-poppins text-[15px] font-medium text-[#333333] text-start hover:text-[#F991A5] cursor-pointer">
            {name}
          </h1>
          <p className="text-start text-[15px] font-poppins font-semibold text-[#f87f96] pt-2">
            ${price}
          </p>
          <div className="flex justify-start mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#EFA505" // Static color for all stars
                className="w-5 h-5"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
          <p className="font-poppins text-[15px] font-medium text-[#6F6F6F] text-start  cursor-pointer pt-3">
            {description}
          </p>
          <div className="flex items-center gap-1 justify-start mt-6">
            <div>
              <button
                onClick={openModal}
                className="max-w-20 max-h-20 px-4 py-4 bg-[#fff] text-[#808080] border border-[#808080] hover:border-[#F87F96] hover:bg-[#F87F96] hover:text-white rounded-full cursor-pointer"
              >
                <IoEyeOutline className="text-lg" />
              </button>
              <EyeModal
                images={images}
                name={name}
                price={price}
                sku={sku}
                modalId={modalId}
              />
            </div>
            <div className="max-w-20 max-h-20 px-4 py-4 border bg-[#fff] text-[#808080] border-[#808080] hover:border-[#F87F96] hover:bg-[#F87F96] hover:text-white rounded-full cursor-pointer">
              <FiShoppingBag className="text-lg" />
            </div>
            <div className="max-w-20 max-h-20 px-4 py-4 border bg-[#fff] text-[#808080] border-[#808080] hover:border-[#F87F96] hover:bg-[#F87F96] hover:text-white rounded-full cursor-pointer">
              <CiHeart className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardOptional;
