import EyeModal from "@/components/Modal/EyeModal";
import { CiHeart, CiHeartFill } from "react-icons/ci"; // Import filled heart icon
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  useAddWishlistMutation,
  useRemoveWishlistMutation,
} from "@/redux/features/wishlist/wishlistApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlist,
} from "@/redux/features/wishlist/wishlistSlice";
import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const ProductCard = ({ product }) => {
  const { _id, name, price, images,sku } = product;
  const dispatch = useDispatch();
  const userId = useAppSelector(selectCurrentUser); // Get the current user's ID from Redux auth state
  const wishlist = useSelector((state) => selectWishlist(state, userId)); // Get user's specific wishlist
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [addWishlist] = useAddWishlistMutation();
  const [removeWishlist] = useRemoveWishlistMutation();

  useEffect(() => {
    // Check if the product is already in the user's wishlist
    setIsInWishlist(wishlist.includes(_id));
  }, [wishlist, _id]);

  const toggleWishlist = async () => {
    if (!userId) {
      console.log("User must be logged in to manage wishlist");
      return;
    }

    try {
      if (isInWishlist) {
        await removeWishlist(_id).unwrap(); // Call mutation for removing
        dispatch(removeFromWishlist({ userId, productId: _id })); // Remove from Redux
      } else {
        await addWishlist({ productId: _id }).unwrap(); // Call mutation for adding
        dispatch(addToWishlist({ userId, productId: _id })); // Add to Redux
      }
      setIsInWishlist(!isInWishlist); // Toggle local state
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  const modalId = `modal_${sku}`;

  const openModal = () => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal(); // Use showModal() to open the modal
    }
  };

  return (
    <div>
      <div className="pl-3 pr-3 pt-3 pb-3 hover:border hover:shadow-xl rounded-[10px] cursor-pointer">
        <div className="">
          <figure className="">
            <img
              className="w-full semi-sm:h-52 md:h-80 rounded-[10px]"
              src={images}
              alt={name}
            />
          </figure>
        </div>
        <div className="flex items-center gap-1 justify-center mt-6">
          <div>
            <button
              onClick={openModal}
              className="px-4 py-4 max-w-20 max-h-20 semi-sm:max-w-12 semi-sm:max-h-12 md:max-w-20 md:max-h-20 semi-sm:px-3 semi-sm:py-3 md:px-4 md:py-4 bg-[#fff] text-[#808080] border border-[#808080] hover:border-[#F87F96] hover:bg-[#F87F96] hover:text-white rounded-full cursor-pointer"
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
          <div className="px-4 py-4 max-w-20 max-h-20 semi-sm:max-w-12 semi-sm:max-h-12 md:max-w-20 md:max-h-20 semi-sm:px-3 semi-sm:py-3 md:px-4 md:py-4 border bg-[#fff] text-[#808080] border-[#808080] hover:border-[#F87F96] hover:bg-[#F87F96] hover:text-white rounded-full cursor-pointer">
            <FiShoppingBag className="text-lg" />
          </div>
          {/* Wishlist Button */}
          <div
            onClick={toggleWishlist}
            className="px-4 py-4 max-w-20 max-h-20 border bg-white text-gray-600 border-gray-600 hover:border-pink-400 hover:bg-pink-400 hover:text-white rounded-full cursor-pointer"
          >
            {isInWishlist ? (
              <AiFillHeart className="text-lg" /> // Filled heart icon
            ) : (
              <CiHeart className="text-lg" /> // Empty heart icon
            )}
          </div>
        </div>
        <div className="pt-6 pb-5">
          <h1 className="font-poppins text-[15px] font-medium text-[#333333] text-center hover:text-[#F991A5] cursor-pointer">
            {name}
          </h1>
          <p className="text-center text-[15px] font-poppins font-semibold text-[#f87f96] pt-2">
            ${price}
          </p>
          <Link to={`/products/${_id}`}>
            <div className="flex items-center justify-center mt-3 font-poppins font-medium">
              <button className="border px-3 py-2 rounded-md">
                View Details
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
