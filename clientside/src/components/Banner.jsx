import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">

      {/* ── Left Side ─────────────────────────────── */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>

        <p className="text-white/80 text-sm mt-4 hidden sm:block">
          Join thousands of patients who found the right doctor on Curely.
        </p>

        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="bg-white text-sm sm:text-base px-8 py-3 rounded-full hover:scale-105 hover:shadow-md transition-all duration-300 font-medium"
            style={{ color: "#3B6D11" }}
          >
            Create account
          </button>
          <button
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="border border-white/60 text-white text-sm sm:text-base px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Browse doctors
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center gap-6 mt-8">
          <div>
            <p className="text-white font-semibold text-lg">100+</p>
            <p className="text-white/70 text-xs">Trusted doctors</p>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div>
            <p className="text-white font-semibold text-lg">50K+</p>
            <p className="text-white/70 text-xs">Happy patients</p>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div>
            <p className="text-white font-semibold text-lg">4.9★</p>
            <p className="text-white/70 text-xs">Average rating</p>
          </div>
        </div>
      </div>

      {/* ── Right Side ────────────────────────────── */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>

    </div>
  );
};

export default Banner;