import React,{useState,useEffect} from 'react'

function Readytostart() {
    const [rotate, setrotate] = useState(0);
    useEffect(() =>{
      window.addEventListener('mousemove', (e)=>{
        let mouseX = e.clientX
        let mouseY = e.clientY
  
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;
  
        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); 
        setrotate(angle-180)
      })
    })

  return (
    <div className='w-full relative min-h-screen max-h-max bg-[#CDEA68] '>
        <div className="heading w-full pt-40 text-center flex flex-col justify-center leading-none items-center ">
            {["ready", "to start","the project?"].map((item,index)=>{
                return(
                <h1 key={index} className='uppercase text-[11rem]  text-zinc-800 font-semibold tracking-[-0.1em] '>{item}</h1>
            )})}

        </div>
        <div className='eyes absolute flex gap-10 bottom-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
              <div className=' w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
              <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative '>
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 '>
              <div className='w-10 h-10 bg-white   rounded-full '></div>
              </div>
              </div>
              </div>
              <div className=' w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
              <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative '>
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 '>
              <div className='w-10 h-10 bg-white   rounded-full '></div>
              </div>
              </div>
              </div>
        </div>
        <div className="buttons flex flex-col items-center justify-center w-full mt-10 gap-5 pb-32">
                    <button className='rounded-full px-8 py-4  flex gap-5 uppercase items-center bg-zinc-800 text-white font-light '>Start the project
                <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
                    </button>
                    <h1>OR</h1>
                    <button className='rounded-full px-8 py-4 flex gap-5 uppercase items-center bg-transparent border-zinc-800 border-[1px]  font-light '>Start the project
                <div className='w-2 h-2 bg-zinc-800 rounded-full '></div>
                    </button>
        </div>
    </div>
  )
}

export default Readytostart