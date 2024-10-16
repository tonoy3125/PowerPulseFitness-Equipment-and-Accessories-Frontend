import { RiAddCircleLine } from "react-icons/ri";
import AccountAddressBanner from "../AccountAddressBanner/AccountAddressBanner";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  BangladeshDivisions,
  IndiaStates,
} from "@/Pages/Checkout/CheckoutPage/Checkout.constant";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { TUserPayload } from "@/types";
import { toast } from "sonner";
import {
  useCreateAddressMutation,
  useGetUserAddressQuery,
} from "@/redux/features/address/addressApi";

const Addresses = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const user = useAppSelector(selectCurrentUser) as TUserPayload | null;
  const userId = user?.id as string;
  const [createAddress] = useCreateAddressMutation();
  const { data: addressData } = useGetUserAddressQuery(userId);
  //   console.log(addressData);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // List of Bangladesh divisions
  const bangladeshDivisions: BangladeshDivisions[] = [
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
  const indiaStates: IndiaStates[] = [
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
    "WestBengal",
  ];

  // Handle country selection and display corresponding divisions
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  // Get divisions based on the selected country
  const getDivisions = (): (BangladeshDivisions | IndiaStates)[] => {
    if (selectedCountry === "Bangladesh") {
      return bangladeshDivisions;
    } else if (selectedCountry === "India") {
      return indiaStates;
    } else {
      return [];
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating your address...");
    try {
      const addressInfo = {
        userId,
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
        countryName: selectedCountry,
        streetAddress: data.streetAddress,
        apartment: data.apartment || "",
        town: selectedDivision,
        postCode: Number(data.postCode),
        phone: Number(data.phone),
      };
      //   console.log("addressInfo", addressInfo);
      const res = await createAddress(addressInfo).unwrap();
      //   console.log(res);
      toast.success(res.message || "Default Address Created successfully!", {
        id: toastId,
        duration: 3000,
      });
      reset();
      setSelectedCountry(""); // Reset the selected country
      setSelectedDivision(""); // Reset the selected division
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <div>
      <AccountAddressBanner />
      <div className="container mx-auto">
        <h1
          className="text-4xl font-poppins font-medium mb-10 text-center"
          style={{ lineHeight: "1", letterSpacing: "0.025em" }}
        >
          Your addresses
        </h1>
        <p
          onClick={() => navigate(-1)}
          className="font-poppins text-base mt-2 underline text-[#f87f96] cursor-pointer mb-5"
        >
          Return to account details
        </p>
        {addressData?.data?.length > 0 && (
          <div className="mb-5 flex items-center border border-[#C6C6C6] p-7 rounded-lg">
            {addressData?.data?.map((address) => (
              <div>
                <div className="">
                  <p className="font-poppins text-base mt-1 text-[#828282] group-hover:text-[#f87f96]">
                    {address?.firstName} {address?.lastName}
                  </p>
                  <p className="font-poppins text-base mt-1 text-[#828282] group-hover:text-[#f87f96]">
                    {address?.companyName}
                  </p>
                  <p className="font-poppins text-base mt-1 text-[#828282] group-hover:text-[#f87f96]">
                    {address?.countryName}
                  </p>
                  <p className="font-poppins text-base mt-1 text-[#828282] group-hover:text-[#f87f96]">
                    {address?.streetAddress}
                  </p>
                  <p className="font-poppins text-base mt-1 text-[#828282] group-hover:text-[#f87f96]">
                    {address?.apartment}
                  </p>
                  <p className="font-poppins text-base mt-1 text-[#828282] group-hover:text-[#f87f96]">
                    {address?.town}
                  </p>
                  <p className="font-poppins text-base mt-1 text-[#828282] group-hover:text-[#f87f96]">
                    {address?.postCode}
                  </p>
                  <p className="font-poppins text-base mt-1 text-[#828282] group-hover:text-[#f87f96]">
                    {address?.phone}
                  </p>
                </div>
                {/* <div className="border">
                  <button>Edit</button>
                  <button>Delete</button>
                </div> */}
              </div>
            ))}
          </div>
        )}
        <div className="mb-20">
          <div
            onClick={() => setShowAddress(!showAddress)}
            className="flex flex-col items-center  justify-center border  border-[#C6C6C6] py-16 group hover:text-[#f87f96] cursor-pointer mb-6 rounded-lg"
          >
            <RiAddCircleLine className="text-5xl text-[#828282] group-hover:text-[#f87f96]" />
            <p className="font-poppins text-base mt-2 text-[#828282] group-hover:text-[#f87f96]">
              Add a new address
            </p>
          </div>
          <div
            className={`${
              showAddress ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden transition-all`}
            style={{
              transitionDuration: "2s",
              transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <div>
              <p className="font-poppins text-base mt-2 text-black font-semibold mb-5">
                Add a new address
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-10 mb-6">
                  <div className="flex-1">
                    <h2 className="font-poppins text-sm font-semibold text-[#2C2C2C] uppercase">
                      First Name{" "}
                      <span className="text-red-700 font-poppins font-bold">
                        *
                      </span>
                    </h2>
                    <div className="pt-1">
                      <input
                        className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                        type="text"
                        id=""
                        {...register("firstName")}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-poppins text-sm font-semibold text-[#2C2C2C] uppercase">
                      Last Name{" "}
                      <span className="text-red-700 font-poppins font-bold">
                        *
                      </span>
                    </h2>
                    <div className="pt-1">
                      <input
                        className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                        type="text"
                        {...register("lastName")}
                        id=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="font-poppins text-sm font-semibold text-[#2C2C2C] uppercase">
                    Company Name (Optional)
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                      type="text"
                      {...register("companyName")}
                      id=""
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="font-poppins text-sm font-semibold text-[#2C2C2C] uppercase pb-2">
                    Country / Region{" "}
                    <span className="text-red-700 font-poppins font-bold">
                      *
                    </span>
                  </h2>
                  <select
                    className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                    value={selectedCountry}
                    id="country"
                    {...register("countryName", {
                      onChange: (e) => handleCountryChange(e),
                    })}
                  >
                    <option value="">---</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                  </select>
                </div>

                <div className="mb-6">
                  <h2 className="font-poppins text-sm font-semibold text-[#2C2C2C] uppercase">
                    Street address{" "}
                    <span className="text-red-700 font-poppins font-bold">
                      *
                    </span>
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                      type="text"
                      {...register("streetAddress")}
                      id=""
                      placeholder="House Number and Street Name"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                      type="text"
                      id=""
                      placeholder="Apartment,suite,unit etc.(Optional)"
                      {...register("apartment")}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="font-poppins text-sm font-semibold text-[#2C2C2C] uppercase">
                    Town / City{" "}
                    <span className="text-red-700 font-poppins font-bold">
                      *
                    </span>
                  </h2>
                  <div className="pt-1">
                    <select
                      className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                      value={selectedDivision}
                      {...register("town", {
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
                  <h2 className="font-poppins text-sm font-semibold text-[#2C2C2C] uppercase">
                    Postcode{" "}
                    <span className="text-red-700 font-poppins font-bold">
                      *
                    </span>
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                      type="text"
                      {...register("postCode")}
                      id=""
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="font-poppins text-sm font-semibold text-[#2C2C2C] uppercase">
                    Phone{" "}
                    <span className="text-red-700 font-poppins font-bold">
                      *
                    </span>
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-poppins border-b-[#C6C6C6] bg-[#f2f6f6] outline-none text-sm"
                      type="text"
                      {...register("phone")}
                      id=""
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-5 mt-8 mb-5">
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#43B9B2] font-poppins font-medium text-white rounded-md"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className={`px-5 py-2 bg-[#C280D2] font-poppins font-medium text-white rounded-md transition-all`}
                    style={{
                      transitionDuration: "2s",
                      transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                    onClick={() => setShowAddress(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
