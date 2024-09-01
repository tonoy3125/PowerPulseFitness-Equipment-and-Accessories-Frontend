import { useSwiper } from "swiper/react";
import { TiMediaPlay } from "react-icons/ti";
import { TiMediaPlayReverse } from "react-icons/ti";

const AdsNavbarSwiperButton = () => {
  
  return (
    <div className="mt-5 flex justify-center">
      <button
        className=" bg-[#e2e8f0] text-[#94a3b8] px-4 py-3 hover:bg-[#9ed6ec] rounded-md mr-2"
        onClick={() => swiper.slidePrev()}
      >
        <TiMediaPlayReverse className="text-2xl"></TiMediaPlayReverse>
      </button>
      <button
        className=" bg-[#e2e8f0] text-[#94a3b8] px-4 py-3 hover:bg-[#9ed6ec] rounded-md"
        onClick={() => swiper.slideNext()}
      >
        <TiMediaPlay className="text-2xl"></TiMediaPlay>
      </button>
    </div>
  );
};

export default AdsNavbarSwiperButton;
