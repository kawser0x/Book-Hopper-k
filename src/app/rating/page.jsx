import React from "react";
import { FaStar } from "react-icons/fa"; 

const RatingPage = () => {
  return (
    <div className="bg-green-800 grid grid-cols-1 md:grid-cols-2 p-6 rounded-xl items-center">
      <div className="p-3 text-start space-y-3">
        <h2 className="font-bold text-2xl text-white">Customer Review :</h2>
        <ul className="space-y-2">
          <li className="font-light text-lg text-white">
            1. This book completely transformed my perspective and kept me
            hooked from the very first page to the end.
          </li>
          <li className="font-light text-lg text-white">
            2. The quality of the storytelling and the depth of the characters
            make it an absolute must-read for everyone.
          </li>
          <li className="font-light text-lg text-white">
            3. Fast shipping, wonderful packaging, and an engaging read that I
            couldn't put down all weekend!
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center text-center pt-10 md:pt-0 space-y-3">
        <h2 className="text-white font-bold text-xl">Overall Rating</h2>

        <div className="text-4xl font-extrabold text-yellow-400">
          4.8 <span className="text-lg font-normal text-white">/ 5.0</span>
        </div>

        <div className="flex gap-1 text-yellow-400 text-2xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p className="text-green-200 text-sm">Based on 1,240+ reviews</p>
      </div>
    </div>
  );
};

export default RatingPage;
