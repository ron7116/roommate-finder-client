import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="p-10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Find the Perfect Roommate
            </h2>
            <p className="text-base-content max-w-md">
              Roomate helps you connect with like-minded individuals based on
              lifestyle, habits, and preferences.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Safe & Verified Profiles
            </h2>
            <p className="text-base-content max-w-md">
              All users go through a basic verification process to ensure trust
              and safety in your housing journey.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Easy Communication
            </h2>
            <p className="text-base-content max-w-md">
              Use our in-platform messaging to get to know your potential
              roommates before making a decision.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
