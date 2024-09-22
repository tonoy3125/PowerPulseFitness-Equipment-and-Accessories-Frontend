import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const ProductTable = ({ product, index }) => {
  const { name, category, price } = product;
  return (
    <tr className="bg-white font-poppins border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>

      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-5">
          <span>
            <FaRegEdit className="text-2xl text-black"/>
          </span>
          <span>
            <RiDeleteBinLine className="text-2xl text-black"/>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
