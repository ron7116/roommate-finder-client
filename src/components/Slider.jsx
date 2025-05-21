import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative min-h-[500px] bg-no-repeat bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co/cXbHPq71/roommate-final1.png')",
            }}
          >
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Find the Perfect Roommate
              </h2>
              <p className="max-w-xl mx-auto">
                Roomate helps you connect with like-minded individuals based on
                lifestyle, habits, and preferences.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative min-h-[500px] bg-no-repeat bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co/rf6FJQHD/roommate-slider2.png')",
            }}
          >
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Safe & Verified Profiles
              </h2>
              <p className="max-w-xl mx-auto">
                All users go through a basic verification process to ensure
                trust and safety in your housing journey.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative min-h-[500px] bg-no-repeat bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co/8n3zfghZ/slider3.png')",
            }}
          >
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Easy Communication</h2>
              <p className="max-w-xl mx-auto">
                Use our in-platform messaging to get to know your potential
                roommates before making a decision.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
