import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-div">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src="/images/slider1.png" />
          <p>Rahul Gandhi's issue echoes in Bihar legislative council</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider1.png" />
          <p>Rahul Gandhi's issue echoes in Bihar legislative council</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider1.png" />
          <p>Rahul Gandhi's issue echoes in Bihar legislative council</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider1.png" />
          <p>Rahul Gandhi's issue echoes in Bihar legislative council</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider1.png" />
          <p>Rahul Gandhi's issue echoes in Bihar legislative council</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
