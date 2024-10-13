import React, { useEffect, useRef, useState } from 'react';
import piechart from "../../public/piechart.json";
import Growth from "../../public/Growth.json";
import Sustainable from "../../public/Sustainable.json";
import Reliability from "../../public/Reliability.json";
import { GrGrow } from "react-icons/gr";
import { IoBarChartOutline } from "react-icons/io5";
import { CiCalculator1 } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import Lottie from 'lottie-react';
import gsap from 'gsap';
import AnimatedText from './AnimatedText';

const HoverCards = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    
    

    const CardData = [
        {
            _id: 1,
            title: 'Growth',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi hic iusto debitis veritatis, animi quis, voluptate placeat expedita perferendis quia dolore sit rem eum numquam ad? Rerum, id inventore.",
            animation: Growth,
            icon: <GrGrow size={40} color='white' />
        },
        {
            _id: 2,
            title: 'Sustainability',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi hic iusto debitis veritatis, animi quis, voluptate placeat expedita perferendis quia dolore sit rem eum numquam ad? Rerum, id inventore.",
            animation: Sustainable,
            icon: <IoBarChartOutline size={40} color='white' />
        },
        {
            _id: 3,
            title: 'Reliability',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi hic iusto debitis veritatis, animi quis, voluptate placeat expedita perferendis quia dolore sit rem eum numquam ad? Rerum, id inventore.",
            animation: Reliability,
            icon: <CiCalculator1 size={40} color='white' />
        },
        {
            _id: 4,
            title: 'Profit',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi hic iusto debitis veritatis, animi quis, voluptate placeat expedita perferendis quia dolore sit rem eum numquam ad? Rerum, id inventore.",
            animation: piechart,
            icon: <CiBadgeDollar size={40} color='white' />
        }
    ];

    return (
        <>
            {CardData.map((item, index) => {
                return (
                    <div
                        data-aos="fade-up"
                         // Assign each card to the ref array
                        key={item._id}
                        className="group mt-10 relative w-[100%] sm:w-[100%] md:w-[48%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
                        onMouseEnter={() => setHoveredIndex(index)} // Set hover state to the current index
                        onMouseLeave={() => setHoveredIndex(null)} // Reset hover state
                    >
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-700 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                {item.icon}
                            </span>
                            <div className="pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <h2 className="font-bold">{item.title}</h2>
                                {hoveredIndex===index?(
                                   null 
                                ):(

                                <p>
                                    Lorem ipsum dolor sit, amet consectetur.
                                </p>
                                )}
                            </div>
                            <div className='mt-18'>
                                {hoveredIndex === index && (
                                    <div className="absolute top-20 left-12 flex items-center justify-center w-full h-full">
                                        <Lottie className="h-[150px] w-[150px]" animationData={item.animation} loop />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default HoverCards;
