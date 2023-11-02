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
          className="py-2 md:py-3 px-4 md:px-5 my-2 md:font-medium text-center text-white bg-custom_green sm:w-fit rounded-3xl"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default Cards;
