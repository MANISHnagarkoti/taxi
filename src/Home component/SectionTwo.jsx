import React from 'react'

const SectionTwo = () => {
  return (
    <div className=' mt-24 h-[800px] -z-20  relative' >

      <div className=' absolute top-0 flex w-full h-full'>

        <div className='md:w-[60%] text-white container flex items-center h-full' >

          <div>



            <div>
              <div>DRIVE WITH MY TAXI</div>
              <div className='font-semibold text-4xl'>Set your own hours. Earn on your own terms.</div>
            </div>

            <div className='mt-9 space-y-9'>

              <div className='flex gap-3'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                </div>

                <div>
                  <div className='font-semibold'>Reliable earnings:</div>
                  <div>Make money, keep your tips, and cash out when you want.</div>
                </div>
              </div>

              <div className='flex gap-3'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>

                <div>
                  <div className='font-semibold'>A flexible schedule:</div>
                  <div>Be your own boss and drive whenever it works for you.</div>
                </div>
              </div>


              <div className='flex gap-3'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>

                <div>
                  <div className='font-semibold'>Get paid instantly:</div>
                  <div>Cash out your earnings whenever you want.</div>
                </div>
              </div>



            </div>

            <div className="rounded-full rounded-bl-none bg-white p-6 py-3 text-black cursor-pointer mt-9 inline-flex">Apply to drive</div>

          </div>

        </div>

        <div className='hidden md:w-[40%] md:flex items-center h-full justify-end'>
          <img src="homeimg/secTwoOne.png" className='w-[500px]' alt="" />
        </div>

      </div>

      <img src="homeimg/secTwobg.png" className='h-full w-full' alt="" />

    </div>
  )
}

export default SectionTwo