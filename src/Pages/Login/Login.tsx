import { Player } from "@lottiefiles/react-lottie-player";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { toast } from "sonner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login, { data, error, isLoading }] = useLoginMutation();

  const onsubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging In");
    try {
      const userInfo = {
        email: data?.email,
        password: data?.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.accessToken);
      console.log(user);
      dispatch(setUser({ user: user, token: res.accessToken }));
      toast.success("Logged In Successfully", { id: toastId, duration: 2000 });
      navigate("/account");
    } catch (error) {
      toast.error("Something Went Wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="container mx-auto pb-20">
      <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-40">
        <div className=" md:w-[600px]  ">
          <Player
            autoplay
            loop
            src="https://lottie.host/c94c4820-f6c0-48b2-a013-12cb1d9854cb/pdsMB9eq4B.json"
          ></Player>
        </div>
        <div className="lg:pt-36">
          <h1
            className="text-[#1d1d1f] text-4xl font-oswald text-center pb-10 md:pb-12"
            style={{ lineHeight: "1", letterSpacing: "0.025em" }}
          >
            Login
          </h1>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div>
              <div className="mb-7">
                <h2
                  className="text-base font-normal text-[#1D1D1F] mb-3 uppercase font-oswald"
                  style={{ letterSpacing: "0.3em" }}
                >
                  Email
                </h2>
                <input
                  className="pt-3 pb-3 pl-3 w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] mx-auto border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
                  type="email"
                  id=""
                  placeholder=""
                  {...register("email")}
                />
              </div>
              <div className="mb-7">
                <div className="flex  justify-between">
                  <h2
                    className="text-base font-normal text-[#1D1D1F] mb-3 uppercase font-oswald"
                    style={{ letterSpacing: "0.3em" }}
                  >
                    Password
                  </h2>
                  <h5 className="text-base font-oswald font-normal text-[#1d1d1f]">
                    Forgot Password?
                  </h5>
                </div>
                <div className="relative">
                  <input
                    className="pt-3 pb-3 pl-3 w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
                    type={showPassword ? "text" : "password"}
                    id=""
                    {...register("password")}
                  />
                  <span
                    className="absolute right-4 md:right-2 top-4 rtl:left-0 rtl:right-auto "
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
              <div className="mb-5">
                <input
                  style={{ lineHeight: "1.42", letterSpacing: ".3em" }}
                  type="submit"
                  className="py-3 bg-[#1d1d1f] text-white w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] text-base font-bold cursor-pointer font-oswald login-button"
                  value="Sign In"
                />
              </div>
              <Link to="/register">
                <h2
                  className="text-[#1D1D1F] text-base font-normal font-oswald text-center cursor-pointer"
                  style={{ lineHeight: "1.6", letterSpacing: "0.025em" }}
                >
                  Create account
                </h2>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
