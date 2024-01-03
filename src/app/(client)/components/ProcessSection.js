import Image from 'next/image'
const ProcessSection = () => {
    return (
        <section className='md:mx-16 mt-6 '>
            <p className="text-orange-400 text-lg text-center mt-1">How it work</p>
            <h3 className="text-black text-4xl font-bold  text-center">Food Us An Important Part Of A Balanced Diet</h3>
            <div className="grid md:grid-cols-3 mx-auto gap-10 mt-16 px-5 ">
                <div className="flex gap-4 items-start flex-col">
                    <span className="mr-auto">
                        <Image
                            className='mx-auto '
                            src="/laptop.png"
                            width={372}
                            height={216}
                            alt="laptop"
                        />
                    </span>
                    <div className='px-1'>
                        <h3 className="font-semibold text-xl">CHOOSE</h3>
                        <p className="mt-1 text-gray-500">
                            {" "}
                            Do you want to lose weight, exercise,
                            adhere to a therapeutic diet? Our
                            dietitian will help you with choosing the
                            right program!
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 flex-col">

                    <div className="text-center px-1">
                        <h3 className="font-semibold text-xl">Highly performant</h3>
                        <p className="mt-1 text-gray-500">
                            You can make sure your website or app is highly performant with a
                            built-in system to help you optimize.
                        </p>
                    </div>
                    <span className="mx-auto">
                        <Image
                            className='mx-auto '
                            src="/food.png"
                            width={372}
                            height={216}
                            alt="laptop"
                        />
                    </span>
                </div>
                <div className="flex gap-4 items-start flex-col ">
                    <span className="ml-auto">
                        <Image
                            className=''
                            src="/packingbox.png"
                            width={300}
                            height={140}
                            alt="laptop"
                        />
                    </span>
                    <div className='px-1'>
                        <h3 className="font-semibold text-xl text-right">DELIVER</h3>
                        <p className="mt-1 text-gray-500 text-right">
                            {" "}
                            Do you want to lose weight, exercise,
                            adhere to a therapeutic diet? Our
                            dietitian will help you with choosing the
                            right program!
                        </p>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default ProcessSection