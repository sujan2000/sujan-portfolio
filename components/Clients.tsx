import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                Kind words from
                <span className="text-purple-500"> satisfied Clients</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />


                <div className='flex flex-wrap justify-center items-center gap-4 md:gap-16 max-lg:mt-10'>
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div key={id} className="flexmd:max-w-60 max-w-32 gap-2">
                            <img
                                src={img}
                                alt={name}
                                className="h-12 mx-5 opacity-70 hover:opacity-100 transition duration-300"
                            />
                            <img
                                src={nameImg}
                                alt={name}
                                className="h-12 mx-5 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Clients