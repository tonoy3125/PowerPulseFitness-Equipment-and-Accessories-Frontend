import { logOut } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
      <div className="w-full flex items-center justify-between">
        <div className="w-2/3">
          <h1
            className="text-4xl font-oswald font-normal mb-4"
            style={{ lineHeight: "1", letterSpacing: "0.025em" }}
          >
            Order History
          </h1>
        </div>
        <div className="w-1/3">
          <h1
            className="text-3xl font-oswald font-normal mb-4"
            style={{ lineHeight: "1", letterSpacing: "0.025em" }}
          >
            Account Details
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Account;
