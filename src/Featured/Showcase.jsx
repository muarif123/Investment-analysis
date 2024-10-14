import React from 'react'

const Showcase = () => {
  return (
    <div>
        <div className='w-[80%] mx-auto flex flex-wrap'>

            <div data-aos="fade-down" className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] py-32'>

            <h1 className='text-4xl font-serif'>
            Translating technology into a positive impact
            </h1>
            <p className='font-mono mt-5'>
            Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders. Let’s rise to new heights with the power of digital transformation.
            </p>
            <button
                    type="submit"
                    class="font-mono flex justify-center gap-2 items-center mt-5 shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                    Learn More
                    <svg
                        class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            class="fill-gray-800 group-hover:fill-gray-800"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] py-5 sm:py-5 md:py-5 lg:py-32 xl:py-32 2xl:py-32 px-5 sm:px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-20'>
                <div className='w-full flex flex-wrap justify-between'>
                    <div data-aos="fade-up">
                        <h1 className='text-6xl font-mono font-bold'>
                        47+
                        </h1>
                        <p className='font-serif mt-2'>
                        Years of continual <br /> excellence
                        </p>
                    </div>
                    <div data-aos="fade-up">
                        <h1 className='text-6xl font-mono font-bold'>
                        7000+
                        </h1>
                        <p className='font-serif mt-2'>
                        Change makers driving <br /> revolution
                        </p>
                    </div>
                </div>
                <div className='w-full mt-10 flex flex-wrap justify-between '>
                <div data-aos="fade-up">
                        <h1 className='text-6xl font-mono font-bold'>
                        16+
                        </h1>
                        <p className='font-serif mt-2'>
                        Countries with our <br /> clientele
                        </p>
                    </div>
                    <div data-aos="fade-up">
                        <h1 className='text-6xl font-mono font-bold'>
                        618+
                        </h1>
                        <p className='font-serif mt-2'>
                        Active clients across the <br /> globe
                        </p>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Showcase