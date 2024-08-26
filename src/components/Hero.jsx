import React from 'react';
import HeroImage from "../assets/Learning-amico.svg"

const Hero = () => {
  return (
    <div className='bg-[#151218] text-white flex flex-col lg:flex-row py-8 rounded-br-[70px] rounded-bl-[150px] min-h-screen'>
      <div className='flex-1 flex items-center justify-center m-6'>
        <div className='text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl'>
          <div>Every order</div>
          <div className='flex gap-2'>
          <div>fulfilled</div>
          <div className='text-gradient'>  on time</div>

          
          </div>

          <div className='text-lg max-w-lg mt-3'>
          Eliminate overstocking and under-stocking with CleverBooks. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
          </div>

          <button className='text-lg hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white border-2 border-white hover:border-none px-4 py-2 rounded-2xl text-md'>Get started with CleverBooks</button>

        </div>
      </div>
      {/* <div className='flex-1 flex items-center justify-center md:mt-0 p-4'> */}
        {/* <img src={HeroImage} alt="Your Image" className=' w-2/3 sm:w-2/3 md:w-1/2 lg:w-3/4 h-auto' /> */}
        {/* <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" loading="eager" alt="every order fulfilled" className="max-w-md lg:max-w-lg"></img> */}
      {/* </div> */}

      <div className="flex-1 flex items-center justify-center p-4 md:mt-0">
  <img 
    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" 
    loading="eager" 
    alt="every order fulfilled" 
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
  />
</div>

    </div>
  );
}

export default Hero;
