import { useGetProductsByCategoryQuery } from "@/redux/features/product/productApi";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { category } = useParams();

  const { data: CategoryProducts } = useGetProductsByCategoryQuery(category!);
  console.log(CategoryProducts);

  return (
    <div>
      <h1>This Is {CategoryProducts?.data?.category}</h1>
    </div>
  );
};

export default CategoryProducts;
