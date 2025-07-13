import React from 'react'
import landing from "../assets/landing.png"
function PageFour() {
  return (

    <div className="relative w-full h-screen overflow-y-hidden ">
    
            <img
                className="absolute w-full h-full object-bottom object-contain z-0  "
                src={landing}
                alt="Cheers!"
            />
    
        
            <div className="h-[80%] z-10 flex items-center justify-center">
    
                <div className="flex flex-col items-center justify-center">
                    <h3 className="font-forghive text-[#6B0000] text-[1.3rem] -mt-10">Thank you for celebrating with me</h3>
                    <h3 className="font-n text-[#6B0000] font-medium italic text-[3rem]">-N</h3>
                </div>
            </div>
    
        </div>
   


  )
}

export default PageFour