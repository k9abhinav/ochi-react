import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-white pt-1">
      <div className="textstructure mt-40 px-20">
        {["We CREate", "Eye opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] }}
                    className="w-[9.5vw] h-[6.5vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover relative top-[1vw] rounded-md mr-3"
                  ></motion.div>
                )}
                <h1 className=" uppercase text-[8vw] leading-[7vw] tracking-[-0.1em] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-20   flex justify-between items-center py-5 px-20">
        {["Fpr public and pribate companies", "First pict IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md fony-light tracking leading-tight leading-none"
            >
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase  ">
            Start the project
          </div>
          <div className="w-10 h-10 border-[1px] flex items-center justify-center rounded-full">
            <span className="rotate-[45deg]">
              {" "}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
