import React, {useState, useEffect} from "react";
import { FaFacebookF,FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaFlickr, FaYoutube, FaTelegram } from 'react-icons/fa'; 
import logo from "../assets/img/logo-no-background.png"
import "./Navbar.css";
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
          <div className="flex justify-center space-x-4 h-full ">
            <div className="h-full flex hover:bg-[#e50134] text-white items-center px-1">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className=" transition-colors" size={15} />
              </a>
            </div>
            <div className="h-full flex hover:bg-[#e50134] text-white items-center px-1">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={16} />
              </a>
            </div>
            <div className="h-full flex hover:bg-[#e50134] text-white items-center px-1">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={16} />
              </a>
            </div>
            <div className="h-full flex hover:bg-[#e50134] text-white items-center px-1">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={16} />
              </a>
            </div>
            <div className="h-full flex hover:bg-[#e50134] text-white items-center px-1">
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={16} />
              </a>
            </div>
            <div className="h-full flex hover:bg-[#e50134] text-white items-center px-1">
              <a href="https://www.flickr.com" target="_blank" rel="noopener noreferrer">
                <FaFlickr size={16} />
              </a>
            </div>
            <div className="h-full flex hover:bg-[#e50134] text-white items-center px-1">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={16} />
              </a>
            </div>
            <div className="h-full flex hover:bg-[#e50134] text-white items-center px-1">
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <FaTelegram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className=" border-gray-200 dark:bg-gray-900 fixed w-full z-50">
      <Information/>
      <div className="w-full flex py-5">
        <div className="m-auto w-fit flex gap-40 justify-between">
          <a href="#">
            <img src={logo} className="w-[120px]" />
          </a>
          <div className="flex gap-5">
            <a href="#"  className="ml-3 m-auto cool-link no-underline text-white">
              Home
            </a>
            <a href="#"  className="ml-3 m-auto cool-link no-underline text-white">
              Speakers
            </a>
            <a href="#"  className="ml-3 m-auto cool-link no-underline text-white">
              Sponsers
            </a>
            <a href="#"  className="ml-3 m-auto cool-link no-underline text-white">
              Partners
            </a>
            <a href="#"  className="ml-3 m-auto cool-link no-underline text-white">
              Agenda
            </a>
            <a href="#"  className="ml-3 m-auto cool-link no-underline text-white">
              Floor plan
            </a>
            <div className="flex">
              <div className="flex items-center justify-center h-[50px] rounded-lg bg-white text-[#e50134] mr-5 ml-0 hover:bg-[#e50134] hover:text-white transition-colors duration-300 hover:cursor-pointer">
                <a href="#"  className="text-sm w-44 text-center m-auto ">
                  Become Sponsers
                </a>
              </div>
              <div className="flex items-center justify-center h-[50px] rounded-lg bg-[#e50134] text-white hover:text-[#e50134] hover:bg-white transition-colors duration-300 hover:cursor-pointer">
                <a href="#"  className="text-sm w-44 text-center m-atuo">
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>

    </nav>


  );
};

export default Navbar;
