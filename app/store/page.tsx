
import Web from "../components/webprop"
import Image from "next/image"

export default function Page() {


    return (

        <div>
            <Web />
            <div className="text-6xl font-semibold text-neutral-800 max-w-[600px] mb-2">My Shop</div>
            <h1 className='text-3xl font-medium mb-8 text-gray-500'>Some of the things I've dabbled with..</h1>

            <div className="grid grid-cols-2 md:grid-cols-2 p-20 gap-2">
                <div className="rounded">
                    <div className=" rounded-md">
                        <Image src = "/Mockup.png" alt="Height" height={300} width={300} />
                    </div>
                    <div className="bg-neutral-200 p-5">

                    </div>
                </div>
                
                <div className="rounded-xl h-[500px] w-[500px]">
                    <div className="bg-white">
                        <h1>hi</h1>
                    </div>
                    <div className="bg-neutral-200 p-5">
                        <h1>hi</h1>
                    </div>
                </div>
                <div className="rounded-xl h-[500px] w-[500px]">
                    <div className="bg-white">
                        <h1>hi</h1>
                    </div>
                    <div className="bg-neutral-300 p-5">
                        <h1>hi</h1>
                    </div>
                </div>
                <div className="rounded-xl h-[500px] w-[500px]">
                    <div className="bg-white">
                        <h1>hi</h1>
                    </div>
                    <div className="bg-neutral-300 p-5">
                        <h1>hi</h1>
                    </div>
                </div>
            </div>
        </div>

    )

}