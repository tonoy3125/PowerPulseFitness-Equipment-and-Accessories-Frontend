import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useCreateCartMutation } from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "sonner";

const EyeModal = ({ images, name, price, sku, modalId, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [createCart] = useCreateCartMutation();
  const user = useAppSelector(selectCurrentUser); // Get current user's ID
  const userId = user?.id;
  const token = useAppSelector(useCurrentToken);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Add to Cart Handler
  const handleAddToCart = async () => {
    const toastId = toast.loading("Logging In...");
    const modal = document.getElementById(modalId);
    try {
      const cartData = {
        productId: id,
        userId,
        quantity: quantity,
      };

      await createCart({ token, data: cartData });
      toast.success("Product added to cart successfully!", {
        id: toastId,
        duration: 3000,
      });
      modal.close();
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  useEffect(() => {
    const modal = document.getElementById(modalId);

    const handleClickOutside = (event) => {
      // If the click target is the modal itself (backdrop), close the modal
      if (event.target.tagName === "DIALOG") {
        modal.close();
      }
    };

    // Add the event listener
    modal.addEventListener("click", handleClickOutside);

    return () => {
      // Cleanup the event listener when the component unmounts
      modal.removeEventListener("click", handleClickOutside);
    };
  }, [modalId]);

  return (
    <div className="">
      <dialog id={modalId} className="modal">
        <div className="modal-box  max-w-[750px] ">
          <form
            className="flex items-center justify-between border-b-[1px] pb-1"
            method="dialog"
          >
            {/* if there is a button in form, it will close the modal */}
            <h1 className="text-[#808080] font-poppins font-medium text-[15px]">
              Quickview
            </h1>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <div className="flex flex-col md:flex-row md:gap-8 mt-5">
            <div>
              <img className="w-96 border" src={images} alt="" />
            </div>
            <div className="pt-7 text-center md:text-start">
              <h1 className="font-poppins text-[15px] font-medium text-[#333333]  hover:text-[#F991A5] cursor-pointer">
                {name}
              </h1>

              <p className=" font-poppins text-[15px] font-medium text-[#333333] cursor-pointer pt-5">
                <span className="font-poppins font-semibold">Sku :</span> {sku}
              </p>
              <p className=" text-[15px] font-poppins font-semibold text-[#f87f96] pt-5 border-b-[1px] pb-5">
                ${price}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3 pt-7">
                <span className="font-poppins font-semibold text-[17px] text-[#333333] ">
                  Quantity :{" "}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    className="border px-3 py-[2px] text-xl font-poppins font-medium rounded-md"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value)))
                    }
                    className="text-center w-12 border border-gray-300 rounded-md p-1 text-[#808080]"
                    min="1"
                  />
                  <button
                    className="border px-3 py-[2px] text-xl font-poppins font-medium rounded-md"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="pt-7 flex items-center justify-center md:justify-start gap-5">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#f87f96] px-5 py-3 font-poppins font-semibold text-white rounded-md"
                >
                  Add To Cart
                </button>
                <FaRegHeart className="text-2xl text-[#f87f96] font-bold" />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EyeModal;
