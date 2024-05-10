import { MenuItem, Switch, TextField } from "@mui/material";

const SectionFormulary = () => {
    return (
        <div className="mt-[6.25rem] bg-[#282828] mx-[58px] min-h-[871px] flex flex-col items-center p-[1.875rem] pb-[1.875rem]">
            <div className="flex flex-col md:flex-row w-full gap-[1.125rem] mb-6">
                <img
                    src="https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/thirdSectionFormularyImage.svg"
                    alt=""
                />
                <div>
                    <h3 className="text-[#FBA403] text-3xl font-bold">
                        Drive with MyRide
                    </h3>
                    <p className="text-base text-white mt-1">
                        Register as a driver using the form below. Our team will
                        assess and get back to you within 48 hours.
                    </p>
                </div>
            </div>
            <form action="" className="w-full flex flex-col gap-6">
                <div className="flex w-full gap-6">
                    <TextField placeholder="First Name" className="w-1/2" />
                    <TextField placeholder="Last Name" className="w-1/2" />
                </div>
                <TextField placeholder="Email Address" />
                <div>
                    {" "}
                    <TextField
                        id="outlined-select-age"
                        select
                        label="Country"
                        defaultValue={10}
                        className="w-full"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Singapore</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </TextField>
                </div>
                <TextField placeholder="City" />
                <TextField placeholder="Referral Code" />
                <div className="flex items-center justify-between">
                    <p className="text-base text-white">I drive my own car</p>
                    <Switch  defaultChecked />
                </div>
                <p className="font-medium text-[#FBA403] text-xl">Select your car type</p>
                <div className="flex gap-3">
                    <div className="flex flex-col items-center justify-center h-20 w-[9.156rem] border border-white rounded gap-[0.313rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/sedanIcon.svg" alt="" className="w-[2.149rem]"/>
                        <p className="text-sm text-white">Sedan</p>
                    </div>
                    <div className="flex flex-col items-center justify-center h-20 w-[9.156rem] border border-white rounded gap-[0.313rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/busIcon.svg" alt="" className="w-[2.149rem]"/>
                        <p className="text-sm text-white">Sedan</p>
                    </div>
                    <div className="flex flex-col items-center justify-center h-20 w-[9.156rem] border border-white rounded gap-[0.313rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/esportiveIcon.svg" alt="" className="w-[2.149rem]"/>
                        <p className="text-sm text-white">Sedan</p>
                    </div>
                    <div className="flex flex-col items-center justify-center h-20 w-[9.156rem] border border-white rounded gap-[0.313rem]">
                        <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/sectionThreeFormulary/convertibleIcon.svg" alt="" className="w-[2.149rem]"/>
                        <p className="text-sm text-white">Sedan</p>
                    </div>
                </div>
                <button type="submit" className="flex justify-center items-center px-[4.625rem] py-5 self-start bg-[#FBA403] rounded-md">
                    <p className="text-white text-sm">
                    SUBMIT

                    </p>
                    </button>
            </form>
        </div>
    );
};

export default SectionFormulary;
