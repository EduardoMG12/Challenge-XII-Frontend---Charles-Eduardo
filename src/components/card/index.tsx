import React from "react";
import Loading from "../loading";
import { ICard } from "../sectionClassRides";

interface ICardProps {
    card:ICard | undefined
}

const Card:React.FC<ICardProps> = ({card}) => {
    if (card === undefined) {
        return (
            <div className="flex flex-col justify-between bg-[#383838] max-w-[19.1875rem]">
                <div className=" w-[19.1875rem] h-[13.375rem] flex items-center justify-center">
                <Loading />
                </div>
                <div className="flex flex-col px-4 py-4">
                    <h3 className="text-base text-[#FFFFFF] mb-2">Loading.</h3>
                    <p className="text-base text-[#B3B3B3] mb-3">
                        Loading...
                    </p>
                    <span className="flex justify-end  items-center text-[#FBA403] text-sm">
                        <a>Loading...</a>
                    </span>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col justify-between bg-[#383838] max-w-[19.1875rem]">
            <img src={card.imgUrl} alt={card.altImg} />
            <div className="flex flex-col px-4 py-4">
                <h3 className="text-base text-[#FFFFFF] mb-2">{card.title}</h3>
                <p className="text-base text-[#B3B3B3] mb-3">
                {card.paragraph}
                </p>
                <span className="flex justify-end  items-center text-[#FBA403] text-sm">
                    <a href={card.cardLinkLearnMore}>Learn more</a>
                </span>
            </div>
        </div>
    );
};

export default Card;
