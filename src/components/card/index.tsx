import React from "react";

interface IPropsCard {
    imgUrl: string;
    title: string;
    paragraph: string;
    altImg?:string;
    cardLinkLearnMore:string;
}
const Card: React.FC<IPropsCard>= ({ imgUrl, altImg, title, paragraph, cardLinkLearnMore }) => {
    return (
        <div className="flex flex-col justify-between bg-[#383838] max-w-[19.1875rem]">
            <img src={imgUrl} alt={altImg} />
            <div className="flex flex-col px-4 py-4">
                <h3 className="text-base text-[#FFFFFF] mb-2">{title}</h3>
                <p className="text-base text-[#B3B3B3] mb-3">
                    {paragraph}
                </p>
                <span className="flex justify-end  items-center text-[#FBA403] text-sm"><a href={cardLinkLearnMore}>Learn more</a></span>
            </div>
        </div>
    );
};

export default Card;
