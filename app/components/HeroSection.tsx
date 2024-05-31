import React from 'react'
import { BentoGridSecondDemo } from './ui/BentoGrid'
import { BriefcaseIcon, HammerIcon } from 'lucide-react'
import { Layers2 } from 'lucide-react';
import { HandHeart } from 'lucide-react';
import { InfiniteMovingCardsDemo } from './ui/MovingCards';
import Web from './webprop';
import INFO from '../userDetails/user';
import Image from 'next/image';
import { Toolbar } from '@mui/material';
import CardSec from './CardSec';
import CardGrid from './CardSec';

const HeroSection = () => {
  return (
    <div>
        
        <div>
            <div>
                <Web />
                <div>
                    <h1 className='text-6xl font-semibold mb-2 text-neutral-800'>Hey! I'm {INFO.name.firstname} 👋</h1>
                    <h1 className='text-2xl font-medium mb-8 text-gray-500'>Developer. Designer. Builder.</h1>
                    <div className='flex items-center gap-2 mb-8'>
                        <div className='rounded-xl max-w-2 bg-red-500 h-2 w-4'></div>
                        <div className='text-lg text-red-800'>Canada</div>
                    </div>
                </div>

                <div className='max-w-[1000px]'>
                    <p className='text-gray-500 mt-3 text-lg'>I'm a software developer with an eye for aesthetic interfaces, clean UI/UX practices and everything frontend.
                    When I'm not coding you can find me in the gym, or messing with some art.
                    </p>
                    <p className='text-gray-500 mt-8 text-md italic'>I'm a software developer with an eye for aesthetic interfaces, clean UI/UX practices and everything frontend.
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
                        <div className='flex  justify-between items-center w-full'>
                            <h1 className='text-2xl font-medium text-neutral-700'>My Designs</h1>
                            <button className='border rounded-xl py-3 px-3 text-xs shadow-sm text-neutral-700 font-medium'>View All</button>
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-between p-5 mb-10'>
                            <div className='heading'>
                            <p className='text-xs text-neutral-400 underline mb-2'>April 2020 - May 2021</p>
                            <h1 className='text-lg font-medium text-neutral-700 mb-2'>Minimal Wallpaper</h1>
                            <p className='text max-w-[550px] text-neutral-400 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem massa, lacinia eu risus ac, tempor semper nibh. Integer volutpat enim sed feugiat semper. Quisque elementum diam quis ornare suscipit. Nunc tristique nunc nec leo fermentum pharetra. <br /> <br />Duis gravida, nisl vitae rhoncus suscipit, dui turpis viverra purus, in maximus ex ante eu tortor. Mauris semper ut elit ac aliquam. Donec sed dolor laoreet, dignissim turpis sed, posuere dolor.
Donec nibh turpis.
                            </p>
                            <p className='text-lg font-medium underline text-neutral-700'>Try It Out</p>
                            </div>
                            <div>
                            <Image src = "/PhoneHome.png" alt = "phone" height = {250} width = {250} className='bg-neutral-100 rounded-md'/>
                            </div>
                        </div>

                        <div>
                        <div className='flex items-center justify-between p-5'>
                            <div className='heading'>
                            <p className='text-xs text-neutral-400 underline mb-2'>April 2020 - May 2021</p>
                            <h1 className='text-lg font-medium text-neutral-700 mb-2'>iPhone Design2</h1>
                            <p className='text max-w-[550px] text-neutral-400 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem massa, lacinia eu risus ac, tempor semper nibh. Integer volutpat enim sed feugiat semper. Quisque gravida, <br></br><br></br> nisl vitae rhoncus suscipit, dui turpis viverra purus, in maximus ex ante eu tortor. posuere dolor.
Donec nibh turpis.
                            </p>
                            <p className='text-lg font-medium underline text-neutral-700'>Try It Out</p>
                            </div>
                            <div>
                            <Image src = "/mackuo.png" alt = "phone" height = {250} width = {250} className='bg-neutral-100 rounded-md'/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                
                <div className='mt-[140px] max-w-[1000px]'>
                    <div className='flex items-center align-middle gap-2 mt-[140px] mb-[50px]'>
                        <HammerIcon className='text-neutral-500' />
                        <h1 className='text-xl font-medium text-neutral-700'>My Services</h1>
                    </div>
                    <CardGrid />
                </div>

                <div className='mt-[140px] max-w-[1000px]'>
                    <div className='flex items-center align-middle gap-2 mt-[140px] mb-[50px]'>
                        <HandHeart className='text-neutral-500' />
                        <h1 className='text-xl font-medium text-neutral-700'>What people say</h1>
                    </div>
                    <InfiniteMovingCardsDemo />
                </div>

            </div>
        </div>

    </div>
  )
}

export default HeroSection;