import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Work />
      <Testimonial />

      {/*----------Our Mission section  --------------*/}
      <div className="about_area bg-zinc-900 relative mt-32 text-white py-10">
        <div className="flex justify-end md:py-10">
          <div className="md:basis-1/2 md:py-10">
            <div className="py-10 flex justify-center">
              <div className="w-10/12 ">
                <p className="text-4xl font-semibold leading-10 text-green-300 uppercase"> Our Mission</p>
                <p className="text-lg my-10 text-white-300">
                  Our mission at Kloudstac is to equip students and young
                  professionals with the necessary knowledge and skills to
                  thrive in the future of the tech industry. We strive to raise
                  awareness and proficiency in utilizing cloud-based
                  technologies, which provide effortless access to a wide range
                  of physical and digital resources. By teaching these
                  technologies, we enable the <span className="text-green-400" > accelerated development of
                  scalable, enterprise-level software products </span> tailored to meet
                  diverse business requirements.
                </p>
                <p className="text-lg my-10 text-white-300 mt-4">
                  {" "}
                  Central to our mission is the enhancement of cloud-based
                  technical competencies among aspiring graduates and
                  professionals entering or planning to enter the IT field
                </p>
                <Link
                  to="/about"
                  className="rounded-3xl text-lg text-center px-5 py-3 mt-10 bg-green-600 "
                >
                  About Us{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Home;
