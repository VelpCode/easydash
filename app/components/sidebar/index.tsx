"use client";

import React, { useState } from "react";
import Image from "next/image";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { Home } from "lucide-react";
import { Build } from "@mui/icons-material";
import { PaintBucket } from "lucide-react";
import { Store } from "lucide-react";
import { Pen } from "lucide-react";
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";
import { dark } from "@mui/material/styles/createPalette";
import Link from "next/link";
import INFO from "@/app/userDetails/user";

const Sidebar = () => {
  const Items = [
    {
      icon: <Home />,
      name: "Home",
      link: "/",
    },

    {
      icon: <Build />,
      name: "Projects",
      link: "/projects",
    },
    {
      icon: <PaintBucket />,
      name: "Passions",
      link: "/passions",
    },
    {
      icon: <Store />,
      name: "Store",
      link: "/store",
    },
    {
      icon: <Pen />,
      name: "Blog",
      link: "/blog",
    },
  ];

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="sm:fixed sm:left-0 sm:top-0 sm:min-h-screen sm:w-64 sm:z-10 sm:p-10 bg-[#F4F5F5] shadow-md">
      <div className="align-middle flex gap-2 mb-10 max-sm:hidden">
        {INFO.name.profilepic}
        <div>
          <h1 className="text-xs mt-2 text-neutral-500 font-semibold">
            {INFO.name.person}
          </h1>
          <p className="text-xs text-neutral-400 ">{INFO.name.email}</p>
          <div className="flex gap-3 mt-2">
            <XIcon className="text-neutral-400 text-md cursor-pointer" />
            <YoutubeIcon className="text-neutral-400 text-md cursor-pointer" />
            <InstagramIcon className="text-neutral-400 text-md cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="max-sm:flex max-sm:items-center max-sm:justify-around border-l p-2 ">
        {Items.map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              key={index}
              className="text-neutral-400 p-2 flex gap-4 sm:mt-3 text-xs items-center cursor-pointer hover:bg-neutral-200 w-full rounded-xl"
            >
              {item.icon}
              <span className="max-sm:hidden">{item.name}</span>
            </div>
          </Link>
        ))}

        <div className="sm:mt-[570px]">
          <button
            className="flex items-center gap-2 text-xs p-2 w-full text-neutral-400 hover:bg-neutral-200 rounded-lg"
            onClick={toggleDarkMode}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
            <span className="max-sm:hidden">{darkMode ? "Settings" : "Settings"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
