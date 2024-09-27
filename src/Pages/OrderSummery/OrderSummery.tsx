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

  return (
    <div>
      <AdsNavbar />
      <Navbar />
      <OrderSummeryBanner />
      <div className="mt-10 mb-10"></div>
      <Footer />
    </div>
  );
};

export default OrderSummery;
