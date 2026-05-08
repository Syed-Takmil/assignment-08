"use client";

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

const TopBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => setBreeds(data));
  }, []);

  const uniqueBreeds = [
    ...new Map(breeds.map((item) => [item.breed, item])).values(),
  ];

  const topBreeds = uniqueBreeds.slice(0, 8);

  // animation for cards
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl text-warning font-bold mb-6">🐄 Top Breeds</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {topBreeds.map((animal) => (
          <animated.div
            key={animal.id}
            style={fadeIn}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-lg transition"
          >
            <Image
              src={animal.image}
              alt={animal.name}
              className="w-full h-40 object-cover rounded-md"
              width={300}
              height={200}
            />

            <h2 className="mt-3 text-lg font-semibold">
              {animal.breed}
            </h2>

            <p className="text-sm text-gray-600">{animal.name}</p>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default TopBreeds;