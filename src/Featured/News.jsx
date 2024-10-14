import Lottie from 'lottie-react'
import React from 'react'
import StockNew from "../../public/StockNew.json";

const News = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className='text-center py-0 font-bold font-serif text-4xl'>

        <h1 data-aos="fade-up">Hot Financial Topics</h1>
        <div className='w-[34%] h-[100px]'>

        <Lottie className="" animationData={StockNew} loop />
        </div>
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

        <div className="sm:col-span-5">
            <a href="#">
                <div className="bg-cover text-center overflow-hidden"
                    style={{minHeight: "300px", backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1')`}}
                    title="Woman holding a mug">
                </div>
            </a>
            <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                    <a href="#"
                        className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                        Election
                    </a>
                    <a href="#"
                        className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">Revenge
                        of the Never Trumpers</a>
                    <p className="text-gray-700 text-base mt-2">Meet the Republican dissidents fighting to push Donald Trump
                        out of office—and reclaim their party</p>
                </div>
            </div>
        </div>

        <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                    Steps Back Into Coronavirus Spotlight</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                    Trump's Mistakes Became Biden's Big Breaks</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                    Many Americans 'Dissatisfied' With U.S.</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                    Trump's Mistakes Became Biden's Big Breaks</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                    Many Americans 'Dissatisfied' With U.S.</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                         style={{ backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')` }}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                    Steps Back Into Coronavirus Spotlight</a>
            </div>
        </div>
        <div className='left-[40%] top-[78%] absolute'>
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

    </div>
</div>
  )
}

export default News