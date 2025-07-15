import React from 'react'
import landing from "../assets/landing.png"
function Landing() {
  return (

    <div className="relative w-full h-screen overflow-y-hidden flex flex-col items-center justify-center">
      <img
        className="absolute w-full h-full object-bottom object-contain z-0  md:object-cover md:object-top md:mt-20 "
        src={landing}
        alt="Cheers!"
      />
      <div className="absolute w-full h-[80%] z-20 flex items-center justify-center md:mt-20 ">
        <div className="flex items-center ">
          <h1 className="font-forghive text-[#6B0000] text-[3.5rem] mt-7 md:text-[5rem]">Nicole</h1>
          <h1 className="font-num text-[5rem] font-medium text-[#6B0000] pr-2 md:text-[6rem]">25</h1>
          <h5 className="font-forghive text-[1.5rem] font-medium text-[#6B0000] -mt-10 md:-mt-15">th</h5>
        </div>
      </div>

    </div>
  )
}

export default Landing