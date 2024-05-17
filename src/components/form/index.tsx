import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SelectCountries from "./selectCountries";
import { FormHelperText, Switch, TextField } from "@mui/material";
import SelectTypeCar from "./selectTypeCar";
import { DevTool } from "@hookform/devtools";
import SelectCity from "./selectCity";
import axios from "axios";

export interface IFormState {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    country: string;
    referralCode: string;
    ownCar: boolean;
    carType: TCarType | "";
}

export type TCarType = "sedan" | "suv/van" | "semi luxury" | "luxury";

const schema = z.object({
    firstName: z.string().min(1, 'Invalid name'),
    lastName: z.string().min(1, 'Invalid last name'),
    email: z.string().email(),
    country: z.string().min(1, 'Invalid country'),
    city: z.string().min(1, 'Invalid city').refine(value => value !== 'City', {
        message: 'Invalid city',
        path: ['city'],
    }),
    referralCode: z.string().min(1, 'Invalid code'),
    ownCar: z.boolean(),
    carType: z.enum(["sedan", "suv/van", "semi luxury", "luxury"]),
});

const Form = () => {
    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm<IFormState>({
        resolver: zodResolver(schema),
        mode: "onSubmit",
        defaultValues: {
            country: "Singapore",
        }
    });

    const countryWatch = watch("country");
    const onSubmit = (data: IFormState) => {
        axios.post(`${import.meta.env.VITE_API_LINK}/driver-application`, data)
            .then(response => {
                console.log(response.data);
                console.log(data)
            })
            .catch(error => {
                console.error('There was an error!', error);
                console.log(data)
            });
    };

    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
            <div className="flex w-full gap-6">
                <div className="w-1/2 flex flex-col gap-[0.313rem]">
                    <TextField {...register("firstName")} placeholder="First Name" className="w-full" error={Boolean(errors.firstName)} />
                    {errors.firstName && (
                        <FormHelperText error className="flex items-center justify-start w-1/2 gap-[0.375rem]">
                            <img src="https://challengeuolpbcompass.s3.amazonaws.com/inputErrorIcon.svg" alt="" />
                            <p className="text-base">
                                {errors.firstName.message}
                            </p>
                        </FormHelperText>
                    )}
                </div>
                <div className="w-1/2 flex flex-col gap-[0.313rem]">
                    <TextField {...register("lastName")} placeholder="Last Name" className="w-full" error={Boolean(errors.lastName)} />
                    {errors.lastName && (
                        <FormHelperText error className="flex items-center justify-start w-1/2 gap-[0.375rem]">
                            <img src="https://challengeuolpbcompass.s3.amazonaws.com/inputErrorIcon.svg" alt="" />
                            <p className="text-base">
                                {errors.lastName.message}
                            </p>
                        </FormHelperText>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-[0.313rem]">
                <TextField {...register("email")} placeholder="Email Address" error={Boolean(errors.email)} />
                {errors.email && (
                    <FormHelperText error className="flex items-center justify-start w-1/2 gap-[0.375rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/inputErrorIcon.svg" alt="" />
                        <p className="text-base">
                            {errors.email.message}
                        </p>
                    </FormHelperText>
                )}
            </div>
            <div className="flex flex-col gap-[0.313rem]">
                <SelectCountries register={register} setValue={setValue} error={Boolean(errors.country)}/>
                {errors.country && (
                    <FormHelperText error className="flex items-center justify-start w-1/2 gap-[0.375rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/inputErrorIcon.svg" alt="" />
                        <p className="text-base">
                            {errors.country.message}
                        </p>
                    </FormHelperText>
                )}
            </div>
            <div className="flex flex-col gap-[0.313rem]">
            <SelectCity country={countryWatch} register={register} setValue={setValue} error={Boolean(errors.city)}/>
            {errors.city && (
                    <FormHelperText error className="flex items-center justify-start w-1/2 gap-[0.375rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/inputErrorIcon.svg" alt="" />
                        <p className="text-base">
                            Invalid city
                        </p>
                    </FormHelperText>
                )}
            </div>
            <div className="flex flex-col gap-[0.313rem]">
                <TextField {...register("referralCode")} placeholder="Referral Code" error={Boolean(errors.referralCode)} />
                {errors.referralCode && (
                    <FormHelperText error className="flex items-center justify-start w-1/2 gap-[0.375rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/inputErrorIcon.svg" alt="" />
                        <p className="text-base">
                            {errors.referralCode.message}
                        </p>
                    </FormHelperText>
                )}
            </div>
            <div className="flex items-center justify-between">
                <p className="text-base text-white">I drive my own car</p>
                <Switch {...register("ownCar")} defaultChecked />
            </div>
            <p className="font-medium text-[#FBA403] text-xl">Select your car type</p>
            <div className="flex flex-col gap-[0.313rem]">
                <div className="flex gap-3">
                    <SelectTypeCar register={register} setValue={setValue} />
                </div>
                {errors.carType && (
                    <FormHelperText error className="flex items-center justify-start w-1/2 gap-[0.375rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/inputErrorIcon.svg" alt="" />
                        <p className="text-base">
                            {"Select a vehicle type"}
                        </p>
                    </FormHelperText>
                )}
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
