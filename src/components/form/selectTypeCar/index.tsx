import React, { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormState, TCarType } from "..";

const carTypes = [
    {
        type: "sedan",
        imgSrc: "https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/sedanIcon.svg",
        altImg: "Simple icon of a completely yellow sedan car",
        value: "Sedan"
    },
    {
        type: "suv/van",
        imgSrc: "https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/busIcon.svg",
        altImg: "Simple icon of a completely yellow mini van",
        value: "SUV/Van"
    },
    {
        type: "semi luxury",
        imgSrc: "https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/esportiveIcon.svg",
        altImg: "Simple icon of a completely yellow esporive car",
        value: "Semi Luxury"
    },
    {
        type: "luxury",
        imgSrc: "https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/convertibleIcon.svg",
        altImg: "Simple icon of a completely yellow esportive car convetible",
        value: "Luxury Car"
    }
];


interface ISelectTypeCarProps {
    register: UseFormRegister<IFormState>;
    setValue: UseFormSetValue<IFormState>;
  }
  
  const SelectTypeCar: React.FC<ISelectTypeCarProps> = ({ register, setValue, ...props }) => {
    const [selectedCarType, setSelectedCarType] = useState<TCarType | "">("");
  
    const handleCarTypeChange = (value: TCarType) => {
      setSelectedCarType(value);
      setValue("carType", value);
    };
  
    return (
      <>
        {carTypes.map((car) => (
          <ItemTypeCar
            key={car.type}
            linkImg={car.imgSrc}
            altImg={car.altImg}
            value={car.value}
            type={car.type as TCarType}
            selected={car.type == selectedCarType}
            onClick={() => handleCarTypeChange(car.type as TCarType)}
            register={register}
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
    type:TCarType,
    selected: boolean;
    onClick: () => void;
    register: UseFormRegister<IFormState>;
  }
  
  const ItemTypeCar: React.FC<IPropsItemTypeCar> = ({ linkImg, altImg, value, selected, onClick, register, type, ...props }) => {
    return (
      <label
        {...props}
        className={`flex flex-col items-center justify-center h-20 w-[9.156rem] border rounded gap-[0.313rem] ${selected ? "border-[#FBA403]" : ""}`}
        onClick={onClick}
      >
        <img src={linkImg} alt={altImg} className="w-[2.149rem]" />
        <p className="text-sm text-white">{value}</p>
        <input type="radio" value={type} {...register("carType")} style={{ display: 'none' }} />
      </label>
    );
  };
  
  export default SelectTypeCar;
