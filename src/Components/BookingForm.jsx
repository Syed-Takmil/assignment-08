"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;

    if (!name || !email || !phone || !address) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Submitting booking...");

    try {

      toast.update(toastId, {
        render: "Booking successful!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      form.reset();
    }
     catch (err) {
      console.log(err);

      toast.update(toastId, {
        render: "Booking failed. Try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <form
        onSubmit={handleBooking}
        className="w-full max-w-md p-6 border rounded-xl bg-base-100 shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Booking Form</h2>

  
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />
        <textarea
          name="address"
          placeholder="Address"
          className="textarea textarea-bordered w-full"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full"
        >
          {loading ? "Submitting..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;