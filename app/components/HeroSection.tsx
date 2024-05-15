import React from 'react'


const HeroSection = () => {
  return (
    <div>
        
        <div className='mt-10 ml-10 p-10'>
            <div>
                <div className='flex mb-4 align-middle items-center gap-2 text-neutral-400 bg-green-100 p-2 rounded-3xl max-w-[100px]'>
                    <div className=' items-center flex align-middle ml-1 gap-1'>
                        <div className='rounded-xl max-w-2 bg-green-500 h-2 w-4'></div>
                        <div className='text-green-700 text-xs'>On the web</div>
                    </div>
                </div>

                <div>
                    <h1 className='text-8xl font-semibold mb-5 text-neutral-800'>Yo. I'm Aman 🪐</h1>
                    <h1 className='text-5xl font-medium mb-8 text-neutral-600'>Developer. Designer. Builder</h1>
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
                    <h1 className='text-3xl font-medium text-neutral-700 mt-[140px] mb-10'>Projects</h1>
                    <div className=' grid grid-cols-2 gap-y-4'>
                        <div className='h-[400px] w-[400px] bg-neutral-200 rounded '></div>
                        <div className='h-[400px] w-[400px] bg-neutral-300 rounded '></div>
                        <div className='h-[400px] w-[400px] bg-neutral-300 rounded '></div>
                        <div className='h-[400px] w-[400px] bg-neutral-300 rounded '></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HeroSection