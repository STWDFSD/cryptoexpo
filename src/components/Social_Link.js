import React from "react";
import { FaFacebookF,FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaFlickr, FaYoutube, FaTelegram } from 'react-icons/fa'; 
const SocialLink = () => {
    return (
        <div className="h-[40px]">
            <div className="flex space-x-4 h-full ">
                <div className="h-full flex hover:bg-[#e50134] text-white items-center px-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className=" transition-colors" size={15} />
                </a>
                </div>
                <div className="h-full flex hover:bg-[#e50134] text-white items-center px-2">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={16} />
                </a>
                </div>
                <div className="h-full flex hover:bg-[#e50134] text-white items-center px-2">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={16} />
                </a>
                </div>
                <div className="h-full flex hover:bg-[#e50134] text-white items-center px-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={16} />
                </a>
                </div>
                <div className="h-full flex hover:bg-[#e50134] text-white items-center px-2">
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={16} />
                </a>
                </div>
                <div className="h-full flex hover:bg-[#e50134] text-white items-center px-2">
                <a href="https://www.flickr.com" target="_blank" rel="noopener noreferrer">
                    <FaFlickr size={16} />
                </a>
                </div>
                <div className="h-full flex hover:bg-[#e50134] text-white items-center px-2">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={16} />
                </a>
                </div>
                <div className="h-full flex hover:bg-[#e50134] text-white items-center px-2">
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={16} />
                </a>
                </div>
            </div>
        </div>
    );
};

export default SocialLink;