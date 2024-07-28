import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import SideBar from "../components/Sidebar";
import SpeakersCard from "../components/Speakers_Card";
import bannerImage from "../assets/img/banner_img.jpg";
import coverImage from "../assets/img/cover_image.png";
import {useState, useEffect} from "react";

const Speakers = () => {
    const [speakersCard, setSpeakersCard] = useState([]);
    useEffect(()=>{
        setSpeakersCard([
            {
                avatar:"/assets/img/speakers/1)Sunny-Lu.png",
                name:"Sunny Lu",
                title:"Vechain",
                description:""
            },
            {
                avatar:"/assets/img/speakers/2)Helen-Hai.png",
                name:"Helen Hai",
                title:"Binance",
                description:""
            },
            {
                avatar:"/assets/img/speakers/3)Alex-Zinder.png",
                name:"Alex Zinder",
                title:"Ledger Enterprise",
                description:""
            },
            {
                avatar:"/assets/img/speakers/4)Gracy-Chen.png",
                name:"Gracy Chen",
                title:"Bitget",
                description:""
            },
            {
                avatar:"/assets/img/speakers/5)Mohammed-Alblooshi.png",
                name:"Mohammed Alblooshi",
                title:"Dubai International Financial Centre Authority",
                description:""
            },
            {
                avatar:"/assets/img/speakers/6)Max-Kordek.png",
                name:"Max Kordek",
                title:"Lisk",
                description:""
            },
            {
                avatar:"/assets/img/speakers/7)Nena-Dokuzov.png",
                name:"Nena Dokuzov",
                title:"Alserkal Group",
                description:""
            },
            {
                avatar:"/assets/img/speakers/8)Reece-Merrick.png",
                name:"Reece Merrick",
                title:"Ripple",
                description:""
            },
            {
                avatar:"/assets/img/speakers/9)Dina-Sam'an.png",
                name:"Dina Sam'an",
                title:"CoinMENA",
                description:""
            },
            {
                avatar:"/assets/img/speakers/10)Jean-Charles-Gaudechon.png",
                name:"Jean Charles Gaudechon",
                title:"OneFootball Labs",
                description:""
            },
            {
                avatar:"/assets/img/speakers/11)Nicole-Purin.png",
                name:"Nicole-Purin",
                title:"OKX",
                description:""
            },
            {
                avatar:"/assets/img/speakers/12)Jason-Allegrante.png",
                name:"Jason-Allegrante",
                title:"Fireblocks",
                description:""
            }
        ]);
    },[]);
    return (
        <div className="flex-1 flex flex-col">
            <Navbar />
            <Banner bg_image={bannerImage} cover_image={coverImage} text="Speakers" />
            <div className="w-full m-auto max-w-[1200px]">
                <div className="text-[46px] font-big-john my-[100px]">
                    Previous Speakers
                </div>
                <div className="grid grid-cols-4 gap-4 m-auto ">
                    {
                        speakersCard.map((item)=>{
                            return <SpeakersCard title={item.title} name={item.name} avatar={item.avatar} description={item.description} />
                        })
                    }
                </div>
            </div>
            <Footer/>
            <SideBar />
        </div>
    );
};

export default Speakers;