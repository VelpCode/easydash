
import Web from "../components/webprop"
import Image from "next/image"

export default function Page() {


    return (

        <div>
            <Web />
            <div className="text-6xl font-semibold text-neutral-800 max-w-[600px] mb-2">My Shop</div>
            <h1 className='text-3xl font-medium mb-8 text-gray-500'>Some of the things I've dabbled with..</h1>

            <div className="p-20 grid grid-cols-2 max-md:grid-cols-2 gap-8">
                <div className="rounded">
                    <div className=" rounded-md max-w-[400px]">
                        <Image src = "/phone1.png" alt="Height" height={500} width={500} className="rounded-lg"/>
                        <div className="p-10 rounded bg-neutral-50">
                            <h1 className="text-xl font-medium">iPhone 12 Mockup Design</h1>
                            <p className="text-neutral-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras lorem massa, lacinia eu risus ac, tempor semper.</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}