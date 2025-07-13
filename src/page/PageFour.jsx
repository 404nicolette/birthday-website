import React from 'react'
import landing from "../assets/landing.png"
function PageFour() {
  return (

    <div className="relative w-full h-screen overflow-y-hidden ">
    
        <img
            className="absolute w-full h-full object-bottom object-contain z-0  md:object-cover md:object-top "
            src={landing}
            alt="Cheers!"
        />

        
          <div className="absolute w-full h-[80%] z-20 flex items-center justify-center md:mt-30 slide-in">
            <div className="flex  flex-col items-center justify-center">
                <h3 className="font-forghive text-[#6B0000] text-[1.2rem] md:text-[2rem] ">Thank you for celebrating with me</h3>
                <h3 className="font-n text-[#6B0000] font-medium italic text-[3rem]">-N</h3>
            </div>
          </div>
    
    </div>
   


  )
}

export default PageFour