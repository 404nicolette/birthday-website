import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import PageFour from './PageFour'
function Main() {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      
      <PageFour/>

    </div>
  )
}

export default Main