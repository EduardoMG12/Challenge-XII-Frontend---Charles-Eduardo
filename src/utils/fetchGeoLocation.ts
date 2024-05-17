import axios from "axios";
import { ILocationState } from "../components/sectionFindRide";

export function localStorageValidation(
    ip: string,
    setLocation: React.Dispatch<React.SetStateAction<ILocationState | null>>
) {
    if (localStorage.getItem("ip") && localStorage.getItem("location")) {
        if (localStorage.getItem("ip") === ip) {
            setLocation(JSON.parse(localStorage.getItem("location")!));
        } else {
            ip && localStorage.setItem("ip", ip);
            fetchGeoLocation(ip, setLocation);
        }
    } else {
        ip && localStorage.setItem("ip", ip);
        fetchGeoLocation(ip, setLocation);
    }
}

function fetchGeoLocation(
    ip: string,
    setLocation: React.Dispatch<React.SetStateAction<ILocationState | null>>
) {
    if (ip) {
        axios
            .get(`${import.meta.env.VITE_API_IPGEOLOCATION}`, {
                params: {
                    apiKey: import.meta.env.VITE_IPGEOLOCATION_API_KEY,
                    ip: ip,
                },
            })
            .then((response) => {
                setLocation(response.data);
                localStorage.setItem("location", JSON.stringify(response.data));
            })
            .catch((error) => {
                console.error("Error find location:", error);
            });
    }
}
