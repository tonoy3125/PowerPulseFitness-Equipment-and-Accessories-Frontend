import Banner from "../Banner/Banner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
// import Gallery from "../HomePageCategories/Gallery/Gallery";

import HomePageCategories from "../HomePageCategories/HomePageCategories";
import OrderProcess from "../OrderProcess/OrderProcess";
import ProductBenefits from "../ProductBenefits/ProductBenefits";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderProcess />
      <HomePageCategories />
      <FeaturedProduct />
      {/* <Gallery /> */}
      <ProductBenefits />
    </div>
  );
};

export default Home;
