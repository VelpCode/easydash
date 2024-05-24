import React from "react";
import HeroSection from "../components/HeroSection";
import Web from "../components/webprop";


const Projects = () => {

    return (

        <div>
            <Web />
            <div className="text-6xl font-semibold text-neutral-800 max-w-[600px] mb-2">My Projects</div>
            <h1 className='text-3xl font-medium mb-8 text-gray-500'>Some of the things I've dabbled with..</h1>
            <div>
                <div className="flex gap-10 mt-[100px]">
                    <div className="left border rounded h-[400px] w-[400px]">

                    </div>
                    <div className="right">
                    <div className="text-3xl font-medium text-neutral-600">Project One</div>
                    <p className="mt-5 text-sm text-neutral-400 max-w-[400px] mb-10 itali">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem massa, lacinia eu risus ac, tempor semper nibh. Integer volutpat enim sed feugiat semper. Quisque elementum diam quis ornare suscipit. Nunc tristique nunc nec leo fermentum pharetra. Duis gravida, nisl vitae rhoncus suscipit, dui turpis viverra purus, in maximus ex ante eu tortor. Mauris semper ut elit ac aliquam. Donec sed dolor laoreet, dignissim turpis sed, posuere dolor.

Donec nibh turpis, ultrices eget purus in, mollis fermentum libero. <br /> <br /> lacinia eu risus ac, tempor semper nibh. Integer volutpat enim sed feugiat
                    </p>
                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Me.</button>
                    </div>
                </div>
                <div className="flex gap-10 mt-[100px]">
                    <div className="left border rounded h-[400px] w-[400px]">

                    </div>
                    <div className="right">
                        <h1>askdjaksdnaksjndkandsknas</h1>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Projects;