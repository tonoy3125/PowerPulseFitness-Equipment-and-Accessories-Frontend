import { useRemoveAddressMutation } from "@/redux/features/address/addressApi";
import Swal from "sweetalert2";

const AddressDetails = ({ address, refetch }: any) => {
  const [removeAddress] = useRemoveAddressMutation();

  const handleRemoveAddress = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove Address!",
      customClass: {
        title: "custom-swal-title",
        popup: "custom-swal-popup",
        confirmButton: "custom-swal-confirm-btn",
        cancelButton: "custom-swal-cancel-btn",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeAddress({
            id: address?._id,
          }).unwrap();
          refetch();
          Swal.fire({
            title: "Removed!",
            text: "Your Deafult Address has been removed .",
            icon: "success",
            customClass: {
              title: "custom-swal-title",
              popup: "custom-swal-popup",
            },
          });
        } catch (error) {
          console.error("Failed to remove default address:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to remove default address.",
            icon: "error",
            customClass: {
              title: "custom-swal-title",
              popup: "custom-swal-popup",
            },
          });
        }
      }
    });
  };

  return (
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
        <button
          onClick={handleRemoveAddress}
          className="pl-2 hover:text-[#f87f96]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressDetails;
