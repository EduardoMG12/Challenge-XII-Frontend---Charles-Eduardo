import { useEffect, useState } from "react";
import MyTextField from "../textFieldOutline";
import axios from "axios";
import { localStorageValidation } from "../../utils/fetchGeoLocation";
import { SearchIcon } from "../../iconsSvg/searchIcon";

export interface ILocationState {
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
    const [ip, setIp] = useState("");
    const [location, setLocation] = useState<ILocationState | null>(null);
    const [yourPickupInput, setYourPickupInput] = useState("");
    const [yourDestinationInput, setYourDestinationInput] = useState("");
    const [firstInputError, setFirstInputError] = useState(false);
    const [secondInputError, setSecondInputError] = useState(false);

    useEffect(() => {
        axios
            .get("https://api.ipify.org?format=json")
            .then((response) => {
                if (response.data.ip) setIp(response.data.ip);
                else (console.error("Erro ao buscar IP:", response)); // I not want to stay my env variables in the code for security reasons so I will use String "São Paulo, SP" as default
            })
            .catch((error) => {
                console.error("Erro ao buscar IP:", error);
            });
    }, []);

    useEffect(() => {
        localStorageValidation(ip, setLocation);
    }, [ip]);

    useEffect(() => {
        if (location?.city) {
            setYourPickupInput(`${location.city}, ${location.state_prov}`);
        } else {
            setYourPickupInput("São Paulo, SP");
        }
    }, [location]);

    const validationInputs = () => {
        if (!yourPickupInput) {
            setFirstInputError(true);
        }
        if (!yourDestinationInput) {
            setSecondInputError(true);
        }
        if (yourPickupInput && yourDestinationInput) {
            window.location.href = "/randomPage";
        }
    };

    return (
        <div id="gettingATaxi" className="w-full min-[1400px]:h-[46.36rem] px-4 min-[1400px]:px-24 flex flex-col mt-20 min-[1400px]:mt-0 min-[1400px]:flex-row justify-between items-center">
            <img
                src="public/imagesAfterDownCDN/heroImageFirstSectionFindRide.png"
                alt="Image of a vignette with low saturation featuring a building. In front of the building is a car that resembles a yellow Audi sedan with high saturation. On top of the car is a yellow balloon-shaped icon containing the logo ‘My Ride’"
                className="rouned-[0.6rem]"
            />
            <div>
                <div>
                    <h2 className="text-xl min-[1400px]:text-2xl text-white mt-7 min-[1400px]:mt-0">
                        NEED A RIDE?
                    </h2>
                    <h2 className="text-4xl min-[1400px]:text-5xl text-white flex mb-7">
                        Book with
                        <span className="text-4xl min-[1400px]:text-5xl text-[#FBA403]">
                            &nbsp;myRIDE&nbsp;
                        </span>
                        now!
                    </h2>
                    <form
                        action=""
                        className="gap-4 flex flex-col md:w-[38.125rem] bg-[#2C2C2C] py-[1.875rem] px-8 mx-4 min-[1400px]:mx-0"
                    >
                        <p className="text-2xl text-white">Find a ride now</p>
                        <MyTextField
                            label="Your Pickup"
                            value={yourPickupInput}
                            err={firstInputError}
                            setValueFather={setYourPickupInput}
                            setErrFather={setFirstInputError}
                        />
                        <MyTextField
                            label="Your Destination"
                            value={yourDestinationInput}
                            err={secondInputError}
                            setValueFather={setYourDestinationInput}
                            setErrFather={setSecondInputError}
                        />
                        <div className="flex items-center justify-between">
                            <a
                                onClick={validationInputs}
                                className="rounded-[0.25rem] flex items-center gap-1 bg-[#FBA403] px-2 py-5 min-[1400px]:px-7 min-[1400px]:py-4 text-white cursor-pointer"
                            >
                                <SearchIcon />{" "}
                                FIND A DRIVER
                            </a>
                            <p className="text-[#FBA403] cursor-pointer">MORE OPTIONS</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionFindRide;
