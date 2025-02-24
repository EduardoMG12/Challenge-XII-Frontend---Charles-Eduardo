export interface ICard {
    id: number;
    altImg: string;
    imgUrl: string;
    title: string;
    paragraph: string;
    cardLinkLearnMore: string;
}

export const myRideCards: ICard[] = [
    {
        id: 1,
        altImg: "Renault yellow car driving on the streat with old buildings in the background",
        imgUrl: "/imagesAfterDownCDN/card-image1.png",
        title: "Basic",
        paragraph:
            "The best balance of price and comfort. You will not go wrong with our basic rides.",
        cardLinkLearnMore: "/learnMore",
    },
    {
        id: 2,
        altImg: "SUV car very similar to a Land Rover drive on a dirt road rounded by trees",
        imgUrl: "/imagesAfterDownCDN/card-image2.png",
        title: "Comfort",
        paragraph:
            "If comfort is your priority, this is the ride for you. It's spacious and packed with features",
        cardLinkLearnMore: "/learnMore",
    },
    {
        id: 3,
        altImg: "Executive car with a driver in a suit driving on a bridge",
        imgUrl: "/imagesAfterDownCDN/card-image3.png",
        title: "Business",
        paragraph:
            "Do you want to travel around the city in style? Make sure to select or business class rides.",
        cardLinkLearnMore: "/learnMore",
    },
    {
        id: 4,
        altImg: "Sport hatchback car driving on travel road",
        imgUrl: "/imagesAfterDownCDN/card-image4.png",
        title: "Deluxe",
        paragraph:
            "The best ride for luxury and comfort. No compromises here. You'll surely get what you pay for",
        cardLinkLearnMore: "/learnMore",
    },
];
