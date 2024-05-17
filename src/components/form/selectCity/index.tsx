import { MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCities } from "../../../utils/fetchCountriesAndCity";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormState } from "..";

interface ISelectCityProps {
    register: UseFormRegister<IFormState>;
    setValue: UseFormSetValue<IFormState>;
    country: string;
    error: boolean;
}

const SelectCity: React.FC<ISelectCityProps> = ({
    register,
    setValue,
    country,
    error,
    ...props
}) => {
    const [cities, setCities] = useState<string[]>();
    const [city, setCity] = useState<string>("City");

    useEffect(() => {
        if (country) {
            fetchCities(country, setCities);
        }
    }, [country]);

    const handleCityChange = (value: string) => {
        setCity(value);
        setValue("city", value);
    };

    return (
        <TextField
            {...register("city")}
            select
            className="flex-1"
            value={city}
            error={error}
            onChange={(e) => handleCityChange(e.target.value)}
            {...props}
        >
            <MenuItem
                key="16541651"
                value="City"
                style={{ display: city ? "none" : "block" }}
            >
                City
            </MenuItem>
            {cities &&
                cities.map((city, id) => {
                    return (
                        <MenuItem key={id} value={city}>
                            {city}
                        </MenuItem>
                    );
                })}
        </TextField>
    );
};

export default SelectCity;
