import React from "react";
import { Link } from "react-router-dom";

import Generative_AI_with_python_and_AWS from "../../assets/Course_pdf/Generative_AI_with_python_and_AWS.pdf";

import Card1 from "../../img/card1.png";
import ToggleModule from "../../components/ToggleModule";
import { PythonGenAI_faqs } from "../../constants/courses_faqs";

const commonButtonClasses =
  "py-2 px-8 mt-6 mx-2 boxed-btn3 bg-[#4CBB17] text-white cursor-pointer uppercase text-center text-xs md:text-base font-[400] rounded-3xl";

const PythonGenAI = () => {

  return (
    <>
      <div className="home_page">
      <div className="bg-center bg-cover relative z-0 bg_Python_Generative_AI"></div>
        <div className="my-5 p-4 md:p-15">
          <div>
            <p className="uppercase text-xl md:text-3xl font-semibold ">
              Generative AI  <span className="text-green-600">with Python and AWS{" "} </span>
            </p>
            <p className="w-1/4 bg-green-500  h-1 mt-2 text-center"></p>
            <div className="flex flex-col md:flex-row my-10">

              {/*------------ course content ------------------*/}
              <div className="basis-full md:basis-3/5 p-2 md:p-1 text-slate-800 text-[16px] md:text-[18px]">
                <p className="">
                  {" "}
                  Embark on a transformative learning expedition with our meticulously structured "Generative AI with Python and AWS" Course, which is specifically tailored for aspiring minds around the globe seeking practical, hands-on exposure to the innovations of Artificial Intelligence, Machine Learning, and, more significantly, Generative AI on AWS Cloud. This course is an amalgamation of immersive labs, real-world scenarios, and impactful knowledge, making it an unparalleled learning avenue for students and working professionals worldwide eager to solidify their technical acumen and leap forward into the future of technology.
                </p>
                <p className="my-6 text-lg md:text-[20px] font-[500]">
                  <span className="text-green-600 uppercase">
                    Course Duration
                  </span>{" "}
                 <i> : 60 hrs of theory & practical, upto 20 hrs of Project work
                  Total 80 hrs </i>{" "}
                </p>
                <p>
                  We provide a course completion certificate and offer
                  internship assistance (for students).
                </p>
                <Link
                  to="/contact"
                  className={commonButtonClasses}
                >
                  Register
                </Link>

                <a href={Generative_AI_with_python_and_AWS} download="Example-PDF-document"  target="_blank" rel="noreferrer" className={commonButtonClasses}>
                    <button> Download Brochure </button>
                </a>
                
                {/*------------course Faq section ------------------*/}
                <div className="mt-10 ">
                  <p className="text-2xl font-semibold uppercase my-6">
                    {" "}
                    <span className="text-green-600">What </span>we Teach
                  </p>
                  <ToggleModule faqs={PythonGenAI_faqs} />
                </div>
              </div>

              {/*------------ course image ------------------*/}
              <div className="basis-full md:basis-2/5 mt-5 md:mt-0">
                <img src={Card1} alt="" srcset="" />
                <div className="pl-2 md:pl-10">
                  <p className="mt-6 text-2xl font-semibold uppercase">
                    Pre-Requisites
                  </p>
                  <div className="my-3">
                    <li>Basic python programming knowledge is good to have.</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PythonGenAI;
