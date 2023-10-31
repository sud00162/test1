import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      {/*---------- Header --------------*/}
      <div className="home_page">
        <div className="header_slider header_bg_1 overlay flex items-center h-[700px] md:h-[700px]">

          
          <div className="header_text pl-5 md:pl-36">
            <h3 className="text-bold drop-shadow-2xl text-4xl md:text-6xl leading-normal md:leading-[75px]">
              Start Your Career <br /> Become an{" "}
              <span className="text-green-400">AWS, Azure <br /> or Google Cloud Engineer </span>
            </h3>

            <HashLink
              to="/#home_courses"
              className="mt-8 boxed-btn3 drop-shadow-2xl bg-[#4CBB17] text-white cursor-pointer uppercase text-center text-xs md:text-base font-semibold rounded-3xl py-3 px-8"
            >
              Visit Our Courses
            </HashLink>
          </div>
        </div>
      </div>

      <div className="md:py-1 flex flex-col justify-center items-center text-gray-700">
        <p className="text-xl drop-shadow-2xl md:text-[35px] md:font-[350] md:leading-[120%] leading-normal w-11/12 md:w-11/12 mx-auto text-center md:mt-20 mb-5">
          With more than 10 years of experience. We provide you comprehensive guidance on <br />{" "}
          <span className="text-green-400">Google Cloud, AWS, and Microsoft Azure.</span>
        </p>
        <p className="w-32 bg-green-500 h-1 md:h-2 text-center"></p>
      </div>
    </>
  );
};

export default Header;
