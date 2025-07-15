import React from 'react'

function ColourBlocks({colourCode, whiteBorder}) {
  return (
    <div className='h-14 w-14 m-2'>
        <svg viewBox="0 0 64 64" >
            <path 
                d="M57.7466 0H6.25339C6.25339 3.44086 3.47078 6.25339 0 6.25339V57.7466C3.44086 57.7466 6.25339 60.5292 6.25339 64H57.7466C57.7466 60.5591 60.5292 57.7466 64 57.7466V6.25339C60.5591 6.25339 57.7466 3.47078 57.7466 0Z" 
                fill={colourCode}
                stroke={whiteBorder}
                vectorEffect="non-scaling-stroke">

            </path>
        </svg>

    </div>
  )
}

export default ColourBlocks

