import React from 'react'
import { BentoGridSecondDemo } from './ui/BentoGrid'
import { BriefcaseIcon } from 'lucide-react'
import { Layers2 } from 'lucide-react';
import { HandHeart } from 'lucide-react';
import { InfiniteMovingCardsDemo } from './ui/MovingCards';
import Web from './webprop';

const HeroSection = () => {
  return (
    <div>
        
        <div>
            <div>
                <Web />
                <div>
                    <h1 className='text-6xl font-semibold mb-2 text-neutral-800'>Hey! I'm Harry 👋</h1>
                    <h1 className='text-3xl font-medium mb-8 text-gray-500'>Developer. Designer. Builder.</h1>
                    <div className='flex items-center gap-2 mb-8'>
                        <div className='rounded-xl max-w-2 bg-red-500 h-2 w-4'></div>
                        <div className='text-lg text-red-800'>Canada</div>
                    </div>
                </div>

                <div className='max-w-[1200px]'>
                    <p className='text-gray-500 mt-3 text-xl'>I'm a software developer with an eye for aesthetic interfaces, clean UI/UX practices and everything frontend.
                    When I'm not coding you can find me in the gym, or messing with some art.
                    </p>
                    <p className='text-gray-500 mt-8 text-x italic'>I'm a software developer with an eye for aesthetic interfaces, clean UI/UX practices and everything frontend.
                    When I'm not coding you can find me in the gym, or messing with some art.
                    </p>
                    <div className='flex gap-5 mt-8 mb-8'>
                        <button className='py-3 px-3 bg-neutral-800 font-medium rounded-lg text-white shadow-lg text-sm'>Let's Talk</button>
                        <button className='border rounded-xl py-3 px-3 text-xs shadow-sm text-neutral-700 font-medium'>Copy Email</button>
                    </div>
                </div>

                <div className='max-w-[1000px]'>
                    <div className='flex items-center align-middle gap-2 mt-[140px] mb-[50px]'>
                        <Layers2 className='text-neutral-500'/>
                        <h1 className='text-3xl font-medium text-neutral-500'>Projects</h1>
                    </div>
                    <BentoGridSecondDemo />
                </div>

                <div className='mt-[140px] max-w-[1000px]'>
                    <div className='flex items-center align-middle gap-2 mt-[140px] mb-[50px]'>
                        <HandHeart className='text-neutral-500' />
                        <h1 className='text-3xl font-medium text-neutral-500'>Testimonials</h1>
                    </div>
                    <InfiniteMovingCardsDemo />
                </div>

            </div>
        </div>

    </div>
  )
}

export default HeroSection