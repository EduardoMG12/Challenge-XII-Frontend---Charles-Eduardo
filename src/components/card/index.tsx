import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

interface ICard {
    imgUrl: string;
    title: string;
    paragraph: string;
    altImg: string;
    cardLinkLearnMore: string;
}

interface ICardProps {
    requestLink:string
}

const Card:React.FC<ICardProps> = ({requestLink}) => {
    const [card, setCard] = useState<ICard>();

    useEffect(() => {
        axios
            .get(requestLink)
            .then((response) => {
                setCard(response.data);
            })
            .catch((error) => {
                console.error("Erro find card:", error);
            });
    });

// remember fix this conditional
    if (!card) {
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
// temporary moc
    return (
        <div className="flex flex-col justify-between bg-[#383838] max-w-[19.1875rem]">
            <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/secondSection/firstCar.png" alt="{card.altImg}" />
            <div className="flex flex-col px-4 py-4">
                <h3 className="text-base text-[#FFFFFF] mb-2">Basic</h3>
                <p className="text-base text-[#B3B3B3] mb-3">
                The best balance of price and comfort. You will not go wrong with our basic rides.
                </p>
                <span className="flex justify-end  items-center text-[#FBA403] text-sm">
                    <a href={card.cardLinkLearnMore}>Learn more</a>
                </span>
            </div>
        </div>
    );
};

export default Card;
