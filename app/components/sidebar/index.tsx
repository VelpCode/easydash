import React from 'react'
import Image from 'next/image'


const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 min-h-screen w-64 z-10 p-10 bg-[#F4F5F5] shadow-md'>
      <div className='align-middle flex gap-2'>
        <div className='h-20 w-20 bg-gray-200 rounded-xl'></div>
        <div>
          <h1 className = "text-xs mt-2 text-neutral-500 font-semibold">Aman Velpula</h1>
          <p className='text-xs text-neutral-400'>aman@gmail.com</p>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Sidebar