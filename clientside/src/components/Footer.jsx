import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* ── Left Section ─────────────────────────── */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-500 leading-6">
            Curely connects you with trusted, verified doctors for easy
            appointment booking. Your health is our priority — hassle-free
            care, whenever you need it.
          </p>
        </div>

        {/* ── Center Section ───────────────────────── */}
        <div>
          <p className="text-base font-medium mb-5 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="hover:text-primary cursor-pointer transition-colors duration-200">Home</li>
            <li className="hover:text-primary cursor-pointer transition-colors duration-200">About us</li>
            <li className="hover:text-primary cursor-pointer transition-colors duration-200">Contact us</li>
            <li className="hover:text-primary cursor-pointer transition-colors duration-200">Privacy policy</li>
          </ul>
        </div>

        {/* ── Right Section ────────────────────────── */}
        <div>
          <p className="text-base font-medium mb-5 text-gray-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="hover:text-primary cursor-pointer transition-colors duration-200">+91 9368595086</li>
            <li className="hover:text-primary cursor-pointer transition-colors duration-200">shakti33123singh@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* ── Copyright ────────────────────────────────── */}
      <div>
        <hr className="border-green-100" />
        <p className="py-5 text-sm text-center text-gray-400">
          Copyright © 2024 <span className="text-primary font-medium">Curely</span> — All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;