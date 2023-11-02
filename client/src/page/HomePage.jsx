import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial";

import ReadMoreComponent from "../components/ReadMoreComponent";
import { BsCaretRightFill } from "react-icons/bs";

import MissionVideo from "../assets/videos/KloudStac-Mission.mp4";

const workSample = [
  {
    id: 1,
    title:
      "How to build well-architected cloud native and cloud agnostic applications with characteristics like high availability, scalability, resilience/ reliability, performance, cost optimized and secure.",
  },
  {
    id: 2,
    title:
      "How to use Generative AI for 5-10x improvement in personal & team productivity & performance.",
  },
  {
    id: 3,
    title:
      "Modern database architectures including RDBMS and NoSQL databases, with practical examples of how renowned big tech apps use databases.",
  },
  {
    id: 4,
    title:
      "How to design & implement data engineering pipelines and model a data warehouse, data lake and lakehouse.",
  },
  {
    id: 5,
    title:
      "How to build well-architected cloud native and cloud agnostic applications with characteristics like high availability, scalability, resilience/ reliability, performance, cost optimized and secure.",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="mt-20 md:py-1 text-2xl md:text-4xl md:font-[550] drop-shadow-2xl md:leading-[120%] leading-normal flex flex-col justify-center items-center text-gray-700 text-center">
        <p className=" ">
          With more than 10 years of experience. We provide you  <br /> comprehensive
          guidance on <br />
          <span className="text-custom_green">
            Google Cloud, AWS, and Microsoft Azure.
          </span>
        </p>
        <p className="w-32 bg-custom_green h-1 md:h-2 text-center my-2 rounded-md"></p>
      </div>

      <div class="flex flex-wrap my-10 md:py-[120px]">
        <div class="w-full md:w-1/2 p-4 md:px-8">
          <p className="text-custom_green text-xl md:text-[40px] font-[700] leading-[130%]">
            WHAT YOU WILL LEARN THROUGH OUR COURSES ?
          </p>
          <div class="text-[16px] md:text-[18px] mt-10">
            {workSample.map((item) => {
              return (
                <div className="flex my-2">
                  <span className="mr-3 pt-2 ">
                    <BsCaretRightFill size={15} />
                  </span>
                  <ReadMoreComponent
                    text={item.title}
                    maxLength={80}
                    id={item.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-end">
          <video src={MissionVideo} autoPlay loop muted />
        </div>
      </div>

      <Testimonial />

      {/*----------Our Mission section  --------------*/}
        <div className="component-container my-20">
         <div className="content">   
            <div className="flex flex-col">
              <p className="text-4xl font-semibold leading-10 text-custom_green uppercase text-center">
                Our Mission
              </p>
              <p className="text-lg my-10 text-slate-100">
                Our mission at Kloudstac is to equip students and young
                professionals with the necessary knowledge and skills to thrive
                in the future of the tech industry. We strive to raise awareness
                and proficiency in utilizing cloud-based technologies, which
                provide effortless access to a wide range of physical and
                digital resources. By teaching these technologies, we enable the{" "}
                accelerated development of scalable, enterprise-level software
                products tailored to meet diverse business requirements.
              </p>
              <p className="text-lg mt-4text-slate-100">
                Central to our mission is the enhancement of cloud-based
                technical competencies among aspiring graduates and
                professionals entering or planning to enter the IT field
              </p>
              <Link
                to="/about"
                className="rounded-3xl text-lg text-center px-5 py-3 mt-10 bg-custom_green w-40 text-white"
              >
                About Us{" "}
              </Link>
            </div>
          </div>
        </div>

       <Contact />
    </div>
  );
};

export default Home;
