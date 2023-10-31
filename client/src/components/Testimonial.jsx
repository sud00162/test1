import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import Card1 from "../img/courses/card11.png";
import Card2 from "../img/courses/card44.png";
import Card3 from "../img/courses/card22.png";
import Card4 from "../img/courses/card33.png";
import Card5 from "../img/courses/card55.jpg.png";

const courses = [
  {
    id: 1,
    name: "Multi-Cloud DevOps Engineer",
    img: Card1,
    link: "/courses/data",
  },
  {
    id: 2,
    name: "Multi-Cloud Data Engineer ",
    img: Card3,
    link: "/courses/data",
  },
  {
    id: 3,
    name: "Multi-Cloud Generative AI & LLMs",
    img: Card4,
    link: "/courses/data",
  },
  {
    id: 4,
    name: "Multi-Cloud Security Engineer",
    img: Card2,
    link: "/courses/security",
  },
  {
    id: 5,
    name: "Multi-Cloud Networking Engineer ",
    img: Card5,
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
          slidesToShow: 2, // Display 2 cards in a row on mobile
        },
      },
    ],
  };

  return (
    <div className="p-3 md:p-5 md:my-0 relative" id="home_courses">
      <h2 className="text-xl md:text-4xl font-bold leading-tight text-center mb-5 uppercase">
        Courses <span className="text-green-600">Offered</span>
      </h2>
      <div className="md:py-2 my-2 flex flex-col justify-center items-center">
        <p className="mb-8 lg:mb-4 text-center text-gray-600 text-xl">
          We are the first in the industry to offer Multi-Cloud engineering
          programs across DevOps, Data, Security, Networking and Generative AI
          courses with hands-on labs and projects.
        </p>
        <div className="w-32 h-2 bg-green-500 rounded-full mx-auto"></div>
      </div>
      {/* --------- For Mobile and Desktop view -------- */}
      <Slider {...settings}>
        {courses.map((content) => (
          <div key={content.id} className="p-2">
            <div className="aspect-w-3 aspect-h-4" style={{ height: "100%" }}>
              <Cards name={content.name} img={content.img} id={content.id} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
