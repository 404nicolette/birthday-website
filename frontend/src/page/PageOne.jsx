import React from 'react'
import landing from "../assets/Landing.png"
function Landing() {
  return (
    <div className="relative w-full h-screen overflow-y-hidden ">

        <img
          className="absolute w-full h-full object-bottom object-contain z-0  "
          src={landing}
          alt="Cheers!"
        />

    
        <div className="h-[80%] z-10 flex items-center justify-center">

          <div className="flex items-start">
            <h1 className="font-forghive text-[#6B0000] text-[3.5rem]  mt-7">Nicole</h1>
            <h1 className="font-num text-[5rem] font-medium text-[#6B0000] pr-1 ">25</h1>
            <h5 className="font-forghive text-[1.5rem] font-medium text-[#6B0000] ">th</h5>
          </div>
      </div>

    </div>
  )
}

export default Landing