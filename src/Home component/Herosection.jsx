
import React from "react";




const Herosection = () => {



  return (
    <div className="pt-12">
      <div className="container flex justify-center" >

        <img src="homeimg/herobg.png" className="w-[90%] md:w-[60%]" alt="" />



      </div>


      <div className="mt-24">
        <div className="text-center font-bold text-6xl">Let’s ride</div>

        <div className="flex justify-center gap-4 md:gap-9 mt-9">

          <div className="rounded-full rounded-bl-none bg-black p-6 py-3 text-white cursor-pointer text-sm md:text-base">Apply to drive</div>
          <div className="rounded-full rounded-tr-none border border-black p-6 py-3 cursor-pointer text-sm md:text-base">Sign up to ride</div>

        </div>

      </div>

    </div>
  );
};

export default Herosection;

