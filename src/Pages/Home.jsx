import React from 'react'
import Transition from '../transition.jsx';
import AnimatedText from '../Components/AnimatedText.jsx';
import HoverCards from '../Components/HoverCards.jsx';
import Downarrow from '../Components/Downarrow.jsx';
import Challenges from '../Featured/Challenges.jsx';
import InvestGrow from '../Featured/InvestGrow.jsx';
import CompanyPort from '../Featured/CompanyPort.jsx';
import Testimonial from '../Featured/Testimonial.jsx';
import Showcase from '../Featured/Showcase.jsx';
import News from '../Featured/News.jsx';



const Home = () => {
  return (
    <>
    
    <div className='w-[98%] mx-auto'>
       
      <div className='py-10' style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <div className='text-center w-[100%] sm:w-[100%] md:w-[95%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]'>
          <AnimatedText duration={0.5}>

        <h1  className='text-2xl sm:text-2xl md:text-[45px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] text-center text-white'>WE ARE AN IDEAL BUSINESS</h1>
          </AnimatedText>
          <AnimatedText duration={1}>

      <p className='text-md mt-10 font-mono text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis repellat ea, minus sequi deleniti voluptatibus dignissimos! Deleniti perspiciatis</p>
          </AnimatedText>
      
        </div>
        <div className='mt-10'>
          <Downarrow/>
        </div>
        
        <div className='mt-5 w-[90%] mx-auto flex flex-wrap justify-between gap-1'>
          <HoverCards/>

       
        </div>

      </div>
      <div className='mt-32'>
        <Challenges/>
      </div>
      <div className='mt-16'>
        <InvestGrow/>
      </div>
    
     

    
    
    </div>
     <div className='mt-32'>
     <CompanyPort/>
     <Showcase/>
   
        <News/>
   
   </div>
    </>
  )
}
const WrappedHome = Transition(Home)
export default WrappedHome