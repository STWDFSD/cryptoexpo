import React from "react";
import whatsappBrands from "../assets/img/Sidebar/whatsapp-brands.svg"
import telegramBrands from "../assets/img/Sidebar/telegram-brands.svg"
import envelopeBrands from "../assets/img/Sidebar/envelope-brands.svg"
import topBrands from "../assets/img/Sidebar/top.svg"
const Banner = () => {
    return (
        <div className="hidden fixed md:block right-0 top-1/2 rounded-l-[20px] bg-gradient-to-r from-[#121e52] to-[#4d0515] z-[999] mt-[-170px] animate-bounceIn" >
            <div className="px-[20px] py-[15px] ">
                <a href="#">
                    <img src={whatsappBrands} className="w-[25px]"/>
                </a>
            </div>
            <div className="px-[20px] py-[15px]">
                <a href="#">
                    <img src={telegramBrands} className="w-[25px]"/>
                </a>
            </div>
            <div className="px-[20px] py-[15px]">
                <a href="#">
                    <img src={envelopeBrands} className="w-[25px]"/>
                </a>
            </div>
            <div className="px-[20px] py-[15px]">
                <a href="#">
                    <img src={topBrands} className="w-[13px] m-auto"/>
                </a>
            </div>
        </div>
    );
};
export default Banner;