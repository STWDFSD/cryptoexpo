import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"; 
import logo from "../assets/img/logo-no-background.png"
import "./Navbar.css";
import SocialLink from "./Social_Link";
import { IoClose, IoMenu } from "react-icons/io5";

const Information = () =>{
  const [date,setDate] = useState("");
  const [address, setAddress] = useState("");

  useEffect(()=>{
    setAddress("Zabeel Hall - 6, Dubai World Trade Centre");
    setDate("21 - 22 May 2025, 10:00AM - 6:00PM");
  },[]);

  return (
    <div className="h-content bg-[#00082E] w-full text-white px-10 hidden lg:block transition-all duration-300 relative z-50">
      <div className="mx-auto w-fit flex gap-5 text-[16px]">
        <div className="p-1 m-auto">
          <strong className="text-red-500 font-bold">
            Address :&nbsp;
          </strong>
            {address}
        </div>
        <div className="p-1 m-auto">
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
  const [showMenu, setShowMenu] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
  const handleScroll = () => {
      if (window.scrollY > 50) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      setShowMenu(false);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <nav className="border-gray-200 fixed w-full z-50">
      <Information/>
      <div className={`top-0 left-0 w-full flex py-4 transition-all duration-300 px-10 ease-in-out ${isScrolled ? 'bg-[#141d50] shadow-lg' : 'bg-transparent'}`}>
        <div className="m-auto w-full lg:w-fit justify-between flex gap-[100px]">
          <a href="#" className="w-[120px]">
            <img src={logo} className="relative z-[50]" />
          </a>
          <div className="gap-5 hidden lg:flex">
            <Link to="/"  className="ml-3 m-auto cool-link no-underline text-white">
              Home
            </Link>
            <Link to="/speakers"  className="ml-3 m-auto cool-link no-underline text-white">
              Speakers
            </Link>
            <Link to="/sponsers"  className="ml-3 m-auto cool-link no-underline text-white">
              Sponsers
            </Link>
            <div className="flex">
              <div className="flex items-center justify-center h-[50px] rounded-lg bg-white text-[#e50134] mr-5 ml-0 hover:bg-[#e50134] hover:text-white transition-colors duration-300 hover:cursor-pointer">
                <a href="#"  className="text-sm w-44 text-center m-auto ">
                  Become Sponsers
                </a>
              </div>
              <div className="flex items-center justify-center h-[50px] rounded-lg bg-[#e50134] text-white hover:text-[#e50134] hover:bg-white transition-colors duration-300 hover:cursor-pointer">
                <a href="#"  className="text-sm w-44 text-center m-atuo">
                  Register
                </a>
              </div>
            </div>
          </div>
          <div>
              <div className={`transition-all duration-3s ${showMenu ? "left-0 block" : "-left-[50%] hidden"} transition-left  gap-5 block lg:hidden absolute top-0 h-[100vh] w-[50%] bg-[#141d50] pl-[2rem] pt-[130px] z-[49]`}>
                <a href="#"  className="ml-3 block cool-link no-underline text-white py-5 w-fit">
                  Home
                </a>
                <a href="#"  className="ml-3 block cool-link no-underline text-white py-5 w-fit">
                  Speakers
                </a>
                <a href="#"  className="ml-3 block cool-link no-underline text-white py-5 w-fit">
                  Sponsers
                </a>
                <div className="flex">
                  <div className="flex items-center justify-center h-[50px] rounded-lg bg-white text-[#e50134] mr-5 ml-0 hover:bg-[#e50134] hover:text-white transition-colors duration-300 hover:cursor-pointer">
                    <a href="#"  className="text-sm w-44 text-center m-auto ">
                      Become Sponsers
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-white text-[30px] block lg:hidden hover:cursor-pointer" id="nav-toggle" onClick={toggleMenu}>
                {showMenu?<IoClose/>:<IoMenu />} 
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
