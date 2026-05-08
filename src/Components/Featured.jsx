"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import AnimalCard from "./AnimalCard";
import Card from "./shared/Card";

const Featured = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const featuredAnimals = data.slice(5, 10);

  return (
    <div>
      <h2 className="text-3xl  font-bold text-black text-center my-5">
        Featured Animals
      </h2>

      <Swiper
       modules={[Pagination]} pagination={{ clickable: true }}
        spaceBetween={15}
        slidesPerView={2.5}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },    
        }}
      >
        {featuredAnimals.map((animal) => (
          <SwiperSlide key={animal.id}>
            <Card animal={animal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;