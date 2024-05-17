import { useEffect, useState } from "react";
import Card from "../card";
import axios from "axios";

export interface ICard {
    id: number;
    altImg: string;
    imgUrl: string;
    title: string;
    paragraph: string;
    cardLinkLearnMore: string;
}

const SectionClassRides = () => {
    const [cards, setCards] = useState<ICard[]>();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_LINK}/cards`)
            .then((response) => {
                setCards(response.data);
            })
            .catch((error) => {
                console.error("Erro find card:", error);
            });
    }, []);

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div>
                <h3 className="text-2xl text-[#FBA403] mt-[3.75rem]">
                    WHY SHOULD YOU RIDE WHITH US?
                </h3>
                <h3 className="text-[2.813rem] text-white font-bold mb-[3.75rem]">
                    Best in class rides
                </h3>
            </div>
            <div className="flex gap-8 flex-wrap justify-center items-center">
                {cards === undefined ? (
                    <Card card={undefined} key={1} />
                ) : (
                    cards?.map((card) => (
                        <Card card={card ?? undefined} key={card.id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default SectionClassRides;
