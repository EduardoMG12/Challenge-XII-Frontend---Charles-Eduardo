import SelectCountries from "./selectCountries";
import { Switch, TextField } from "@mui/material";
import SelectTypeCar from "./selectTypeCar";

export interface IFormState {
    firstName: string;
    lastName: string;
    emailAddress: string;
    city: string;
    country: string;
    referralCode: string;
    iDriveMyOwnCar: boolean;
    selectTypeCar: TCarType | "";
}

type TCarType = "sedan" | "suv/van" | "semi luxury" | "luxury car";

const Form = () => {

    return (
        <>

            <form action="/slaa" className="w-full flex flex-col gap-6">
                <div className="flex w-full gap-6">
                    <TextField placeholder="First Name" className="w-1/2" />
                    <TextField placeholder="Last Name" className="w-1/2" />
                </div>
                <TextField placeholder="Email Address" />
                <SelectCountries />
                <TextField placeholder="City" />
                <TextField placeholder="Referral Code" />
                <div className="flex items-center justify-between">
                    <p className="text-base text-white">I drive my own car</p>
                    <Switch defaultChecked />
                </div>
                <p className="font-medium text-[#FBA403] text-xl">Select your car type</p>
                <div className="flex gap-3">
                    <SelectTypeCar />
                </div>
                <button type="submit" className="flex justify-center items-center px-[4.625rem] py-5 self-start bg-[#FBA403] rounded-md">
                    <p className="text-white text-sm">
                        SUBMIT

                    </p>
                </button>
            </form>
        </>
    );
};

export default Form;
