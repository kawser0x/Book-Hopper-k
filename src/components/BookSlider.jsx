"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ShowBooks from "./shared/ShowBooks";

export default function BookSlider({ books = [] }) {
  return (
    <div className="container  mx-auto p-5">
      <h3 className="text-xl font-bold mb-3">Featured Highlights</h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoHeight={false}
        className="">
        {books.map((book) => (
          <SwiperSlide key={book.id} className="p-5">
            <div className=" h-100 w-100 flex flex-col p-2">
                <ShowBooks book={book} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
