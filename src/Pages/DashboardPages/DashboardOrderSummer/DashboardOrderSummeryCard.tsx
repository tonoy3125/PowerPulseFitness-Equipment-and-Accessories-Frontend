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
import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
const DashboardOrderSummeryCard = ({ product, index }) => {
  const [position, setPosition] = React.useState("Shipped");
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
              <Button variant="outline">
                <MdOutlineKeyboardArrowDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Order Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="Pending">
                  Pending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Shipped">
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
