import Banner from "../Banner/Banner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import HomePageCategories from "../HomePageCategories/HomePageCategories";
import OrderProcess from "../OrderProcess/OrderProcess";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderProcess />
      <HomePageCategories />
      <FeaturedProduct />
    </div>
  );
};

export default Home;
