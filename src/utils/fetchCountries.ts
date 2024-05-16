import axios from "axios";

export interface Root {
    name: Name;
    capital: string[];
    region: string;
    flag: string;
    maps: Maps;
    flags: Flags;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface NativeName {
    por: Por;
}

export interface Por {
    official: string;
    common: string;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export function fetchCountries(
    setCountries: React.Dispatch<React.SetStateAction<string[] | undefined>>
) {
    axios
        .get<Root[]>("https://restcountries.com/v3.1/all")
        .then((response) => {
            const sortedCountries = response.data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );
            const countryNames = sortedCountries.map(
                (country) => country.name.common
            );
            setCountries(countryNames);
        })
        .catch((error) => {
            console.error("Error find countries:", error);
        });
}
