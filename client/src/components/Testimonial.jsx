import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";

import Cloud_Security_Carousel from '../assets/img/Cloud_Security_Carousel.png'
import Generative_AI_Carousel from '../assets/img/Generative_AI_Carousel.png'
import Multi_Cloud_Carousel from '../assets/img/Multi_Cloud_Carousel.png'
import Networking_Carousel from '../assets/img/Networking_Carousel.png'
import Python_AI_Carousel from '../assets/img/Python_AI_Carousel.png'

const courses = [
  {
    id: 1,
    name: "AI and ML with Python",
    img: Python_AI_Carousel,
    link: "/courses/pythonml",
  },
  {
    id: 2,
    name: "Multi-Cloud Data Engineer ",
    img: Multi_Cloud_Carousel,
    link: "/courses/data",
  },
  {
    id: 3,
    name: "Multi-Cloud Generative AI & LLMs",
    img: Generative_AI_Carousel,
    link: "/courses/pythongenai",
  },
  {
    id: 4,
    name: "Multi-Cloud Security Engineer",
    img: Cloud_Security_Carousel,
    link: "/courses/security",
  },
  {
    id: 5,
    name: "Multi-Cloud Networking Engineer ",
    img: Networking_Carousel,
    link: "/courses/networking",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards in a row on desktop
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1, // Display 2 cards in a row on mobile
        },
      },
    ],
  };

  return (
    <div className="p-3 md:p-5 my-10 md:my-0" id="home_courses">
      <h2 className="text-xl md:text-4xl font-bold leading-tight text-center mb-5 uppercase">
        Courses <span className="text-green-600">Offered</span>
      </h2>
      <div className="md:py-2 my-2 flex flex-col justify-center items-center">
        <p className="mb-8 lg:mb-4 text-center text-gray-600 text-xl">
          We are the first in the industry to offer Multi-Cloud engineering
          programs across DevOps, Data, Security, Networking and Generative AI
          courses with hands-on labs and projects.
        </p>
        <div className="w-32 h-2 bg-custom_green rounded-full mx-auto"></div>
      </div>
      {/* --------- For Mobile and Desktop view -------- */}
      <Slider {...settings}>
        {courses.map((content) => (
          <div key={content.id}>
            <div className="p-2" style={{ height: "100%" }}>
              <Cards name={content.name} img={content.img} id={content.id} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
