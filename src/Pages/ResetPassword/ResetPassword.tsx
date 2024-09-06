import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // Parse the query parameters
  const email = searchParams.get("email"); // Get email from URL
  const token = searchParams.get("token"); // Get token from URL

  console.log("Email Is", email);
  console.log("The Token is", token);
  return (
    <div className="pt-14 lg:pt-20 pb-32 md:pb-60">
      <h1
        className="text-4xl font-oswald font-normal mb-4 text-center"
        style={{ lineHeight: "1", letterSpacing: "0.025em" }}
      >
        Reset account password
      </h1>
      <h2
        className="xs:text-xs sm:text-sm semi-sm:text-base font-normal text-[#1D1D1F] mb-10 uppercase font-oswald text-center"
        style={{ lineHeight: "1.6", letterSpacing: "0.025em" }}
      >
        Enter a new password for {email}
      </h2>
      <form>
        <div className="mb-7 ml-3 semi-sm:ml-4 md:ml-36 lg:ml-[730px]">
          <div className="relative">
            <input
              className="pt-3 pb-3 pl-3 w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
              type={showPassword ? "text" : "password"}
              id=""
              placeholder="New Password"
            />
            <span
              className="absolute right-6 semi-sm:right-8 md:right-[175px] lg:right-[725px] top-4 rtl:left-0 rtl:right-auto "
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="text-xl"></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye className="text-xl"></AiOutlineEye>
              )}
            </span>
          </div>
        </div>
        <div className="mb-7 ml-3 semi-sm:ml-4 md:ml-36 lg:ml-[730px]">
          <div className="relative">
            <input
              className="pt-3 pb-3 pl-3 w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
              type={showPassword ? "text" : "password"}
              id=""
              placeholder="Confirm New Password"
            />
            <span
              className="absolute right-6 semi-sm:right-8 md:right-[175px] lg:right-[725px] top-4 rtl:left-0 rtl:right-auto "
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="text-xl"></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye className="text-xl"></AiOutlineEye>
              )}
            </span>
          </div>
        </div>
        <div className="mb-5 semi-sm:mr-1 md:mr-5 lg:mr-0 lg:ml-[17px] flex items-center justify-center">
          <input
            style={{ lineHeight: "1.42", letterSpacing: ".3em" }}
            type="submit"
            className="py-3 bg-[#1d1d1f] text-white w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] text-base font-bold cursor-pointer uppercase font-oswald login-button"
            value="Reset Password"
          />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
