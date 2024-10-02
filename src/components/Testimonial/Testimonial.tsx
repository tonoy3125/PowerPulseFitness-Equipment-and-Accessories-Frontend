import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-poppins text-center text-4xl font-bold mb-16">
        Customer Love
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // loop={true}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center gap-5 w-full">
            <div className="flex flex-col  gap-5 w-1/2 bg-[#F9F2F3] border border-gray-200 rounded-lg shadow md:flex-row  ">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://i.postimg.cc/JnmgQp0F/testi-4.webp"
                alt=""
              />
              <div className="p-5">
                <div className="mt-4 pb-5">
                  <FaQuoteLeft className="text-3xl text-[#f87f96]" />
                </div>
                <p
                  className="mb-3 font-normal text-[#808080] font-poppins border-b-[1px] border-b-gray-400 pb-5"
                  style={{ lineHeight: "27px" }}
                >
                  This is the best jump rope I’ve used! The handles are
                  comfortable, and the rope turns smoothly for fast-paced
                  workouts. I appreciate the adjustable length and the quality
                  of the materials. It’s become div key part of my cardio
                  routine!
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-base font-poppins font-semibold text-[#f87f96] pb-1">
                      Emma Megan
                    </h1>
                    <p className=" font-normal text-[#808080] text-sm font-poppins">
                      Medical Officer
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-start mb-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#EFA505"
                          className="w-4 h-4"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <p className=" font-normal text-[#808080] text-sm font-poppins">
                      (5 Review)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-5 w-1/2 bg-[#F9F2F3] border border-gray-200 rounded-lg shadow md:flex-row">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://i.postimg.cc/3JfcqPKM/testi-1.webp"
                alt=""
              />
              <div className="p-5">
                <div className="mt-4 pb-5">
                  <FaQuoteLeft className="text-3xl text-[#f87f96]" />
                </div>
                <p
                  className="mb-3 font-normal text-[#808080] font-poppins border-b-[1px] border-b-gray-400 pb-5"
                  style={{ lineHeight: "27px" }}
                >
                  This is the best jump rope I’ve used! The handles are
                  comfortable, and the rope turns smoothly for fast-paced
                  workouts. I appreciate the adjustable length and the quality
                  of the materials. It’s become div key part of my cardio
                  routine!
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-base font-poppins font-semibold text-[#f87f96] pb-1">
                      Wesley bates
                    </h1>
                    <p className=" font-normal text-[#808080] text-sm font-poppins">
                      Medical Officer
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-start mb-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#EFA505"
                          className="w-4 h-4"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <p className=" font-normal text-[#808080] text-sm font-poppins">
                      (5 Review)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-5 w-full">
            <div className="flex flex-col  gap-5 w-1/2 bg-[#F9F2F3] border border-gray-200 rounded-lg shadow md:flex-row  ">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://i.postimg.cc/MG7tz48p/testi-2.webp"
                alt=""
              />
              <div className="p-5">
                <div className="mt-4 pb-5">
                  <FaQuoteLeft className="text-3xl text-[#f87f96]" />
                </div>
                <p
                  className="mb-3 font-normal text-[#808080] font-poppins border-b-[1px] border-b-gray-400 pb-5"
                  style={{ lineHeight: "27px" }}
                >
                  This is the best jump rope I’ve used! The handles are
                  comfortable, and the rope turns smoothly for fast-paced
                  workouts. I appreciate the adjustable length and the quality
                  of the materials. It’s become div key part of my cardio
                  routine!
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-base font-poppins font-semibold text-[#f87f96] pb-1">
                      David Williams
                    </h1>
                    <p className=" font-normal text-[#808080] text-sm font-poppins">
                      Medical Officer
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-start mb-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#EFA505"
                          className="w-4 h-4"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <p className=" font-normal text-[#808080] text-sm font-poppins">
                      (5 Review)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-5 w-1/2 bg-[#F9F2F3] border border-gray-200 rounded-lg shadow md:flex-row">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://i.postimg.cc/XJnLq8Vc/testi-3.webp"
                alt=""
              />
              <div className="p-5">
                <div className="mt-4 pb-5">
                  <FaQuoteLeft className="text-3xl text-[#f87f96]" />
                </div>
                <p
                  className="mb-3 font-normal text-[#808080] font-poppins border-b-[1px] border-b-gray-400 pb-5"
                  style={{ lineHeight: "27px" }}
                >
                  This is the best jump rope I’ve used! The handles are
                  comfortable, and the rope turns smoothly for fast-paced
                  workouts. I appreciate the adjustable length and the quality
                  of the materials. It’s become div key part of my cardio
                  routine!
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-base font-poppins font-semibold text-[#f87f96] pb-1">
                      Natasha Butt
                    </h1>
                    <p className=" font-normal text-[#808080] text-sm font-poppins">
                      Customer Product
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-start mb-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#EFA505"
                          className="w-4 h-4"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <p className=" font-normal text-[#808080] text-sm font-poppins">
                      (5 Review)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
