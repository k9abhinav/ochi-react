import React from 'react'

function About() {
  return (
    <div  className=' w-full py-20 px-10  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-light  text-black text-5xl leading-[3.5vw] '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
       <div className='w-full flex border-t-2 border-zinc-600 mt-10 pt-10'>
            <div className='w-1/2 '>
                <h1 className='text-5xl mb-5  text-zinc-800 font-light'>Our approach:</h1>
                <button className='rounded-full uppercase text-white px-10 py-5 bg-zinc-900 flex items-center gap-8'>Read more
                <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg)] '>

            </div>
       </div>
    </div>  
  )
}

export default About