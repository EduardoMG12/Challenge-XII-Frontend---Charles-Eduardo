import axios from "axios";

export interface Countries {
    error: boolean;
    msg: string;
    data: Daum[];
}

export interface Daum {
    iso2: string;
    iso3: string;
    country: string;
    cities: string[];
}

export function fetchCountries(
    setCountries: React.Dispatch<React.SetStateAction<string[] | undefined>>
) {
    axios
        .get<Countries>(`${import.meta.env.VITE_API_COUNTRIES}`)
        .then((response) => {
            const sortedCountries = response.data.data.sort((a, b) =>
                a.country.localeCompare(b.country)
            );
            const countryNames = sortedCountries.map(
                (country) => country.country
            );
            setCountries(countryNames);
        })
        .catch((error) => {
            console.error("Error find countries:", error);
        });
}

export interface Cities {
    error: boolean;
    msg: string;
    data: string[];
}

export function fetchCities(
    countryName: string,
    setCities: React.Dispatch<React.SetStateAction<string[] | undefined>>
) {
    axios
        .post<Cities>(`${import.meta.env.VITE_API_COUNTRIES}/cities`, {
            country: countryName,
        })
        .then((response) => {
            setCities(response.data.data);
        })
        .catch((error) => {
            console.error("Error find cities:", error);
        });
}
