import Image from "next/image"
const NewsletterSection = () => {
    return (
        <section className="text-white body-font md:mx-16  mt-24">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 bg-black md:h-[360px] shadow-md rounded-3xl">
                    <div className="p-4 md:w-1/2 flex items-center justify-center flex-col relative">
                        <Image
                            className=' md:absolute'
                            src="/heroBurger.png"
                            width={620}
                            height={570}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className=" mx-auto p-4 md:w-1/2 flex items-center justify-center flex-col text-center">
                        <h2 className="text-3xl font-bold">Subcribe To Our Newsletter</h2>
                        <div className="bg-white rounded-lg p-2 mt-2">
                            <input className='outline-none text-center text-gray-500' type="email" placeholder='Type your Email' />
                            <button className="ml-auto bg-[#F48E28] text-white px-4 py-2 rounded-lg cursor-pointer text-lg">
                                subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSection