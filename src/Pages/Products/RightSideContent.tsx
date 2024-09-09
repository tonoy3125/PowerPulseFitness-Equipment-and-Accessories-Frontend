import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import RightSideUpperContent from "./RightSideUpperContent";
import ProductCard from "./ProductCard";

const RightSideContent = () => {
  const { data: productData } = useGetAllProductsQuery(undefined);
  console.log(productData);
  return (
    <div className="">
      <RightSideUpperContent />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {productData?.data?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RightSideContent;
