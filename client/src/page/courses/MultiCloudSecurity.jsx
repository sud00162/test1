import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card1 from "../../img/card1.png";

const faqs = [
  {
    question: "Cloud Security",
    list: [
      "Cloud security fundamentals",
      "Need for security in cloud",
      "Examples of security in applications",
      "CIA Triad",
      "Risk Factors",
      "Threat Actors",
      "Defense in Depth",
      "Cloud security challenges",
      "Cloud Security 'careers'",
      "Security in AWS Cloud",
      "Security 'in' the cloud",
      "Security perspective of AWS CAF",
      "Security design principles",
      "Five components of the 'security' pillar",
      "IAM","Detection", "Infrastructure Protection","Data Protection",
      "Incident Response","Securing access",
      "IAM and access control",
      "Encryption and key management capability",
      "Securing Data Storage",
      "Data Isolation Capability",
      "encryption of data at rest",
      "encryption of data in transit",
      "Securing code","Vulnerability and Threat Management",
      "Application Security",
      "Security Incident Response Capability",
      "Monitoring Dashboard"







    ],
  },
  {
    question: "Identity and Access Management",
    list: [
      "Introduction to IAM on AWS",
      "How it works",
      "IAM Users",
      "IAM User groups",
      "IAM roles",
      "IAM Permissions and Policies",
      "AWS STS","Identity Federation",
      "Enterprise Identity Federation",
      "Web identity federation",
      "AWS Directory Services"
    ],
  },
  {
    question: "Securing Data Storage",
    list: [
      "Encryption",
      "Symmetric and Asymmetric Encryption",
      "AES Encryption",
      "RSA Encryption",
      "Private and Public Key",
      "Digital Signing",
      "Data at rest encryption in Amazon EBS",
      "Data at rest encryption in Amazon RDS",
      "Data at rest encryption in Amazon Redshift",
      "Data at rest encryption in Amazon ElastiCache",
      "Data at rest encryption in AWS Lambda",
      "Data at rest encryption in Amazon SageMaker",
      "Key Management Services",
      "Envelope encryption concepts",
      "KMS Key policies",
      "KMS Key grants",
      "Cloud HSM",
      "Key Rotation",
      "KMS APIs",
      "HMAC Keys"
    ],
  },
  {
    question: "Infrastructure services in AWS",
    list: ["Introduction to VPC",
    "Firewall - Security Group",
    "Firewall - NACL",
    "Public and Private Subnets",
    "IP Address",
    "Route Table",
    "NAT","VPC Flow logs","Peering Connection",
    "Transit Gateway","Bastion Host","Session Manager",
    "Credential Forwarding"  
  ],
  },
  {
    question: "Infrastructure security services in AWS",
    list:["Intrusion, Threat and DDoS Attacks",
    "Threat Detection",
    "DDoS Safeguard",
    "Securing S3 buckets",
    "AWS WAF",
    "Common WAF rules that are enabled",
    "AWS Shield","AWS CloudFront",
    "CloudFront Security","Origin Access Identity",
    "CloudFront with S3 Origin","CloudFront Use cases",
    "Accelerate static website content delivery",
    "Serve video on demand or live streaming video",
    "Encrypt specific fields throughout system processing",
    "Customize at the edge",
    "Serve private content by using Lambda@Edge",
    "How CloudFront delivers content to your users",
    "How CloudFront works with regional edge caches",
    "Global Accelerator","Why is it needed",
    "How it works","AWS Firewall Manager","AWS Inspector",
    "AWS Inspector rules","AWS Guard Duty","Difference between AWS Inspector and Guard Duty", ]
  },
  {
    question:"Security of s3 buckets, deep dive",
    list:[
      "What is s3 bucket","Storage classes",
      "Storage versioning","LifeCycle Management",
      "Encryption","Access Control","Replication"
    ]
  },
  {
    question:"Application Security in AWS",
    list:[
    "CVE's in application","OWASP Top 10 Vulnerabilities",
    "Scanning of code, image, repository and pipelines",
    "Static Application Security Testing",
    "Dynamic Application Security Testing",
    "Image Scanning ","Container Scanning",
    "Access and Configuration Management",
    "RunTime Scanning","ECR in AWS",
    "EC2 Instances in AWS",
    "AMI Security in AWS","API Gateway ",
    "API Gateway Components","Authentication and Authorization",
    "Principle of Least Privilege","Authenticating via Amazon Cognito",
    "Logging via CloudWatch","CloudWatch Uses",
    "CloudWatch Metrics","CloudWatch Alarms",
    "CloudTrail","Creating Trails","Analyzing Trails",
    "AWS Trusted Advisor","Benefits of AWS Trusted Advisor",
    "AWS Config","AWS Config components"
    ]
  },
  {
    question:"Auomation tasks in Security",
    list:[
      "Image scanning","API Calls","Report generation"
    ]
  },
  {
    question:"Machine learning in Security",
    list:[
      "Forecasting using ML","Time Series Analysis using ML",
      "Computer Vision and its uses in Security","Computer vision for malware classification"
      
    ]

  },
  {
    question:"Deep learning in Security",
    list:[
      "Computer Vision and its uses in Security","Computer vision for malware classification",
      "Computer vision for filtering spam"
    ]
  },
 {
  question:"ChatGPT in security",
  list:[
    "Filter out security vulnerabilities",
    "Generate Security code","Transfer Security code",
    "Detect generative AI Text"
  ]
  },
  {
    question:"Deploy security architecture",
    list:["Create an Account Alternate Contacts solution that sets alternate contacts for all existing and future AWS Organization accounts",
  "Create EC2 default EBS encryption "
  ]
  }
]

const MultiCloudSecurity = () => {
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

        <div className="my-10 p-4 md:p-15">
          <div>
            <p className="uppercase text-2xl md:text-3xl font-semibold ">
              Multi-Cloud  <span className="text-green-600">Security Engineer {" "}
              </span>
            </p>
            <p className="w-1/4 bg-green-500  h-1 mt-2 text-center"></p>
            <div className="flex flex-col md:flex-row my-10">
              {/*------------ course content ------------------*/}
              <div className="basis-full md:basis-3/5 p-2 md:p-1 text-slate-800 text-[16px] md:text-[18px]">
                <p className="">
                  {" "}
                  This course will also include practical sessions on how to
                  automate security tasks using Python/Shell scripting. Also, it
                  will teach how AI/ML and ChatGPT can be used by Cloud Security
                  Engineers to automate some of the tasks.
                </p>
                <p className="my-6 text-lg md:text-[20px] font-[500]">
                  <span className="text-green-600 uppercase">
                    Course Duration
                  </span>{" "}
                 <i> : 120 hrs of theory & practical, upto 120 hrs of Project work
                  Total 140 hrs</i>{" "}
                </p>
                <p>
                  This course will also include practical sessions on how to
                  automate security tasks using Python/Shell scripting. Also, it
                  will teach how AI/ML and ChatGPT can be used by Cloud Security
                  Engineers to automate some of the tasks.
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

export default MultiCloudSecurity;
