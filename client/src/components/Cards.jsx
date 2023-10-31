import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ img, name, id, link }) => {
  return (
    <div className="max-w-fit rounded overflow-hidden border flex flex-col shadow-lg" key={id}>
      <div className="aspect-w-3 aspect-h-4">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="flex-grow px-6 py-4 mb-5">
        <p className="text-black-700 text-lg md:text-xl font-[450] md:font-semibold overflow-hidden h-20">
          {name}
        </p>
        <Link
          to={link}
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 sm:w-fit"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default Cards;
