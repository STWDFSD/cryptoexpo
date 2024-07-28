import React from "react";
import Footer_Logo from "../assets/img/footer_logo.png";
import SocialLink from "./Social_Link";
import "./Footer.css"
import BottomCountDown from "./Bottom_CountDown"
const Footer = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#121e52] to-[#e50134] [background:linear-gradient(100.07deg,#121e52,#e50134)] py-[50px] text-white w-full">
                <div className="max-w-[1200px] m-auto flex flex-wrap">
                    <div className="flex-none w-1/2">
                        <div className="w-[80%] m-auto">
                            <img src={Footer_Logo} className=""/>
                            <div className="mt-5 font-bold text-[18px]">Address</div>
                            <div className="mt-1 font-bold text-[18px]">HUAN QIAO EVENT MANAGEMENT L.L.C</div>
                            <div>901, City Tower 2, Sheikh Zayed Road, Dubai, United Arab Emirates.</div>
                            <SocialLink className="my-[10px]"/>
                        </div>
                    </div>
                    <div className="flex-none w-1/2">
                        <div className="text-[33px] font-[700] font-avenir-book uppercase">
                            organised by
                        </div>
                        <p className="pt-2">
                            Huan Qiao Event Management is where we bring you a seamless experience and a one-stop solution for all segments in Crypto and Forex Expo. Our dedicated team ensures the presence of industry pioneers with cutting-edge knowledge in the relevant markets.
                        </p>
                        <p className="pt-2">
                            We take pride in providing training resources and networking opportunities with industry professionals, keeping you updated on the latest trends and technologies. Our commitment is to deliver the very best events, emphasizing dependability, customer service, and uniqueness.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#0a1034]">
                <div className="max-w-[1200px]  m-auto  pb-[40px]">
                    <div className="flex justify-between pt-[40px] pb-[20px]">
                        <div className="text-white">Copyright © 2024 Crypto Expo. All Rights Reserved</div>
                        <div className="flex">
                            <a href="#"  className="ml-3 m-auto cool-link no-underline text-white pr-[16px] border-r">
                                Terms and Conditions
                            </a>
                            <a href="#"  className="ml-3 m-auto cool-link no-underline text-white">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div className="text-[11px] text-white">
                        Disclaimer: Cryptocurrencies are complex instruments and come with a high risk of losing money rapidly due to its volatility. You should consider whether you understand how cryptocurrency work and whether you can afford to take the high risk of losing your money. This event is organised to provide educational content and networking opportunities for the virtual asset Industry. This event and our company does not involve in any recommendation or investment or selling/buying of any financial products. Visitors under the age of 18 will not be admitted.
                    </div>
                </div>
            </div>
            <div className="h-[115px]"></div>
            <BottomCountDown />
        </div>
    );
};

export default Footer;