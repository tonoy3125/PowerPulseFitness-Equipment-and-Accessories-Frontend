import {
  logOut,
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useGetUserOrderItemsQuery } from "@/redux/features/checkout/checkoutApi";
import { useGetWishlistQuery } from "@/redux/features/wishlist/wishlistApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TUserPayload } from "@/types";
import { Link, useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser) as TUserPayload | null; // Get current user's ID
  const token = useAppSelector(useCurrentToken);
  const userFullname = user?.user?.fullName;
  const userEmail = user?.user?.email;
  const { data: orderData } = useGetUserOrderItemsQuery(undefined);
  // console.log(orderData);
  const { data: wishlistData } = useGetWishlistQuery(token, {
    skip: !token, // Only run the query if the user is logged in and has a token
  });

  const totalWishlistItems = wishlistData?.data?.length || 0;

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="container mx-auto pt-20 pb-20">
      <h3 className="font-poppins text-lg font-medium text-[#f87f96] text-center mb-4">
        Welcome
      </h3>
      <h1
        className="text-4xl font-poppins font-medium mb-5 text-center"
        style={{ lineHeight: "1", letterSpacing: "0.025em" }}
      >
        {userFullname}
      </h1>
      <div className="flex items-center justify-center pb-12">
        <button
          onClick={handleLogout}
          className="text-[#1d1d1f] border border-[#e8e8e1] text-sm uppercase font-oswald py-3 px-4 bg-transparent hover:border-[#1d1d1f]"
          style={{ lineHeight: "1", letterSpacing: "0.3em" }}
        >
          Log out
        </button>
      </div>
      <div className="border-[1px] border-dashed border-[#C6C6C6] p-6">
        <div className="flex items-center gap-[500px]">
          <div>
            <h3 className="font-poppins text-lg font-medium">My account</h3>
            <p className="font-poppins text-base mt-2 underline hover:text-[#f87f96] cursor-pointer ">
              Wishlist{" "}
              {totalWishlistItems > 0 && <span> ({totalWishlistItems})</span>}
            </p>
            <Link to="/account/addresses">
              <p className="font-poppins text-base mt-2 underline hover:text-[#f87f96] cursor-pointer">
                View addresses (1)
              </p>
            </Link>
          </div>
          <div>
            <h3 className="font-poppins text-lg font-medium ">
              Account details
            </h3>
            <p className="font-poppins text-base mt-2">{userFullname}</p>
            <p className="font-poppins text-base mt-2">{userEmail}</p>
          </div>
        </div>
      </div>
      <h3 className="font-poppins text-lg font-semibold mt-5 mb-5">
        Order history
      </h3>
      <div className="border-[1px] border-dashed border-[#C6C6C6] p-6">
        {/* {
          orderData?.data?.map((order)=>)
        } */}
      </div>
    </div>
  );
};

export default Account;
