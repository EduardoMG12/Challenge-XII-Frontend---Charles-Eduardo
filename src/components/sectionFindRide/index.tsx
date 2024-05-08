import MyTextField from "../textFieldOutline";

const SectionFindRide = () => {
    return (
        <div className="w-full h-[46.36rem] px-24 flex justify-between items-center">
            <img
                src="https://challengeuolpbcompass.s3.amazonaws.com/Home/imageFirstSectionFindRide.png"
                alt=""
                className="rouned-[0.6rem]"
            />
            <div>
                <div>
                    <h2 className="text-2xl text-white">NEED A RIDE?</h2>
                    <h2 className="text-5xl text-white flex mb-7">
                        Book with{" "}
                        <span className="text-5xl text-[#FBA403]">
                            &nbsp;myRIDE&nbsp;
                        </span>{" "}
                        now!
                    </h2>
                    <form
                        action=""
                        className="gap-4 flex flex-col w-[38.125rem] bg-[#2C2C2C] py-[1.875rem] px-8"
                    >
                        <p className="text-2xl text-white">Find a ride now</p>
                        <MyTextField
                            label="Your Pickup"
                            defaultValue="Current Location"
                        />
                        <MyTextField label="Your Destination" focused />
                        <div className="flex items-center justify-between">
                            <button type="button" className="rounded-[0.25rem] flex items-center gap-1 bg-[#FBA403] px-7 p-4 text-white">
                                <img src="https://challengeuolpbcompass.s3.amazonaws.com/Home/lupe.svg" alt="" /> FIND A DRIVER
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
