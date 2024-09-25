import { useState } from "react";
import CheckoutNavbar from "../CheckoutNavbar/CheckoutNavbar";

const CheckoutPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showCouponInput, setShowCouponInput] = useState(false);

  return (
    <div className=" mx-4 ">
      <CheckoutNavbar />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-poppins md:text-lg text-[#7C7C7C] mt-16">
          Have a coupon?{" "}
          <span
            className="font-medium text-black cursor-pointer"
            onClick={() => setShowCouponInput(!showCouponInput)} // Toggle visibility on click
          >
            Click here to enter your code
          </span>
        </h1>

        {/* Coupon input field, only visible when showCouponInput is true */}
        <div
          className={`${
            showCouponInput ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all`}
          style={{
            transitionDuration: "2s",
            transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          <div className="flex mb-6 border border-[#808080] md:w-[550px] mx-auto mt-7 py-3 semi-sm:py-4">
            <div className="flex items-center gap-2 md:gap-5 pl-3 md:pl-7">
              <img
                className="w-5 h-5"
                src="https://i.postimg.cc/F1XkPGNc/coupons.png"
                alt=""
              />
              <input
                className="border-r-[1px] xs:w-36 sm:w-40 semi-sm:w-48 md:w-72 border-r-[#808080] bg-[#f2f6f6] outline-none font-poppins"
                type="text"
                name="coupon"
                id=""
                placeholder="Coupon Code"
              />
              <button
                className="font-poppins uppercase hover:text-[#E21010] font-medium text-base"
                style={{ letterSpacing: "0.1em" }}
              >
                Apply Coupon
              </button>
            </div>
          </div>
          <p className="font-poppins text-sm text-[#7C7C7C] mb-16 text-center">
            If you have a coupon code, please apply it below.
          </p>
        </div>
        <div className=" flex items-center justify-center mt-8 pb-10">
          <ol className="items-center flex w-full max-w-2xl text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 md:text-base font-poppins">
            <li className="after:border-1 flex items-center text-[#1D4ED8] after:mx-1 sm:after:mx-3 semi-sm:after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-[#1D4ED8] dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200  dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>

            <li className="after:border-1 flex items-center text-[#1D4ED8] after:mx-1 sm:after:mx-3 semi-sm::after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-[#1D4ED8] dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200  dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>

            <li className="flex shrink-0 items-center">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order summary
            </li>
          </ol>
        </div>
        <div className="pb-10 flex items-center flex-col lg:flex-row gap-8 w-full">
          <div className="w-[60%]">
            <h1 className="font-oswald text-3xl text-black font-medium mb-3 uppercase pb-5 pt-5">
              Billing details
            </h1>

            <div className="flex items-center gap-10 mb-6">
              <div className="flex-1">
                <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                  First Name{" "}
                  <span className="text-red-700 font-oswald font-bold">*</span>
                </h2>
                <div className="pt-1">
                  <input
                    className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                    type="text"
                    name="email"
                    id=""
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                  Last Name{" "}
                  <span className="text-red-700 font-oswald font-bold">*</span>
                </h2>
                <div className="pt-1">
                  <input
                    className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                    type="text"
                    name="email"
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                Company Name (Optional)
              </h2>
              <div className="pt-1">
                <input
                  className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="email"
                  id=""
                />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-oswald text-lg font-normal text-[#2C2C2C] pb-2">
                Country / Region{" "}
                <span className="text-red-700 font-oswald font-bold">*</span>
              </h2>
              <select
                className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                value={selectedCountry}
                id="country"
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">---</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
              </select>
            </div>

            <div className="mb-6">
              <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                Street address{" "}
                <span className="text-red-700 font-oswald font-bold">*</span>
              </h2>
              <div className="pt-1">
                <input
                  className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="email"
                  id=""
                  placeholder="House Number and Street Name"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="pt-1">
                <input
                  className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="email"
                  id=""
                  placeholder="Apartment,suite,unit etc.(Optional)"
                />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                Town / City{" "}
                <span className="text-red-700 font-oswald font-bold">*</span>
              </h2>
              <div className="pt-1">
                <input
                  className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="email"
                  id=""
                />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                Postcode{" "}
                <span className="text-red-700 font-oswald font-bold">*</span>
              </h2>
              <div className="pt-1">
                <input
                  className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="email"
                  id=""
                />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                Phone{" "}
                <span className="text-red-700 font-oswald font-bold">*</span>
              </h2>
              <div className="pt-1">
                <input
                  className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="email"
                  id=""
                />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                Email Address{" "}
                <span className="text-red-700 font-oswald font-bold">*</span>
              </h2>
              <div className="pt-1">
                <input
                  className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="email"
                  id=""
                />
              </div>
            </div>

            <div className=" mb-6">
              <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                Order Note (Optional){" "}
                <span className="text-red-700 font-oswald font-bold">*</span>
              </h2>
              <textarea
                id="order"
                rows="4"
                placeholder="Notes about you order,e.g special notes for delivery"
                className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
              ></textarea>
            </div>
          </div>
          <div className="w-[40%]">
            <div className="border-b-[1px] pb-3 border-b-gray-400">
              <div className="flex items-center justify-between">
                <h1 className="font-poppins font-medium text-base">SubTotal</h1>
                <h1 className="font-poppins font-medium text-base">$1056.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
