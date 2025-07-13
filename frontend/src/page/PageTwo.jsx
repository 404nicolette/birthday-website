import React from 'react'
import pageTwo from "../assets/page-two.jpg"
import colour from "../assets/colour.jpg"
function PageTwo() {
  return (
    <div className=' relative h-screen w-screen '>
        
        <img 
            className="absolute inset-0 w-full h-full object-cover z-0  " 
            src={pageTwo}
            alt="Yellow Backdrop"/>  

        <div className='relative z-10 font-pro text-[#6B0000] flex flex-col items-center justify-center h-full px-10 py-10'>
            <h4 className='font-bold'>WHEN: 26 JULY 2025</h4>

            <div className='text-center w-full space-y-10 my-10'>
                
                <h4 className='font-semibold'>ITINERARY</h4>
            </div>
          
            
           

            <div className="flex flex-col space-y-5 items-center justify-center  ">

                

                <div className="flex justify-between w-full ">
                    <h5 className="font-semibold">DINNER AT GRASSO SOHO</h5>
                    <h5 className="font-semibold mx-2">8:30PM</h5>
                </div>

                <div className="flex justify-between w-full">
                    <h5 className="font-semibold text-wrap ">DRINKS AT SOHO RESIDENCE</h5>
                    <h5 className="font-semibold mx-2">10:30PM</h5>
                </div>
               

                <p className='text-[0.8rem] text-center my-10 '>
                    Dinner is for the girlies, invite only. <br/><br/>
                    +1s are welcome to join us for drinks, please let me know by 18th July so I can include them in the booking.
                </p>

               
                <div className='flex flex-col items-center justify-center space-y-5 '>
                    <h4 className='font-semibold'>DRESS CODE</h4>
                    
                    <h4 className='font-semibold'>LEO & RUBY NIGHT</h4>
                    <p className='text-[0.8rem] text-center '>think front row main character, boss babe, WAG energy</p>
                    <img className=' py-3' src={colour} alt={"Dress code colour"}></img>

                </div>
            
            </div>

        </div>

    </div>
  )
}

export default PageTwo