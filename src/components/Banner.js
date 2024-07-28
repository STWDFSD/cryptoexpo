import React from "react";

const Banner = ({ bg_image, cover_image, text }) => {
    return (
        <div className="w-[100%] h-[400px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${bg_image})` }}>
            <img src={cover_image} className="w-full h-[400px] absolute top-0 left-0 object-cover z-0" />
            <h1 className="text-white text-[40px] font-big-john z-10">{text}</h1>
        </div>
    );
};
export default Banner;