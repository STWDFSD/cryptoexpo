import React from "react";

const Banner = ({ bg_image, cover_image, text }) => {
    return (
        <div className="w-[100%] h-[400px] flex items-center justify-center text-center bg-cover bg-center ">
            <img src={bg_image} className="w-full h-[400px] absolute top-0 left-0 object-cover z-0 min-h-[300px]" />
            <img src={cover_image} className="w-full h-[400px] absolute top-0 left-0 object-cover z-0 min-h-[300px]" />
            <h1 className="text-center text-white text-[40px] font-big-john z-10 transform -translate-x-1/2-30px -translate-y-1/2+50px whitespace-nowrap text-[1.5rem] leading-[2rem]">{text}</h1>
        </div>
    );
};
export default Banner;