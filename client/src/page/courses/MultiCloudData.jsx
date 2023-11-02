import React from "react";
import { Link } from "react-router-dom";

import Card1 from "../../img/card1.png";
import ToggleModule from "../../components/ToggleModule";

import {MultiCloudData_faqs} from '../../constants/courses_faqs'

const commonButtonClasses =
  "py-2 mx-2 px-8 mt-6 boxed-btn3 bg-[#4CBB17] text-white cursor-pointer uppercase text-center text-xs md:text-base font-[400] rounded-3xl";

const MultiCloudData = () => {
  return (
    <>
      {/* Above header image */}
      <div className="bg-center bg-cover relative z-0 bg_Multi_Cloud_Banner"></div>
      
      {/* MultiCloud Data Page content */}
      <div className="my-5 p-4 md:p-15">
          <div>
            <p className="uppercase text-xl md:text-3xl font-semibold ">
              Multi-Cloud <span className="text-green-600">Data Engineer </span>
            </p>
            <p className="w-1/4 bg-green-500  h-1 mt-2 text-center"></p>
            <div className="flex flex-col md:flex-row my-10">

              {/*------------ course content ------------------*/}
              <div className="basis-full md:basis-3/5 p-2 md:p-1 text-slate-800 text-[16px] md:text-[18px]">
                <p className="">
                  This course is the first-of-its kind in the Industry covering
                  technical architecture, systems, and deepdive into various
                  cloud data engineering and analytics services/system on GCP,
                  AWS, Azure, Snowflake, Databricks.
                </p>
                <p className="my-6 text-lg md:text-[20px] font-[500]">
                  <span className="text-green-600 uppercase"> Course Duration </span>
                  <i>
                    : 120 hrs of theory & practical, upto 120 hrs of Project
                    work Total 140 hrs
                  </i>
                </p>
                <p>
                  We provide a course completion certificate and offer
                  internship assistance ( for students ) and placement
                  assistance (for students) and placement assistance ( for
                  working professional and final yr students/ recent passout )
                </p>

                {/*------------ Download and Regsiter button  ------------------*/}
                <div className="my-2">
                  <Link to="/register" className={commonButtonClasses}> Register </Link>

                {/* <a href={Cloud_Networking_Engineer_Course} download="Example-PDF-document"  target="_blank" rel="noreferrer" className={commonButtonClasses}>
                    <button> Download Brochure </button>
                </a> */}

                 
                </div>

                {/*------------ course Faq section  ------------------*/}
                <div className="mt-10 ">
                  <p className="text-2xl font-semibold uppercase my-6">
                    <span className="text-green-600">What </span>we Teach
                  </p>
                  {/* List of course modules */}
                  <ToggleModule faqs={MultiCloudData_faqs} />
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
                    <li>Basic sql hands on knowledge is good to have.</li>
                    <li>Basic cloud knowledge is good to have.</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default MultiCloudData;
