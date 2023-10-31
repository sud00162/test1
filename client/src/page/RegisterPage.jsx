import React, { useState } from "react";

const initialFormData = { name: "", email: "", mobile: "", course: "" };

const RegisterPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://kloudstac-server-abhishek.azurewebsites.net/user/course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    setFormData(initialFormData);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      <div>
        <section className="bg-slate-100">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-14">
            {showAlert && (
              <div className="my-4 p-4 bg-green-200 text-green-800 rounded">
                Thank you for your registration!
              </div>
            )}
            <h2 className="mb-8 text-3xl md:text-5xl font-semibold text-center text-gray-900 ">
              Register For The Course
            </h2>
            <div className=" mb-4 w-50 h-1 bg-green-500 rounded-full mx-auto"></div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="course"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Course name"
                  value={formData.course}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleOnChange}
                  required
                />
              </div>
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
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                  placeholder="name@gmail.com"
                  value={formData.email}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone No. (+91)
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                  required
                  value={formData.mobile}
                  onChange={handleOnChange}
                />
              </div>

              <button
                type="submit"
                className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-green-600 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Register
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterPage;
