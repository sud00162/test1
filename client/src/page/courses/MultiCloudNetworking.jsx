import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card1 from "../../img/card1.png";

const faqs = [
  {
    question: "Basics of networking",
    list: [
      "What is meaning of networking",
      "What is the need of networking",
      "Understanding basics of cloud infrastructure",
      "Computer network and its uses in distributed systems",
      "Understanding of layers, protocols and interfaces",
      "Different types of services -- connection oriented and connection less",
      "Services and relation to protocols",
      "OSI Reference Model",
      "TCP/IP Reference Model" ],
  },
  {
    question: "Cloud Networking",
    list: [
      "The Physical Layer",
      "The Data Link layer",
      "The Network Layer",
      "The Transport Layer",
      "The Session Layer",
      "The Presentation Layer",
      "Protocols at various layers",
      "TCP/IP Protocol","UDP Protocol, ARP, ICMP",
      "TLS/mTLS, SSL, HTTP, HTTPS"
    ],
  },
  {
    question: "Network Architecture",
    list: [
      "Perimeter Model",
      "Private IP Address",
      "Private Network connection with Public Network",
      "Network Address Translation",
      "Firewall","IDS/IPS","Proxy (Foward/Reverse)","Whitelisted application",
      "Perimeter Model Shortcomings",
      "Characteristics of good network architecture",
      "High level CDN","Self healing design",
      "Highly Scalable design","Highly Reliable design",
      "Disaster Recovery plan"
     
    ],
  },
  {
    question: "AWS Networking services",
    list: ["Global Infrastructure",
  "Amazon VPC","VPC DNS and DHCP",
  "AWS Peering, AWS endpoints, AWS gateways, AWS VPN",
  "AWS Direct Connect","Transit Gateway","AWS CloudFront",
  "AWS Traffic management","AWS Load balancing","Application Load Balancer",
  "Network Load Balancer","Classic Load Balancer"
  ],
  },
  {
    question: "Networking performance metrics",
    answer:[
      "Network Latency","Jittery","Bandwidth","Protocols","Protocol",
      "Locations","Traffic patterns (spikes and frequency)",
      "Throughput","Encryption",'Inspection',"Routing rules" ]
  },
  {
    question: "Foundational networking characteristics",
    list:[ "VPC Flow logs","Transit Gateway Metrics","AWS PrivateLink Metrics"

    ]
  },
  {
    question: "Application networking characteristics",
    list:[ "Elastic Network Adaptor","AWS App Mesh Metrics","Amazon API Gateway Metrics",]
  },
  {
    question: "Edge networking characteristics",
    list:[ 
      "Amazon CloudFront Metrics","Route53 Metrics",
      "Global Accelerator Metrics"
    ]
  },{
    question: "Hybrid Connectivity ",
    list:[ 
"Using VPN","Using Direct Connect DX","Multi VPC",]
  },
  {
    question: "Resilient Architecture ",
    list:[ "Back up and Restoration","Point in Time Recovery",
"BackUp Cross Region", "Continuous Data Replication and Pre Configured dependencies",
   "Warm Standby","Multi Site Active Active"
 ]
  },
  {
    question:"Hybrid networking characteristics",
    list:[ 
      "Direct Connect metrics","AWS Site-to-site VPN Metrics",
      "AWS Client VPN Metrics","AWS Cloud WAN Metrics"
    ]
  },
  {
    question:"Security networking characteristics",
    list:[
      "AWS Shield","AWS WAF","AWS Network Firewall Metrics"
    ]
  },
  {
    question:"End-to-End performance metrics with tracing tools",
    list:[
     "AWS X-Ray","AWS CloudWatch RUM"
    ]
  }
  ,{
    question:"Load Balancing and encryption offloading",
    list:[
      "Latency requirements","Tune according to Workload characteristics",
      "Find performance bottlenecks"
    ]
  },{
    question:"Low latency apps on AWS",
    list:[
      "Low latency games","Low-latency computing with AWS Local Zones",
      "High Frequency Trading"
    ]
  },
  {
    question:"Banking Apps Built on AWS",
    list:[
      "SmartStream’s SaaS Architecture",
      "Case Study : HSBC on AWS","Case Study :Stripe on AWS",
      "Case Study : AQR Build apps for Capital Markets"
    ]
  },
  {
    question: "Multi-Tenant SaaS ",
    list:["Solution Using AWS Serverless Services"]
  },
  {
    question:"Teleport",
    list:[
      "Fast, secure, scalable Identity-Native Infrastructure Access",
      "Architecture design of Teleport",
      "How Teleport cluster works"

    ]
  },{
    question:"AWS VPC Lattice",
    list:[
      "Uses and advantages",
      "Doubt Clearing session"
    ]
  }
];
const MultiCloudNetworking = () => {
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

        <div className="my-10 p-4 md:p-10">
          <div>
            <p className="uppercase text-2xl md:text-3xl font-semibold ">
              Multi-Cloud Networking Engineer with{" "}
              <span className="text-green-600">
                generative ai speacilization
              </span>
            </p>
            <p className="w-1/4 bg-green-500  h-1 mt-2 text-center"></p>
            <div className="flex flex-col md:flex-row my-10">
              {/*------------ course content ------------------*/}
              <div className="basis-full md:basis-3/5 p-2 md:p-5 text-slate-800 text-[16px] md:text-[18px]">
                <p className="">
                  {" "}
                  Become a Cloud Networking Engineer with our cutting-edge
                  program. Gain in depth understanding and hands-on experience in
                  multi-cloud environments, focusing on AWS and GCP. Our course
                  includes multiple practical labs for comprehensive leaming.
                </p>
                <p className="my-6 text-lg md:text-[20px] font-[500]">
                  <span className="text-green-600 uppercase">
                    Course Duration
                  </span>{" "}
                  <i>: 120 hrs of theory & practical, upto 120 hrs of Project work
                  Total 140 hrs</i>{" "}
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

export default MultiCloudNetworking;
