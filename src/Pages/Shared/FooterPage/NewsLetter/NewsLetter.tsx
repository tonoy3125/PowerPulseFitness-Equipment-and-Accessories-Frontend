import { LuPhoneCall } from "react-icons/lu";

const NewsLetter = () => {
  return (
    <div className=" pt-20 pb-16 container mx-auto border-b border-[#80808033]">
      <div className="flex items-center justify-between">
        <div style={{ lineHeight: "1.2", letterSpacing: "1px" }}>
          <h1 className="text-4xl font-semibold text-[#333333] font-poppins">
            Keep up with the <br /> latest
          </h1>
        </div>
        <form className="">
          <header className="footer-title text-sm text-[#808080] mb-5">
            Sign up our newsletter to receive special offers.
          </header>
          <fieldset className="form-control w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Your Email Here"
                className=" w-[450px] px-5 py-3 text-[#6F6F6F] bg-[#ffffff] text-base font-poppins outline-none border rounded-md"
              />
              <button className="py-3 px-7 bg-[#f87f96] text-white absolute top-0 right-0 rounded-l-none font-poppins uppercase rounded-r-md">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
        <div className="flex items-center gap-5">
          <div className="border px-6 py-6 bg-[#f87f96]  rounded-full max-w-20">
            <LuPhoneCall className="text-2xl text-white" />
          </div>
          <div>
            <p className="text-base font-poppins font-medium text-[#808080] pb-2">
              Customer service
            </p>
            <h5 className="text-3xl font-poppins font-semibold text-[#f87f96] hover:text-[#7227B4] cursor-pointer">
              (021) 235 8749
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
