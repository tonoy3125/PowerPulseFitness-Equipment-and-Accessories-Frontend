import { logOut } from "@/redux/features/auth/authSlice";
import { useGetUserOrderItemsQuery } from "@/redux/features/checkout/checkoutApi";
import { useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: orderData } = useGetUserOrderItemsQuery(undefined);
  // console.log(orderData);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="container mx-auto pt-20 pb-20">
      <h1
        className="text-4xl font-poppins font-medium mb-4 text-center"
        style={{ lineHeight: "1", letterSpacing: "0.025em" }}
      >
        My Account
      </h1>
      <div className="flex items-center justify-center pb-10">
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
            <p className="font-poppins text-base mt-2 underline">Wishlist</p>
            <p className="font-poppins text-base mt-2 underline">
              View addresses (1)
            </p>
          </div>
          <div>
            <h3 className="font-poppins text-lg font-medium ">
              Account details
            </h3>
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
