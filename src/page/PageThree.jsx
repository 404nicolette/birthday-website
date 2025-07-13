import React, { useState } from 'react'
import km from "../assets/km.png"
import asm from "../assets/asm.png"
function PageThree() {
    const [nextImage, setNextImage]=useState(false)
        
    return (
        <div className=' h-screen w-screen flex flex-col items-center justify-start px-8 md:h-screen space-y-10 slide-in'>
            <h1 className='py-5 text-center font-forghive text-[#6B0000] text-[3.5rem] underline decoration-[1px]'>style inspo</h1>

            <div className='border-1  overflow-hidden'>
                 <img
                    className='w-full h-full object-contain object-bottom '                
                    src={nextImage ? asm : km}
                    alt="Style inspo: Kelsey Merritt"
                />
            </div>

           <div onClick={()=> setNextImage(!nextImage)} className='flex items-center justify-center border rounded-full w-14 h-14 border-[#6B0000] my-5 cursor-pointer'>
                <h5 className='font-n text-[#6B0000] p-2'>N</h5>
            </div>
        </div>
    )
}

export default PageThree