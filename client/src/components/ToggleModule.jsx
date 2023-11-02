import React,{useState} from "react";

const ToggleModule = ({faqs}) => {
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
      <dl className="space-y-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t-2 border-gray-200 pt-3">
            <dt
              className="flex justify-between md:text-lg leading-6 font-medium text-slate-800 cursor-pointer "
              onClick={() => toggleQuestion(index)}
            >
              Module {index + 1} : &nbsp;&nbsp;&nbsp; {faq.question}
              <svg
                className={`ml-2 h-5 w-5 ${
                  activeQuestions.includes(index) ? "transform rotate-180" : ""
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
    </>
  );
};

export default ToggleModule;
