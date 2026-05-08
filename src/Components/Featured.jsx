"use client"



import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AnimalCard from './AnimalCard';
const Featured =() => {
    const[data,setData]=useState([])
    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/animals.json");
      const result = await res.json();

      setData(result);
      
    };


  }, []);

    const featuredAnimals=data.slice(1,4);
    return (
        <div>

<Swiper
  spaceBetween={10}
  slidesPerView={6}
>
  {featuredAnimals.map((animal) => (
    <SwiperSlide key={animal.id}>
      <AnimalCard animal={animal} />
    </SwiperSlide>
  ))}
</Swiper>
        </div>
    );
};

export default Featured;