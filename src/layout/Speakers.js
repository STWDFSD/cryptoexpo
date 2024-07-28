import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import bannerImage from "../assets/img/banner_img.jpg";
import coverImage from "../assets/img/cover_image.png";


const Speakers = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Navbar />
      <Banner bg_image={bannerImage} cover_image={coverImage} text="Speakers" />
      <div className="mt-[100px] w-full px-[100px]">
        <div className="text-[46px] font-big-john">
            Previous Speakers
        </div>
        <div>
            
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Speakers;