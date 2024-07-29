import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import SideBar from "../components/Sidebar";
import SpeakersCard from "../components/Speakers_Card";
import bannerImage from "../assets/img/banner_img.jpg";
import coverImage from "../assets/img/cover_image.png";
import {useState, useEffect} from "react";
import { IoClose } from "react-icons/io5";

const SpeakerModal = ({ isOpen, onClose, item }) => {
    if (!isOpen) return null; 
    const handleBackdropClick = (e) => {
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#222222cc] text-white" onClick={handleBackdropClick}>
            <div className="relative w-[640px] h-[400px] bg-[#141d50] rounded-[40px]" onClick={handleModalClick} >   
                <button 
                    className="absolute right-[20px] top-[20px] text-[30px] hover:cursor-pointer" 
                    onClick={onClose}
                    aria-label="Close"
                >
                    <IoClose />
                </button>
                <div className="px-[20px] py-[10px] md:px-[80px] md:py-[20px]">
                    <div className="flex">
                        <div>
                            <div className="absolute top-[40px] bg-[#FF0000] w-fit py-[2px] px-4 text-[14px]">Speaker</div>
                            <img src={item.avatar} alt="User Avatar" className="w-[180px] bg-white rounded-full" />
                        </div>
                        <div className="block flex items-center justify-center pl-5">
                            <div>
                                <h3>{item.name}</h3>
                                <p className="text-[14px]">{item.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px] break-all break-all text-wrap w-full h-[150px] overflow-auto scrollbar-thin scrollbar-thumb-rounded">
                        {item.description}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

const Speakers = () => {
    const [speakersCard, setSpeakersCard] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState({avatar:null, name:"", title:"", description:""})
    useEffect(()=>{
        setSpeakersCard([
            {
                avatar:"/assets/img/speakers/1)Sunny-Lu.png",
                name:"Sunny Lu",
                title:"Vechain",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/2)Helen-Hai.png",
                name:"Helen Hai",
                title:"Binance",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/3)Alex-Zinder.png",
                name:"Alex Zinder",
                title:"Ledger Enterprise",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/4)Gracy-Chen.png",
                name:"Gracy Chen",
                title:"Bitget",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/5)Mohammed-Alblooshi.png",
                name:"Mohammed Alblooshi",
                title:"Dubai International Financial Centre Authority",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/6)Max-Kordek.png",
                name:"Max Kordek",
                title:"Lisk",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/7)Nena-Dokuzov.png",
                name:"Nena Dokuzov",
                title:"Alserkal Group",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/8)Reece-Merrick.png",
                name:"Reece Merrick",
                title:"Ripple",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/9)Dina-Sam'an.png",
                name:"Dina Sam'an",
                title:"CoinMENA",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/10)Jean-Charles-Gaudechon.png",
                name:"Jean Charles Gaudechon",
                title:"OneFootball Labs",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/11)Nicole-Purin.png",
                name:"Nicole-Purin",
                title:"OKX",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            },
            {
                avatar:"/assets/img/speakers/12)Jason-Allegrante.png",
                name:"Jason-Allegrante",
                title:"Fireblocks",
                description:"LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
            }
        ]);
    },[]);
    const handleItemClick = (item) => { 
        setSelectedSpeaker(item);
        setIsShowModal(true);
    };

    const handleClose = () => {
        setIsShowModal(false);
        setSelectedSpeaker({});
    };
    return (
        <div className="flex flex-col">
            <Navbar />
            <Banner bg_image={bannerImage} cover_image={coverImage} text="Speakers" />
            <div className="w-full m-auto max-w-[1200px] px-10">
                <div className=" text-[46px] font-big-john my-[100px]">
                    Previous Speakers
                </div>
                <div className="grid grid-cols-1 ssm:grid-cols-2 md1:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 m-auto ">
                    {
                        speakersCard.map((item,key)=>{
                            return <div key={key} onClick={()=>handleItemClick(item)}><SpeakersCard  title={item.title} name={item.name} avatar={item.avatar} description={item.description} /></div>
                        })
                    }
                </div>
            </div>
            <Footer/>
            <SideBar />
            <SpeakerModal isOpen={isShowModal} onClose={handleClose} item={selectedSpeaker} />
        </div>
    );
};

export default Speakers;