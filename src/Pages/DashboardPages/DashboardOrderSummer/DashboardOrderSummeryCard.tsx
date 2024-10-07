const DashboardOrderSummeryCard = ({ product, index }) => {
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
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4"></td>
    </tr>
  );
};

export default DashboardOrderSummeryCard;
