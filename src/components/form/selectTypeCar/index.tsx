import React, { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { IFormState, TCarType } from "..";

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

interface ISelectTypeCarProps {
    setValue: UseFormSetValue<IFormState>;
  }
  
  const SelectTypeCar: React.FC<ISelectTypeCarProps> = ({ setValue, ...props }) => {
    const [selectedCarType, setSelectedCarType] = useState<TCarType | "">("sedan");
  
    const handleCarTypeChange = (value: TCarType) => {
      setSelectedCarType(value);
      setValue("selectTypeCar", value);
    };
  
    return (
      <>
        {carTypes.map((car) => (
          <ItemTypeCar
            key={car.type}
            linkImg={car.imgSrc}
            altImg={car.altImg}
            value={car.value}
            selected={car.type === selectedCarType}
            onClick={() => handleCarTypeChange(car.type as TCarType)}
            {...props}
          />
        ))}
      </>
    );
  };
  
  interface IPropsItemTypeCar {
    linkImg: string;
    altImg: string;
    value: string;
    selected: boolean;
    onClick: () => void;
  }
  
  const ItemTypeCar: React.FC<IPropsItemTypeCar> = ({ linkImg, altImg, value, selected, onClick, ...props }) => {
    return (
      <div
        {...props}
        className={`flex flex-col items-center justify-center h-20 w-[9.156rem] border border-white rounded gap-[0.313rem] ${selected ? "border-[#FBA403]" : ""}`}
        onClick={onClick}
      >
        <img src={linkImg} alt={altImg} className="w-[2.149rem]" />
        <p className="text-sm text-white">{value}</p>
      </div>
    );
  };
  
  export default SelectTypeCar;
