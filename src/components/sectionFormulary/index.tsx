import Form from "../form";


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
           <Form />
        </div>
    );
};

export default SectionFormulary;
