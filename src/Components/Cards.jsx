import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center px-32  text-white  bg-zinc-100">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full flex items-center justify-center rounded-xl h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute rounded-full px-5 py-2 border-2 left-10 bottom-10  ">
            &copy;2019
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative w-full flex items-center justify-center h-full rounded-xl bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute rounded-full px-5 py-2 border-2 left-10 bottom-10  ">
            &copy;2019
          </button>
        </div>
        <div className="card relative w-full flex items-center justify-center h-full rounded-xl bg-[#258578]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute rounded-full px-5 py-2 border-2 left-10 bottom-10  ">
            &copy;2019
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
