
import Web from "../components/webprop"
import Image from "next/image"

export default function Page() {


    return (

        <div>
            <Web />
            <div className="text-6xl font-semibold text-neutral-800 max-w-[600px] mb-2">My Shop</div>
            <h1 className='text-3xl font-medium mb-8 text-gray-500'>Some of the things I've dabbled with..</h1>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                <div className="rounded">
                    <div className=" rounded-md">
                        <Image src = "/Mockup.png" alt="Height" height={400} width={400} className="rounded-lg"/>
                    </div>
                    <div className="bg-neutral-200 p-5 w-[400px]">

                    </div>
                </div>
                
                <div className="rounded">
                    <div className=" rounded-md">
                        <Image src = "/Mockup.png" alt="Height" height={400} width={400} className="rounded-lg"/>
                    </div>
                    <div className="bg-neutral-200 p-5 w-[400px]">

                    </div>
                </div>
                <div className="rounded">
                    <div className=" rounded-md">
                        <Image src = "/Mockup.png" alt="Height" height={400} width={400} className="rounded-lg"/>
                    </div>
                    <div className="bg-neutral-200 p-5 w-[400px]">

                    </div>
                </div>
                <div className="rounded">
                    <div className=" rounded-md">
                        <Image src = "/Mockup.png" alt="Height" height={400} width={400} className="rounded-lg"/>
                    </div>
                    <div className="bg-neutral-200 p-5 w-[400px]">

                    </div>
                </div>
            </div>
        </div>

    )

}