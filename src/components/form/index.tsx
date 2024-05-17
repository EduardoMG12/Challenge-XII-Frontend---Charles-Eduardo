import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SelectCountries from "./selectCountries";
import { Switch, TextField } from "@mui/material";
import SelectTypeCar from "./selectTypeCar";
import { DevTool } from "@hookform/devtools";
import SelectCity from "./selectCity";
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

export type TCarType = "sedan" | "suv/van" | "semi luxury" | "luxury car";

const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    emailAddress: z.string().email(),
    city: z.string(),
    country: z.string(),
    referralCode: z.string().optional(),
    iDriveMyOwnCar: z.boolean(),
    selectTypeCar: z.enum(["sedan", "suv/van", "semi luxury", "luxury car"]),
});

const Form = () => {
    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm<IFormState>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues:{
            country: "Singapore",
            selectTypeCar:"sedan"
          }
    });

    const countryWatch = watch("country")
    const onSubmit = (data: IFormState) => console.log(data);

    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
            <div className="flex w-full gap-6">
                <TextField {...register("firstName")} placeholder="First Name" className="w-1/2" />
                <TextField {...register("lastName")} placeholder="Last Name" className="w-1/2" />
            </div>
            <TextField {...register("emailAddress")} placeholder="Email Address" />
            <SelectCountries register={register} setValue={setValue} />
            <SelectCity country={countryWatch} register={register} setValue={setValue}/>
            <TextField {...register("referralCode")} placeholder="Referral Code" />
            <div className="flex items-center justify-between">
                <p className="text-base text-white">I drive my own car</p>
                <Switch {...register("iDriveMyOwnCar")} defaultChecked />
            </div>
            <p className="font-medium text-[#FBA403] text-xl">Select your car type</p>
            <div className="flex gap-3">
                <SelectTypeCar register={register} setValue={setValue} />
            </div>
            <button type="submit" className="flex justify-center items-center px-[4.625rem] py-5 self-start bg-[#FBA403] rounded-md">
                <p className="text-white text-sm">
                    SUBMIT
                </p>
            </button>
        </form>
        <DevTool control={control} />
    </>
    );
};

export default Form;
