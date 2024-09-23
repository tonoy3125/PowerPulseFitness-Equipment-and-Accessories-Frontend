import { RiDeleteBin5Line } from "react-icons/ri";

const MyCartTable = ({
  item,
  quantities,
  index,
  decrement,
  increment,
  setQuantity,
}) => {
  const currentQuantity =
    quantities.find((q) => q.id === item.productId)?.quantity || item.quantity;
  const productImage = item?.productId.images && item.productId.images[0];
  const availableStock = item.productId.stockQuantity;
  const productId = item.productId._id;
  return (
    <tr className="bg-[#F9F2F3] border-b border-[#E0D9DA] ">
      <td
        scope="row"
        className="px-2 py-4 border border-[#E0D9DA] border-collapse text-[#333333] text-center"
      >
        {index + 1}
      </td>
      <td
        className="pl-5 py-4 border border-[#E0D9DA] border-collapse"
        colSpan={3}
      >
        <div className="flex items-center gap-4 ">
          <img
            className="w-32 h-32 rounded-lg border"
            src={productImage}
            alt=""
          />
          <div>
            <h3 className="font-poppins font-medium text-[#333333] text-[15px]">
              {item.productId.name}
            </h3>
            <h3 className="font-poppins font-medium text-[#333333] text-[15px] mt-1">
              <span className="font-poppins font-bold">SKU</span>{" "}
              <span>: {item.productId.sku}</span>
            </h3>
          </div>
        </div>
      </td>
      <td className="px-2 py-4 border border-[#E0D9DA] border-collapse text-[#333333] font-poppins text-base font-semibold text-center">
        $ {item?.productId?.price}
      </td>
      <td className="px-1 py-4 border border-[#E0D9DA] border-collapse text-center">
        <div className="flex items-center gap-5 justify-center">
          <form className="max-w-xs">
            <div className="relative flex items-center max-w-[8rem]">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                onClick={() => decrement(item.productId)}
                className="bg-white   border border-[#E0D9DA] rounded-s-lg p-3 h-11  text-[#333333] font-poppins"
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                data-input-counter-min="1"
                data-input-counter-max="50"
                aria-describedby="helper-text-explanation"
                className="bg-white border-x-0 border border-[#E0D9DA] h-11 text-center text-[#333333] text-sm  block w-full py-2.5 outline-none "
                placeholder="999"
                value={currentQuantity}
                onChange={(e) =>
                  setQuantity(item.productId, parseInt(e.target.value) || 1)
                }
                required
              />
              <button
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                className="bg-white   border border-[#E0D9DA] rounded-e-lg p-3 h-11 text-[#333333] font-poppins"
                onClick={() => increment(item.productId)}
                disabled={currentQuantity >= availableStock}
              >
                <svg
                  className="w-3 h-3 text-[#333333] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className=" cursor-pointer">
            <RiDeleteBin5Line className="text-2xl text-[#333333]" />
          </div>
        </div>
      </td>
      <td className="px-2 py-4 border border-[#E0D9DA] border-collapse text-[#333333] font-poppins text-base font-semibold text-center">
        $ {item?.productId?.price}
      </td>
    </tr>
  );
};

export default MyCartTable;
