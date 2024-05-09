import { useEffect, useState } from "react";
import MyTextField from "../textFieldOutline";
import axios from "axios";

interface ILocationState {
    city: string;
    state_prov: string;
    state_code: string;
    country_name: string;
    continent_name: string;

    country_capital: string;
    country_code2: string;
    country_emoji: string;
    country_flag: string;
}

const SectionFindRide = () => {
    const [ip, setIp] = useState(null);
    const [location, setLocation] = useState<ILocationState | null>(null);

    useEffect(() => {
        axios
            .get("https://api.ipify.org?format=json")
            .then((response) => {
                setIp(response.data.ip);
            })
            .catch((error) => {
                console.error("Erro ao buscar IP:", error);
            });
    }, []);

    useEffect(() => {
        localStorageValidation();
    }, [ip]);

    function localStorageValidation() {
        if (localStorage.getItem("ip") && localStorage.getItem("location")) {
            if (localStorage.getItem("ip") === ip) {
                setLocation(JSON.parse(localStorage.getItem("location")!));
            } else {
                ip && localStorage.setItem("ip", ip);
                fetchGeoLocation();
            }
        } else {
            ip && localStorage.setItem("ip", ip);
            fetchGeoLocation();
        }
    }
    function fetchGeoLocation() {
        if (ip) {
            axios
                .get("https://api.ipgeolocation.io/ipgeo", {
                    params: {
                        apiKey: import.meta.env.VITE_IPGEOLOCATION_API_KEY,
                        ip: ip,
                    },
                })
                .then((response) => {
                    setLocation(response.data);
                    localStorage.setItem(
                        "location",
                        JSON.stringify(response.data)
                    );
                })
                .catch((error) => {
                    console.error("Erro ao buscar localização:", error);
                });
        }
    }

    return (
        <div className="w-full md:h-[46.36rem] px-4 md:px-24 flex flex-col mt-20 md:mt-0 md:flex-row justify-between items-center">
            <img
                src="https://challengeuolpbcompass.s3.amazonaws.com/Home/imageFirstSectionFindRide.png"
                alt=""
                className="rouned-[0.6rem]"
            />
            <div>
                <div>
                    <h2 className="text-xl md:text-2xl text-white mt-7 md:mt-0">
                        NEED A RIDE?
                    </h2>
                    <h2 className="text-4xl md:text-5xl text-white flex mb-7">
                        Book with
                        <span className="text-4xl md:text-5xl text-[#FBA403]">
                            &nbsp;myRIDE&nbsp;
                        </span>
                        now!
                    </h2>
                    <form
                        action=""
                        className="gap-4 flex flex-col md:w-[38.125rem] bg-[#2C2C2C] py-[1.875rem] px-8 mx-4 md:mx-0"
                    >
                        <p className="text-2xl text-white">Find a ride now</p>
                        <MyTextField
                            label="Your Pickup"
                            defaultValue="Current Location"
                        />
                        <MyTextField
                            label="Your Destination"
                            value={location ? `${location.city}, ${location.state_prov}` : ""}
                            focused
                        />
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="rounded-[0.25rem] flex items-center gap-1 bg-[#FBA403] px-2 py-5 md:px-7 md:py-4 text-white"
                            >
                                <img
                                    src="https://challengeuolpbcompass.s3.amazonaws.com/Home/lupe.svg"
                                    alt=""
                                />{" "}
                                FIND A DRIVER
                            </button>
                            <p className="text-[#FBA403]">MORE OPTIONS</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionFindRide;
