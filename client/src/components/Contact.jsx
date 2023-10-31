import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  return (
    <div>
      <section className="bg-slate-100">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          {location.pathname !== "/contact" && (
            <h2 className="mb-4 text-3xl md:text-5xl font-semibold text-center text-black-900 ">
            GET IN TOUCH.
            </h2>
          )}
          <p className=" text-2xl mb-8 lg:mb-16 font-light text-center text-gray-600  sm:text-l">
           We would love to respond to your queries and help you succed. Feel free to reach out to us.
          </p>

          <div className=" mb-4 w-50 h-1 bg-green-500 rounded-full mx-auto"></div>
          <form action="./" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email-ID
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
