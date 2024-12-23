import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const images = [
  { src: "./image/ride1.jpg", alt: "Image 1 Description" },
  { src: "./image/ride2.jpg", alt: "Image 2 Description" },
  { src: "./image/ride3.jpg", alt: "Image 3 Description" },
  { src: "./image/ride4.jpg", alt: "Image 4 Description" },
];

const Gallery = () => {
  return (
    <div className="px-6 py-8 ">
      <h2 className="text-white  text-2xl font-semibold mb-4">Gallery</h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={3} // Show 3 slides at the same time
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-32 object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
