import ProductBanner from "./ProductBanner";
import "./Products.css";
import Drawer from "./Drawer";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";

const Products = () => {
  return (
    <div>
      <ProductBanner />
      <div className="container mx-auto mb-28">
        <div className="flex items-start gap-10 w-full">
          <LeftSideContent />
          <RightSideContent />
        </div>
      </div>
      <Drawer htmlFor="my-drawer-4" />
    </div>
  );
};

export default Products;
