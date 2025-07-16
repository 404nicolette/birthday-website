import React from 'react'
import landing from "../assets/landing.png"
import FadeIn from '../components/animation/FadeIn'

function PageFour() {
  return (
  
      <div className="relative w-screen h-screen overflow-y-hidden 0 ">

        <div className="absolute w-full h-[80%] z-20 flex flex-col items-center justify-center md:mt-20 ">
          <div className="flex flex-col items-center justify-center ">
            <FadeIn>
              <h1 className="font-forghive text-[#6B0000] text-[1.3rem] mt-7 md:text-[2.5rem]">thank you for celebrating with me </h1>
            </FadeIn>

            <FadeIn>
              <h5 className="font-n italic text-[1.3rem] font-medium text-[#6B0000] md:text-[2rem]">-N</h5>
            </FadeIn>
          </div>
        </div>
  

        <img
          className="absolute w-full h-full object-bottom object-contain -z-0  md:object-cover md:object-top md:mt-20"
          src={landing}
          alt="Cheers!"
        />
  
      </div>
    )
}

export default PageFour