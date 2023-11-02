import React from "react";
import { HashLink } from "react-router-hash-link";
import home_background_video from "../assets/videos/home_background_video.mp4";


const course_css = "mt-8 boxed-btn3 drop-shadow-2xl bg-custom_green text-white cursor-pointer uppercase text-center text-xs md:text-base font-semibold rounded-3xl py-3 px-8";

const Header = () => {
  return (
    <>
      {/*---------- Header --------------*/}
      <div className="home_page">
        <div className="home_background_video_container">
          <video src={home_background_video} autoPlay loop muted />
          <div className="home_background_content pl-5 md:pl-20">
            <p className="text-4xl md:text-7xl text-bold drop-shadow-2xl leading-normal md:leading-[80px]">
               Become a 
              <span className="ml-2 text-custom_green">
                Multi Cloud Generative  AI Engineer / Architect
              </span>
            </p>
            <HashLink
              to="/#home_courses"
              className={course_css}
            >
             Visit Our Courses
            </HashLink>
          </div>
        </div>

      </div>  
    </>
  );
};

export default Header;
