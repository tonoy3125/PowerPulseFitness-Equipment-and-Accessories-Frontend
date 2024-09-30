import { useCurrentToken } from "@/redux/features/auth/authSlice";
import {
  useAddAdvertiseDiscountProductMutation,
  useRemoveAdvertiseDiscountProductMutation,
  useRemoveProductMutation,
} from "@/redux/features/product/productApi";
import { useAppSelector } from "@/redux/hooks";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

const DiscountDataTable = ({ product, index }) => {
  const [addAdvertiseDiscountProduct] =
    useAddAdvertiseDiscountProductMutation();
  const [removeAdvertiseDiscountProduct] =
    useRemoveAdvertiseDiscountProductMutation();
  const token = useAppSelector(useCurrentToken);
  const {
    _id,
    name,
    category,
    price,
    discountPrice,
    discountPercentage,
    discountStartTime,
    discountEndTime,
    discountDuration,
    discountDurationUnit,
    advertise,
  } = product;

  const handleAddAdvertiseDiscountProduct = async () => {
    const toastId = toast.loading("Adding...");
    try {
      const res = await addAdvertiseDiscountProduct({
        token,
        id: _id,
      }).unwrap();
      toast.success(res.message || "Advertise Added successfully!", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {}
  };

  const handleRemoveAdvertiseDiscountProduct = async () => {
    const toastId = toast.loading("Removing...");
    try {
      const res = await removeAdvertiseDiscountProduct({
        token,
        id: _id,
      }).unwrap();
      toast.success(res.message || "Advertise Removed successfully!", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {}
  };

  //   const [removeProduct] = useRemoveProductMutation();
  //   const token = useAppSelector(useCurrentToken);

  //   const handleRemoveProduct = async (id) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //       customClass: {
  //         title: "custom-swal-title",
  //         popup: "custom-swal-popup",
  //         confirmButton: "custom-swal-confirm-btn",
  //         cancelButton: "custom-swal-cancel-btn",
  //       },
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         try {
  //           await removeProduct({
  //             token,
  //             id: _id,
  //           }).unwrap();
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "The product has been removed from your Table.",
  //             icon: "success",
  //             customClass: {
  //               title: "custom-swal-title",
  //               popup: "custom-swal-popup",
  //             },
  //           });
  //         } catch (error) {
  //           console.error("Failed to remove product:", error);
  //           Swal.fire({
  //             title: "Error!",
  //             text: "Failed to remove product from the Table.",
  //             icon: "error",
  //             customClass: {
  //               title: "custom-swal-title",
  //               popup: "custom-swal-popup",
  //             },
  //           });
  //         }
  //       }
  //     });
  //   };

  return (
    <tr className="bg-white font-poppins border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {index + 1}
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>

      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{discountPrice}</td>
      <td className="px-6 py-4">{discountPercentage}</td>
      <td className="px-6 py-4">
        {discountDuration} {discountDurationUnit}
      </td>
      <td className="px-6 py-4">
        {new Date(discountStartTime).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}{" "}
        -{" "}
        {new Date(discountEndTime).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </td>

      <div className="flex-1">
        <button
          onClick={handleAddAdvertiseDiscountProduct}
          disabled={advertise == true && true}
          className="btn btn-outline text-black"
        >
          Advertise
        </button>
      </div>
      <div className="flex-1">
        <button
          onClick={handleRemoveAdvertiseDiscountProduct}
          disabled={advertise == true ? false : true}
          className="btn btn-outline text-black"
        >
          Remove
        </button>
      </div>
    </tr>
  );
};

export default DiscountDataTable;
