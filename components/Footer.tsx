import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className="bg-black py-10 w-full pt-20 pb-10" id="contact">
            <div className="absolute left-0 w-full -bottom-72">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className='w-full h-full opacity-50'
                />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className="text-3xl font-bold text-center mb-6 lg:max-w-[45vw]">
                    Ready to take
                    <span className='text-purple-400'> your</span> digital presence to the next level?
                </h2>
                <p className="text-center text-white-200 md:mt-10 my-5">Let's connect and discuss how we can elevate your brand together.</p>

                <a href="meena.sujan06@gmail.com" >
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className="flex items-center flex-col md:flex-row justify-between mx-auto px-4 mt-16 ">
                <p className="text-center md:text-base text-sm md:font-normal font-light">
                    © {new Date().getFullYear()} Sujan. All rights reserved.
                </p>
                <div className='flex items-center md:gap-3'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center
                        backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-slate-900'>
                            <img src={profile.img} alt={`${profile.id}`}
                                width={20} height={20} />

                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer