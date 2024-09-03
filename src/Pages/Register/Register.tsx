import { Player } from "@lottiefiles/react-lottie-player";

const Register = () => {
  return (
    <div className="container mx-auto pb-20">
      <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-40">
        <div className=" md:w-[600px]  ">
          <Player
            autoplay
            loop
            src="https://lottie.host/b759c0fc-4c77-4918-abbb-a3d3e1026e7d/KoNeQ25HCu.json"
          ></Player>
        </div>
        <div className="lg:pt-16">
          <h1
            className="text-[#1d1d1f] text-4xl font-oswald text-center pb-10 md:pb-12"
            style={{ lineHeight: "1", letterSpacing: "0.025em" }}
          >
            Create Account
          </h1>
          <form>
            <div>
              <div className="mb-7">
                <h2
                  className="text-base font-normal text-[#1D1D1F] mb-3 uppercase font-oswald"
                  style={{ letterSpacing: "0.3em" }}
                >
                  First Name
                </h2>
                <input
                  className="pt-3 pb-3 pl-3 w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] mx-auto border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
                  type="text"
                  name="firstName"
                  id=""
                  placeholder=""
                />
              </div>
              <div className="mb-7">
                <h2
                  className="text-base font-normal text-[#1D1D1F] mb-3 uppercase font-oswald"
                  style={{ letterSpacing: "0.3em" }}
                >
                  Last Name
                </h2>
                <input
                  className="pt-3 pb-3 pl-3 w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] mx-auto border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
                  type="text"
                  name="lastName"
                  id=""
                  placeholder=""
                />
              </div>
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
                  name="email"
                  id=""
                  placeholder=""
                />
              </div>
              <div className="mb-7">
                <h2
                  className="text-base font-normal text-[#1D1D1F] mb-3 uppercase font-oswald"
                  style={{ letterSpacing: "0.3em" }}
                >
                  Password
                </h2>
                <input
                  className="pt-3 pb-3 pl-3 w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
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
                  className="py-3 bg-[#1d1d1f] text-white w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] text-base font-bold cursor-pointer font-oswald login-button"
                  value="Create"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
