import { motion } from "framer-motion";
import React,{useState} from "react";
import {Power4} from "gsap/all";
function Featured() {
  
  const [hovering, sethovering] = useState(false);


  return (
    <div className="w-full min-h-screen  bg-zinc-100 ">
      <div className="heading px-10 py-10 border-b-2  border-zinc-300">
        <h1 className="capitalize text-5xl  font-light tracking-tighter ">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards  w-full flex gap-10  pt-10">
          <div onMouseEnter={()=>sethovering(true)} onMouseLeave={()=>sethovering(false)} className="cardscontainer relative w-1/2 h-[75vh]  ">
            <h1 className="centertxt absolute left-full flex overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 text-white text-8xl z-[9] font-light ">
              {"FYDE".split("").map((item,index) => (
                <motion.span  key={index} initial={{y:"100%"}} animate={hovering ? ({y:"0%"}) : ({y:"100%"})} transition={{ease: [0.25, 1, 0.5, 1] , delay: index*0.06}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          <div className="cardscontainer relative w-1/2 h-[75vh] ">
            <h1 className="centertxt absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-white text-8xl z-[9] font-light flex overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span  key={index} initial={{y:"100%"}} animate={hovering ? ({y:"0%"}) : ({y:"100%"})} transition={{ease: [0.25, 1, 0.5, 1] , delay: index*0.06}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
