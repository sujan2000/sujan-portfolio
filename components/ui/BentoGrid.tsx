'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { relative } from "path";
import Lottie from 'react-lottie';
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg

}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id: number,
    img?: string,
    imgClassName?: string,
    titleClassName?: string,
    spareImg?: string,
}) => {

    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('sujan2000@gmail.com');
        setCopied(true);
    }


    return (
        <div
            className={cn(
                "group/bento overflow-hidden relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-none border-white/[0.1]",
                className,
            )}
            style={{
                background: 'rgb(4,7,29)',
                backgroundColor: 'linear-gradient(90deg,rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)',
            }}
        >

            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'absolute object-cover, object-center')}
                        />
                    )}
                </div>
                <div className={`absolute right-0-bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={'object-center, object-cover w-full h-full'}
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/* <div className="absolute z-50 flex items-center
                         justify-center text-white font-bold"/> */}
                    </BackgroundGradientAnimation>
                )}

                <div className={cn(
                    titleClassName,
                    "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 -5 lg:p-10"
                )}>
                    <div className="font-sans font-extralight text-sm text-[#c1c2d3] md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>


                    {id === 2 && <GlobeDemo />}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
                            <div className="flex flex-col gap-3 lg:gap-8">
                                {["JavaScript", "TypeScript", "React.js", "Next.js"].map((tech) => (
                                    <span key={tech} className="px-3 py-2 rounded-lg text-xs lg:text-base
                                    opacity-50 lg:opacity-100 bg-[#10132E]">{tech}</span>
                                ))}
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-8">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                                {["VueJS", "MongoDB", "Node.js", "PostgreSQL"].map((tech) => (
                                    <span key={tech} className="px-3 py-2 rounded-lg text-xs lg:text-base
                                    opacity-50 lg:opacity-100 bg-[#10132E]">{tech}</span>
                                ))}

                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className="absolute -bottom-5 right-0">
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>

                            <MagicButton
                                title={copied ? "Copied!" : "Copy Email"}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
