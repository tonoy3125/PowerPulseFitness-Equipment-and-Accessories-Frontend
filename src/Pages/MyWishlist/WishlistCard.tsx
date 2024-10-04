import { useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";

import { removeFromWishlist } from "@/redux/features/wishlist/wishlistSlice"; // Single action to update the store
import { useAppSelector } from "@/redux/hooks";
import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import Spinner from "@/components/Spinner/Spinner";
import { useToggleWishlistMutation } from "@/redux/features/wishlist/wishlistApi";
import { toast } from "sonner";
import { TUserPayload, TWishlistCardProps } from "@/types";

const WishlistCard = ({ singleWishlist }: TWishlistCardProps) => {
  const dispatch = useDispatch();
  const [toggleWishlist, { isLoading }] = useToggleWishlistMutation(); // Single mutation for add/remove
  const user = useAppSelector(selectCurrentUser) as TUserPayload | null; // Get current user's ID
  const userId = user?.id as string;
  const token = useAppSelector(useCurrentToken); // Get current user's token

  const handleWishlistClick = async () => {
    const toastId = toast.loading("Loading...");
    try {
      // Toggle the wishlist (either add or remove)
      const response = await toggleWishlist({
        token,
        productId: singleWishlist.productId._id,
      }).unwrap(); // Handle both add and remove

      if (response) {
        // Update the store with the new wishlist state
        dispatch(
          removeFromWishlist({
            userId,
            productId: singleWishlist.productId._id,
          })
        );
        toast.success("Product removed from wishlist successfully!", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Failed to toggle wishlist", error);
    }
  };

  return (
    <div>
      <div className="flex items-start md:items-center flex-col md:flex-row justify-between border-b-[1px] pb-4">
        <div className="flex items-center gap-4">
          <img
            className="w-36 h-40 rounded cursor-pointer"
            src={singleWishlist.productId.images}
            alt={singleWishlist.productId.name}
          />
          <h1 className="font-poppins text-base font-medium text-[#333333] hover:text-[#f87f96] cursor-pointer">
            {singleWishlist?.productId?.name}
          </h1>
        </div>
        <div className="lg:flex flex-col gap-3 hidden">
          <button className="font-poppins font-medium text-base text-[#f87f96] underline">
            Add To Cart
          </button>
          <button className="font-poppins font-medium text-base text-[#f87f96] underline">
            Buy Now
          </button>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-between md:justify-start w-full md:w-auto">
          <p className="font-poppins font-medium text-base text-[#f87f96] underline">
            ${singleWishlist?.productId?.price}
          </p>
          {/* Wishlist Button with Spinner */}
          <button onClick={handleWishlistClick} className="text-2xl">
            {isLoading ? (
              <div className="text-lg">
                <Spinner />
              </div>
            ) : (
              <AiFillHeart className="text-lg" />
            )}
          </button>
        </div>
      </div>
      <div className="lg:hidden gap-3 flex justify-between mt-5 mb-3">
        <button className="font-poppins font-medium text-base text-[#f87f96] underline">
          Add To Cart
        </button>
        <button className="font-poppins font-medium text-base text-[#f87f96] underline">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
