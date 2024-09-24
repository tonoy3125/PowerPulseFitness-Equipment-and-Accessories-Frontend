import CartPageBanner from "@/components/CartPageBanner/CartPageBanner";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import {
  useDecreaseQuantityMutation,
  useGetAllCartByUserQuery,
  useIncreaseQuantityMutation,
  useRemoveProductFromCartMutation,
} from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import MyCartTable from "./MyCartTable";

const Mycart = () => {
  const { data: cartData, refetch } = useGetAllCartByUserQuery(undefined);
  const token = useAppSelector(useCurrentToken); // Get current user's token

  // Ensure that cartData is valid and items is an array
  const cartItems = Array.isArray(cartData?.data?.items)
    ? cartData.data.items
    : [];

  // Calculate total quantity of all products in the cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [quantities, setQuantities] = useState(
    cartItems?.map((item) => ({
      id: item.productId,
      quantity: item.quantity,
    })) || []
  );

  useEffect(() => {
    // Update quantities when cartItems changes
    setQuantities(
      cartItems?.map((item) => ({
        id: item.productId,
        quantity: item.quantity,
      })) || []
    );
  }, [cartItems]);

  const [increaseQuantity] = useIncreaseQuantityMutation();
  const [decreaseQuantity] = useDecreaseQuantityMutation();
  const [removeProductFromCart] = useRemoveProductFromCartMutation();

  // console.log(increaseQuantity);

  const increment = async (productId) => {
    try {
      console.log("increment", productId._id);
      await increaseQuantity({
        token,
        productId: productId._id,
      }).unwrap();
      setQuantities((prevQuantities) =>
        prevQuantities.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } catch (error) {
      console.error("Failed to increase quantity:", error);
    }
  };

  const decrement = async (productId) => {
    try {
      console.log("increment", productId._id);
      await decreaseQuantity({
        token,
        productId: productId._id,
      }).unwrap();
      setQuantities((prevQuantities) =>
        prevQuantities.map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (error) {
      console.error("Failed to decrease quantity:", error);
    }
  };

  const removeProduct = async (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        title: "custom-swal-title",
        popup: "custom-swal-popup",
        confirmButton: "custom-swal-confirm-btn",
        cancelButton: "custom-swal-cancel-btn",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeProductFromCart({
            token,
            productId: productId._id,
          }).unwrap();
          Swal.fire({
            title: "Deleted!",
            text: "The product has been removed from your cart.",
            icon: "success",
            customClass: {
              title: "custom-swal-title",
              popup: "custom-swal-popup",
            },
          });
        } catch (error) {
          console.error("Failed to remove product:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to remove product from the cart.",
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

  const setQuantity = (productId, newQuantity) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };
  return (
    <div>
      <CartPageBanner />
      <div className="container mx-auto mb-20">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-8">
          <table className="w-full text-sm border border-gray-400 border-collapse  rtl:text-right text-blue-100 dark:text-blue-100">
            {/* Table Heading Start Here */}
            <thead className="text-xs text-white uppercase bg-[#F9F2F3] border-b border-[#E0D9DA] dark:text-white">
              <tr className="font-cinzel">
                <th
                  scope="col"
                  className="px-2 py-3 border border-[#E0D9DA] border-collapse font-bold text-black  font-poppins text-sm"
                >
                  #
                </th>

                <th
                  scope="col"
                  className="px-2 py-3 border border-[#E0D9DA] border-collapse text-black font-poppins text-sm"
                  colSpan={3}
                >
                  Product item
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 border border-[#E0D9DA] border-collapse text-black font-poppins text-sm"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 border border-[#E0D9DA] border-collapse text-black font-poppins text-sm"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 border border-[#E0D9DA] border-collapse text-black font-poppins text-sm "
                >
                  Total price
                </th>
              </tr>
            </thead>
            {/* Table Heading End Here */}
            {/* Table Data Fetching */}
            <tbody className="font-poppins">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <MyCartTable
                    key={item._id}
                    item={item}
                    quantities={quantities}
                    index={index}
                    increment={increment}
                    decrement={decrement}
                    setQuantity={setQuantity}
                    removeProduct={removeProduct}
                  />
                ))
              ) : (
                <p className="text-center">No items in cart</p>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center flex-col lg:flex-row gap-5">
          <div className="rounded-lg border border-[#E0D9DA] p-4 semi-sm:p-8 bg-[#F9F2F3] h-[340px] w-full">
            <h3 className="text-base font-poppins font-medium text-[#333333] mb-6">
              Special instructions for seller
            </h3>
            <textarea
              id="message"
              rows="7"
              className="w-full lg:w-96 rounded-md px-3 py-3 font-oswald border-b-[#C6C6C6] bg-[#FFFFFF] outline-none"
            ></textarea>
          </div>
          <div className="rounded-lg border border-[#E0D9DA] p-4 semi-sm:p-8 bg-[#F9F2F3] h-[340px] w-full">
            <h3 className="text-base font-poppins font-medium text-[#333333] mb-6">
              Special instructions for seller
            </h3>
            <div className="mb-5">
              <h4 className="font-poppins font-normal text-base text-[#333333] mb-3">
                Country
              </h4>
              <input
                className="w-full lg:w-96 rounded-lg px-3 py-3 font-oswald border border-[#E0D9DA] bg-[#F9F2F3] outline-none"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <h4 className="font-poppins font-normal text-base text-[#333333] mb-3">
                Zip/Postal code
              </h4>
              <input
                className="w-full lg:w-96 rounded-lg px-3 py-3 font-oswald border border-[#E0D9DA] bg-[#F9F2F3] outline-none"
                type="text"
                name=""
                id=""
              />
            </div>
            <h4 className="font-poppins font-normal text-base text-[#f87f96] mb-3 underline mt-5">
              Calculate shipping
            </h4>
          </div>
          <div className="rounded-lg border border-[#E0D9DA] p-4 semi-sm:p-8 bg-[#F9F2F3] h-[340px] w-full">
            <h3 className="text-base font-poppins font-medium text-[#333333] mb-6 pb-8 border-b-[1px] border-[#E0D9DA] lg:w-[330px]">
              Total amount
            </h3>

            <div className="flex w-full items-center justify-between mt-8">
              <h4 className="font-poppins font-normal text-base text-[#333333]  ">
                Total amount
              </h4>
              <h4 className="font-poppins font-bold text-base text-[#f87f96]  ">
                $
                {cartItems
                  .reduce(
                    (acc, item) => acc + item.quantity * item.productId.price,
                    0
                  )
                  .toFixed(2)}
              </h4>
            </div>
            <p className="text-[15px] font-poppins font-normal text-[#808080] mt-7">
              Taxes and shipping calculated at checkout.
            </p>
            <button className="w-full bg-[#FA7F96] hover:bg-black rounded-md text-white font-poppins font-medium text-base py-3 mt-7 uppercase">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
