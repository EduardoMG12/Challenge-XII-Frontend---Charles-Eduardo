import { useState } from "react";
import Form from "../form";
import CarFormulary from "../../icons/carFormulary";
// alt="Icon of a yellow convertible car, resembling a Mini Cooper, parked diagonally. A person wearing a yellow shirt and gray pants is sitting on the trunk. Behind the car is a white building with a sign on top reading ‘My Rude’. There are three clouds above the building, each in a different direction."

const SectionFormulary = () => {
    const [sucessSendForm, setSucessSendForm] = useState({
        formBool: false,
        returnApi: "",
    });

    if (sucessSendForm.formBool) {
        return (
            <div className="mt-[6.25rem] bg-[#282828] mx-[58px] min-h-[871px] flex flex-col items-center  justify-center p-[1.875rem] pb-[1.875rem] gap-[2.875rem]">
                <CarFormulary />
                <p className="text-[2.813rem] font-bold text-white">
                    {sucessSendForm.returnApi}
                </p>
            </div>
        );
    }
    return (
        <div className="mt-[6.25rem] bg-[#282828] mx-[58px] min-h-[871px] flex flex-col items-center p-[1.875rem] pb-[1.875rem]">
            <div className="flex flex-col md:flex-row w-full gap-[1.125rem] mb-6">
                <CarFormulary />
                <div>
                    <h3 className="text-[#FBA403] text-3xl font-bold">
                        Drive with MyRide
                    </h3>
                    <p className="text-base text-white mt-1">
                        Register as a driver using the form below. Our team will
                        assess and get back to you within 48 hours.
                    </p>
                </div>
            </div>
            <Form setSucess={setSucessSendForm} />
        </div>
    );
};

export default SectionFormulary;
