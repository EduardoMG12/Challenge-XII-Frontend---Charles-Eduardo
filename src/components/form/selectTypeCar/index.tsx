import React from "react";

const carTypes = [
    {
        type: "sedan",
        imgSrc: "https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/sedanIcon.svg",
        altImg: "",
        value: "Sedan"
    },
    {
        type: "suv/van",
        imgSrc: "https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/busIcon.svg",
        altImg: "",
        value: "SUV/Van"
    },
    {
        type: "semi luxury",
        imgSrc: "https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/esportiveIcon.svg",
        altImg: "",
        value: "Semi Luxury"
    },
    {
        type: "luxury car",
        imgSrc: "https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/convertibleIcon.svg",
        altImg: "",
        value: "Luxury Car"
    }
];

const SelectTypeCar = () => {
    return (
        <>
            {carTypes.map((car) => (
                <ItemTypeCar key={car.type} linkImg={car.imgSrc} altImg={car.altImg} value={car.value} />
            ))}
        </>
    );
};

interface IPropsItemTypeCar {
    linkImg: string;
    altImg: string;
    value: string;
}

const ItemTypeCar: React.FC<IPropsItemTypeCar> = ({ linkImg, altImg, value }) => {
    return (
        <div
            className="flex flex-col items-center justify-center h-20 w-[9.156rem] border border-white rounded gap-[0.313rem]"
            onClick={() => {
                // handleCarTypeChange(value)}
            }}
        >
            <img src={linkImg} alt={altImg} className="w-[2.149rem]" />
            <p className="text-sm text-white">{value}</p>
        </div>
    );
};

export default SelectTypeCar;
