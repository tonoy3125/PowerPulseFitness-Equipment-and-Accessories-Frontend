import { useGetUserAddressQuery } from "@/redux/features/address/addressApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TAddress, TUserPayload } from "@/types";

const AddressDetails = () => {
  const user = useAppSelector(selectCurrentUser) as TUserPayload | null;
  const userId = user?.id as string;
  const { data: addressData } = useGetUserAddressQuery(userId);
  //   console.log(addressData);
  return (
    <div>
      {addressData?.data?.length > 0 && (
        <div className="mb-5 flex items-center border border-[#C6C6C6] p-7 rounded-lg">
          {addressData?.data?.map((address: TAddress) => (
            <div className="flex items-start justify-between w-full">
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
              <div className="border p-3 border-[#C6C6C6] font-poppins">
                <button className="border-r-[1px] border-r-black pr-2 hover:text-[#f87f96]">
                  Edit
                </button>
                <button className="pl-2 hover:text-[#f87f96]">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressDetails;
