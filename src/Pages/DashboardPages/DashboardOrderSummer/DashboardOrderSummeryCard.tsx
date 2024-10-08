import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateOrderStatusMutation } from "@/redux/features/checkout/checkoutApi";
import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "sonner";
const DashboardOrderSummeryCard = ({ product, index }) => {
  const [position, setPosition] = React.useState(product.status);
  const [updateOrderStatus, { isLoading }] = useUpdateOrderStatusMutation();
  const {
    _id,
    firstName,
    lastName,
    email,
    phone,
    orderNumber,
    deliveryProcess,
    status,
  } = product;

  const handleOrderStatusUpdate = async (newStatus) => {
    const toastId = toast.loading("Status Updating...");
    setPosition(newStatus);

    try {
      const res = await updateOrderStatus({ id: _id, status: newStatus });

      if (res.data?.success) {
        toast.success(res.data.message || "Status updated successfully!", {
          id: toastId,
          duration: 3000,
        });
      } else {
        throw res.error; // Ensure the error is thrown for catch block to handle
      }
    } catch (error: any) {
      console.log("Error object:", error); // Log the full error object for debugging

      // Ensure error.data and error.data.errorMessages are present before trying to access
      const errorMessage =
        error?.data?.errorMessages?.[0]?.message ||
        error?.data?.message ||
        error?.message || // General error.message if data is missing
        "Something went wrong!";

      toast.error(errorMessage, {
        id: toastId,
        duration: 3000,
      });
    }
  };
  return (
    <tr className="bg-white font-poppins border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {index + 1}
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {firstName} {lastName}
      </th>

      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{phone}</td>
      <td className="px-6 py-4">{orderNumber}</td>
      <td className="px-6 py-4">{deliveryProcess}</td>
      <td className="px-6 py-4 flex items-center gap-5">
        {status}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" disabled={isLoading}>
                <MdOutlineKeyboardArrowDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Order Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={handleOrderStatusUpdate}
              >
                <DropdownMenuRadioItem
                  value="Pending"
                  disabled={position === "Shipped" || position === "Delivered"}
                >
                  Pending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Shipped"
                  disabled={position === "Delivered"}
                >
                  Shipped
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Delivered">
                  Delivered
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-5 cursor-pointer">
          <div>
            <IoMdEye className="text-2xl" />
          </div>
          <div>
            <RiDeleteBin5Line className="text-2xl" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default DashboardOrderSummeryCard;
