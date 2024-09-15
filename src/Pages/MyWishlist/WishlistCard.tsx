const WishlistCard = ({ singleWishlist }) => {
  console.log(singleWishlist);

  return (
    <div className="flex items-center justify-between border-b-[1px] pb-4">
      <div className="flex items-center gap-4">
        <img
          className="w-36 h-40 rounded cursor-pointer"
          src={singleWishlist.productId.images}
          alt=""
        />
        <h1 className="font-poppins text-base font-medium text-[#333333] hover:text-[#f87f96] cursor-pointer">
          {singleWishlist?.productId?.name}
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <button className="font-poppins font-medium text-base text-[#f87f96] underline">
          Add To Card
        </button>
        <button className="font-poppins font-medium text-base text-[#f87f96] underline">
          Buy Now
        </button>
      </div>
      <div>
        <p className="font-poppins font-medium text-base text-[#f87f96] underline">
          ${singleWishlist?.productId?.price}
        </p>
      </div>
    </div>
  );
};

export default WishlistCard;
