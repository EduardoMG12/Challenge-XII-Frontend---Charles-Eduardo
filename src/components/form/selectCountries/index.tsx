import { MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../../utils/fetchCountries";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormState } from "..";

interface ISelectCountriesProps {
  register: UseFormRegister<IFormState>;
  setValue: UseFormSetValue<IFormState>;
}

const SelectCountries: React.FC<ISelectCountriesProps> = ({ register, setValue, ...props }) => {
  const [countries, setCountries] = useState<string[]>();

  useEffect(() => {
    fetchCountries(setCountries);
  }, [])

  const handleCountryChange = (value: string) => {
    setValue("country", value);
  };
  
  return (
    <TextField
      {...register("country")}
      select
      label="Country"
      defaultValue={"Brazil"}
      className="flex-1"
      onChange={(e) => handleCountryChange(e.target.value)}
      {...props}
    >
      {countries &&
          countries.map((country, id) => {
              return (
                  <MenuItem
                  key={id} value={country}>
                      {country}
                  </MenuItem>
              );
          })}  
    </TextField>
  );
};

export default SelectCountries;
