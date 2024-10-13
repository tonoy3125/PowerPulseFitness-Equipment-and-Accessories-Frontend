const ReviewsDataTable = ({ item, index, refetch }) => {
  const { name, email, rating, review, productId } = item;

  const productName = productId.name;
  //   console.log(productName);

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

      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{productName}</td>
      <td className="px-6 py-4">{rating}</td>
      <td className="px-6 py-4">{review}</td>

      {/* <td className="px-6 py-4">
        <button onClick={handleRemoveDiscount}>
          <RiDeleteBinLine className="text-2xl text-black" />
        </button>
      </td> */}
    </tr>
  );
};

export default ReviewsDataTable;
