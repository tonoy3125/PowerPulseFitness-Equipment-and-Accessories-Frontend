import Banner from "../Banner/Banner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import PhotoGallery from "../Gallery/Gallery";
import HomePageCategories from "../HomePageCategories/HomePageCategories";
import OrderProcess from "../OrderProcess/OrderProcess";
import ProductBenefits from "../ProductBenefits/ProductBenefits";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <OrderProcess />
      <HomePageCategories />
      <FeaturedProduct />
      <PhotoGallery />
      <ProductBenefits />
    </div>
  );
};

export default Home;
