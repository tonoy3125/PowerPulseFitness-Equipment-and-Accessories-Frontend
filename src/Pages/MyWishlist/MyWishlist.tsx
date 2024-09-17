import { useGetWishlistQuery } from "@/redux/features/wishlist/wishlistApi";
import WishlistCard from "./WishlistCard";
import WishlistPageBanner from "@/components/WishlistPageBanner/WishlistPageBanner";
import { NavLink } from "react-router-dom";

const MyWishlist = () => {
  const { data: wishlist, isLoading } = useGetWishlistQuery(undefined); // Added refetch function and error handling

  const itemCount = wishlist?.data?.length || 0;

  return (
    <div>
      <WishlistPageBanner />
      <div className="container mx-auto pt-7 pb-20">
        <div className="flex items-center justify-between border-t-[1px] border-b-[1px] pt-2 pb-2">
          <h1 className="text-[#333333] text-lg font-semibold font-poppins">
            My Wishlist
          </h1>
          <h1 className="text-[#f87f96] font-semibold text-lg font-poppins border-b border-[#f87f96]">
            {itemCount} Item{itemCount !== 1 && "s"}
          </h1>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : itemCount === 0 ? (
          <div className="text-center mt-10 text-lg font-poppins">
            No product added to the wishlist
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 mt-5">
            {wishlist?.data?.map((singleWishlist) => (
              <WishlistCard
                key={singleWishlist?._id}
                singleWishlist={singleWishlist}
              />
            ))}
          </div>
        )}

        {/* Conditionally render buttons when itemCount is greater than 0 */}
        {itemCount > 0 && (
          <div className="flex flex-col semi-sm:flex-row items-center semi-sm:justify-between mt-4 border-b-[1px] pb-4 gap-3 semi-sm:gap-0">
            <NavLink to="/products">
              <button className="font-poppins font-semibold text-base text-[#fff] bg-[#f87f96] px-5 py-3 rounded-lg uppercase">
                Continue Shopping
              </button>
            </NavLink>
            <button className="font-poppins font-semibold text-base text-[#fff] bg-[#f87f96] px-5 py-3 rounded-lg uppercase">
              Clear Wishlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
