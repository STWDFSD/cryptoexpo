import React from "react";
const Bottom_CountDown = () => {

  return (
    <nav className="hidden fixed md:block bottom-0 w-full z-50 flex bg-[#121212e6]">
        <div className="m-auto max-w-[1200px] flex gap-40 justify-between">
            <div className="flex gap-6">
                <div className="inline-block min-w-[70px] p-1 text-center my-[20px] ml-0 bg-[#e50134] text-white">
                    <div className="text-[30px]">296</div>
                    <div className="text-[12px]">Days</div>
                </div>
                
                <div className="inline-block min-w-[70px] p-1 text-center my-[20px] ml-0 bg-[#141d50] text-white">
                    <div className="text-[30px]">17</div>
                    <div className="text-[12px]">Hours</div>
                </div>
                
                <div className="inline-block min-w-[70px] p-1 text-center my-[20px] ml-0 bg-[#141d50] text-white">
                    <div className="text-[30px]">8</div>
                    <div className="text-[12px]">Minutes</div>
                </div>
                
                <div className="inline-block min-w-[70px] p-1 text-center my-[20px] ml-0 bg-[#141d50] text-white">
                    <div className="text-[30px]">37</div>
                    <div className="text-[12px]">Seconds</div>
                </div>

            </div>
            <div className="block mt-1 lg:flex lg:gap-5">
              <div className="flex items-center justify-center m-auto  mb-1 lg:mb-auto h-[50px] rounded-lg bg-white text-[#e50134] ml-0 hover:bg-[#e50134] hover:text-white transition-colors duration-300 hover:cursor-pointer">
                <a href="#"  className="text-sm w-44 text-center m-auto ">
                  Become Sponsers
                </a>
              </div>
              <div className="flex items-center justify-center  m-auto  h-[50px] rounded-lg bg-[#e50134] text-white hover:text-[#e50134] hover:bg-white transition-colors duration-300 hover:cursor-pointer">
                <a href="#"  className="text-sm w-44 text-center m-atuo">
                  Register
                </a>
              </div>
            </div>
        </div>
    </nav>

  );
};

export default Bottom_CountDown;
