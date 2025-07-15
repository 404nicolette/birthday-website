import React from 'react'
import pageTwo from "../assets/page-two.jpg"
import ColourBlocks from '../components/ColourBlocks'
import colour from "../assets/colour.jpg"
function PageTwo() {
  return (
    <div className='relative w-screen h-screen flex flex-col items-center justify-center'>
    

        <div className='flex flex-col items-center justify-center text-center font-pro text-[#6B0000] font-bold h-full w-full p-5 overflow-y-scroll'>
            <h4>WHEN: 26 JULY 2025</h4>
            <br/>

            <div>
                <h4>ITINERARY</h4>
                <br/>
               
                
                <div className='flex justify-between items-center w-full'>
                    <h4>DINNER AT GRASSO SOHO</h4>
                    <h4>8:30PM</h4>
                </div>
                <br/>

                <div className='flex justify-between items-center w-full'>
                    <h4>DRINKS AT SOHO RESIDENCE</h4>
                    <h4>10:30PM</h4>
                </div>

                <p className='text-[0.7rem] text-center my-5 px-3 '>
                    Dinner is for the girlies, invite only. <br/><br/>
                    +1s are welcome to join us for drinks, please let me know by 18th July so I can include them in the booking.
                </p>

                 <div className='flex flex-col items-center justify-center mt-10'>
                    <h4 className='font-semibold'>DRESS CODE</h4>
                    
                    <h4 className='font-semibold mt-5'>LEO & RUBY NIGHT</h4>
                    <p className='text-[0.7rem] text-center px-3 mb-2 '>think front row main character, boss babe, <br/>WAG energy</p>

                    <div className='flex items-center justify-center w-[80%]'>    
                        <ColourBlocks colourCode={"#6B0000"} whiteBorder={"#6B0000"}/>
                        <ColourBlocks colourCode={"#CE2723"} whiteBorder={"#CE2723"}/>
                        <ColourBlocks colourCode={"#693E2C"} whiteBorder={"#693E2C"}/>
                        <ColourBlocks colourCode={"#DFD4C4"} whiteBorder={"#DFD4C4"}/>
                        <ColourBlocks colourCode={"#000000"} whiteBorder={"#000000"}/>
                        <ColourBlocks colourCode={"#FFFFFF"} whiteBorder={"#000000"}/>
                    </div>

                </div>
            </div>
        </div>

        <img
            className='absolute object-cover -z-10  w-full h-full'
            src={pageTwo}
            alt="Background Image"
        />

        
    </div>

  )
}

export default PageTwo