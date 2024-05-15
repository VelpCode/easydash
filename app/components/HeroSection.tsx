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
                </div>
            </div>
        </div>

    </div>
  )
}

export default HeroSection