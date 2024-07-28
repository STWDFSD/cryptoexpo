import React from "react";

const SpeakersCard = ({avatar, name , title , description, logo}) => {
    return (
        <div className="h-[280px] w-[250px] bg-[#c8f2f347] border-2 border-[#c8f2f347] rounded-[30px] min-h-[325px] cursor-pointer my-5 mx-auto p-[35px] hover:bg-[#141d50] hover:text-white">
            <img className="w-[115px] m-auto rounded-full bg-white" src={avatar} />
            <div className="p-[20px]">
                <h3 className="font-bold text-center text-[20px]">{name}</h3>
                <p className="text-center mt-3">{title}</p>
            </div>
        </div>
    );
};

export default SpeakersCard;