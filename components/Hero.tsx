import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className="relative left-0 top-0 flex h-screen w-full items-center justify-center bg-white/3 dark:bg-black/20">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white
                 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

                <div className="flex justify-center relative my-20 z-10">
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center flex flex-col justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                            Dynamic Web Magic with Next.js
                        </h2>

                        <TextGenerateEffect
                            words="Crafting Interactive Experiences with Next.js"
                            className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                            filter={true}
                            duration={0.7}
                        />
                        <p className='mt-3 text-center text-black/70 dark:text-white/70 md:text-lg leading-relaxed tracking-wide'>
                            Hi, I&apos;m SUJAN, a passionate web developer building dynamic and responsive web applications using Next.js.
                        </p>
                        <a href="#about">
                            <MagicButton
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
