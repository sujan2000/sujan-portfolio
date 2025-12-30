import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'


const RecentProjects = () => {
    return (


        // need to design this section properly later for my own portfolio data from index.tsx file


        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of {''}
                <span className="text-purple-500">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-130 h-100 flex items-center justify-center sm:w-[570px] w-[80vw]">
                        <PinContainer title={link} href={link} >
                            <div className="w-[80vw] h-[20vh] sm:w-[570px] sm:h-[40vh] h-[30vh] relative flex  items-center justify-center mb-10">
                                <div className="relative overflow-hidden w-full h-full flex items-center justify-center lg:rounded-3xl bg-[#13162d]">
                                    <img src="/bg.png" alt="background" />
                                    <img src={img} alt={title} className="z-10 absolute bottom-0" />
                                </div>
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon}
                                            className="border border-white/20 rounded-full bg-black lg:w-10 lh:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}  >
                                            <img src={icon} alt={icon} className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-purple-300">Check Live Site</p>
                                    <FaLocationArrow className="ms-3" />
                                </div>
                            </div>
                        </PinContainer>


                    </div>

                ))
                }
            </div >
        </div >
    )
}

export default RecentProjects