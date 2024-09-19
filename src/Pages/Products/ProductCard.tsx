import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToggleWishlistMutation } from "@/redux/features/wishlist/wishlistApi"; // Use only one API call for toggling
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlist,
} from "@/redux/features/wishlist/wishlistSlice";
import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import EyeModal from "@/components/Modal/EyeModal";
import { useCreateCartMutation } from "@/redux/features/cart/cartApi";

const ProductCard = ({ product }) => {
  const { _id, name, price, images, sku } = product;
  const dispatch = useDispatch();
  const user = useAppSelector(selectCurrentUser); // Get current user's ID
  const userId = user?.id;
  const token = useAppSelector(useCurrentToken); // Get current user's token
  const wishlist = useSelector((state) => selectWishlist(state, userId)); // Get user's specific wishlist
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [toggleWishlist] = useToggleWishlistMutation(); // Use only one mutation for add/toggle
  const [createCart] = useCreateCartMutation();

  useEffect(() => {
    // Check if the product is already in the user's wishlist
    setIsInWishlist(wishlist.includes(_id));
  }, [wishlist, _id]);

  const toggleWishlistByUserIdAndToken = async () => {
    if (!userId || !token) {
      console.log("User must be logged in and have a token to manage wishlist");
      return;
    }

    try {
      await toggleWishlist({ token, productId: _id }).unwrap(); // Use only one mutation for toggling
      if (isInWishlist) {
        // If already in wishlist, we remove it locally
        dispatch(removeFromWishlist({ userId, productId: _id }));
      } else {
        // If not in wishlist, we add it locally
        dispatch(addToWishlist({ userId, productId: _id }));
      }
      setIsInWishlist(!isInWishlist); // Toggle the state
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  const handleAddToCart = async () => {
    if (!token) {
      console.log("User must be logged in to add items to the cart");
      return;
    }

    try {
      await createCart({
        userId,
        data: { userId, productId: _id, quantity: 1 },
      }).unwrap(); // Pass product data to the cart mutation
      console.log("Product added to cart successfully");
    } catch (error) {
      console.error("Error adding product to cart:", error);
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
        <div>
          <figure>
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
            {/* Your modal component */}
            <EyeModal
              images={images}
              name={name}
              price={price}
              sku={sku}
              modalId={modalId}
            />
          </div>
          <div
            onClick={handleAddToCart}
            className="px-4 py-4 max-w-20 max-h-20 semi-sm:max-w-12 semi-sm:max-h-12 md:max-w-20 md:max-h-20 semi-sm:px-3 semi-sm:py-3 md:px-4 md:py-4 border bg-[#fff] text-[#808080] border-[#808080] hover:border-[#F87F96] hover:bg-[#F87F96] hover:text-white rounded-full cursor-pointer"
          >
            <FiShoppingBag className="text-lg" />
          </div>
          {/* Wishlist Button */}
          <div
            onClick={toggleWishlistByUserIdAndToken}
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
