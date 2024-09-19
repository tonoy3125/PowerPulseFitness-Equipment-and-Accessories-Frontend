import { useGetProductsByCategoryQuery } from "@/redux/features/product/productApi";
import { useParams } from "react-router-dom";
import ProductCategoryBanner from "@/components/ProductCategoryBanner/ProductCategoryBanner";
import CategoryProductCard from "../Products/CategoryProductCard";

const CategoryProducts = () => {
  const { category } = useParams();

  const { data: CategoryProducts } = useGetProductsByCategoryQuery(category!);
  console.log(CategoryProducts);

  // Access the products array from the response
  const products = CategoryProducts?.data?.[0]?.products || [];

  return (
    <div>
      <ProductCategoryBanner category={category} />
      <div className="container mx-auto mt-10 mb-20">
        <div className="grid grid-cols-4 gap-5">
          {products?.map((product) => (
            <CategoryProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
