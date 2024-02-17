import { motion } from 'framer-motion'
import React from 'react'
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className=' w-full bg-green-900 py-20 rounded-tl-3xl rounded-tr-3xl text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-200 flex gap-10 whitespace-nowrap overflow-hidden' >
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration: 10}} className='text-[15vw] leading-none uppercase   mb-5 font-semibold'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{  ease:"linear",repeat:Infinity, duration: 10}} className='text-[15vw] leading-none uppercase mb-5 font-semibold'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration: 10}} className='text-[15vw] leading-none uppercase   mb-5 font-semibold'>we are ochi</motion.h1><motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration: 5}} className='text-[15vw] leading-none uppercase   mb-5 font-semibold'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee