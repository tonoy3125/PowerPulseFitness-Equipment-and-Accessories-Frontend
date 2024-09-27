import { useGetSingleOrderQuery } from "@/redux/features/checkout/checkoutApi";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import AdsNavbar from "../Shared/AdsNavbar/AdsNavbar";
import Footer from "../Shared/FooterPage/Footer/Footer";
import SingleProduct from "../Products/SingleProduct";
import OrderSummeryBanner from "@/components/OrderSummeryBanner/OrderSummeryBanner";

const OrderSummery = () => {
  const { id } = useParams();

  const { data: singleOrder } = useGetSingleOrderQuery(id!);
  console.log(singleOrder);

  // Helper function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", // This will give "Sep"
      day: "numeric",
    });
  };

  return (
    <div>
      <AdsNavbar />
      <Navbar />
      <OrderSummeryBanner />
      <div className="mt-10 mb-10 max-w-7xl mx-auto">
        <div className=" flex items-center justify-center mt-8 pb-10">
          <ol className="items-center flex w-full max-w-2xl text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 md:text-base font-poppins">
            <li className="after:border-1 flex items-center text-[#1D4ED8] after:mx-1 sm:after:mx-3 semi-sm:after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-[#1D4ED8] dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200  dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>

            <li className="after:border-1 flex items-center text-[#1D4ED8] after:mx-1 sm:after:mx-3 semi-sm::after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-[#1D4ED8] dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200  dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>

            <li className="flex shrink-0 items-center text-[#1D4ED8]">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order summary
            </li>
          </ol>
        </div>
        <h3 className="text-[#7C7C7C] font-poppins font-medium text-lg ">
          Thank you. Your order has been received.
        </h3>
        <div className="flex items-center gap-5 rounded-xl p-5 mt-8 bg-[#FFFFFF]">
          <div className="border-r-[1px] border-dashed border-[#cfc8d8] pr-10 pl-5">
            <p
              className="text-[#7C7C7C] uppercase font-oswald text-base font-medium mb-2"
              style={{ lineHeight: "1", letterSpacing: "0.025em" }}
            >
              Order number :
            </p>
            <p
              className="text-[#2C2C2C] font-poppins text-sm font-normal"
              style={{ lineHeight: "1.5" }}
            >
              {singleOrder?.data.orderNumber}
            </p>
          </div>
          <div className="border-r-[1px] border-dashed border-[#cfc8d8] pr-10 pl-5">
            <p
              className="text-[#7C7C7C] uppercase font-oswald text-base font-medium mb-2"
              style={{ lineHeight: "1", letterSpacing: "0.025em" }}
            >
              Date:
            </p>
            <p
              className="text-[#2C2C2C] font-poppins text-sm font-normal"
              style={{ lineHeight: "1.5" }}
            >
              {singleOrder?.data.createdAt
                ? formatDate(singleOrder.data.createdAt)
                : "N/A"}
            </p>
          </div>
          <div className="border-r-[1px] border-dashed border-[#cfc8d8] pr-10 pl-5">
            <p
              className="text-[#7C7C7C] uppercase font-oswald text-base font-medium mb-2"
              style={{ lineHeight: "1", letterSpacing: "0.025em" }}
            >
              Total:
            </p>
            <p
              className="text-[#2C2C2C] font-poppins text-sm font-normal"
              style={{ lineHeight: "1.5" }}
            >
              {singleOrder?.data.total}
            </p>
          </div>
          <div className="pr-10 pl-5">
            <p
              className="text-[#7C7C7C] uppercase font-oswald text-base font-medium mb-2"
              style={{ lineHeight: "1", letterSpacing: "0.025em" }}
            >
              Payment Method:
            </p>
            <p
              className="text-[#2C2C2C] font-poppins text-sm font-normal"
              style={{ lineHeight: "1.5" }}
            >
              Cash On Delivery
            </p>
          </div>
        </div>
        <h3 className="text-[#7C7C7C] font-poppins font-medium text-lg mt-14">
          Pay with cash upon delivery.
        </h3>
        <div>
          <div className="mt-10 mb-10">
            <h1 className="font-oswald text-3xl text-black font-medium mb-3 uppercase pb-5 pt-5">
              Order details
            </h1>
            <div className=" bg-[#FFFFFF] p-5 semi-sm:p-10 rounded-xl">
              <div>
                {singleOrder?.data?.addToCartProduct?.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400"
                  >
                    <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                      {item?.productId.name} × {item?.quantity}
                    </h1>
                    <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                      ${item?.productId.price}
                    </h1>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400">
                <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                  SubTotal
                </h1>
                <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                  {singleOrder?.data?.subTotal}
                </h1>
              </div>
              <div className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400">
                <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                  Tax
                </h1>
                <h1 className="font-poppins font-medium text-base">
                  {singleOrder?.data?.tax}
                </h1>
              </div>
              <div className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400">
                <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                  Shipping
                </h1>
                <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                  ${singleOrder?.data?.shipping}
                </h1>
              </div>
              <div className="flex items-center justify-between border-b-[1px] pb-5 pt-5 border-b-gray-400">
                <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                  Payment method:
                </h1>
                <h1 className="font-poppins font-semibold text-base text-[#2C2C2C]">
                  Cash On Delivery
                </h1>
              </div>
              <div className="flex items-center justify-between  pb-5 pt-5 ">
                <h1 className="font-poppins font-semibold text-base ">Total</h1>
                <h1 className="font-poppins font-semibold text-base ">
                  {singleOrder?.data?.total}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSummery;
