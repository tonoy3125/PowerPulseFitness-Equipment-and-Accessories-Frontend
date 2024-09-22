import { useGetSingleProductByIdQuery } from "@/redux/features/product/productApi";
import { useParams } from "react-router-dom";

const DashboardUpdateProduct = () => {
  const { id } = useParams();
  // Fetch product data
  const { data: singleProductData } = useGetSingleProductByIdQuery(id!);
  const product = singleProductData?.data;
  console.log(product);
  return (
    <div>
      <h1>This is update product</h1>
    </div>
  );
};

export default DashboardUpdateProduct;
