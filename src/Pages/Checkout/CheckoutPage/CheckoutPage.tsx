import { useState } from "react";
import CheckoutNavbar from "../CheckoutNavbar/CheckoutNavbar";

const CheckoutPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

  // List of Bangladesh divisions
  const bangladeshDivisions = [
    "Dhaka",
    "Chattogram",
    "Khulna",
    "Barishal",
    "Rajshahi",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];

  // List of Indian states
  const indiaStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // Handle dropdown options based on selected country
  const getStateOptions = () => {
    if (selectedCountry === "Bangladesh") {
      return bangladeshDivisions.map((division) => (
        <option key={division} value={division}>
          {division}
        </option>
      ));
    } else if (selectedCountry === "India") {
      return indiaStates.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ));
    } else {
      return <option value="">Select a country</option>;
    }
  };

  return (
    <div className=" mx-4 ">
      <CheckoutNavbar />

      <div className="max-w-5xl mx-auto">
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
        <div className="pb-10 flex items-center gap-8 w-full">
          <div className="w-[60%]">
            <h1 className="font-poppins text-xl text-black font-medium mb-3">
              Contact
            </h1>

            <div className="relative z-0 w-full mb-5 group ">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-[#dcdcdc] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 pt-7 rounded-lg focus:border-[#dcdcdc] peer pl-3 font-poppins"
                placeholder=" "
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-base text-black font-poppins dark:text-gray-400 duration-300 transform -translate-y-2 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pl-4 peer-focus:mt-1 pt-2 font-young-serif"
              >
                Email
              </label>
            </div>
            <h1 className="font-poppins text-xl text-black font-medium mb-3">
              Delivery Details
            </h1>
            <div className="mb-5">
              <select
                className="w-full  rounded-lg px-3 py-3 font-poppins border border-[#dcdcdc] bg-[#f2f6f6] outline-none"
                value={selectedCountry}
                id="country"
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Country/Region</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
              </select>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <div className="flex-1">
                <input
                  className="w-full  rounded-lg px-3 py-3 font-poppins border border-[#dcdcdc] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="firstName"
                  id=""
                  placeholder="First Name"
                />
              </div>
              <div className="flex-1">
                <input
                  className="w-full  rounded-lg px-3 py-3 font-poppins border border-[#dcdcdc] bg-[#f2f6f6] outline-none"
                  type="text"
                  name="firstName"
                  id=""
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="relative mb-6">
              <input
                className="w-full rounded-lg px-3 py-3 font-poppins border border-[#dcdcdc] bg-[#f2f6f6] outline-none"
                type="text"
                name="firstName"
                id="address"
                placeholder="Address"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
              </svg>
            </div>
            <div className="mb-6">
              <input
                className="w-full rounded-lg px-3 py-3 font-poppins border border-[#dcdcdc] bg-[#f2f6f6] outline-none"
                type="text"
                name="firstName"
                id="address"
                placeholder="Apartment,suite,etc.(Optional"
              />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative z-0 w-full mb-5 group flex-1">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-[#dcdcdc] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 pt-7 rounded-lg focus:border-[#dcdcdc] peer pl-3 font-poppins"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-base text-black font-poppins dark:text-gray-400 duration-300 transform -translate-y-2 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pl-4 peer-focus:mt-1 pt-2 font-young-serif"
                >
                  City
                </label>
              </div>
              <div className="mb-5 flex-1">
                <select
                  className="w-full rounded-lg px-3 py-[17px] font-poppins border border-[#dcdcdc] bg-[#f2f6f6] outline-none"
                  value={selectedDivision}
                  onChange={(e) => setSelectedDivision(e.target.value)}
                >
                  <option value="">State/territory</option>
                  {getStateOptions()}
                </select>
              </div>
              <div className="relative z-0 w-full mb-5 group flex-1">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-[#dcdcdc] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 pt-7 rounded-lg focus:border-[#dcdcdc] peer pl-3 font-poppins"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-base text-black font-poppins dark:text-gray-400 duration-300 transform -translate-y-2 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pl-4 peer-focus:mt-1 pt-2 font-young-serif"
                >
                  Postal Code
                </label>
              </div>
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
