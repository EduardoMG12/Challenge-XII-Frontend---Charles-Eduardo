import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SelectCountries from "./selectCountries";
import { Switch, TextField } from "@mui/material";
import SelectTypeCar from "./selectTypeCar";
import SelectCity from "./selectCity";
import axios from "axios";
import InputError from "./InputError/intex";

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
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<IFormState>({
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
                console.log(data);
            })
            .catch(error => {
                console.error('There was an error!', error);
                console.log(data);
            });
    };

    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
            <div className="flex w-full gap-6">
                <div className="w-1/2 flex flex-col gap-[0.313rem]">
                    <TextField {...register("firstName")} placeholder="First Name" className="w-full" error={Boolean(errors.firstName)} />
                    {errors.firstName && <InputError errorsMessage={errors.firstName.message as string}/>}
                </div>
                <div className="w-1/2 flex flex-col gap-[0.313rem]">
                    <TextField {...register("lastName")} placeholder="Last Name" className="w-full" error={Boolean(errors.lastName)} />
                    {errors.lastName && <InputError errorsMessage={errors.lastName.message as string}/>}
                </div>
            </div>
            <div className="flex flex-col gap-[0.313rem]">
                <TextField {...register("email")} placeholder="Email Address" error={Boolean(errors.email)} />
                {errors.email && <InputError errorsMessage={errors.email.message as string}/>}
            </div>
            <div className="flex flex-col gap-[0.313rem]">
                <SelectCountries register={register} setValue={setValue} error={Boolean(errors.country)} />
                {errors.country && <InputError errorsMessage={errors.country.message as string}/>}
            </div>
            <div className="flex flex-col gap-[0.313rem]">
                <SelectCity country={countryWatch} register={register} setValue={setValue} error={Boolean(errors.city)} />
                {errors.city && <InputError errorsMessage="Invalid city"/>}
            </div>
            <div className="flex flex-col gap-[0.313rem]">
                <TextField {...register("referralCode")} placeholder="Referral Code" error={Boolean(errors.referralCode)} />
                {errors.referralCode && <InputError errorsMessage={errors.referralCode.message as string}/>}
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
                {errors.carType && <InputError errorsMessage={"Select a vehicle type"}/>}
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
