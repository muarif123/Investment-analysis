import React from 'react';
import logo1 from "../../public/logo-lt.svg"
import logo2 from "../../public/logo-cubist-lt.svg"
import logo3 from "../../public/logo3.svg"
import logo4 from "../../public/logo4.svg"
import logo5 from "../../public/logo5.svg"
import Lottie from 'lottie-react';
import Strategy from "../../public/Strategy.json";


const CompanyPort = () => {
  return (
    <div className='bg-[rgb(14,67,49)] overflow-hidden'>
        <div className=''>

      <marquee behavior="scroll" direction="left" scrollamount="10">
       <div className='flex justify-between'>

        <img className='h-[150px] w-[150px] mx-4' src={logo1} alt="" />

       
        
          <img className='h-[150px] w-[150px] mx-4' src={logo2} alt="" />
    
       
          <img className='h-[150px] w-[150px] mx-4' src={logo3} alt="" />

    
       
          <img className='h-[150px] w-[150px] mx-4' src={logo4} alt="" />

        
       
          <img className='h-[150px] w-[150px] mx-4' src={logo5} alt="" />
       </div>

       
      </marquee>
        </div>
        <div className='py-5 w-[100%] sm:w-[100%] md:w-[80%] lg:w-[65%] xl:w-[65%] 2xl:w-[65%] mx-auto'>
            <h1 data-aos="fade-up" className='mx-auto text-3xl text-white text-center' style={{textTransform:"uppercase",letterSpacing:"-1px"}}>Multiple Strategies. Infinite opportunities. One Firm.</h1>
            <p data-aos="fade-up" className='mx-auto text-md mt-5 text-white text-center'>
            Point72 is a global asset manager led by Steven A. Cohen that deploys discretionary long/short equity, systematic, and macro investing strategies, complemented by a growing portfolio of private market investments.
            </p>
        </div>
        <div className='w-[50%] mx-auto'>
        <Lottie className="" animationData={Strategy} loop />
        </div>
    </div>
  );
};

export default CompanyPort;
