import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const images = [
  { src: "./image/ride1.jpg", alt: "Image 1 Description" },
  { src: "./image/ride2.jpg", alt: "Image 2 Description" },
  { src: "./image/ride3.jpg", alt: "Image 3 Description" },
  
];

const Gallery = () => {
  return (
    <div className="px-4 py-8">
     
      <div className=" mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-white text-2xl font-semibold mb-4">Gallery</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <Swiper
          spaceBetween={20} 
          slidesPerView={3} 
          breakpoints={{
            768: {
              slidesPerView: 3, 
            },
            1024: {
              slidesPerView: 3, 
            },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-32 md:h-32 lg:h-64 object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    
  );
};

export default Gallery;
