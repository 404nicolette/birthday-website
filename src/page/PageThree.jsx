import React, { useState } from 'react'
import km from "../assets/km.png"
import asm from "../assets/asm.png"
import Noise from '../components/animation/Noise'
function PageThree() {
    const [nextImage, setNextImage]=useState(false)
        
    return (
          <div className='h-screen w-screen flex flex-col items-center justify-center px-8 md:h-screen space-y-3 py-5 bg-[#311212]'>
            <h1 className='py-5 text-center font-forghive text-amber-400 text-[3.5rem] underline decoration-[1px]'>style inspo</h1>

            <div className='overflow-hidden '>
                 <img
                    className='w-full h-full object-contain object-bottom'                
                    src={nextImage ? asm : km}
                    alt="Style inspo: Kelsey Merritt"
                />
            </div>

            <br/>
           <div onClick={()=> setNextImage(!nextImage)} className='flex items-center justify-center rounded-full w-14 h-10 bg-[#6B0000] cursor-pointer md:w-22 md:h-18 '>
                <h5 className='font-bold font-n text-amber-400 p-2'>N</h5>
            </div>
           <br/>
        </div>
    )
}

export default PageThree