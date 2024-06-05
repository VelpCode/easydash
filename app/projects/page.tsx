import React from "react";
import HeroSection from "../components/HeroSection";
import Web from "../components/webprop";
import Image from "next/image";

const Projects = () => {

    return (

        <div>
            <Web />
            <div className="text-6xl font-semibold text-neutral-800 max-w-[600px] mb-2">My Projects</div>
            <h1 className='text-3xl font-medium mb-8 text-gray-500'>Some of the things I've dabbled with..</h1>
            <div className="mb-10">
                <div className="flex gap-10 mt-[100px] md:flex-row sm:flex-col max-sm:flex-col xs:flex-col ">
                    <div className="left rounded-lg">
                    <Image src = "/Mockup.png" alt = "mockup" height={400} width={400} className="rounded-md shadow-xl"/>
                    </div>
                    <div className="right">
                    <div className="text-3xl font-medium text-neutral-600 lg:text-3xl md:text-xl sm:text-md">Project One</div>
                    <p className="mt-5 text-sm text-neutral-400 max-w-[400px] mb-10 lg:text-sm md:text-xs sm:text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem massa, lacinia eu risus ac, tempor semper nibh. Integer volutpat enim sed feugiat semper. Quisque elementum diam quis ornare suscipit. Nunc tristique nunc nec leo fermentum pharetra. Duis gravida, nisl vitae rhoncus suscipit, dui turpis viverra purus, in maximus ex ante eu tortor. Mauris semper ut elit ac aliquam. Donec sed dolor laoreet, dignissim turpis sed, posuere dolor.
                        Donec nibh turpis, ultrices eget purus in, mollis fermentum libero. <br /> <br /> lacinia eu risus ac, tempor semper nibh. Integer volutpat enim sed feugiat
                    </p>
                    <div className="flex gap-2">
                        <button className="px-6 py-2 bg-neutral-800 text-white rounded-lg shadow-md font-medium transform hover:-translate-y-1 transition duration-400">
                            Preview
                        </button>
                        <button className="px-6 py-2 bg-white text-black border shadow-md rounded-lg font-medium transform hover:-translate-y-1 transition duration-400">
                            GitHub
                        </button>
                    </div>
    
                    </div>
                </div>
                <div className="flex gap-10 mt-[100px] md:flex-row max-sm:flex-col sm:flex-col">

                    <div className="left rounded-lg">
                        <Image src = "/Reflex.png" alt = "reflex" height={400} width={400} className="rounded-md shadow-xl"/>
                    </div>

                    <div className="right">
                        <h1><div className="right">
                    <div className="text-3xl font-medium text-neutral-600">Project Two</div>
                    <p className="mt-5 text-sm text-neutral-400 max-w-[400px] mb-10 lg:text-sm md:text-xs sm:text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem massa, lacinia eu risus ac, tempor semper nibh. Integer volutpat enim sed feugiat semper. Quisque elementum diam quis ornare suscipit. Nunc tristique nunc nec leo fermentum pharetra. Duis gravida, nisl vitae rhoncus suscipit, dui turpis viverra purus, in maximus ex ante eu tortor. Mauris semper ut elit ac aliquam. Donec sed dolor laoreet, dignissim turpis sed, posuere dolor.

Donec nibh turpis, ultrices eget purus in, mollis fermentum libero. <br /> <br /> lacinia eu risus ac, tempor semper nibh. Integer volutpat enim sed feugiat
                    </p>
                    <div className="flex gap-2">
                        <button className="px-6 py-2 bg-neutral-800 text-white rounded-lg shadow-md font-medium transform hover:-translate-y-1 transition duration-400">
                            Preview
                        </button>
                        <button className="px-6 py-2 bg-white text-black border shadow-md rounded-lg font-medium transform hover:-translate-y-1 transition duration-400">
                            GitHub
                        </button>
                    </div>
                    </div></h1>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Projects;