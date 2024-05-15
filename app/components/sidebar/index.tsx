"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from "@mui/icons-material/YouTube"
import { Home } from 'lucide-react';
import { Build } from '@mui/icons-material';
import { PaintBucket } from 'lucide-react';
import { Store } from 'lucide-react';
import { Pen } from 'lucide-react';
import { DarkMode } from '@mui/icons-material';
import { LightMode } from '@mui/icons-material';
import { dark } from '@mui/material/styles/createPalette';

const Sidebar = () => {


  const Items = [

    {
      icon: <Home />,
      name: "Home"
    },

    {
      icon: <Build />,
      name: "Projects"
    },
    {
      icon: <PaintBucket />,
      name: "Passions"
    },
    {
      icon: <Store />,
      name: "Store"
    },
    {
      icon: <Pen />,
      name: "Blog"
    }


  ]

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
 

  return (
    <div className='fixed left-0 top-0 min-h-screen w-64 z-10 p-10 bg-[#F4F5F5] shadow-md'>
      <div className='align-middle flex gap-2 mb-10'>
        <Image src = "/aman.jpeg" width={80} height={80} alt = 'pic' className='rounded-2xl shadow-md'></Image>
        <div>
          <h1 className = "text-xs mt-2 text-neutral-500 font-semibold">Aman Velpula</h1>
          <p className='text-xs text-neutral-400'>aman@gmail.com</p>
          <div className = "flex gap-3 mt-2">
            <XIcon className='text-neutral-400 text-md'/>
            <YoutubeIcon className = 'text-neutral-400 text-md  '/> 
            <InstagramIcon className = 'text-neutral-400 text-md'/>
        </div>
        </div>
      </div>
      <div className='border-l p-2'>
      {Items.map((item, index) => (
        <div key={index} className='text-neutral-400 p-2 flex gap-4 mt-3 text-sm items-center cursor-pointer hover:bg-neutral-200 w-full rounded-xl'>
          {item.icon}
          {item.name}
        </div>
      ))}

      <div className="mt-[570px]">
        <button className="flex items-center gap-2 text-xs p-2 w-full text-neutral-400 hover:bg-neutral-200 rounded-lg" onClick={toggleDarkMode}>
          {darkMode ? <LightMode /> : <DarkMode />}
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
      </div>
      </div>

    </div>
  )
}

export default Sidebar