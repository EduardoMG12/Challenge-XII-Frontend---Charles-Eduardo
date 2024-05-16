import { MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../../utils/fetchCountries";

const SelectCountries = () => {
    const [countries, setCountries] = useState<string[]>();

    fetchCountries(setCountries);

    useEffect(() => {
        console.log(countries, "aqui")
    }, [countries])
    
    return (
        <TextField
            id="outlined-select-age"
            select
            label="Country"
            defaultValue={"Brazil"}
            className="flex-1"
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
