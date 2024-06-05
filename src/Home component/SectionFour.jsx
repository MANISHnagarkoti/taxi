import React from 'react'

const SectionFour = () => {
    return (
        <div className=' mt-[100px] ' >

            <div className=' flex w-full h-full items-end'>

                <div className='md:w-[60%] container flex items-center h-full' >

                    <div>



                        <div>
                            <div className='font-semibold'>RIDE WITH MY TAXI</div>
                            <div className='font-semibold text-4xl mt-3'>Ready, set, goin just a few quick taps</div>

                            <div className='mt-9'>No matter your destination, we’ll get you where you need to go</div>
                        </div>

                        <div className='mt-9 space-y-9'>

                            <div className='flex gap-3'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                </div>

                                <div>
                                    <div className='font-semibold'>Get a reliable ride in minutes</div>
                                 
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>

                                <div>
                                    <div className='font-semibold'>Schedule your ride in advance</div>
                                </div>
                            </div>


                            <div className='flex gap-3'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                    </svg>
                                </div>

                                <div>
                                    <div className='font-semibold'>Earn rewards on every ride</div>
                                </div>
                            </div>



                        </div>

                        <div className="rounded-full rounded-br-none bg-black p-6 py-3 text-white cursor-pointer mt-9 inline-flex">Sign Up to ride</div>

                    </div>

                </div>

                <div className='hidden md:w-[40%] md:flex items-end h-full justify-end'>
                    <img src="homeimg/secFourbg.png" className='w-[500px]' alt="" />
                </div>

            </div>


            <img src="homeimg/network.png" className='w-full' alt="" />

        </div>
    )
}

export default SectionFour