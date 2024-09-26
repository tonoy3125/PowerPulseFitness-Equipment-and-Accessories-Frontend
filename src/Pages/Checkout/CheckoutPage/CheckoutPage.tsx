import { useEffect, useState } from "react";
import CheckoutNavbar from "../CheckoutNavbar/CheckoutNavbar";
import "./CheckoutPage.css";
import { useGetAllCartByUserQuery } from "@/redux/features/cart/cartApi";
import { FieldValues, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const CheckoutPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(1);
  const [shippingCost, setShippingCost] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [govtTax, setGovtTax] = useState(0);
  const [isCalculatingTax, setIsCalculatingTax] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const userId = user?.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data: cartData, refetch } = useGetAllCartByUserQuery(undefined);

  // Ensure that cartData is valid and items is an array
  const cartItems = Array.isArray(cartData?.data?.items)
    ? cartData.data.items
    : [];

  // console.log(cartItems);

  // Tax rate (e.g., 10%)
  const TAX_RATE = 0.1;

  // Calculate subtotal of cart items
  const subtotal = cartItems.reduce(
    (total, item) => total + item.productId.price * item.quantity,
    0
  );

  // Effect to calculate government tax based on subtotal
  useEffect(() => {
    setIsCalculatingTax(true);
    const timer = setTimeout(() => {
      setGovtTax(subtotal * TAX_RATE);
      setIsCalculatingTax(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [subtotal]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
  };

  // Shipping rates based on regions
  const shippingRates = {
    Bangladesh: {
      Dhaka: 100,
      Chattogram: 150,
      Khulna: 180,
      Barishal: 200,
      Rajshahi: 210,
      Sylhet: 220,
      Rangpur: 250,
      Mymensingh: 230,
    },
    India: {
      AndhraPradesh: 300,
      ArunachalPradesh: 400,
      Assam: 350,
      Bihar: 300,
      Chhattisgarh: 320,
      Goa: 350,
      Gujarat: 340,
      Haryana: 320,
      HimachalPradesh: 400,
      Jharkhand: 350,
      Karnataka: 360,
      Kerala: 380,
      MadhyaPradesh: 360,
      Maharashtra: 350,
      Manipur: 450,
      Meghalaya: 450,
      Mizoram: 460,
      Nagaland: 470,
      Odisha: 340,
      Punjab: 320,
      Rajasthan: 350,
      Sikkim: 450,
      TamilNadu: 360,
      Telangana: 340,
      Tripura: 460,
      UttarPradesh: 300,
      Uttarakhand: 400,
      WestBengal: 350,
    },
  };

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
    "AndhraPradesh",
    "ArunachalPradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "HimachalPradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "MadhyaPradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "TamilNadu",
    "Telangana",
    "Tripura",
    "UttarPradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // Handle country selection and display corresponding divisions
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // Get divisions based on the selected country
  const getDivisions = () => {
    if (selectedCountry === "Bangladesh") {
      return bangladeshDivisions;
    } else if (selectedCountry === "India") {
      return indiaStates;
    } else {
      return [];
    }
  };

  // Effect to calculate shipping cost based on selected country and division
  useEffect(() => {
    if (selectedDivision) {
      setIsCalculating(true);
      const timer = setTimeout(() => {
        const countryRates = shippingRates[selectedCountry];
        if (countryRates) {
          setShippingCost(countryRates[selectedDivision] || 0);
        }
        setIsCalculating(false);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShippingCost(0);
    }
  }, [selectedCountry, selectedDivision]);

  const totalPrice = subtotal + govtTax + shippingCost;

  const onSubmit = async (data: FieldValues) => {
    const checkoutData = {
      addToCart: cartItems.map((item) => item._id), // Assuming each item has an _id
      userId,
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      countryName: selectedCountry,
      streetAddress: data.streetAddress,
      apartment: data.apartment || "",
      town: selectedDivision,
      postCode: data.postCode,
      phone: data.phone,
      email: data.email,
      orderNote: data.orderNote || "",
      subTotal: subtotal,
      tax: govtTax,
      shipping: shippingCost,
      total: totalPrice,
    };
    console.log(checkoutData);
  };

  return (
    <div className=" mx-4 ">
      <CheckoutNavbar />

      <div className="max-w-7xl mx-auto">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-10 flex flex-col lg:flex-row gap-8 w-full">
            <div className="lg:w-[60%]">
              <h1 className="font-oswald text-3xl text-black font-medium mb-3 uppercase pb-5 pt-5">
                Billing details
              </h1>

              <div className="flex items-center gap-10 mb-6">
                <div className="flex-1">
                  <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                    First Name{" "}
                    <span className="text-red-700 font-oswald font-bold">
                      *
                    </span>
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                      type="text"
                      id=""
                      {...register("firstName", {
                        required: "First Name is Required",
                      })}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                    Last Name{" "}
                    <span className="text-red-700 font-oswald font-bold">
                      *
                    </span>
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                      type="text"
                      {...register("lastName", {
                        required: "Last Name is Required",
                      })}
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
                    {...register("companyName")}
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
                  {...register("countryName", {
                    required: "Country Name is Required",
                    onChange: (e) => handleCountryChange(e),
                  })}
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
                    {...register("streetAddress", {
                      required: "Street Address is Required",
                    })}
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
                    id=""
                    placeholder="Apartment,suite,unit etc.(Optional)"
                    {...register("apartment")}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                  Town / City{" "}
                  <span className="text-red-700 font-oswald font-bold">*</span>
                </h2>
                <div className="pt-1">
                  <select
                    className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                    value={selectedDivision}
                    {...register("town", {
                      required: "Town is Required",
                      onChange: (e) => setSelectedDivision(e.target.value),
                    })}
                  >
                    <option value="">---</option>
                    {getDivisions().map((division, index) => (
                      <option key={index} value={division}>
                        {division}
                      </option>
                    ))}
                  </select>
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
                    {...register("postCode", {
                      required: "Post Code is Required",
                    })}
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
                    {...register("phone", {
                      required: "Phone is Required",
                    })}
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
                    {...register("email", {
                      required: "Email is Required",
                    })}
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
                  {...register("orderNote")}
                  placeholder="Notes about you order,e.g special notes for delivery"
                  className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                ></textarea>
              </div>
            </div>
            <div className="lg:w-[40%]">
              <div className="mb-10">
                <h1 className="font-oswald text-3xl text-black font-medium mb-3 uppercase pb-5 pt-5">
                  Your order
                </h1>
                <div className=" bg-[#FFFFFF] p-5 semi-sm:p-10 rounded-xl">
                  <div>
                    {cartItems?.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400"
                      >
                        <h1 className="font-poppins font-medium text-base">
                          {item?.productId.name} × {item?.quantity}
                        </h1>
                        <h1 className="font-poppins font-medium text-base">
                          ${item?.productId.price}
                        </h1>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400">
                    <h1 className="font-poppins font-medium text-base">
                      SubTotal
                    </h1>
                    <h1 className="font-poppins font-medium text-base">
                      {subtotal.toFixed(2)}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400">
                    <h1 className="font-poppins font-medium text-base">Tax</h1>
                    {isCalculatingTax ? (
                      <h1 className="font-poppins font-medium text-base">
                        Calculating
                      </h1>
                    ) : (
                      <h1 className="font-poppins font-medium text-base">
                        {govtTax.toFixed(2)}
                      </h1>
                    )}
                  </div>
                  <div className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400">
                    <h1 className="font-poppins font-medium text-base">
                      Shipping
                    </h1>
                    {isCalculating ? (
                      <h1 className="font-poppins font-medium text-base">
                        Calculating
                      </h1>
                    ) : (
                      <h1 className="font-poppins font-medium text-base">
                        ${shippingCost}
                      </h1>
                    )}
                  </div>
                  <div className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400">
                    <h1 className="font-poppins font-medium text-base">
                      Total
                    </h1>
                    <h1 className="font-poppins font-medium text-base">
                      {totalPrice.toFixed(2)}
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-oswald text-3xl text-black font-medium mb-3 uppercase pb-5 pt-5">
                  Payment
                </h1>

                <div className="bg-[#FFFFFF] p-5 semi-sm:p-10 rounded-xl">
                  <div id="accordion-collapse" data-accordion="collapse">
                    {/* Accordion 1 */}
                    <div className="border-b-[1px] border-dashed border-b-[#C6C6C6] pb-7">
                      <h2 id="accordion-collapse-heading-1">
                        <button
                          type="button"
                          className="flex items-center gap-2 mt-3 mb-2 w-full "
                          onClick={() => toggleAccordion(1)}
                          aria-expanded={openAccordion === 1}
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span
                            className={`custom-checkbox ${
                              openAccordion === 1 ? "checked" : ""
                            }`}
                          ></span>
                          <p
                            className="text-sm uppercase font-oswald font-medium text-[#2C2C2C]"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            Cash on delivery
                          </p>
                        </button>
                      </h2>
                      <div
                        id="accordion-collapse-body-1"
                        className={openAccordion === 1 ? "block" : "hidden"}
                        aria-labelledby="accordion-collapse-heading-1"
                      >
                        <p className="font-poppins font-normal text-[#7C7C7C] pt-2  ">
                          Pay with cash upon delivery.
                        </p>
                      </div>
                    </div>

                    {/* Accordion 2 */}
                    <div className="border-b-[1px] border-dashed border-b-[#C6C6C6] pt-4 pb-7">
                      <h2
                        id="accordion-collapse-heading-2"
                        className="flex items-center justify-between"
                      >
                        <button
                          type="button"
                          className="flex items-center gap-2 mt-3 mb-2 "
                          onClick={() => toggleAccordion(2)}
                          aria-expanded={openAccordion === 2}
                          aria-controls="accordion-collapse-body-2"
                        >
                          <span
                            className={`custom-checkbox ${
                              openAccordion === 2 ? "checked" : ""
                            }`}
                          ></span>
                          <p
                            className="text-sm uppercase font-oswald font-medium text-[#2C2C2C]"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            Stripe
                          </p>
                        </button>
                        <a
                          href="https://stripe.com/payments"
                          className="text-sm font-poppins font-medium text-[#2C2C2C] border-b-[1px] border-b-black"
                          style={{ letterSpacing: "0.1em" }}
                        >
                          What is Stripe?
                        </a>
                      </h2>
                      <div
                        id="accordion-collapse-body-2"
                        className={openAccordion === 2 ? "block" : "hidden"}
                        aria-labelledby="accordion-collapse-heading-2"
                      >
                        <p className="font-poppins font-normal text-[#7C7C7C] pt-2">
                          Pay via Stripe you can pay with your credit card if
                          you don’t have a Stripe account.
                        </p>
                      </div>
                    </div>
                    {openAccordion === 1 && (
                      <button
                        type="submit"
                        className="mt-5 bg-[#EC3D08] hover:bg-[#E21010] text-white py-3 px-8 text-base font-poppins uppercase"
                        style={{ letterSpacing: "3px" }}
                      >
                        Place Order
                      </button>
                    )}
                    {openAccordion === 2 && (
                      <button
                        className="mt-5 bg-[#EC3D08] hover:bg-[#E21010] text-white py-3 px-8 text-base font-poppins uppercase"
                        style={{ letterSpacing: "3px" }}
                      >
                        Proceed to Stripe
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
