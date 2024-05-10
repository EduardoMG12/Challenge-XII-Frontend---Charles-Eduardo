const Header = () => {
    return (
        <header className=" min-h-10 min-w-full max-w-full my-5 mb-5">
            <div className="px-5 w-full flex flex-col sm:flex-row justify-between items-center gap-5 md:gap-0">
                <div className="">
                    <a href="/">
                        <img
                            src="https://challengeuolpbcompass.s3.amazonaws.com/Outlet/logoIcon/LogoMyRideFillYellow.svg"
                            alt="Logo in the shape of an isosceles triangle with slightly rounded edges, entirely in yellow. The logo is inscribed within a circle. The word ‘my’ is written in the upper part of the circle, and below ‘my’, within the isosceles triangle that lacks a background, the word ‘ride’ is written."
                        />
                    </a>
                </div>
                <ul className="flex flex-col sm:flex-row items-center justify-around gap-7">
                    {/* make a question about li, is this yellow because hover or because this page selected */}
                    <li className="text-[#FBA403] cursor-pointer text-base">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="/iDontKnowSomePage">Getting a Taxi</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="/iDontKnowSomePage2">Mobile App</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="/iDontKnowSomePag3">Contact Us</a>
                    </li>
                </ul>
                <div className="flex items-center gap-5">
                    <img
                        src="https://challengeuolpbcompass.s3.amazonaws.com/Outlet/bellNotifyIcon.svg"
                        alt="A notification bell icon, entirely in white, with a yellow circle located at its upper right corner."
                        className="cursor-pointer"
                    />

                    <div className="w-[0.01rem] h-9 bg-[#333333]"></div>
                    <img
                        src="https://challengeuolpbcompass.s3.amazonaws.com/Outlet/userAvatar.png"
                        alt="Avata image with borders full rounded."
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
