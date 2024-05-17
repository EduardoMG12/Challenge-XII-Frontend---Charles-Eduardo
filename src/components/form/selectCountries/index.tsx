import { FormHelperText, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../../utils/fetchCountriesAndCity";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormState } from "..";

interface ISelectCountriesProps {
  register: UseFormRegister<IFormState>;
  setValue: UseFormSetValue<IFormState>;
  error: boolean
}

const SelectCountries: React.FC<ISelectCountriesProps> = ({ register, setValue, error, ...props }) => {
  const [countries, setCountries] = useState<string[]>();
 const [selectedCountry, setSelectedCountry] = useState<string>("Singapore");
 
  useEffect(() => {
    fetchCountries(setCountries);
}, [])


  const handleCountryChange = (value: string) => {
    setSelectedCountry(value)
    setValue("country", value);
  };
  
  return (
    <TextField
      {...register("country")}
      select
      label="Country"
      value={selectedCountry}
      className="flex-1"
      error={error}
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
