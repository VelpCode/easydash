
import { Button } from "@mui/material"
import Web from "../components/webprop"
import Image from "next/image"

export default function Page() {

    

    return (

        <div>
            <Web />
            <div className="text-6xl font-semibold text-neutral-800 max-w-[600px] mb-2">My Shop</div>
            <h1 className='text-3xl font-medium mb-8 text-gray-500'>A few things I've got for grabs..</h1>

            <div className="p-20 grid grid-cols-2 lg:grid-cols-2 max-md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-8">
                <div className="rounded">
                    <div className=" rounded-md max-w-[400px]">
                        <Image src = "/phone1.png" alt="Height" height={500} width={500} className="rounded-lg"/>
                        <div className="p-10 rounded bg-neutral-50">
                            <h1 className="text-xl font-medium">iPhone 12 Mockup Design</h1>
                            <p className="text-neutral-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras lorem massa, lacinia eu risus ac, tempor semper.</p>
                            <button className="mt-3 py-3 px-3 bg-neutral-800 font-medium rounded-lg text-white shadow-lg text-sm">
                Buy now
              </button>
                        </div>
                    </div>
                </div>
                
                <div className="rounded">
                    <div className=" rounded-md max-w-[400px]">
                        <Image src = "/phone2.png" alt="Height" height={500} width={500} className="rounded-lg"/>
                        <div className="p-10 rounded bg-neutral-50">
                            <h1 className="text-xl font-medium">iPhone 12 Mockup Design</h1>
                            <p className="text-neutral-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras lorem massa, lacinia eu risus ac, tempor semper.</p>
                    <button className="mt-3 py-3 px-3 bg-neutral-800 font-medium rounded-lg text-white shadow-lg text-sm">
                Buy now
              </button>
                        </div>
                        
                    </div>
                </div>
                <div className="rounded relative">
                    <div className=" rounded-md max-w-[400px]">
                        <Image src = "/phone3.png" alt="Height" height={500} width={500} className="rounded-lg"/>
                        <div className="p-10 rounded bg-neutral-50">
                            <h1 className="text-xl font-medium">iPhone 12 Mockup Design</h1>
                            <p className="text-neutral-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras lorem massa, lacinia eu risus ac, tempor semper.</p>
                    <button className="mt-3 py-3 px-3 bg-neutral-800 font-medium rounded-lg text-white shadow-lg text-sm">
                Buy now
              </button>
                        </div>
                    </div>
                </div>
                <div className="rounded">
                    <div className=" rounded-md max-w-[400px]">
                        <Image src = "/phone1.png" alt="Height" height={500} width={500} className="rounded-lg"/>
                        <div className="p-10 rounded bg-neutral-50">
                            <h1 className="text-xl font-medium">iPhone 12 Mockup Design</h1>
                            <p className="text-neutral-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras lorem massa, lacinia eu risus ac, tempor semper.</p>
                    <button className="mt-3 py-3 px-3 bg-neutral-800 font-medium rounded-lg text-white shadow-lg text-sm">
                Buy now
              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}