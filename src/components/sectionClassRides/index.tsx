import { useEffect, useState } from "react";
import Card from "../card";
import axios from "axios";
import { ICard, myRideCards } from "../../mock/cards";



const SectionClassRides = () => {
    const [cards, setCards] = useState<ICard[] | null>();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_LINK}/cards`)
            .then((response) => {
                const cardsFetch: ICard[] = response.data;
                if (!cardsFetch[0].id) {
                    setCards(myRideCards);
                    return;
                }
                if (cardsFetch[0].title) setCards(response.data);
            })
            .catch((error) => {
                console.error("Erro find card:", error);
                setCards(myRideCards);
            });
    }, []);

    return (
        <div id="mobileApp" className="flex flex-col w-full justify-center items-center">
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
