import React from 'react';
import HeroImage from "../assets/Learning-amico.svg"

const Hero = () => {
  return (
    <div className='bg-[#151218] text-white flex flex-col lg:flex-row py-8 rounded-br-[70px] rounded-bl-[150px] h-screen'>
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-left text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl'>
          <div>Every order</div>
          <div>fulfilled</div>
          <div className='text-gradient'>on time</div>
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center md:mt-0 p-4'>
        {/* <img src={HeroImage} alt="Your Image" className=' w-2/3 sm:w-2/3 md:w-1/2 lg:w-3/4 h-auto' /> */}
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" loading="eager" alt="every order fulfilled" class="hero-dashboard-img"></img>
      </div>
    </div>
  );
}

export default Hero;
