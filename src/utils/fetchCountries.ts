import axios from "axios";

export interface Root {
    error: boolean
    msg: string
    data: Daum[]
  }
  
  export interface Daum {
    iso2: string
    iso3: string
    country: string
    cities: string[]
  }
  

export function fetchCountries(
    setCountries: React.Dispatch<React.SetStateAction<string[] | undefined>>
) {
    axios
        .get<Root>("https://countriesnow.space/api/v0.1/countries")
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
