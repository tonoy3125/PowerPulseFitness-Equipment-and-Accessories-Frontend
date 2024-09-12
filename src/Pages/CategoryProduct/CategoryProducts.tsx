import { useGetProductsByCategoryQuery } from "@/redux/features/product/productApi";
import { useParams } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import ProductCategoryBanner from "@/components/ProductCategoryBanner/ProductCategoryBanner";

const CategoryProducts = () => {
  const { category } = useParams();

  const { data: CategoryProducts } = useGetProductsByCategoryQuery(category!);
  console.log(CategoryProducts);

  return (
    <div>
      <ProductCategoryBanner />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-5">
          {CategoryProducts?.data?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
