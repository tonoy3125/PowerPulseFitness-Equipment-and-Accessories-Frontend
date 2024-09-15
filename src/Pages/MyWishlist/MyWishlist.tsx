import { useGetWishlistQuery } from "@/redux/features/wishlist/wishlistApi";
import WishlistCard from "./WishlistCard";

const MyWishlist = () => {
  const { data: wishlist } = useGetWishlistQuery(undefined);
  console.log(wishlist);

  return (
    <div className="container mx-auto pt-20 pb-20">
      <div className="flex items-center justify-between border-t-[1px] border-b-[1px] pt-2 pb-2">
        <h1 className="text-[#333333] text-lg font-semibold font-poppins">
          My Wishlist
        </h1>
        <h1 className="text-[#f87f96] font-semibold text-lg font-poppins border-b border-[#f87f96]">
          2 Item
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {wishlist?.data?.map((singleWishlist) => (
          <WishlistCard
            key={singleWishlist?._id}
            singleWishlist={singleWishlist}
          ></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;
