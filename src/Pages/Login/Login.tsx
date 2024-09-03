import { Player } from "@lottiefiles/react-lottie-player";
import "../Login/Login.css";
import Navbar from "../Shared/Navbar/Navbar";
import AdsNavbar from "../Shared/AdsNavbar/AdsNavbar";
import Footer from "../Shared/FooterPage/Footer/Footer";

const Login = () => {
  return (
    <div className="container mx-auto pb-20">
      <div className="flex items-center gap-40">
        <div className="md:w-[600px]  ">
          <Player
            autoplay
            loop
            src="https://lottie.host/c94c4820-f6c0-48b2-a013-12cb1d9854cb/pdsMB9eq4B.json"
          ></Player>
        </div>
        <div className="lg:pt-36">
          <h1
            className="text-[#1d1d1f] text-4xl font-oswald text-center"
            style={{ lineHeight: "1", letterSpacing: "0.025em" }}
          >
            Login
          </h1>
          <form>
            <div>
              <div className="mb-7">
                <h2
                  className="text-base font-normal text-[#1D1D1F] mb-3 uppercase font-oswald"
                  style={{ letterSpacing: "0.3em" }}
                >
                  Email
                </h2>
                <input
                  className="pt-3 pb-3 pl-3 w-[415px] md:w-[461px] border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
                  type="email"
                  name="email"
                  id=""
                  placeholder=""
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
                <input
                  className="pt-3 pb-3 pl-3 w-[415px] md:w-[461px] border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
                  type="email"
                  name="email"
                  id=""
                  placeholder=""
                />
              </div>
              <div className="mb-5">
                <input
                  style={{ lineHeight: "1.42", letterSpacing: ".3em" }}
                  type="submit"
                  className="py-3 bg-[#1d1d1f] text-white w-[415px] md:w-[461px] text-base font-bold cursor-pointer font-oswald login-button"
                  value="Sign In"
                />
              </div>
              <div>
                <h2
                  className="text-[#1D1D1F] text-base font-normal font-oswald text-center cursor-pointer"
                  style={{ lineHeight: "1.6", letterSpacing: "0.025em" }}
                >
                  Create account
                </h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
