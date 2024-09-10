import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import RightSideUpperContent from "./RightSideUpperContent";
import ProductCard from "./ProductCard";

const RightSideContent = ({ selectedCategories }) => {
  // Prepare the query object
  const queryParams = {};

  // If categories are selected, include them in the query, otherwise fetch all products
  if (selectedCategories.length > 0) {
    queryParams.category = selectedCategories;
  }

  // Use the query with the queryParams (if any categories are selected)
  const { data: productData } = useGetAllProductsQuery(queryParams);

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
