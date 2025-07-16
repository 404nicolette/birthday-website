import React, { useState } from 'react'
import km from "../assets/km.png"
import asm from "../assets/asm.png"
import tw from "../assets/tw.jpg"
import FadeIn from '../components/animation/FadeIn'

// import Noise from '../components/animation/Noise'
function PageThree() {
    const images = [asm,tw,km]
    const [imageIndex, setImageIndex]=useState(0)

    const handleNext =()=>{
        setImageIndex((prevIndex)=>(prevIndex+1)%images.length);
    }
    
        
    return (
          <div className='h-screen w-screen flex flex-col items-center justify-center px-8 md:h-screen space-y-3 py-5 bg-[#311212]'>
            <FadeIn>
                <h1 className='py-5 text-center font-forghive text-[#FFFCEF] text-[3.5rem] underline decoration-[1px]'>style inspo</h1>
            </FadeIn>

           
            <div className='overflow-hidden '>
                 <img
                    className='w-full h-full object-contain object-bottom'                
                    src={images[imageIndex]}
                    alt="Style inspo: Kelsey Merritt"
                />
            
            </div>
           

            <br/>

           
           <div 
                onClick={handleNext}
                className='flex items-center justify-center rounded-full w-14 h-10 bg-[#FFFCEF] cursor-pointer md:w-22 md:h-18 '>
                <h5 className='font-bold font-n text-[#6B0000] p-2'>N</h5>
            </div>
           
           <br/>
        </div>
    )
}

export default PageThree
// 6B0000