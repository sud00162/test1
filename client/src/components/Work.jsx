import React, { useEffect, useState } from "react";
import {   BsCaretRightFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { useRef } from "react";


const Work = () => {

  const paragraphStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  
   }

const ref = useRef(false)
const [ isOpen, setIsOpen] = useState(false)
const [ShowReadMoreButton, setShowReadMoreButton] = useState(false)


useEffect(() => { 
  if(ref.current) {
    console.log(ref.current.scrollHeight, ref.current.clientHeight)
    setShowReadMoreButton(ref.current.scrollHeight !== ref.current.clientHeight )
  }

}, [] )
  return (
    <div className="my-1 text-gray-700">
      <div className="how_we_work_area relative flex md:my-15 ">
        <div className="md:basis-1/2  md:py-[150px] px-8 md:px-20">
          <div className="section_title">
            <p className="text-xl md:text-[40px] font-[700] leading-[130%]">
              WHAT YOU WILL LEARN THROUGH OUR COURSES ?
            </p>
            <div className="text-[16px] md:text-[18px] mt-10">
              <div className="my-2 flex">
                <span className="mr-3 pt-2 ">
                  < BsCaretRightFill size={15} />
                </span>
                <span className="text-slate-600">
                 
                 <p style= { isOpen ? null : paragraphStyles } ref={ref}  > How to build well-architected cloud native and cloud agnostic
                  applications with characteristics like high availability,
                  scalability, resilience/ reliability, performance, cost
                  optimized and secure.</p>
                  {ShowReadMoreButton && 
                  <button className=" px-3 text-sm font-light text-center text-white rounded-lg bg-green-600 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-200" onClick={() =>setIsOpen(!isOpen) }  > {isOpen ? 'Read less..': 'Read more..' } </button> }

                </span>
              </div>
              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <  BsCaretRightFill size={15} />
                </span>
                <span className="text-slate-600">
                  <p
                 style= { isOpen ? null : paragraphStyles } ref={ref}
                     >
                How to use Generative AI for 5-10x improvement in personal & team <span  className="text-green-400" >productivity & performance.</span>
                </p> 
                {ShowReadMoreButton && 
                  <button className=" px-3 text-sm font-light text-center text-white rounded-lg bg-green-600 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-200"  onClick={() =>setIsOpen(!isOpen) }  > {isOpen ? 'Read less..': 'Read more..' } </button> }

                </span>
              </div>

              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <  BsCaretRightFill size={15} />
                </span>
                <span className="text-slate-600">
                <p style= { isOpen ? null : paragraphStyles } ref={ref}  >
                Modern database architectures including <span className="text-green-400" > RDBMS </span> and <span className="text-green-400">NoSQL</span> databases, with practical examples of how renowned big tech apps use databases.
                </p>
                {ShowReadMoreButton && 
                  <button className=" px-3 text-sm font-light text-center text-white rounded-lg bg-green-600 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-200" onClick={() =>setIsOpen(!isOpen) }  > {isOpen ? 'Read less..': 'Read more..' } </button> }
                 </span>
              </div>
              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <  BsCaretRightFill size={15} />
                </span>
                <span className="text-slate-600">
                <p style= { isOpen ? null : paragraphStyles } ref={ref}  >How to design & implement data engineering pipelines and model a <span className="text-green-400"> data warehouse, data lake and lakehouse </span> </p>
                 {ShowReadMoreButton && 
                  <button className=" px-3 text-sm font-light text-center text-white rounded-lg bg-green-600 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-200" onClick={() =>setIsOpen(!isOpen) }  > {isOpen ? 'Read less..': 'Read more..' } </button> }
                </span>
              </div>

              <div className="my-2 flex">
                <span className="mr-3 pt-2 font-[10px]">
                   <  BsCaretRightFill size={15} />
                </span>
                <span className="text-slate-600">
                How large
                  scale distributed software systems work.
                  
                </span>
              </div>
              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <  BsCaretRightFill size={15} />
                </span>
                <span className="text-slate-600">
                <p style= { isOpen ? null : paragraphStyles } ref={ref}  >
                  How to use design and use containerized and serverless compute
                  workloads.</p>
                  {ShowReadMoreButton && 
                  <button className=" px-3 text-sm font-light text-center text-white rounded-lg bg-green-600 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-200" onClick={() =>setIsOpen(!isOpen) }  > {isOpen ? 'Read less..': 'Read more..' } </button> }
                </span>
              </div>
              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <  BsCaretRightFill size={15} />
                </span>
                <span className="text-slate-600">
                
                  Learn all of the above with practical examples of renowned
                  bigtech app.
                </span>
              </div>
            </div>
          </div>

          <div className="video_watch d-flex align-items-center mt-10">
            <div className="flex  items-center">
              <a
                href="https://www.youtube.com/watch?v=1JEDrtm5B5o&t=2s"
                target="_blank" rel="noreferrer"
                className=""
              >
                <AiFillPlayCircle
                  size={67}
                  style={{ color: "green" }}
                />
              </a>
              <span className="mx-4 text-2xl font-[300px]">Watch Video</span>
            </div>
          </div>
        </div>
      </div>

      <div className="how_we_work_area2 relative flex justify-end md:my-1 ">
        <div className="md:basis-1/2  md:py-[5px] px-15 md:px-15 ">
          <div className="section_title mt-10 mt-[-180px]">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
