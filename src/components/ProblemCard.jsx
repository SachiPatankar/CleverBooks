// import React from 'react'

// const ProblemCard = ({src, heading, description}) => {
//   return (
//     <div className='flex flex-col bg-white py-16 px-8 items-center justify-center m-8 lg:flex-row rounded-3xl transform transition-transform duration-500 ease-in-out '
//     {... `${classname}`}
//     >
//         <img src={src} className='h-64 basis-1/2' loading="lazy" alt="Simple, customizable, and fully automated inventory planning tool to stay in-stock and never go out-of-stock."/>
//         <div className='flex flex-col basis-1/2 gap-4 p-4'>
//         <div className='text-3xl  font-bold'>{heading}</div>
//         <div className='text-md '> {description}</div>
//         </div>
//     </div>
//   )
// }

// export default ProblemCard



import React from 'react';

const ProblemCard = ({ src, heading, description }) => {
  return (
    <div className="flex flex-col bg-white py-16 px-8 items-center justify-center m-8 lg:flex-row rounded-3xl">
      <img src={src} className="h-64 basis-1/2" loading="lazy" alt={heading} />
      <div className="flex flex-col basis-1/2 gap-4 p-4">
        <div className="text-3xl font-bold">{heading}</div>
        <div className="text-md">{description}</div>
      </div>
    </div>
  );
};

export default ProblemCard;

