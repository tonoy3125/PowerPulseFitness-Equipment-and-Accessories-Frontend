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
      <div className="container mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-20">
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
      </div>
    </div>
  );
};

export default Mycart;
