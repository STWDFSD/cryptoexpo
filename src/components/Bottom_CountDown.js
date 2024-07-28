import React, {useState, useEffect} from "react";
import logo from "../assets/img/logo-no-background.png"
import "./Navbar.css";
import SocialLink from "./Social_Link";
const Information = () =>{
  const [date,setDate] = useState("");
  const [address, setAddress] = useState("");

  useEffect(()=>{
    setAddress("Zabeel Hall - 6, Dubai World Trade Centre");
    setDate("21 - 22 May 2025, 10:00AM - 6:00PM");
  },[]);

  return (
    <div className="h-content bg-[#00082E] w-full text-white ">
      <div className="mx-auto w-fit flex gap-5 text-[16px]">
        <div className="flex p-1">
          <strong className="text-red-500 font-bold">
            Address :&nbsp;
          </strong>
            {address}
        </div>
        <div className="flex p-1">
          <strong className="text-red-500 font-bold">
            Date & Time :&nbsp; 
          </strong>
            {date}
        </div>
        <div className="ml-5">
          <SocialLink/>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 50) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <nav className=" fixed bottom-0 w-full z-50 flex bg-[#121212e6]">
        <div className="m-auto w-[1200px] flex gap-40 justify-between">
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
            <div className="flex">
              <div className="flex items-center justify-center  m-auto  h-[50px] rounded-lg bg-white text-[#e50134] mr-5 ml-0 hover:bg-[#e50134] hover:text-white transition-colors duration-300 hover:cursor-pointer">
                <a href="#"  className="text-sm w-44 text-center m-auto ">
                  Become Sponsers
                </a>
              </div>
              <div className="flex items-center justify-center  m-auto  h-[50px] rounded-lg bg-[#e50134] text-white hover:text-[#e50134] hover:bg-white transition-colors duration-300 hover:cursor-pointer">
                <a href="#"  className="text-sm w-44 text-center m-atuo">
                  Buy Tickets
                </a>
              </div>
            </div>
        </div>
    </nav>


  );
};

export default Navbar;
