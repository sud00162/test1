import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card1 from "../../img/card1.png";

const faqs = [
  {
    question: "Cloud Native Fundamentals",
    list: [
      "Compute-AWS, GCP",
      "Storage-AWS, GCP",
      "Database-AWS, GCP",
      "Data Security-AWS, GCP",
    ],
  },
  {
    question: "Data Engineering Fundamentals",
    list: [
      "Data Engineering",
      "Data Storage",
      "Data Pipelines",
      "Data Warehousing & ETL",
      "Analytics",
      "Data Mesh & Data Fabric",
      "Data OPS",
      "Doubt Clearing, INterview & Certified Prep",
    ],
  },
  {
    question: "Data Engineering-Google cloud Platform",
    list: [
      "Google BigQuery Data Warehouse",
      "Demo & SYsytem Design-Google BigQuery",
      "Google Dataflow (Spark,FLink)",
      "Demo & System Design-Data Pipeline with Google Data Flow",
      "Google DataProc",
      "Demo-Google DataProc",
      "Google Cloud Composer (Airflow) for Data Pipelines",
      "Doubt CLearing, Interview & Certificate Prep",
      "Demo-Setting Up Data Pipeline with Data Flow",
    ],
  },
  {
    question: "Data Engineering-SnowFlake",
    list: [""],
  },
  {
    question: "Data Engineering-Databricks",
    answer:
      "You can install Tailwind CSS by adding it as a dependency in your project using npm or yarn.",
  },
];

const MultiCloudData = () => {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (activeQuestions.includes(index)) {
      setActiveQuestions(activeQuestions.filter((item) => item !== index));
    } else {
      setActiveQuestions([...activeQuestions, index]);
    }
  };
  return (
    <>
      <div className="home_page">
        <div className="header_slider register_bg_4 overlay flex items-center h-[350px] md:h-[500px]">
          {/* <div className="header_text pl-5 md:pl-36">
            <h3 className="text-3xl md:text-[78px] leading-normal md:leading-[84px]">
              Start Your Career <br /> Become an AWS or <br />
              Google Cloud Engineer
            </h3>
            <Link
              to="/about"
              className="mt-10 boxed-btn3 bg-[#615CFD] text-white cursor-pointer uppercase text-center text-xs md:text-base font-semibold rounded-3xl py-3 px-8"
            >
              Visit Our Courses
            </Link>
          </div> */}
        </div>

        <div className="my-5 p-4 md:p-15">
          <div>
            <p className="uppercase text-xl md:text-3xl font-semibold ">
              Multi-Cloud  <span className="text-green-600">Data Engineer{" "} </span>
             
             
            </p>
            <p className="w-1/4 bg-green-500  h-1 mt-2 text-center"></p>
            <div className="flex flex-col md:flex-row my-10">
              {/*------------ course content ------------------*/}
              <div className="basis-full md:basis-3/5 p-2 md:p-1 text-slate-800 text-[16px] md:text-[18px]">
                <p className="">
                  {" "}
                  This course is the first-of-its kind in the Industry covering
                  technical architecture, systems, and deepdive into various
                  cloud data engineering and analytics services/system on GCP,
                  AWS, Azure, Snowflake, Databricks.
                </p>
                <p className="my-6 text-lg md:text-[20px] font-[500]">
                  <span className="text-green-600 uppercase">
                    Course Duration
                  </span>{" "}
                 <i> : 120 hrs of theory & practical, upto 120 hrs of Project work
                  Total 140 hrs </i>{" "}
                </p>
                <p>
                  We provide a course completion certificate and offer
                  internship assistance ( for students ) and placement
                  assistance (for students) and placement assistance ( for
                  working professional and final yr students/ recent passout )
                </p>
                <Link
                   to="/register"
                  className="boxed-btn3 bg-[#4CBB17] text-white cursor-pointer uppercase text-center text-xs md:text-base font-[400] rounded-3xl py-2 px-8 mt-6"
                >
                  Register
                </Link>
                {/*------------course Faq section ------------------*/}
                <div className="mt-10 ">
                  <p className="text-2xl font-semibold uppercase my-6">
                    {" "}
                    <span className="text-green-600">What </span>we Teach
                  </p>
                  <dl className="space-y-10">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-t-2 border-gray-200 pt-3"
                      >
                        <dt
                          className="flex justify-between md:text-lg leading-6 font-medium text-slate-800 cursor-pointer "
                          onClick={() => toggleQuestion(index)}
                        >
                          Module {index + 1} : &nbsp;&nbsp;&nbsp; {faq.question}
                          <svg
                            className={`ml-2 h-5 w-5 ${
                              activeQuestions.includes(index)
                                ? "transform rotate-180"
                                : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </dt>
                        {activeQuestions.includes(index) && (
                          <dd className="mt-2 text-base">
                            <ul className="mt-3 text-[18px] text-slate-800 list-disc list-inside">
                              {faq?.list?.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
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
      </div>
    </>
  );
};

export default MultiCloudData;
