import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer_link } from "../constants";
import { BsArrowUp, BsLinkedin, BsYoutube } from "react-icons/bs";
// import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(true ? scrolled > 300 : false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <section className="bg-gray-800">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {Footer_link?.map((item, index) => (
              <div key={index} className="px-5 py-2">
                <Link
                  to={item.path}
                  className="text-lg leading-6 text-slate-200 hover:text-fuchsia-500"
                >
                  {item.link}
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            {/* <a href="./" className="text-slate-200 hover:text-slate-500">
              <span className="sr-only">Facebook</span>
              <ImFacebook2 size={26} />
            </a>
            <a href="./" className="text-slate-200 hover:text-slate-500">
              <span className="sr-only">Instagram</span>
              <BsInstagram size={26} />
            </a> */}
            <a href="https://www.linkedin.com/company/kloudstac/" className="text-slate-200 hover:text-slate-500" target="_blank" rel="noreferrer">
              <span className="sr-only">Linkedin</span>
              <BsLinkedin size={26} />
            </a>
            <a href="https://www.youtube.com/@KloudStac" className="text-slate-200 hover:text-slate-500" target="_blank" rel="noreferrer">
              <div className="flex items-center ">
                <BsYoutube size={30} />
              </div>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-300">
            © COPYRIGHT KLOUDSTAC 2023. ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={scrollToTop}
            className={`bg-fuchsia-500 text-white p-2 font-bold fixed bottom-4 right-4 ${
              visible ? "inline" : "hidden"
            } float-right`}
          >
            <BsArrowUp size={23} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Footer;
