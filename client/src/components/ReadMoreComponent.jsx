import React, { useState } from "react";
import { BsCaretRightFill } from "react-icons/bs";

const ReadMoreComponent = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
     
      {isReadMore ? text.slice(0, maxLength) : text}
      {text.length > maxLength && (
        <span
          onClick={toggleReadMore}
          className="cursor-pointer text-custom_green"
        >
          {isReadMore ? "... Read more" : " Read less"}
        </span>
      )}
    </div>
  );
};

export default ReadMoreComponent;
