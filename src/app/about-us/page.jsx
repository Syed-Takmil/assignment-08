"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-base-200">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          About QurbaniHat
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          A trusted livestock booking platform designed to make Qurbani
          animal selection simple, fast, and transparent.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">

          <div className="p-6 rounded-xl bg-base-100 shadow">
            <h3 className="text-xl font-semibold mb-2">🐄 Our Mission</h3>
            <p className="text-gray-600">
              To connect buyers with healthy and verified livestock for Qurbani in a
              smooth digital experience.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-base-100 shadow">
            <h3 className="text-xl font-semibold mb-2">🔒 Trusted Platform</h3>
            <p className="text-gray-600">
              Every animal listing is carefully managed so users can book with confidence.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-base-100 shadow">
            <h3 className="text-xl font-semibold mb-2">⚡ Easy Booking</h3>
            <p className="text-gray-600">
              Browse animals, view details, and book instantly after login — all in one place.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;