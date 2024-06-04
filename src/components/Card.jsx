import React from 'react'

const Card = ({src,alt, heading, description}) => {
  return (
    <div className='bg-[#F1E9FC] rounded-xl flex-col max-w-72 p-4 '>
        <div className='h-12 w-12 mt-4 mb-6'>
        <img src={src} loading="lazy" alt={alt}/>
        </div>
        <div className='text-xl font-bold mb-2'>
           {heading}
        </div>
        <div>
        {description}
        </div>

    </div>
  )
}

export default Card