import React from 'react'
import Image from 'next/image'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from "@mui/icons-material/YouTube"

const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 min-h-screen w-64 z-10 p-10 bg-[#F4F5F5] shadow-md'>
      <div className='align-middle flex gap-2'>
        <Image src = "/aman.jpeg" width={80} height={80} alt = 'pic' className='rounded-2xl shadow-md'></Image>
        <div>
          <h1 className = "text-xs mt-2 text-neutral-500 font-semibold">Aman Velpula</h1>
          <p className='text-xs text-neutral-400'>aman@gmail.com</p>
        </div>
      </div>
      <div className = "mt-7 flex gap-3 items-center align-middle">
        <XIcon className='text-neutral-400 text-4xl '/>
        <YoutubeIcon className = 'text-neutral-400 text-4xl'/> 
        <InstagramIcon className = 'text-neutral-400 text-4xl'/>
      </div>
    </div>
  )
}

export default Sidebar