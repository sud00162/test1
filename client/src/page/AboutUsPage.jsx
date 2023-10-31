import React from "react";
import Prabodh from "../img/prabodh1.png";
import Abhiroop from "../img/abhiroop.png";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import pngegg from "../img/pngegg.png";
import pngegg1 from "../img/pngegg1.png";

const About = () => {
  return (
    <div className="mt-30 about_us_page">
      <div className="header_slider about_bg_2 flex items-center text-white overlay h-[500px]  md:h-[650px]">
        <div className="header_text  flex justify-center">
          <h3 className="text-lg md:text-3xl md:w-1/2 px-5 md:px-0uppercase">
            
          </h3>
        </div>
      </div>

      <div className="how_we_about_area relative my-20">
        <div className="flex">
          <div className="md:basis-1/2">
            <div className="work_info px-3 md:px-20">
              <div className="section_title">
                <p className="text-4xl md:text-4xl font-bold text-green-500">
                  Who <span className="text-black"> We Are ? </span>
                </p>
              </div>
              <p className="text-slate-600 text-lg mt-7">
                We are a team of highly experienced software product engineers,
                starting from ex CTOs, Heads of Engineering to Principal
                Engineers with experience in Unicorns, Soonicorns, Silicon
                Valley startups and tech divisions of Fortune 500 enterprises,
                on a journey to solve the industry problem of skills gap in
                cloud engineering technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- What make us different -------------*/}
      <div className="my-[100px]">
        <div className="my-10">
          <p className="text-4xl md:text-5xl font-bold text-green-500 pl-2 md:pl-20">
            Here's what make us {" "}
            <span className="text-black"> Exception !</span>
          </p>
        </div>

        <div className="flex justify-around items-center p-2">
          <div className="max-w-sm rounded overflow-hidden flex flex-col border justify-center items-center mx-5 p-3 border-green-500 border-b-4">
            <img className="h-48 w-48" src={pngegg} alt="" />
            <div className="flex-grow px-6 py-4 mb-5">
              <p className="text-gray-700 text-base md:text-xl  overflow-hidden h-40">
                Our training emphasizes cloud architecture and design principles
                based on AWS and GCP, two of the most mature and widely adopted
                cloud platforms.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden flex flex-col border justify-center items-center mx-5 p-3 border-green-500 border-b-4">
            <img className="h-48 w-48" src={pngegg1} alt="" />
            <div className="flex-grow px-6 py-4 mb-5">
              <p className="text-gray-700 text-xs md:text-xl  overflow-hidden h-30">
                We teach engineers how to deploy high-scale, reliable software
                products similar to those used by Uber, Amazon, Paytm, Twitter,
                and other tech giants, on multiple clouds.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden flex flex-col border justify-center items-center mx-5 p-3 border-b-4 border-green-500 ">
            <img className="h-48 w-48" src={pngegg} alt="" />
            <div className="flex-grow px-6 py-4 mb-5">
              <p className="text-gray-700 text-lg md:text-xl  overflow-hidden h-40">
                We train participants to become experts in cloud AI, so they can
                ride the AI/ML wave and stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- Founder Cards -------------*/}
      <div className="flex flex-col md:flex-row justify-center mb-11">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-3 md:mx-10">
          <a href=".">
            <img className="rounded-t-lg" src={Prabodh} alt="" />
          </a>
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Prabodh Ranjan
            </h5>
            <p className="mb-3 font-normal text-gray-500">
              Marie Curie Fellowsip- IIT Madras, 7+ yrs cloud, devops,
              cybersecurity
            </p>
            <div className="icons flex justify-center space-x-4 ">
              <a href="mailto:prabodh@kloudstac.com">
                <AiOutlineMail
                  size={36}
                  className=" text-green-700 hover:text-gray-900 transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/prabodhmariecuriefellow/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin
                  size={36}
                  className=" text-green-700 hover:text-gray-900 transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow mx-3 md:mx-10">
          <a href=".">
            <img className="rounded-t-lg" src={Abhiroop} alt="" />
          </a>
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Abhiroop Roy
            </h5>
            <p className="mb-3 font-normal text-gray-500">
              Ex. CTO/founder in 5 startups, 19 yrs in software products, 8+ yrs
              as architect in AWS and GCP.{" "}
            </p>
            <div className="icons flex justify-center space-x-4 ">
              <a href="mailto:abhiroop@kloudstac.com">
                <AiOutlineMail
                  size={36}
                  className=" text-green-700 hover:text-gray-900 transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/abhiroop-roy-bb89092/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin
                  size={36}
                  className=" text-green-700 hover:text-gray-900 transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
